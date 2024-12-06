const mongoose = require("mongoose");

const addtocartschema =  new mongoose.Schema({

istiffinqut:Number,
totalprice:Number,
userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
},

menuId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Menu'

},

tiffinId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Tiffin'
}


},{
    versionKey:false,
    timestamps:true
})


module.exports = new mongoose.model("Addtocart",addtocartschema)