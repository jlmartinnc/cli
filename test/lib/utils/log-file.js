const t = require('tap')
const fs = require('fs').promises
const path = require('path')
const os = require('os')
const fsMiniPass = require('fs-minipass')
const rimraf = require('rimraf')
const LogFile = require('../../../lib/utils/log-file.js')
const { cleanCwd } = require('../../fixtures/clean-snapshot')

t.cleanSnapshot = (path) => cleanCwd(path)

const last = arr => arr[arr.length - 1]
const range = (n) => Array.from(Array(n).keys())

const cleanErr = (message) => {
  const err = new Error(message)
  const stack = err.stack.split('\n')
  err.stack = stack[0] + '\n' + range(10)
    .map((__, i) => stack[1].replace(/^(\s+at\s).*/, `$1stack trace line ${i}`))
    .join('\n')
  return err
}

const loadLogFile = async (options, { buffer = [], mocks, testdir = {} } = {}) => {
  const root = t.testdir(testdir)
  const MockLogFile = t.mock('../../../lib/utils/log-file.js', mocks)
  const logFile = new MockLogFile(options)
  buffer.forEach((b) => logFile.log(...b))
  await logFile.load({ dir: root, ...options })
  t.teardown(() => logFile.off())
  return {
    root,
    logFile,
    LogFile,
    readLogs: async () => {
      const logDir = await fs.readdir(root)
      return Promise.all(logDir.map(async (filename) => {
        const content = await fs.readFile(path.join(root, filename), 'utf8')
        const rawLogs = content.split(os.EOL)
        return {
          filename,
          content,
          rawLogs,
          logs: rawLogs.filter(Boolean),
        }
      }))
    },
  }
}

t.test('init', async t => {
  const maxLogsPerFile = 10
  const { root, logFile, readLogs } = await loadLogFile({
    maxLogsPerFile,
    maxFilesPerProcess: 20,
  }, {
    buffer: [['error', 'buffered']],
  })

  for (const i of range(50)) {
    logFile.log('error', `log ${i}`)
  }

  // Ignored
  logFile.log('pause')
  logFile.log('resume')
  logFile.log('pause')

  for (const i of range(50)) {
    logFile.log('verb', `log ${i}`)
  }

  logFile.off()
  logFile.log('error', 'ignored')

  const logs = await readLogs()
  t.equal(logs.length, 11, 'total log files')
  t.ok(logs.slice(0, 10).every(f => f.logs.length === maxLogsPerFile), 'max logs per file')
  t.ok(last(logs).logs.length, 1, 'last file has remaining logs')
  t.ok(logs.every(f => last(f.rawLogs) === ''), 'all logs end with newline')
  t.strictSame(
    logFile.files,
    logs.map((l) => path.resolve(root, l.filename))
  )
})

t.test('max files per process', async t => {
  const maxLogsPerFile = 10
  const maxFilesPerProcess = 5
  const { logFile, readLogs } = await loadLogFile({
    maxLogsPerFile,
    maxFilesPerProcess,
  })

  for (const i of range(maxLogsPerFile * maxFilesPerProcess)) {
    logFile.log('error', `log ${i}`)
  }

  for (const i of range(5)) {
    logFile.log('verbose', `log ${i}`)
  }

  const logs = await readLogs()
  t.equal(logs.length, maxFilesPerProcess, 'total log files')
  t.equal(last(last(logs).logs), '49 error log 49')
})

t.test('stream error', async t => {
  let times = 0
  const { logFile, readLogs } = await loadLogFile({
    maxLogsPerFile: 1,
    maxFilesPerProcess: 99,
  }, {
    mocks: {
      'fs-minipass': {
        WriteStreamSync: class {
          constructor (...args) {
            if (times >= 5) {
              throw new Error('bad stream')
            }
            times++
            return new fsMiniPass.WriteStreamSync(...args)
          }
        },
      },
    },
  })

  for (const i of range(10)) {
    logFile.log('verbose', `log ${i}`)
  }

  const logs = await readLogs()
  t.equal(logs.length, 5, 'total log files')
})

