const mongoose = require("mongoose")

const feddbackSchema = new mongoose.Schema({

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
},

rating:{
    
    type:Number, max:5
},

istiffin:{type : Boolean,default : true},

},{
    versionKey:false,
    timestamps:true
}

)


module.exports = new mongoose.model("Feedback",feddbackSchema)