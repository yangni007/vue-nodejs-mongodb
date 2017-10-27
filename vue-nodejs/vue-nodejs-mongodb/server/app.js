// var express = require('express')
// var app = express();




// var MongoClient = require('mongodb').MongoClient,
//     DB_CONN_STR = 'mongodb://localhost:27017/testDB';
// var selectData = function(db, callback){
//     var collection = db.collection('user');
//     var whereStr = {"userName": 'yangni'};
//     collection.find(whereStr).toArray(function(err, result){
//         if(err){
//             console.log('error'+err);
//             return;
//         }
//         callback(result);
//     })
// }
// MongoClient.connect(DB_CONN_STR, function(err, db){
//     console.log('连接成功');
//     selectData(db, function(result){
//         console.log(result);
//         db.close();
//     })
// })


const router = require('./router');
const path = require('path');
const bodyParser = require('body-parser')
const express = require('express');
const app = express();

var allowCrossDomain = function(req, res, next){
    
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Origin', '*');
    next();
}
app.use(allowCrossDomain);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);



app.listen(3000);
console.log('listen 3000');

