const ChannelModel = require('../models/ChannelSchema');

/**
 * 添加频道
 * @param {*} channel channel 实体频道  
 */
async function save(channel) {
    const channelModel = new ChannelModel(channel);
    return channelModel.save();
}

/**
 * 根据id获取频道详情
 * @param {*} id 
 */
async function findById(id) {
    const res = ChannelModel.findById(id);
    return res;
}

/**
 * 根据name获取频道详情
 * @param {*} name
 */
async function findByName(name) {
    const res = ChannelModel.findOne({name: name});
    return res;
}

/**
 * 根据id编辑频道信息
 * @param {*} id 
 * @param {*} editObj 
 */
async function edit(id, editObj) {
    return ChannelModel.findByIdAndUpdate(id, editObj);
}

/**
 * 根据id删除频道信息
 * @param {*} id 
 */
async function del(id) {
    return ChannelModel.findByIdAndRemove(id);
}

/**
 * 分页频道列表
 * @param {*} search 
 * @param {*} pageIndex 
 * @param {*} pageNum 
 * @param {*} orderName 
 * @param {*} orderBy 
 */
async function list(search, pageIndex, pageNum, orderName, orderBy) {
    const filter = {
        $or: [  // 多字段同时匹配c
            {name: {$regex: search}},
            // {content: {$regex: search, $options: '$i'}}, //  $options: '$i' 忽略大小写
        ]
    }
    const fields = 'name createUser createTime';
    const count = await ChannelModel.findCount(filter);
    const rows = await ChannelModel.findByPage(filter, pageIndex, pageNum, orderName, orderBy, fields);
    return {
        rows,
        count,
    }
}

module.exports = {
    save,
    list,
    edit,
    findById,
    findByName,
    del,
    ChannelModel,
}