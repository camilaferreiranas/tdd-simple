const {getUserInfo, isUserActive} = require('../githubuser');

describe('Github Methods',  () => {
    it('should call getUser', async () => {
        const userSelected = await getUserInfo('camilaferreiranas');
        expect(userSelected.login).toBe('camilaferreiranas');
    });
    it('should call isUserActive', async () => {
        const userSelected = await  isUserActive('camilaferreiranas');
        expect(userSelected).toBeGreaterThan(0);
    })
});