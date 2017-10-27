var mongoose = require('mongoose');
var db = mongoose.createConnection('mongodb://127.0.0.1:27017/testDB');
console.log('数据库连接成功');
db.on('error', function(error){
    console.log(error);
});

var mongooseSchema = new mongoose.Schema({
    username : {type:String,default : '匿名用户'},
    password: {type:String},
    cellphone:{type:String},
    time:{type:Date,default: Date.now}
})

mongooseSchema.methods.findbyphone = function(cellphone, callback){
    return this.model('mongoose').find({cellphone: cellphone}, callback);
};

mongooseSchema.statics.findbyphone= function(cellphone, callback){
    return this.model('mongoose').find({cellphone:cellphone},callback);
}

var mongooseModel = db.model('mongoose', mongooseSchema);
const Models = {
   register :  mongooseModel
}
module.exports = Models;
// var doc = {userName: 'emtity_username', sex: 'emtity_sex', age: 'emtity_age'}
// var mongooseEntity = new mongooseModel(doc);
// mongooseEntity.save(function(error){
//     if(error){
//         console.log(error);
//     }else{
//         console.log('save ok');
//     }
//     db.close();
// })

// mongooseModel.create(doc, function(error){
//     if(error){
//         console.log(error);
//     }else{
//         console.log('save ok');
//     }
//     db.close();
// })

