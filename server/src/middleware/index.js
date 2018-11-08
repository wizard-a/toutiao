const ip = require("ip");
const session = require('koa-session');
const miHttpError = require('./mi-http-error');
const miLog = require('./mi-log');
const miResultFormat = require('./mi-result-format');
const miSession = require('./mi-session');
const bodyParser = require('koa-bodyparser');
const multer = require('koa-multer');
const body = require('koa-body');

module.exports = function(app) {
    app.use(miHttpError());
    // 处理返回结果
    app.use(miResultFormat());
    // 处理登录权限
    // app.use(miSession());
    // 设置log
    app.use(miLog({
        env: app.env,
        projectName: 'server',
        appLogLevel: 'debug',
        dir: 'logs',
        serverIp: ip.address()
    }));
    // 设置body parser
    // app.use(bodyParser({
    //     // enableTypes:['json', 'form', 'text']
    // }));
    // app.use(multer());
    app.use(body({multipart: true}));
    // 设置 session
    app.keys = ['server-koa2-cookies-singed'];//产生的 signedCookie 防篡改
    const CONFIG = {
        key: 'server:sess', /** (string) cookie key (default is koa:sess) */
        maxAge: 30*60*1000,
        autoCommit: true, /** (boolean) automatically commit headers (default true) */
        overwrite: true, /** (boolean) can overwrite or not (default true) */
        httpOnly: false, /** (boolean) httpOnly or not (default true) */
        signed: true, /** (boolean) signed or not (default true) */
        rolling: true, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
        renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
    };
    app.use(session(CONFIG, app));
    // 全局监控错误
    app.on('error', (err, ctx) => {
        ctx.log.error(err.message || err)
        switch (err.code) {
            case 'EACCES':
                console.error('PIPE : ' + PORT + ' requires elevated privileges');
                break;
            case 'EADDRINUSE':
                console.error('PORT : ' + PORT + ' is already in use');
                break;
            default:
                console.error(err);
        }
        ctx.code = '1000-00-0001';
        ctx.body = err.message ||  err;
    });
}