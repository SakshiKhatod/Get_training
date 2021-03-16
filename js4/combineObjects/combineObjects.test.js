const combineObjects = require('./combineObjects');

describe('test combineObjects', () => {
  test('should combine two object together ', () => {
    const a = {};
    const b = {
      name: 'dante',
      age: 35,
    };

    expect(combineObjects(a)).toEqual(a);
    expect(combineObjects(a, b)).toEqual(b);
    expect(combineObjects(b, a)).toEqual(b);
    expect(combineObjects(b, undefined)).toEqual(b);
  });

  test('should combine n objects together ', () => {
    const a = {};
    const b = {
      name: 'dante',
      age: 35,
    };

    const c = {
      name: 'nero',
      weapon: 'angel wings',
    };

    expect(combineObjects(a, b, c)).toEqual({
      name: 'nero',
      weapon: 'angel wings',
      age: 35,
    });

    expect(combineObjects(c, a, b)).toEqual({
      name: 'dante',
      weapon: 'angel wings',
      age: 35,
    });
  });
});
