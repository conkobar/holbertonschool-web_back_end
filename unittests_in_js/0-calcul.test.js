/* test cases for calculateNumber() */
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('rounds a & b and returns their sum', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(2.8, 4), 7);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    assert.strictEqual(calculateNumber(-1.6, -3.2), -5);
  });

  it('second number rounded', () => {
    assert.strictEqual(calculateNumber(2, 3), 5);
    assert.strictEqual(calculateNumber(1.3, 3), 4);
    assert.strictEqual(calculateNumber(2.1, 3.5), 5);
  });
});
