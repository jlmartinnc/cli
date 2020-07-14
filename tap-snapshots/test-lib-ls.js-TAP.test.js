/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/lib/ls.js TAP ls --depth=0 > should output tree containing only top-level dependencies 1`] = `
test-npm-ls@1.0.0 {CWD}/ls-ls--depth-0
+-- foo@1.0.0
\`-- lorem@1.0.0

`

exports[`test/lib/ls.js TAP ls --depth=1 > should output tree containing top-level deps and their deps only 1`] = `
test-npm-ls@1.0.0 {CWD}/ls-ls--depth-1
+-- foo@1.0.0
| \`-- bar@1.0.0
\`-- lorem@1.0.0

`

exports[`test/lib/ls.js TAP ls --dev > should output tree containing dev deps 1`] = `
test-npm-ls@1.0.0 {CWD}/ls-ls--dev
\`-- dev-dep@1.0.0
  \`-- foo@1.0.0
    \`-- bar@1.0.0

`

exports[`test/lib/ls.js TAP ls --link > should output tree containing linked deps 1`] = `
test-npm-ls@1.0.0 {CWD}/ls-ls--link
\`-- linked-dep@1.0.0 -> {CWD}/ls-ls--link/linked-dep

`

exports[`test/lib/ls.js TAP ls --long --depth=0 > should output tree containing top-level deps with descriptions 1`] = `
test-npm-ls@1.0.0
| {CWD}/ls-ls--long-depth-0
| 
+-- dev-dep@1.0.0
|   A DEV dep kind of dep
+-- lorem@1.0.0
|   
+-- optional-dep@1.0.0
|   Maybe a dep?
+-- peer-dep@1.0.0 extraneous
|   Peer-dep description here
\`-- prod-dep@1.0.0
    A PROD dep kind of dep

`

exports[`test/lib/ls.js TAP ls --long > should output tree info with descriptions 1`] = `
test-npm-ls@1.0.0
| {CWD}/ls-ls--long
| 
+-- dev-dep@1.0.0
| | A DEV dep kind of dep
| \`-- foo@1.0.0
|   | 
|   \`-- bar@1.0.0
|       
+-- lorem@1.0.0
|   
+-- optional-dep@1.0.0
|   Maybe a dep?
+-- peer-dep@1.0.0 extraneous
|   Peer-dep description here
\`-- prod-dep@1.0.0
  | A PROD dep kind of dep
  \`-- bar@2.0.0
      A dep that bars

`

exports[`test/lib/ls.js TAP ls --only=development > should output tree containing only development deps 1`] = `
test-npm-ls@1.0.0 {CWD}/ls-ls--only-development
\`-- dev-dep@1.0.0
  \`-- foo@1.0.0
    \`-- bar@1.0.0

`

exports[`test/lib/ls.js TAP ls --only=prod > should output tree containing only prod deps 1`] = `
test-npm-ls@1.0.0 {CWD}/ls-ls--only-prod
+-- lorem@1.0.0
+-- optional-dep@1.0.0
\`-- prod-dep@1.0.0
  \`-- bar@2.0.0

`

exports[`test/lib/ls.js TAP ls --parseable --depth=0 > should output tree containing only top-level dependencies 1`] = `
{CWD}/ls-ls-parseable--depth-0
{CWD}/ls-ls-parseable--depth-0/node_modules/foo
{CWD}/ls-ls-parseable--depth-0/node_modules/lorem
`

exports[`test/lib/ls.js TAP ls --parseable --depth=1 > should output tree containing top-level deps and their deps only 1`] = `
{CWD}/ls-ls-parseable--depth-1
{CWD}/ls-ls-parseable--depth-1/node_modules/foo
{CWD}/ls-ls-parseable--depth-1/node_modules/bar
{CWD}/ls-ls-parseable--depth-1/node_modules/lorem
`

exports[`test/lib/ls.js TAP ls --parseable --dev > should output tree containing dev deps 1`] = `
{CWD}/ls-ls-parseable--dev
{CWD}/ls-ls-parseable--dev/node_modules/dev-dep
{CWD}/ls-ls-parseable--dev/node_modules/foo
{CWD}/ls-ls-parseable--dev/node_modules/bar
`

exports[`test/lib/ls.js TAP ls --parseable --link > should output tree containing linked deps 1`] = `
{CWD}/ls-ls-parseable--link
{CWD}/ls-ls-parseable--link/node_modules/linked-dep
`

