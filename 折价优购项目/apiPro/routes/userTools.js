var cookie = require("cookie")
var Session = require("../bin/DAO/sessionDAO.js")


function isLogin(req, res, next){
	var ckObj = cookie.parse(req.headers.cookie||"")
	
	res.set("access-control-allow-origin","http://127.0.0.1:8080");
	res.set("Access-Control-Allow-Credentials", "true")

	Session.findOne({sessionId:ckObj.sessionid}).populate("user").exec(function(err, session){
		console.log(session, ckObj)
		// 判断是否登录
		if (session){
			// 保证执行下一个处理之前，req.user已经被赋值
			req.user = session.user
			// next()继续向下查找处理请求的url路由
			next()
			
		}else{
			
			res.json({
				code:403,
				msg:"请先登录！"
			})
		}
	})
}

module.exports = isLogin