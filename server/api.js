"use strict";
const models=require('./db');
const express =require('express');
const router=express.Router();
router.get('/api/users',(req,res){
	models.User.find((err,data)=>{
		if(err){
			res.send(err);
		}else{
			res.send(data);
		}
	});
});

module.exports=router;