exports[`test/lib/ls.js TAP ls --parseable --long --depth=0 > should output tree containing top-level deps with descriptions 1`] = `
{CWD}/ls-ls-parseable--long-depth-0:test-npm-ls@1.0.0:undefined
{CWD}/ls-ls-parseable--long-depth-0/node_modules/dev-dep:dev-dep@1.0.0:undefined
{CWD}/ls-ls-parseable--long-depth-0/node_modules/lorem:lorem@1.0.0:undefined
{CWD}/ls-ls-parseable--long-depth-0/node_modules/optional-dep:optional-dep@1.0.0:undefined
{CWD}/ls-ls-parseable--long-depth-0/node_modules/peer-dep:peer-dep@1.0.0:undefined:EXTRANEOUS
{CWD}/ls-ls-parseable--long-depth-0/node_modules/prod-dep:prod-dep@1.0.0:undefined
`

exports[`test/lib/ls.js TAP ls --parseable --long > should output tree info with descriptions 1`] = `
{CWD}/ls-ls-parseable--long:test-npm-ls@1.0.0:undefined
{CWD}/ls-ls-parseable--long/node_modules/dev-dep:dev-dep@1.0.0:undefined
{CWD}/ls-ls-parseable--long/node_modules/foo:foo@1.0.0:undefined
{CWD}/ls-ls-parseable--long/node_modules/bar:bar@1.0.0:undefined
{CWD}/ls-ls-parseable--long/node_modules/lorem:lorem@1.0.0:undefined
{CWD}/ls-ls-parseable--long/node_modules/optional-dep:optional-dep@1.0.0:undefined
{CWD}/ls-ls-parseable--long/node_modules/peer-dep:peer-dep@1.0.0:undefined:EXTRANEOUS
{CWD}/ls-ls-parseable--long/node_modules/prod-dep:prod-dep@1.0.0:undefined
{CWD}/ls-ls-parseable--long/node_modules/prod-dep/node_modules/bar:bar@2.0.0:undefined
`

exports[`test/lib/ls.js TAP ls --parseable --only=development > should output tree containing only development deps 1`] = `
{CWD}/ls-ls-parseable--only-development
{CWD}/ls-ls-parseable--only-development/node_modules/dev-dep
{CWD}/ls-ls-parseable--only-development/node_modules/foo
{CWD}/ls-ls-parseable--only-development/node_modules/bar
`

exports[`test/lib/ls.js TAP ls --parseable --only=prod > should output tree containing only prod deps 1`] = `
{CWD}/ls-ls-parseable--only-prod
{CWD}/ls-ls-parseable--only-prod/node_modules/lorem
{CWD}/ls-ls-parseable--only-prod/node_modules/optional-dep
{CWD}/ls-ls-parseable--only-prod/node_modules/prod-dep
{CWD}/ls-ls-parseable--only-prod/node_modules/prod-dep/node_modules/bar
`

exports[`test/lib/ls.js TAP ls --parseable --production > should output tree containing production deps 1`] = `
{CWD}/ls-ls-parseable--production
{CWD}/ls-ls-parseable--production/node_modules/lorem
{CWD}/ls-ls-parseable--production/node_modules/optional-dep
{CWD}/ls-ls-parseable--production/node_modules/prod-dep
{CWD}/ls-ls-parseable--production/node_modules/prod-dep/node_modules/bar
`

exports[`test/lib/ls.js TAP ls --parseable cycle deps > should print tree output ommiting deduped ref 1`] = `
{CWD}/ls-ls-parseable-cycle-deps
{CWD}/ls-ls-parseable-cycle-deps/node_modules/a
{CWD}/ls-ls-parseable-cycle-deps/node_modules/b
`

exports[`test/lib/ls.js TAP ls --parseable empty location > should print empty result 1`] = `
{CWD}/ls-ls-parseable-empty-location
`

exports[`test/lib/ls.js TAP ls --parseable extraneous deps > should output containing problems info 1`] = `
{CWD}/ls-ls-parseable-extraneous-deps
{CWD}/ls-ls-parseable-extraneous-deps/node_modules/foo
{CWD}/ls-ls-parseable-extraneous-deps/node_modules/bar
{CWD}/ls-ls-parseable-extraneous-deps/node_modules/lorem
`

exports[`test/lib/ls.js TAP ls --parseable from and resolved properties > should not be printed in tree output 1`] = `
{CWD}/ls-ls-parseable-from-and-resolved-properties
{CWD}/ls-ls-parseable-from-and-resolved-properties/node_modules/simple-output
`

exports[`test/lib/ls.js TAP ls --parseable json read problems > should print empty result 1`] = `
{CWD}/ls-ls-parseable-json-read-problems
`

