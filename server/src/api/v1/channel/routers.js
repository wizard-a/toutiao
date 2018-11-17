const channelCtl = require('./controller')
module.exports = function(router){
    router.get('/channel/check', channelCtl.check);
    router.get('/channel', channelCtl.list);
    router.get('/channel/:id', channelCtl.getById);
    router.post('/channel', channelCtl.add);
    router.put('/channel/:id', channelCtl.edit);
    router.del('/channel/:id', channelCtl.del);
};