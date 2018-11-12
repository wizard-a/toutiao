const {commonSchema, setSchema} = require('./commonSchema');
const mongoose = require('../config/mongodb');
const Schema = mongoose.Schema;


const NewsSchema = new Schema({
    title: { type: String, maxlength: 30 },
    content: { type: String },
    coverImg: { type: Array },
    commentCount: { type: Number , default: 0},
    createUser: {type: Object},
    ...commonSchema,
});

setSchema(NewsSchema);

module.exports = mongoose.model('t_news',NewsSchema);