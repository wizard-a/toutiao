const koa = require('koa');
const path = require('path')
const app = new koa();
const router = require('./routes');
const middleware = require('./middleware');
const static = require("koa-static");

// 设置静态资源
app.use(static(path.join( __dirname, '../public')))

// 设置自定义中间件
middleware(app);

// 设置路由
router(app);


app.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
});