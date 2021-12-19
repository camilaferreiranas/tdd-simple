const fetch = require('node-fetch');
const githubUrl = 'https://api.github.com/users/';

async function getUserInfo(user) {
    const userSelected = await fetch(githubUrl + user);
    return userSelected.json();

}

async function isUserActive(user) {
    const userSelected = await fetch(githubUrl + user + '/repos');
    const isActive = await userSelected.json();
    if(isActive.length> 0) {
        return isActive;
    } else {
        return 'Ohh, an inactive user... Tech recruiters dont like this.';
    }
}




module.exports = {
    getUserInfo, isUserActive
}