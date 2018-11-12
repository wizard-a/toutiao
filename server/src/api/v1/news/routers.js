const newsCtl = require('./controller')
module.exports = function(router){
    router.post('/news/add', newsCtl.add);
    router.post('/news/upload', newsCtl.upload);
    // router.get('/user/logout', userCtl.logout);
    // router.post('/user/reg', userCtl.reg);
    // router.post('/user/upload/photo', userCtl.uploadPhoto);
    // router.post('/user/edit', userCtl.editUser)
};