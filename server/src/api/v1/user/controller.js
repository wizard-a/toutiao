const userCTL = module.exports = {};
const errorCode = require('../../../config/errorCode');
const encrypt = require('../../../utils/encrypt');
const UserService = require('../../../services/user');
const User = require('./user');
const Upload = require('../../../utils/upload');
const util = require('../../../utils/util');
/**
 * 检查用户是否已存在
 */
userCTL.check = async function(ctx) {
    const { name } = ctx.query;
    const res = await UserService.getByAccount(name);
    ctx.body = { exists: Boolean(res) };
}


/**
 * 用户登录
 */
userCTL.login = async function(ctx) {
    const { account, password } = ctx.request.body;
    const encryptPassword = encrypt(password);
    const user = new User(account, encryptPassword);
    let res =  await UserService.getByUser(user);
    if (res) {
        // 设置 session
        ctx.session.user = res;
    } else {
        ctx.code = 101001;
        res = errorCode[101001];
    }
    ctx.body = res;
}

/**
 * 用户注册
 */
userCTL.reg = async function(ctx){
    const { account, password } = ctx.request.body;
    const encryptPassword = encrypt(password);
    const user = new User(account, encryptPassword)
    const res = await UserService.save(user);
    ctx.body = res;
}

/**用户登出 */
userCTL.logout = async function(ctx) {
    const {user} = ctx.session;
    console.log('begin', ctx.session.user);
    if (user) {
        ctx.session.user = null;
    }
    console.log('end', ctx.session.user);
    ctx.body = '登出成功';
}

/**
 * 修改用户头像
 */
userCTL.uploadPhoto = async function(ctx) {
    const { account } = ctx.request.body;
    const file = ctx.request.files.file; // 获取上传文件
    const fileName = await Upload(file.path, file.name);
    const res = await UserService.UserModel.findOneAndUpdate({account}, { photo: fileName });
    ctx.body = {
        path: fileName
    };
}

/**
 * 修改用户信息
 */
userCTL.editUser = async function(ctx) {
    const { account, photo, userName, description, sex, birthday, address, channels } = ctx.request.body;
    const user = new User(account, '', photo, userName, description, sex, birthday, address, channels);
    const res = await UserService.UserModel.findOneAndUpdate({account}, user);
    util.handleResult(res, ctx);
}