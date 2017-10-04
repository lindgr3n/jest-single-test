# jest-single-test
Problem running single test on windows using jest v.21.2.1

```
λ node_modules\.bin\jest.cmd -- packages\package1\src\sum.test.js

> jest-single-test@1.0.0 test C:\tmp\jest-single-test
> jest "packages\package1\src\sum.test.js"

No tests found
In C:\tmp\jest-single-test
  5 files checked.
  testMatch: **/__tests__/**/*.js?(x),**/?(*.)(spec|test).js?(x) - 1 match
  testPathIgnorePatterns: \\node_modules\\ - 5 matches
Pattern: packages\package1\src\sum.test.js - 0 matches
```

Running similar command on Mac the test is found.
```
$ node_modules/.bin/jest -- packages/package1/src/sum.test.js 
 PASS  packages/package1/src/sum.test.js
  <package1> - sum 
    ✓ Should sum (6ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.863s, estimated 2s
Ran all test suites matching /packages\/package1\/src\/sum.test.js/i.
```
Note: that running following works on windows so you can work around it in this case.
```
λ node_modules\.bin\jest.cmd -- packages\\package1\\src\\sum.test.js

> jest-single-test@1.0.0 test C:\tmp\jest-single-test
> jest "packages\\package1\\src\\sum.test.js"

 PASS  packages\package1\src\sum.test.js
  <package1> - sum
    √ Should sum (4ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.087s
Ran all test suites matching /packages\\package1\\src\\sum.test.js/i.

```
```
λ node_modules\.bin\jest.cmd -- sum.test.js

> jest-single-test@1.0.0 test C:\tmp\jest-single-test
> jest "sum.test.js"

 PASS  packages\package1\src\sum.test.js
  <package1> - sum
    √ Should sum (4ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.072s
Ran all test suites matching /sum.test.js/i.
```
