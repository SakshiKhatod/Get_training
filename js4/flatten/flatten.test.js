const flatten = require('./flatten');

describe('test flatten', () => {
  test('should flatten arrays', () => {
    const input = [[1], [2, 3], [4, 5, 6]];
    expect(flatten(input)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('should flatten arrays and handle for numbers in between', () => {
    const input = [[1], 2, 3, [4, 5, 6]];
    expect(flatten(input)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
