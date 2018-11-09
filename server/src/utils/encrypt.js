const crypto = require('crypto');


/**
 * 加密
 */
module.exports = (value) => {
    const md5 = crypto.createHash('md5');
    md5.update(value || '');
    const res = md5.digest('hex');
    return res;
}