const UserModel = require('../models/user');



async function reg(account, password) {
    const user = new UserModel({
        account,
        password,
    });
    return user.save();
}




module.exports = {
    reg,
}


