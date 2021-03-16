const add = require('./add');

describe('test add', () => {
  test('should add two numbers', () => {
    expect(add(10, 35)).toBe(45);
    expect(add(5, 5)).toBe(10);
  });

  test('should add n numbers', () => {
    expect(add(3, 3, 4)).toBe(10);
    expect(add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)).toBe(55);
    expect(add(100)).toBe(100);
  });
});
