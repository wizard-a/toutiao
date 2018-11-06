module.exports = () => {
    return async(ctx, next) => {
        try {
            await next();
        } catch (err) {
            ctx.code = '1000-00-0002';
            ctx.body = 'params validate failed : ' + err.message || err;
        }
    }
}