exports[`test/lib/ls.js TAP ls --parseable missing package.json > should output json missing name/version of top-level package 1`] = `
{CWD}/ls-ls-parseable-missing-package-json
{CWD}/ls-ls-parseable-missing-package-json/node_modules/foo
{CWD}/ls-ls-parseable-missing-package-json/node_modules/bar
{CWD}/ls-ls-parseable-missing-package-json/node_modules/lorem
`

exports[`test/lib/ls.js TAP ls --parseable missing/invalid/extraneous > should output tree containing top-level deps and their deps only 1`] = `
{CWD}/ls-ls-parseable-missing-invalid-extraneous
{CWD}/ls-ls-parseable-missing-invalid-extraneous/node_modules/foo
{CWD}/ls-ls-parseable-missing-invalid-extraneous/node_modules/bar
{CWD}/ls-ls-parseable-missing-invalid-extraneous/node_modules/ipsum
{CWD}/ls-ls-parseable-missing-invalid-extraneous/node_modules/lorem
`

exports[`test/lib/ls.js TAP ls --parseable no args > should output tree representation of dependencies structure 1`] = `
{CWD}/ls-ls-parseable-no-args
{CWD}/ls-ls-parseable-no-args/node_modules/foo
{CWD}/ls-ls-parseable-no-args/node_modules/bar
{CWD}/ls-ls-parseable-no-args/node_modules/lorem
`

exports[`test/lib/ls.js TAP ls --parseable resolved points to git ref > should output tree containing git refs 1`] = `
{CWD}/ls-ls-parseable-resolved-points-to-git-ref
{CWD}/ls-ls-parseable-resolved-points-to-git-ref/node_modules/abbrev
`

exports[`test/lib/ls.js TAP ls --parseable unmet optional dep > should output tree with empty entry for missing optional deps 1`] = `
{CWD}/ls-ls-parseable-unmet-optional-dep
{CWD}/ls-ls-parseable-unmet-optional-dep/node_modules/dev-dep
{CWD}/ls-ls-parseable-unmet-optional-dep/node_modules/foo
{CWD}/ls-ls-parseable-unmet-optional-dep/node_modules/bar
{CWD}/ls-ls-parseable-unmet-optional-dep/node_modules/lorem
{CWD}/ls-ls-parseable-unmet-optional-dep/node_modules/optional-dep
{CWD}/ls-ls-parseable-unmet-optional-dep/node_modules/peer-dep
{CWD}/ls-ls-parseable-unmet-optional-dep/node_modules/prod-dep
{CWD}/ls-ls-parseable-unmet-optional-dep/node_modules/prod-dep/node_modules/bar
`

exports[`test/lib/ls.js TAP ls --parseable unmet peer dep > should output tree signaling missing peer dep in problems 1`] = `
{CWD}/ls-ls-parseable-unmet-peer-dep
{CWD}/ls-ls-parseable-unmet-peer-dep/node_modules/dev-dep
{CWD}/ls-ls-parseable-unmet-peer-dep/node_modules/foo
{CWD}/ls-ls-parseable-unmet-peer-dep/node_modules/bar
{CWD}/ls-ls-parseable-unmet-peer-dep/node_modules/lorem
{CWD}/ls-ls-parseable-unmet-peer-dep/node_modules/optional-dep
{CWD}/ls-ls-parseable-unmet-peer-dep/node_modules/peer-dep
{CWD}/ls-ls-parseable-unmet-peer-dep/node_modules/prod-dep
{CWD}/ls-ls-parseable-unmet-peer-dep/node_modules/prod-dep/node_modules/bar
`

exports[`test/lib/ls.js TAP ls --parseable using aliases > should output tree containing aliases 1`] = `
{CWD}/ls-ls-parseable-using-aliases
{CWD}/ls-ls-parseable-using-aliases/node_modules/a
`

exports[`test/lib/ls.js TAP ls --parseable with filter arg > should output tree contaning only occurences of filtered by package 1`] = `
{CWD}/ls-ls-parseable-with-filter-arg/node_modules/lorem
`

exports[`test/lib/ls.js TAP ls --parseable with missing filter arg > should output tree containing no dependencies info 1`] = `
{CWD}/ls-ls-parseable-with-missing-filter-arg
`

exports[`test/lib/ls.js TAP ls --production > should output tree containing production deps 1`] = `
test-npm-ls@1.0.0 {CWD}/ls-ls--production
+-- lorem@1.0.0
+-- optional-dep@1.0.0
\`-- prod-dep@1.0.0
  \`-- bar@2.0.0

`

