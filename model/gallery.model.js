const mongoose = require("mongoose");

const gallerySchema = mongoose.Schema({

    Image:String
    
},{
    timestamps:true,
    versionKey:false
})

module.exports = new mongoose.model("Gallery",gallerySchema)