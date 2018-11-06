const Router = require('koa-router');
const requireDirectory = require('require-directory');


const router = new Router({
    prefix: '/api/v1'
});

var instances = requireDirectory(module, '../api/v1');
Object.keys(instances).forEach(item => {
    instances[item].routers(router)
})

module.exports = (app) => {
    app.use(router.routes())
        .use(router.allowedMethods())
};
