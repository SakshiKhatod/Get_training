const factorial = require('./factorial');

describe('Factorial Test', () => {
    test('Should give factorial of given number', () => {
        expect(factorial(5)).toBe(120);
        expect(factorial(0)).toBe(1);
        expect(factorial(1)).toBe(1);
        expect(factorial(2)).toBe(2);
        expect(factorial(1000)).toBe(Infinity);
    });
});