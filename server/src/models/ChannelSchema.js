const {commonSchema, setSchema} = require('./commonSchema');
const mongoose = require('../config/mongodb');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    name: { type: String, unique:true, dropDups: true },
    ...commonSchema,
});

setSchema(UserSchema);

module.exports = mongoose.model('t_channel',UserSchema);