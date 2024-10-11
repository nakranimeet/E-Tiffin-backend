const mongoose = require("mongoose");

const showSchema = mongoose.Schema({

    name: String,
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

module.exports = new mongoose.model("Show",showSchema)