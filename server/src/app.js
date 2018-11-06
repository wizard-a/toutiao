const koa = require('koa');
const app = new koa();
const router = require('./routes');
const middleware = require('./middleware');


// 设置自定义中间件
middleware(app);

// 设置路由
router(app);


app.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
})