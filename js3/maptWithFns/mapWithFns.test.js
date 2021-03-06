const map = require('./mapWithFns');

describe('testing mapWithFns', () => {
  it('should map the array to with given function', () => {
    const multiplyByTwo = num => num * 2;
    const square = num => Math.pow(num, 2);

    const toUpperCase = char => char.toUpperCase();

    expect(map([1, 2, 3], multiplyByTwo)).toEqual([2, 4, 6]);
    expect(map([0], square)).toEqual([0]);

    expect(map([12, 5, 10], square)).toEqual([144, 25, 100]);

    // assume that I will not pass numbers array when using toUpperCase
    expect(map('the cake is a Lie!'.split(''), toUpperCase)).toEqual([
      'T',
      'H',
      'E',
      ' ',
      'C',
      'A',
      'K',
      'E',
      ' ',
      'I',
      'S',
      ' ',
      'A',
      ' ',
      'L',
      'I',
      'E',
      '!',
    ]);
  });
});
