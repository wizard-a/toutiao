const channelCtl = module.exports = {};
const errorCode = require('../../../config/errorCode');
const encrypt = require('../../../utils/encrypt');
const channelService = require('../../../services/channel');

/**
 * 检查名称是否存在
 */
channelCtl.check = async function(ctx) {
    const { name } = ctx.query;
    const res = await channelService.findByName(name);
    ctx.body = { exists: Boolean(res) };
}

/**
 * 添加频道
 */
channelCtl.add = async function(ctx) {
    const channel = ctx.request.body;
    channel.createUser = ctx.session.user;
    const res = await channelService.save(channel);
    ctx.body = res;
}


/**
 * 分页获取频道列表
 */
channelCtl.list = async function(ctx) {
    const {search = '', pageIndex= 1, pageNum = 10, orderName, orderBy } = ctx.query;
    const res = await channelService.list(search, pageIndex, pageNum, orderName, orderBy);
    ctx.body = res;
}

/**
 * 编辑频道
 */
channelCtl.edit = async function(ctx) {
    const {id } = ctx.params;
    const body = ctx.request.body;
    body.updateTime = Date.now();
    const res = await channelService.edit(id, body);
    ctx.body = res;
}

/**
 * 根据id获取频道
 */
channelCtl.getById = async function(ctx) {
    const { id = '' } = ctx.params;
    const res = await channelService.findById(id);
    ctx.body = res;
}

/**
 * 根据id删除频道
 */
channelCtl.del = async function(ctx) {
    const { id = '' } = ctx.params;
    const res = await channelService.del(id);
    if (!res) {
       ctx.code = '100001'
    }
    ctx.body = res || errorCode['100001'];
}