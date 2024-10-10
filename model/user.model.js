const mongoose = require("mongoose");

const userSchema = mongoose.Schema({

    name: {type: String,default:"tifffin user"},
    email: String,
    phone:Number,
    password:String,
    username:String,
    uniqueId: String,
    Image:String,
    gender:{type: String, eum:['male','female']},
    address:String,
    isBlock: {type: Boolean, default:false},
    
    
    
},{
    timestamps:true,
    versionKey:false
})

module.exports = new mongoose.model("User",userSchema)