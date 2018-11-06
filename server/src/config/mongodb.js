const mongoClient = require('mongodb').MongoClient;
const dbUrl = 'mongodb://127.0.0.1:27017';
const dbName = 'toutiao';

// const config = {
//     /*apollo : {
//         host:'http://apollo1.aps.com',
//         port:'28080',
//         appId:'pipes',
//         clusterName:'default',
//     }*/
//     "port": 3333,
//     "version": "0.2.0",
//     "redis": {//redis 服务
//         "host": "localhost",
//         "port": 6379,
//         "db": 0,
//         "password": "123456"
//     },
// };
// module.exports = config;

mongoClient.connect(dbUrl, (err, client) => {
    if (err) {
        console.log(err);
        return;
    }
    const db = client.db(dbName);
    db.collection('user').insertOne({
        userName: 'zhangsan2',
        age: 23,
        status: 1,
    }, (err, res) => {
        console.log('aaa');
        if (err) {
            console.log('insert err');
            return;
        }
        client.close();
        console.log(res);
    })
})