const filter = require('./filterWithFns');

describe('testing mapWithFns', () => {
  it('should map the array to with given function', () => {
    const isOddNum = num => num % 2 !== 0;
    const isEvenNum = num => num % 2 === 0;

    const isLongerThanFourChars = str => str.length > 4;

    expect(filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], isOddNum)).toEqual([
      1,
      3,
      5,
      7,
      9,
      11,
    ]);
    expect(filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], isEvenNum)).toEqual([
      2,
      4,
      6,
      8,
      10,
    ]);

    // assume that I will not pass numbers array when using isLongerThanFourChars
    expect(
      filter(
        'Why do we fall sir? So that we can learn to pick ourselves up'.split(
          ' ',
        ),
        isLongerThanFourChars,
      ),
    ).toEqual(['learn', 'ourselves']);
  });
});
