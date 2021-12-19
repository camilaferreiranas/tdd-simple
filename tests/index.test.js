const myFunc = (item) => (item);

describe('My first test', () => {
    it('should call myFunc', () => {
        const myResult = myFunc('hello');
        expect(myResult).toBe('hello');
    });
});