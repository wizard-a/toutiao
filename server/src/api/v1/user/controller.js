const userCTL = module.exports = {};

/**
 * 用户登录
 */
userCTL.login = async function(ctx){
    ctx.session.user = {
        id: 1,
        name: '张三',
    }
    ctx.body = {path:'file/test_upload.txt'}
}

/**用户登出 */
userCTL.logout = async function(ctx) {
    ctx.body = {code: '-1', user: ctx.session.user};
}