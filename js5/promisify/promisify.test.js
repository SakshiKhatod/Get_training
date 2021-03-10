const fs = require('fs');
const promisify = require('./promisify');

describe('test promisify', () => {
  test('should turn a async callback based fn to promise and resolve to result', () => {
    const readFilePromise = promisify(fs.readFile);
    const validFilePath = './js5/promisify/data.txt';

    return expect(
      readFilePromise(validFilePath).then(data => data.toString()),
    ).resolves.toBe('Hey there, I am text');
  });

  test('should turn a async callback based fn to promise and reject on error', () => {
    const readFilePromise = promisify(fs.readFile);
    const invalidFilePath = './js5/promisify/no_such_file.txt';

    return expect(
      readFilePromise(invalidFilePath).then(
        data => data,
        () => 'Failed to read file',
      ),
    ).resolves.toBe('Failed to read file');
  });
});
