const newsCtl = module.exports = {};
const errorCode = require('../../../config/errorCode');
const encrypt = require('../../../utils/encrypt');
const newsService = require('../../../services/news');
const Upload = require('../../../utils/upload');

/**
 * 添加新闻
 */
newsCtl.add = async function(ctx) {
    const news = ctx.request.body;
    news.createUser = ctx.session.user;
    const res = await newsService.save(news);
    ctx.body = res;
}


/**
 * 上传封面
 */
newsCtl.upload = async function(ctx) {
    const file = ctx.request.files.file; // 获取上传文件
    const fileName = await Upload(file.path, file.name, 'news');
    ctx.body = {
        path: fileName
    };
}

/**
 * 分页获取新闻列表
 */
newsCtl.list = async function(ctx) {
    const {search = '', pageIndex= 1, pageNum = 10, orderName, orderBy } = ctx.query;
    const res = await newsService.list(search, pageIndex, pageNum, orderName, orderBy);
    ctx.body = res;
}

/**
 * 编辑新闻
 */
newsCtl.edit = async function(ctx) {
    const {id } = ctx.params;
    const body = ctx.request.body;
    body.updateTime = Date.now();
    const res = await newsService.edit(id, body);
    ctx.body = res;
}

/**
 * 根据id获取新闻
 */
newsCtl.getById = async function(ctx) {
    const { id = '' } = ctx.params;
    const res = await newsService.findById(id);
    ctx.body = res;
}

/**
 * 根据id删除新闻
 */
newsCtl.del = async function(ctx) {
    const { id = '' } = ctx.params;
    const res = await newsService.del(id);
    if (!res) {
       ctx.code = '100001'
    }
    ctx.body = res || errorCode['100001'];
}