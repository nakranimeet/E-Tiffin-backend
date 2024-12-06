const mongoose = require("mongoose");
const {Feedback} = require("../model/index.model")


exports.feedbackCreate = async (req, res) => {
    try {
        console.log(req.body);
        console.log(req.file);

        const {userId,menuId,tiffinId,rating} = req.body
        // console.log(error);
       
        // console.log(userId);
        // console.log(menuId);
        // console.log(tiffinId);
        // console.log(rating);
        if (!userId || !menuId || !tiffinId ||!rating) {

            
            
            return res.status(201).json({ status: false, message: "Invalid Details" })
        }
       
         
         

         
        const feedback = new Feedback()
        
        feedback.userId = userId
        feedback.menuId = menuId
        feedback.tiffinId = tiffinId
        feedback.rating = rating
        // feedback.istiffin = istiffin
        
        await feedback.save()

        return res.status(200).json({ status: true, message: "feedBack successfully created", feedback})
        
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({ status: false, error })
    }
}


exports.feedbackGet= async (req, res) => {
    try {
          const feedback = await Feedback.aggregate([
        {
          $lookup: {
            from: 'users', 
            localField: 'userId',
            foreignField: '_id', 
            as: 'carts' 
          }
        },
        {
          $unwind: '$carts' 
        },
        {
          $lookup: {
            from: 'tiffins', 
            localField: 'tiffinId',
            foreignField: '_id', 
            as: 'addTiffin' 
          }
        },
        {
          $unwind: '$addTiffin' 
        },
        
        {
          
            $lookup: {
              from: 'menus', 
              localField: 'menuId',                               
              foreignField: '_id', 
              as: 'addMenu' 
            }
          },
          {
          $unwind: {
            path: "$addMenu",
            preserveNullAndEmptyArrays: true,
        }
         }
      ]);
      return res.status(200).json({status:true,message:"addtocart get successfully",feedback})

    } catch (error) {
      res.status(500).json({ status:false,error });
    }
  };

exports.feedbackUpdate = async (req, res) => {
    try {
        const { rating } = req.body
        const { fidbackId} = req.query
        console.log(req.body);
        console.log(req.query);

        if (!fidbackId){
            return res.status(201).json({ status: false, message: "invalid update deatils" })
        }

        const addtocart = await Addtocart.findById(fidbackId)
        addtocart.istiffinqut = istiffinqut || addtocart.istiffinqut
        addtocart.totalprice = totalprice || addtocart.totalprice
        // addtocart.userId = userId || addtocart.userId
        // addtocart.menuId = menuId || addtocart.menuId
        // addtocart.tiffinId = tiffinId || addtocart.tiffinId

        await addtocart.save()
        return res.status(200).json({ status: true, message: "addtocart updated successfully", addtocart })


    } catch (error) {
        console.log(error);
        
        return res.status(500).json({ status: false, error })
    }
}



// exports.addtocartDelete = async (req, res) => {
//     try {
//         const { addtocartId } = req.query
//         console.log(req.query);

//         if (!addtocartId) {
//             return res.status(201).json({ status: false, message: "invalid delete deatails in addToCart" })
//         }
//         const addtocart = await Addtocart.findById(addtocartId)
//         await addtocart.deleteOne()

//         return res.status(200).json({ status: true, message: "successfully deleted in addtocart", addtocart })


//     } catch (error) {
//         return res.status(500).json({ status: false, error })
//     }
// }






