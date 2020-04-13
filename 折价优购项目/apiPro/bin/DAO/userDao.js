var mongoose=require("./connection")
var userSchema=new mongoose.Schema({
    username:String,
    password:String,
    avatar:String,
})
var User=mongoose.model("user",userSchema)

module.exports=User
