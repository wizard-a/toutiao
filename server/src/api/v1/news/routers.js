const newsCtl = require('./controller')
module.exports = function(router){
    router.get('/news', newsCtl.list);
    router.get('/news/:id', newsCtl.getById);
    router.post('/news', newsCtl.add);
    router.post('/news/upload', newsCtl.upload);
    router.put('/news/:id', newsCtl.edit);
    router.del('/news/:id', newsCtl.del);

};