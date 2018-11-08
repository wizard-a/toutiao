const UserModel = require('../models/user');

 
function insert() {
    const user = new UserModel({
        account: '18311046191',
        password: '123456',
    });
    user.save(function(err, res) {
        if (err) {
            console.log('error', err);
        } else {
            console.log('res', res);
        }
    });
}


function update() {
    const whereStr = {account: '18311046191'};
    const updateStr = {password: 'wwww'};
    UserModel.update(whereStr, updateStr, function(err, res) {
        if (err) {
            console.log('err', err);
        } else {
            console.log('res', res);
        }
    })
}

function findByIdAndUpdate() {
    const id = '5be39c05d55499f03a397571';
    const newPassword = { password: 'abcd'};
    UserModel.findByIdAndUpdate(id, newPassword, function(err, res) {
        if (err) {
            console.log('err', err);
        } else {
            console.log('res', res);
        }
    })
}

function getByAccount() {
    const whereStr = {account: '18311046191'};
    UserModel.find(whereStr, { account: 0, }, function(err, res) {
        console.log('res', res);
    });
}

function getCount() {
    const res = UserModel.count({}).exec();
    res.then(res11 => {
        console.log('res', res11);
    })
}

// getCount();
// getByAccount();
// findByIdAndUpdate();
// update();
// insert();


