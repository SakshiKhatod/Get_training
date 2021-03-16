const sliceArray = require('./arraySlicer');

test('should slice array by given length and return array of arrays', () => {
  const array = [1, 2, 3, 4, 5, 6, 7];
  expect(sliceArray(array, 3)).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
  expect(sliceArray(array, 2)).toEqual([[1, 2], [3, 4], [5, 6], [7]]);

  expect(sliceArray([1, 2, 3], 4)).toEqual([[1, 2, 3]]);
});

test('should throw error for invalid input', () => {
  expect(() => sliceArray([], 3)).toThrow(
    'Invalid Array, expected array length of atleast 1',
  );
  expect(() => sliceArray([1, 3], 0)).toThrow(
    'Invalid Length, expected a positive integer, received 0',
  );
  expect(() => sliceArray([1, 3], -2)).toThrow(
    'Invalid Length, expected a positive integer, received -2',
  );
});
