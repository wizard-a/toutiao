const httpCode = {
    '404': '没有此路由',
    '500': '服务器内部错误',
}



module.exports = function() {
    return async(ctx, next) => {
        await next();
        let result = ctx.body;
        let code = ctx.code;
        if(!code && ctx.status === 200){
            ctx.body = {
                code:0,
                data:result
            }
            ctx.log.info(ctx.body);
        }else{
            ctx.body = {
                code : ctx.code || ctx.status,
                message:result || httpCode[ctx.status] || 'other',
                data:null
            }
            ctx.log.error(ctx.body);
        }
    }
}