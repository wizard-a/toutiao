const userCTL = module.exports = {};
const UserService = require('../../../services/user');

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

/**
 * 用户注册
 */
userCTL.reg = async function(ctx){
    const { account, password } = ctx.request.body;
    const res = await UserService.reg(account, password);
    ctx.body = res;
}

/**用户登出 */
userCTL.logout = async function(ctx) {
    ctx.body = {code: '-1', user: ctx.session.user};
}

