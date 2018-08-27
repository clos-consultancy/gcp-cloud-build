const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.sum(1, 2)).toBe(3);
});

test('adds 1 + 2 to equal 7 - should fail', () => {
  expect(calculator.sum(1, 2)).toBe(7);
});