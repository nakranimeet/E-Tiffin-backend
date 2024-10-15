const mongoose = require("mongoose");

const tiffinSchema = mongoose.Schema({

    tiffinTitle:String,
    menu:String,
    totalPrice:Number,
    finalPrice:Number
    
   
},{
    timestamps:true,
    versionKey:false
})

module.exports = new mongoose.model("Tiffin",tiffinSchema)