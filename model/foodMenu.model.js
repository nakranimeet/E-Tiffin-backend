const mongoose  =require("mongoose");

const menuSchema = new mongoose.Schema({
 
      foodImage:String,
      foodName:String,
      foodQuantity:Number,
      foodPrice:Number,
      foodInStock:String,
      categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category', 
    required: true
  } 

},{
    timestamps:true,
    versionKey:false
})


module.exports = new mongoose.model("Menu",menuSchema)