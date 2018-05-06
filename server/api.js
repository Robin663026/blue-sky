const models=require('./db');
const express =require('express');
const router=express.Router();
router.post('/api/login/createAccount',(req,res)=>{
	let newAccount=new models.Login({
		account:req.body.account,
		password:req.body.password
	});
	newAccount.save((err,data)=>{
		if(err){
			res.send(err);
		}else{
			res.send('createAccount successed');
		}
	});
});
//获取已有账号接口
router.get('/api/login/getAccount',(req,res)=>{
	models.Login.find((res,data)=>{
		if(err){
			res.send(err);
		}else{
			res.send(data);
		}
	});
});

module.exports=router;