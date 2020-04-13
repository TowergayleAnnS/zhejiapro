var mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/yhj",{useNewUrlParser:true},()=>{
    console.log("数据库连接成功")
})

module.exports=mongoose