exports[`test/lib/ls.js TAP ls cycle deps > should print tree output containing deduped ref 1`] = `
test-npm-ls@1.0.0 {CWD}/ls-ls-cycle-deps
\`-- a@1.0.0
  \`-- b@1.0.0
    \`-- a@1.0.0 deduped

`

exports[`test/lib/ls.js TAP ls empty location > should print empty result 1`] = `
{CWD}/ls-ls-empty-location
\`-- (empty)

`

exports[`test/lib/ls.js TAP ls extraneous deps > should output containing problems info 1`] = `
test-npm-ls@1.0.0 {CWD}/ls-ls-extraneous-deps
+-- foo@1.0.0
| \`-- bar@1.0.0
\`-- lorem@1.0.0 extraneous

`

exports[`test/lib/ls.js TAP ls from and resolved properties > should not be printed in tree output 1`] = `
test-npm-ls@1.0.0 {CWD}/ls-ls-from-and-resolved-properties
\`-- simple-output@2.1.1

`

exports[`test/lib/ls.js TAP ls json read problems > should print empty result 1`] = `
{CWD}/ls-ls-json-read-problems
\`-- (empty)

`

exports[`test/lib/ls.js TAP ls missing package.json > should output json missing name/version of top-level package 1`] = `
{CWD}/ls-ls-missing-package-json
+-- foo@1.0.0
| \`-- bar@1.0.0
\`-- lorem@1.0.0

`

exports[`test/lib/ls.js TAP ls missing/invalid/extraneous > should output tree containing top-level deps and their deps only 1`] = `
test-npm-ls@1.0.0 {CWD}/ls-ls-missing-invalid-extraneous
+-- foo@1.0.0 invalid
| \`-- bar@1.0.0 extraneous
+-- UNMET DEPENDENCY ipsum@^1.0.0
\`-- lorem@1.0.0 extraneous

`

exports[`test/lib/ls.js TAP ls no args > should output tree representation of dependencies structure 1`] = `
test-npm-ls@1.0.0 {CWD}/ls-ls-no-args
+-- foo@1.0.0
| \`-- bar@1.0.0
\`-- lorem@1.0.0

`

exports[`test/lib/ls.js TAP ls resolved points to git ref > should output tree containing git refs 1`] = `
test-npm-ls@1.0.0 {CWD}/ls-ls-resolved-points-to-git-ref
\`-- abbrev@1.1.1 (git+https://github.com/isaacs/abbrev-js.git#b8f3a2fc0c3bb8ffd8b0d0072cc6b5a3667e963c)

`

exports[`test/lib/ls.js TAP ls unmet optional dep > should output tree with empty entry for missing optional deps 1`] = `
test-npm-ls@1.0.0 {CWD}/ls-ls-unmet-optional-dep
+-- dev-dep@1.0.0
| \`-- foo@1.0.0
|   \`-- bar@1.0.0
+-- lorem@1.0.0
+-- UNMET OPTIONAL DEPENDENCY missing-optional-dep@^1.0.0
+-- optional-dep@1.0.0 invalid
+-- peer-dep@1.0.0 extraneous
\`-- prod-dep@1.0.0
  \`-- bar@2.0.0

`

exports[`test/lib/ls.js TAP ls unmet peer dep > should output tree signaling missing peer dep in problems 1`] = `
test-npm-ls@1.0.0 {CWD}/ls-ls-unmet-peer-dep
+-- dev-dep@1.0.0
| \`-- foo@1.0.0
|   \`-- bar@1.0.0
+-- lorem@1.0.0
+-- optional-dep@1.0.0
+-- UNMET PEER DEPENDENCY peer-dep@1.0.0 extraneous
\`-- prod-dep@1.0.0
  \`-- bar@2.0.0

`

exports[`test/lib/ls.js TAP ls using aliases > should output tree containing aliases 1`] = `
test-npm-ls@1.0.0 {CWD}/ls-ls-using-aliases
\`-- a@npm:b@1.0.0

`

exports[`test/lib/ls.js TAP ls with filter arg > should output tree contaning only occurences of filtered by package 1`] = `
test-npm-ls@1.0.0 {CWD}/ls-ls-with-filter-arg
\`-- lorem@1.0.0 

`

exports[`test/lib/ls.js TAP ls with missing filter arg > should output tree containing no dependencies info 1`] = `
test-npm-ls@1.0.0 {CWD}/ls-ls-with-missing-filter-arg
\`-- (empty)

`