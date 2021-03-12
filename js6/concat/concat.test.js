const concat = require('./concat');

describe('Test concat', () => {
    test('Should concat given strings', () => {
        expect(concat('Hi', ' User')).toBe('Hi User');
    });
    test('Should work if argument is not given', () => {
        expect(concat()).toBe('');
    });
});