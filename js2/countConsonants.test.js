const countConsonants = require('./countConsonants');

test('should return count of consonants as an object for given sentence', () => {
  const input = 'bacd aio palleted';
  expect(countConsonants(input)).toEqual({
    b: 1,
    c: 1,
    d: 2,
    p: 1,
    l: 2,
    t: 1,
  });

  const input2 = 'dear dead damsel in distress';
  expect(countConsonants(input2)).toEqual({
    d: 5,
    m: 1,
    s: 4,
    l: 1,
    n: 1,
    t: 1,
    r: 2,
  });
});
