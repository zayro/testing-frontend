// interno de V8
const assert = require('assert');

const tests = await new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {args: [1, 2], expected: 3},
        {args: [1, 2, 3], expected: 6},
        {args: [1, 2, 3, 4], expected: 10}
      ]);
    }, 5000);
  });
  
// in suites ASYNCHRONOUS callbacks are NOT supported
describe('add()', function() {
    tests.forEach(({args, expected}) => {
      it(`correctly adds ${args.length} args`, function() {
        const res = args.reduce((sum, curr) => sum + curr, 0);
        assert.strictEqual(res, expected);
      });
    });
  });
  