t.test('initial stream error', async t => {
  const { logFile, readLogs } = await loadLogFile({}, {
    mocks: {
      'fs-minipass': {
        WriteStreamSync: class {
          constructor (...args) {
            throw new Error('no stream')
          }
        },
      },
    },
  })

  for (const i of range(10)) {
    logFile.log('verbose', `log ${i}`)
  }

  const logs = await readLogs()
  t.equal(logs.length, 0, 'total log files')
})

t.test('turns off', async t => {
  const { logFile, readLogs } = await loadLogFile()

  logFile.log('error', 'test')
  logFile.off()
  logFile.log('error', 'test2')
  logFile.load()

  const logs = await readLogs()
  t.equal(logs.length, 1)
  t.equal(logs[0].logs[0], '0 error test')
})

t.skip('clean', async t => {
  t.test('cleans logs', async t => {
    const logsMax = 5
    const oldId = LogFile.logId()
    const { readLogs } = await loadLogFile({
      logsMax,
    }, {
      testdir: range(10).reduce((acc, i) => {
        acc[LogFile.fileName(oldId, i)] = 'hello'
        return acc
      }, {}),
    })

    const logs = await readLogs()

    t.equal(logs.length, logsMax + 1)
  })

  t.test('doesnt need to clean', async t => {
    const logsMax = 20
    const oldLogs = 10
    const oldId = LogFile.logId()
    const { readLogs } = await loadLogFile({
      logsMax,
    }, {
      testdir: range(oldLogs).reduce((acc, i) => {
        acc[LogFile.fileName(oldId, i)] = 'hello'
        return acc
      }, {}),
    })

    const logs = await readLogs()

    t.equal(logs.length, oldLogs + 1)
  })

  t.test('glob error', async t => {
    const { readLogs } = await loadLogFile({
      logsMax: 5,
    }, {
      mocks: {
        glob: () => {
          throw new Error('bad glob')
        },
      },
    })

    const logs = await readLogs()
    t.match(last(logs).content, /error cleaning log files .* bad glob/)
  })

  t.test('rimraf error', async t => {
    const logsMax = 5
    const oldLogs = 10
    const oldId = LogFile.logId()
    let count = 0
    const { readLogs } = await loadLogFile({
      logsMax,
    }, {
      testdir: range(oldLogs).reduce((acc, i) => {
        acc[LogFile.fileName(oldId, i)] = 'hello'
        return acc
      }, {}),
      mocks: {
        rimraf: (...args) => {
          if (count >= 3) {
            throw new Error('bad rimraf')
          }
          count++
          return rimraf(...args)
        },
      },
    })

    const logs = await readLogs()
    t.equal(logs.length, oldLogs - 3 + 1)
    t.match(last(logs).content, /error removing log file .* bad rimraf/)
  })
})

t.test('snapshot', async t => {
  const { logFile, readLogs } = await loadLogFile()

  logFile.log('error', '', 'no prefix')
  logFile.log('error', 'prefix', 'with prefix')
  logFile.log('error', 'prefix', 1, 2, 3)

  const nestedObj = { obj: { with: { many: { props: 1 } } } }
  logFile.log('verbose', '', nestedObj)
  logFile.log('verbose', '', JSON.stringify(nestedObj))
  logFile.log('verbose', '', JSON.stringify(nestedObj, null, 2))

  const arr = ['test', 'with', 'an', 'array']
  logFile.log('verbose', '', arr)
  logFile.log('verbose', '', JSON.stringify(arr))
  logFile.log('verbose', '', JSON.stringify(arr, null, 2))

  const nestedArr = ['test', ['with', ['an', ['array']]]]
  logFile.log('verbose', '', nestedArr)
  logFile.log('verbose', '', JSON.stringify(nestedArr))
  logFile.log('verbose', '', JSON.stringify(nestedArr, null, 2))

  // XXX: multiple errors are hard to parse visually
  // the second error should start on a newline
  logFile.log(...[
    'error',
    'pre',
    'has',
    'many',
    'errors',
    cleanErr('message'),
    cleanErr('message2'),
  ])

  const err = new Error('message')
  delete err.stack
  logFile.log(...[
    'error',
    'nostack',
    err,
  ])

  const logs = await readLogs()
  t.matchSnapshot(logs.map(l => l.content).join('\n'))
})
