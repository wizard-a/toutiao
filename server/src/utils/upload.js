const fs = require('fs');
const path = require('path');
const util = require('./util');
const uuidv4 = require('uuid/v4')


/**
 * 上传文件
 * @param {*} path file对象路径
 * @param {*} fileName 文件名称
 */
async function upload(fPath, fileName) {
    // 创建可读流
    const reader = fs.createReadStream(fPath);
    const fileSuffix = util.getFileSuffix(fileName);
    const newFileName = `${uuidv4()}.${fileSuffix}`;
    const filePath = path.join(__dirname, '../../public/upload') + `/${newFileName}`;
    // 创建可写流
    const upStream = fs.createWriteStream(filePath);
    // 可读流通过管道写入可写流
    reader.pipe(upStream);
    return newFileName;
}


module.exports = upload;
