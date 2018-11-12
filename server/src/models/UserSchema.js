const {commonSchema, setSchema} = require('./commonSchema');
const mongoose = require('../config/mongodb');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    account: { type: String, unique:true, dropDups: true },
    password: { type: String },
    photo: { type: String, default: 'photo.jpg' },
    userName: { type: String },
    description: { type: String },
    sex: { type: Number},
    birthday: { type: Date },
    address: { type: Object },
    channels: { type: Array },
    ...commonSchema,
});

setSchema(UserSchema);

module.exports = mongoose.model('t_user',UserSchema);