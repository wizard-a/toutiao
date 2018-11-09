const userCtl = require('./controller')
module.exports = function(router){
    router.get('/user/check', userCtl.check);
    router.post('/user/login', userCtl.login);
    router.get('/user/logout', userCtl.logout);
    router.post('/user/reg', userCtl.reg);
    router.post('/user/upload/photo', userCtl.uploadPhoto);
    router.post('/user/edit', userCtl.editUser)
};