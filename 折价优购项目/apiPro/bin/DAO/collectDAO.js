var mongoose=require("./connection")
var collectSchema=new mongoose.Schema({
    goods_id:Number,
	goods_coupon:Number,
	goods_share:String,
	user:{
		type:mongoose.Schema.Types.ObjectId,
		ref:"user"
	}
})
var Collect=mongoose.model("collect",collectSchema)

module.exports=Collect
