var mongoose = require("./connection.js")

var sessionSchema = new mongoose.Schema({
	
	sessionId:String,
	// 外键，对应的user表
	user:{
		type:mongoose.Schema.Types.ObjectId,
		ref:"user"
	}
})

var Session = mongoose.model("session", sessionSchema)

module.exports = Session