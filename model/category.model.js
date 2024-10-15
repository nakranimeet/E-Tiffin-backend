const mongoose  =require("mongoose");

const categorySchema = new mongoose.Schema({
    fname : String,
    Image : String

},{
    timestamps:true,
    versionKey:false
})


module.exports = new mongoose.model("Category",categorySchema)