const {sum, subtract, multiply, divide} = require('../calculator');


describe('Calculator methods', () =>  {
    it('should sum two numbers', () => {
        const value = sum(2,5);
        expect(value).toBe(7);
    });
    it('should subtract two numbers', () => {
        const value = subtract(8, 2);
        expect(value).toBe(6);
    });
    it('should multiply two numbers', () => {
        const value = multiply(10,5);
        expect(value).toBe(50);
    });
    it('should divide two numbers - valid', () => {
        const value = divide(8,2);
        expect(value).toBe(4);
    });
    it('shouldnt divide two numbers - invalid', () => {
        const value = divide(10,0);
        expect(value).toBeNull();
    })
});