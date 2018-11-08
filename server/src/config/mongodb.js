const mongoose = require('mongoose');
const dbUrl = 'mongodb://localhost:27017/toutiao';

/**
 * 链接
 */

 mongoose.connect(dbUrl);


 mongoose.connection.on('connected', function() {
    console.log('Mongoose connection open to ' + dbUrl);
 });

 /**
 * 连接异常
 */
mongoose.connection.on('error',function (err) {    
    console.log('Mongoose connection error: ' + err);  
});    
 
/**
 * 连接断开
 */
mongoose.connection.on('disconnected', function () {    
    console.log('Mongoose connection disconnected');  
}); 

module.exports = mongoose;