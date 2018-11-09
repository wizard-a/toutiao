const UserModel = require('../models/UserSchema');

/**
 * 
 * @param {*} user user 实体对象  
 * 
 */
async function save(user) {
    const userModel = new UserModel(user);
    return userModel.save();
}

/**
 * 
 * @param {*} account 用户名  
 * 
 */
async function getByAccount(account) {
    return UserModel.findOne({account});
}

/**
 * 
 * @param {*} user User实体对象
 * 
 */
async function getByUser(user) {
    const res = UserModel.findOne(user);
    return res;
}

/**
 * 
 * @param {*} account 用户名  
 * @param {*} password 密码  
 * 
 */
async function getByAccountAndPwd(account, password) {
    return UserModel.findOne({account, password});
}


module.exports = {
    save,
    getByAccount,
    getByAccountAndPwd,
    getByUser,
    UserModel,
}

