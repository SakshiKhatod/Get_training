const reject = require('./reject');

describe('test reject', () => {
  test('should reject with given value', () =>
    expect(reject(10)).rejects.toBe(10));

  test('should reject with given value(String)', () =>
    expect(reject('prepare to dye!')).rejects.toBe('prepare to dye!'));

  test('should be thennable', () => {
    const rejectionHandled = reject('will you go out with me?').then(
      null,
      () => 'no prob, have a good day',
    );

    return expect(rejectionHandled).resolves.toBe('no prob, have a good day');
  });
});
