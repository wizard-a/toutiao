const NewsModel = require('../models/NewsSchema');

/**
 * 添加新闻
 * @param {*} user user 实体对象  
 */
async function save(news) {
    const newsModel = new NewsModel(news);
    return newsModel.save();
}


module.exports = {
    save,
    NewsModel,
}