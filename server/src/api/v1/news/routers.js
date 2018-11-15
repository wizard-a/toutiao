const newsCtl = require('./controller')
module.exports = function(router){
    router.post('/news/add', newsCtl.add);
    router.post('/news/upload', newsCtl.upload);
    router.get('/news/list', newsCtl.list);
};