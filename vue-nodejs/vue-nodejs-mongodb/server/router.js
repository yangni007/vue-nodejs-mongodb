const models = require('./db');
const express = require('express');
const router = express.Router();

router.get('/api/index/getNews', (req, res)=>{
     models.News.findbysex('女',function(err,result){
         if(err){
             console.log(err);
         }
        console.log(result);
        res.send(result);
    })
})
router.post('/api/register', (req, res)=>{
    let newUser = new models.register({
        username: req.body.username,
        password:req.body.password,
        cellphone : req.body.cellphone
    })
    newUser.save((err, data)=>{
        if(err){
            res.send(err);
        }else{
            res.send({msg:'注册成功',status:'1'});
        }
    })
})
router.post('/api/login', (req, res)=>{
   console.log(req.body);
    models.register.find({cellphone:req.body.cellphone},(err, result)=>{
        if(err){
            console.log(err);
        }
        if(result){
            console.log(result,req.body.password)
           if(req.body.password==result[0].password){
               res.send({msg:'登录成功',status:1})
           }else{
            res.send({msg:'密码不正确',status:2})
           }
        }
    })
})
module.exports = router;