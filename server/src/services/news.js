const NewsModel = require('../models/NewsSchema');

/**
 * 添加新闻
 * @param {*} user user 实体对象  
 */
async function save(news) {
    const newsModel = new NewsModel(news);
    return newsModel.save();
}

/**
 * 根据id获取新闻详情
 * @param {*} id 
 */
async function findById(id) {
    const res = NewsModel.findById(id);
    return res;
}

/**
 * 根据id编辑新闻信息
 * @param {*} id 
 * @param {*} editObj 
 */
async function edit(id, editObj) {
    return NewsModel.findByIdAndUpdate(id, editObj);
}

/**
 * 根据id删除新闻信息
 * @param {*} id 
 */
async function del(id) {
    return NewsModel.findByIdAndRemove(id);
}

/**
 * 分页新闻列表
 * @param {*} search 
 * @param {*} pageIndex 
 * @param {*} pageNum 
 * @param {*} orderName 
 * @param {*} orderBy 
 */
async function list(search, pageIndex, pageNum, orderName, orderBy) {
    const filter = {
        $or: [  // 多字段同时匹配
            {title: {$regex: search}},
            {content: {$regex: search, $options: '$i'}}, //  $options: '$i' 忽略大小写
        ]
    }
    const fields = 'title createUser createTime  coverImg commentCount';
    const count = await NewsModel.findCount(filter);
    const rows = await NewsModel.findByPage(filter, pageIndex, pageNum, orderName, orderBy, fields);
    return {
        rows,
        count,
    }
}

module.exports = {
    save,
    list,
    edit,
    del,
    findById,
    NewsModel,
}