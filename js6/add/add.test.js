const add = require('./add');
describe('Add test', () => {
    test('Should add given numbers', () => {
        expect(add(1, 2, 3)).toBe(6);
        expect(add(6, 90)).toBe(96);
    });
    test('Should give zero if arg is missing', () => {
        expect(add()).toBe(0);
    });
    test.skip('Should add given array', () => {
        expect(add([5, 7, 10, 21])).toBe(43);
    });
});