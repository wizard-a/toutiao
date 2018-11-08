const userCtl = require('./controller')
module.exports = function(router){
    router.get('/user/login', userCtl.login);
    router.get('/user/logout', userCtl.logout);
    router.post('/user/reg', userCtl.reg);
};