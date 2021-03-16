const resolve = require('./resolve');

describe('testing resolve', () => {
  test('should resolve into given parameter', () => {
    return expect(resolve(1)).resolves.toBe(1);
  });

  test('should resolve into given parameter(String)', () => {
    return expect(resolve('hola, another test')).resolves.toBe(
      'hola, another test',
    );
  });

  test('should be thennable', () => {
    const resolvedAndIncremented = resolve(1).then(result => result + 2);
    return expect(resolvedAndIncremented).resolves.toBe(3);
  });
});
