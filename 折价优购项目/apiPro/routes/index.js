var express = require('express');
var router = express.Router();
TopClient = require('../bin/lib/api/topClient').TopClient;

var client = require("./tbkTools.js")

var pageSize = 20
var adzone_id = '23993850341'

/* GET home page. */

router.get("/command", (req, res)=>{
	res.set("access-control-allow-origin","http://127.0.0.1:8080");
	res.set("Access-Control-Allow-Credentials", "true")
	client.execute('taobao.tbk.dg.optimus.material', {
		'page_size':pageSize,
		'adzone_id':adzone_id,
		'page_no':req.query.page?req.query.page:1,
		'material_id':'3756',
	}, function(error, response) {
		
		res.json(response)
		
	})
})


router.get('/search', function(req, res, next) {
	res.set("access-control-allow-origin","http://127.0.0.1:8080");
	res.set("Access-Control-Allow-Credentials", "true")
	client.execute('taobao.tbk.dg.material.optional', {
		
		'page_size':pageSize,
		'page_no':req.query.page?req.query.page:1,
		'platform':'2',
		'sort':'total_sales',
		'q':req.query.kw?req.query.kw:"",
		'adzone_id':adzone_id
		
	}, function(error, response) {
		
		res.json(response)
	})
});

router.get("/goods", (req, res)=>{
	
	res.set("access-control-allow-origin","http://127.0.0.1:8080");
	res.set("Access-Control-Allow-Credentials", "true")
	if (!req.query.gid){
		return res.json({
			code:402,
			msg:"缺少gid参数!"
		})
	}

	client.execute('taobao.tbk.item.info.get', {
		'num_iids':req.query.gid,
		'platform':'2',
	}, function(error, response) {
		
		res.json(response)
	})
})

router.get("/sign", (req, res)=>{
	
	res.set("access-control-allow-origin","http://127.0.0.1:8080");
	res.set("Access-Control-Allow-Credentials", "true")
	if(!req.query.url){
		
		res.json({
			code:402,
			msg:"缺少url参数！"
		})
		return
	}
	
	client.execute('taobao.tbk.spread.get', {
		'requests': `{"url":"https:${req.query.url}"}`
	}, function(error, response) {
		
		client.execute('taobao.tbk.tpwd.create', {
			
			'text':'折价优购，优享折扣',
			'url':response.results.tbk_spread[0].content,
			
		}, function(error, response) {
			
			res.json(response)
		})
	})
})

router.get("/categray", (req, res)=>{
	
	res.set("access-control-allow-origin","http://127.0.0.1:8080");
	res.set("Access-Control-Allow-Credentials", "true")
	
	let cates = [{name:"综合", material_id:3756},{name:"女装", material_id:3767},{name:"家居家装", material_id:3758},{name:"数码家电", material_id:3759},{name:"鞋包配饰", material_id:3762},{name:"美妆个护", material_id:3763},{name:"男装", material_id:3764},{name:"内衣", material_id:3765},{name:"母婴", material_id:3760},{name:"食品", material_id:3761},{name:"运动户外", material_id:3766}]
	
	res.json({
		code:200,
		cates:cates
	})
	
})

router.get("/hot", (req, res)=>{
	
	res.set("access-control-allow-origin","http://127.0.0.1:8080");
	res.set("Access-Control-Allow-Credentials", "true")
	
	client.execute('taobao.tbk.dg.optimus.material', {
		'page_size':pageSize,
		'adzone_id':adzone_id,
		'page_no':req.query.page?req.query.page:1,
		'material_id':req.query.material_id?req.query.material_id:3756,

	}, function(error, response) {
		
		
		res.json(response)
	})
	
	
})



module.exports = router;
