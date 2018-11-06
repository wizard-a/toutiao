module.exports = () => {
    return async(ctx, next) => {
        await next();
        const {user} = ctx.session;
        if (!(user && Object.keys(user).length > 0)) {
            ctx.code = -1;
            ctx.body = 'user not login'
        }
    }
}