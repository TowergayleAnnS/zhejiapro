var mongoose=require("./connection")
var cartSchema=new mongoose.Schema({
    goods_id:Number,
	goods_num:Number,
	goods_coupon:Number,
	goods_share:String,
	user:{
		type:mongoose.Schema.Types.ObjectId,
		ref:"user"
	}
})
var Cart=mongoose.model("cart",cartSchema)

module.exports=Cart
