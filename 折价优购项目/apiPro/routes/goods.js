var express = require('express');
var router = express.Router();
var Collect = require("../bin/DAO/collectDAO")
var client = require("./tbkTools.js")
var Cart = require("../bin/DAO/cartDAO")
var isLogin = require("./userTools.js")

// 添加购物车
router.post("/addcart",isLogin, (req, res)=>{
	
	// goods_id 商品id
	// goods_num 商品数量
	// goods_share 商品分享链接
	// goods_coupon 商品优惠券金额
	// user_id 用户id
	console.log(req.body)
	if (!req.body.goods_id || !req.body.goods_num || !req.body.goods_share || !req.body.goods_coupon){
		res.json({
			code:402,
			msg:"缺少参数！"
		})
		
		return
	}
	
	Cart.findOne({user:req.user._id, goods_id:req.body.goods_id}, function(err, goods){
		if (goods){
			
			goods.goods_num = goods.goods_num*1 + req.body.goods_num*1
			goods.save()
			
			res.json({
				code:200,
				msg:"添加购物车成功！"
			})
			
		}else{
			let cart = new Cart({
				goods_id:req.body.goods_id,
				goods_num:req.body.goods_num,
				goods_share:req.body.goods_share,
				goods_coupon:req.body.goods_coupon,
				user:req.user._id
			})
			
			cart.save((err)=>{
				if (err){
					
					res.json({
						code:201,
						msg:"添加购物车失败！"
					})
					
				}else{
					res.json({
						code:200,
						msg:"添加购物车成功！"
					})
				}
			})
		}
		
	})
})

// 购物车数据页
router.get("/cart" ,isLogin, (req, res)=>{
	
	
	try{
		Cart.find({user:req.user._id},function(err,cas){
			
			client.execute('taobao.tbk.item.info.get', {
				'num_iids':cas.map(c=>c.goods_id).join(","),
				'platform':'2',
			}, function(error, response) {
				console.log(response)
				let goods = []
				try{
					goods = response.results.n_tbk_item.map(function(item, idx){
						item.coupon_amount = cas[idx].goods_coupon
						item.coupon_share_url = cas[idx].goods_share
						
						return item
					})
				}catch(err){
					console.log(err)
				}
				
				res.json({
					code:200,
					goods:goods
				})
			})
		})
	}
	catch(err){
		console.log(err)
	}
	
})

router.get("/cartdel", isLogin, (req, res)=>{
	
	
	Cart.remove({user:req.user._id, goods_id:req.query.goods_id}, (err)=>{
		res.json({
			code:200,
			msg:"删除成功！"
		})
	})
})




// 收藏
router.post("/collect", isLogin, (req, res)=>{
	
	if (!req.body.goods_id || !req.body.goods_share || !req.body.goods_coupon){
		
		res.json({
			code:402,
			msg:"缺少参数！"
		})
		return
	}
	
	let collect = new Collect({
		goods_id:req.body.goods_id,
		goods_share: req.body.goods_share,
		goods_coupon: req.body.goods_coupon,
		user:req.user._id
	})
	
	collect.save(err=>{
		if (err){
			res.json({
				code:201,
				msg:"收藏失败"
			})
		}else{
			res.json({
				code:200,
				msg:"收藏成功！"
			})
		}
	})

})

// 收藏列表
router.get("/colleclist", isLogin, (req, res)=>{
	
	
	Collect.find({user:req.user._id},function(err,data){
		console.log(data)
		if (data.length != 0){
			client.execute('taobao.tbk.item.info.get', {
				'num_iids':data.map(c=>c.goods_id).join(","),
				'platform':'2',
			}, function(error, response) {
				
				let goods = response.results.n_tbk_item.map(function(item, idx){
					item.coupon_amount = data[idx].goods_coupon
					item.coupon_share_url = data[idx].goods_share
					
					return item
				})
				
				res.json({
					code:200,
					goods:goods
				})
			})
		}else{
			res.json({
				code:200,
				goods:[]
			})
		}
		
		
	})
})

router.get("/collecdel", isLogin, (req, res)=>{
	
	
	Collect.remove({user:req.user._id, goods_id:req.query.goods_id}, (err)=>{
		res.json({
			code:200,
			msg:"已取消收藏！"
		})
	})
})

router.get("/iscollec", isLogin, (req, res)=>{
	
	Collect.findOne({user:req.user._id, goods_id:req.query.goods_id}, (err,goods)=>{
		console.log(req.user, req.query)
		if (goods){
			
			res.json({
				code:200,
				msg:"已收藏！"
			})
		}else{
			res.json({
				code:201,
				msg:"未收藏！"
			})
		}
	})
})


router.get("/history", (req, res)=>{
	res.set("access-control-allow-origin","http://127.0.0.1:8080");
	res.set("Access-Control-Allow-Credentials", "true")
	try{
		console.log(req.query.ids)
		if (req.query.ids){
			client.execute('taobao.tbk.item.info.get', {
				'num_iids':req.query.ids,
				'platform':'2',
			}, function(error, response) {
				console.log(response)
				let goods = response.results.n_tbk_item
				
				res.json({
					code:200,
					goods:goods
				})
			})
		}else{
			res.json({
				code:200,
				goods:[]
			})
		}
	}
	catch(err){
		console.log(err)
	}
	
	
})



module.exports = router;