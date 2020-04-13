var express = require('express');
var router = express.Router();
var multer = require("multer")
var Session = require("../bin/DAO/sessionDAO.js")
var fs = require("fs")
var User = require("../bin/DAO/userDao")
var upload = multer({
	dest:'./www/avatar'
})
var md5 = require("md5")


/* GET users listing. */
router.get("/check", (req,res)=>{
	
	res.set("access-control-allow-origin","http://127.0.0.1:8080");
	res.set("Access-Control-Allow-Credentials", "true")
	
	let username = req.query.username || ""
	
	// 通过username查找用户表
	User.findOne({username:username},function(err,user){
		if (user){
			res.json({
				code:1,
				msg:"用户名已存在！"
			})
		}else{
			res.json({
				code:0,
				msg:"恭喜您，该用户名可用！"
			})
		}
	})
})

router.post("/register", function(req, res){
	
	res.set("access-control-allow-origin","http://127.0.0.1:8080");
	res.set("Access-Control-Allow-Credentials", "true")
	
	try{
		
		req.body.password = md5(req.body.password)
		console.log(req.body.username)
		 User.findOne({
		    username: req.body.username,
		},{}, function (err, userData) {
			if (userData){
				
				res.json({
					code:201,
					msg:"用户名已存在！"
				})
			}else{
				req.body.avatar = "/avatar/header.jpg"
				
				var userObj = new User(req.body)
				
				userObj.save()
				
				res.json({
					code:200,
					msg:"注册成功！"
				})
			}
		})
	}catch(err){
		console.log(err)
	}
	
})


router.post("/login", function (req, res) {
	
	res.set("access-control-allow-origin","http://127.0.0.1:8080");
	res.set("Access-Control-Allow-Credentials", "true")
	
    User.findOne({
        username: req.body.username,
        password: md5(req.body.password)
    }, {}, function (err, userData) {
        console.log(userData)
		
        if (userData) {
			var sessionid = mkSessionId()
			var session = new Session({
				sessionId: sessionid,
				user: userData._id 
			})
			
			session.save()
			
			res.cookie("sessionid", sessionid, {
				maxAge:604800000
			})
            res.json({
				code:200,
				msg:"登录成功！",
				user:userData
			})
        } else {
            res.json({
            	code:403,
            	msg:"账号或密码错误~"
            })
        }
    })
})

// 更换用户头像接口
router.post("/updatehead",upload.single("avatar"),function(req, res){
	
	res.set("Access-Control-Allow-Credentials", "true")

	
	// console.log(req.file)
	var filename = req.file.filename
	// 拼接完整头像地址
	var fileUrl = "/avatar/" + filename
	// 文件保存之后，需要将头像的url地址存储用户表的用户信息中
	User.findOne({_id:req.session.user._id}).exec(function(err,data){
		console.log(data)
		res.set("access-control-allow-origin","*");
		// 如果该用户是默认头像
		if (data.avatar == "/avatar/header.jpg"){
			// 修改头像属性值
			data.avatar = fileUrl
			// 保存数据
			data.save(function(){
				// 将新的user赋值给session.user
				req.session.user = data
				res.json({
					code:200,
					msg:"修改成功！",
					user:data
				})
			})
		}else{
			// 不是默认头像，删除原来的头像文件
			fs.unlink("./www/" + data.avatar, function(err){
				// 赋值新头像
				data.avatar = fileUrl
				data.save(function(){
					// 将新的user赋值给session.user
					req.session.user = data
					res.json({
						code:200,
						msg:"修改成功！",
						user:data
					})
				})
			})
		}
	})

})

// 随机生成32位的字符串
function mkSessionId(length){
	var length = length || 32
	var source = "1234567890qwertyuiopasdfghjklzxcvbnm"
	var str = ""
	for (var i=0;i<length;i++){
		// 随机索引
		var idx = Math.floor(Math.random()*source.length)
		
		str += source[idx]
	}
	return str
}


module.exports = router;
