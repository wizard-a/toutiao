const newsCTL = module.exports = {};
const errorCode = require('../../../config/errorCode');
const encrypt = require('../../../utils/encrypt');
const NewsService = require('../../../services/news');
const News = require('./news');
const Upload = require('../../../utils/upload');

/**
 * 添加新闻
 */
newsCTL.add = async function(ctx) {
    const news = ctx.request.body;
    news.createUser = ctx.session.user;
    const res = await NewsService.save(news);
    ctx.body = res;
}


/**
 * 上传封面
 */
newsCTL.upload = async function(ctx) {
    const file = ctx.request.files.file; // 获取上传文件
    const fileName = await Upload(file.path, file.name, 'news');
    ctx.body = {
        path: fileName
    };
}