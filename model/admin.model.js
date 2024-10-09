const mongoose  =require("mongoose");

const adminSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String,
    Image : String

},{
    timestamps:true,
    versionKey:false
})


module.exports = new mongoose.model("Admin",adminSchema)