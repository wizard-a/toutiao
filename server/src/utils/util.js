
/**
 * 获取文件后缀
 * @param {} fileName 文件名 
 */
function getFileSuffix(fileName) {
    return fileName.replace(/.*\./,'');
}

/**
 * 处理返回结果
 */
function handleResult(res, ctx) {
    if (res) {
        ctx.body = res;
    } else {
        ctx.code = -1;
        ctx.body = 'system error';
    }
}


module.exports = {
    getFileSuffix,
    handleResult,
}