/**
 * Created by acer on 2018/4/30.
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var leftData = require('../models/leftData');

//连接MongoDB数据库
mongoose.connect('mongodb://127.0.0.1:27017/cards');

mongoose.connection.on("connected", function () {
    console.log("MongoDB connected success.")
});

mongoose.connection.on("error", function () {
    console.log("MongoDB connected fail.")
});

mongoose.connection.on("disconnected", function () {
    console.log("MongoDB connected disconnected.")
});

//查询左树数据
router.get("/leftData", function (req,res,next) {
    leftData.find({},(err,docs)=>{
        if(err){
            res.json({
                status:'1',
                msg:err.message
            });
        }else{
            res.json({
                status:'0',
                msg:'',
                totalcount : docs.length,
                data:docs
            });
        }
    });
});
//根据左树信息查询相应信息
//router.post("/addCart", function (req,res,next) {
//
//});
module.exports = router;


