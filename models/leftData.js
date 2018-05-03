/**
 * Created by acer on 2018/4/30.
 */
var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var produtSchema = new Schema({
    "name":{type:String}
});
/**
 * 关联一个表 第3个参数表名
 * @type {Model|*|Aggregate}
 */
module.exports = mongoose.model('leftData',produtSchema,'leftdatas');