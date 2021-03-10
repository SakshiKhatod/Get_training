const fib = require('./fib');

describe('test fibonacci', () => {
  test('should return the nth fibonacci number', () => {
    expect(fib(0)).toBe(0);
    expect(fib(5)).toBe(5);
    expect(fib(6)).toBe(8);
    expect(fib(15)).toBe(610);
  });
});
