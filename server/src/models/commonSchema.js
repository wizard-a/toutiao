
/**
 * 设置公共Schema属性
 */

function setSchema(schema) {
    schema.pre('save', function (next) {
        if (this.isNew) {
          this.createTime = this.updateTime = Date.now();
        } else {
          this.updateTime = Date.now();
        }
        next()
    });

    schema.statics = {
        fetch: function () {
          return this.find({})
            .sort('createTime')
            .exec()
        },
        findById: function (id) {
          return this.findOne({_id: id})
            .sort('createTime')
            .exec();
        },
        findByUid: function (uid) {
          return this.findOne({uid: uid})
            .sort('createTime')
            .exec();
        },
        findByPage: function (searchName, pageIndex, pageNum, sortName, sortWay) {
            return this.find({}).exec();
        },
    };
}


const commonSchema = {
    createTime: { type: Date, default: Date.now()},
    updateTime: { type: Date, default: Date.now()},
    status: { type: Number, default : 1 },
}

module.exports = {
    setSchema,
    commonSchema,
}