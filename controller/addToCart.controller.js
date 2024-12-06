const mongoose = require("mongoose");
const {Addtocart} = require("../model/index.model")


exports.addtocartCreate = async (req, res) => {
    try {
        console.log(req.body);
        console.log(req.file);

        const {istiffinqut,totalprice,userId,menuId,tiffinId} = req.body
        // console.log(error);
        console.log();
               
        if (!istiffinqut || !totalprice || !userId || !menuId) {

            return res.status(201).json({ status: false, message: "Invalid Details" })
        }

        const addtocart = new Addtocart()
        
        addtocart.istiffinqut = istiffinqut
        addtocart.totalprice = totalprice
        addtocart.userId = userId
        addtocart.menuId = menuId
        addtocart.tiffinId = tiffinId
        
        await addtocart.save()

        return res.status(200).json({ status: true, message: "addToCart successfully created", addtocart})
        
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({ status: false, error })
    }
}


exports.addtocartGet= async (req, res) => {
    try {
          const addtocart = await Addtocart.aggregate([
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
      return res.status(200).json({status:true,message:"addtocart get successfully",addtocart})

    } catch (error) {
      res.status(500).json({ status:false,error });
    }
  };

exports.addtocartUpdate = async (req, res) => {
    try {
        const { istiffinqut,totalprice } = req.body
        const { addtocartId} = req.query
        console.log(req.body);
        console.log(req.query);

        if (!addtocartId){
            return res.status(201).json({ status: false, message: "invalid update deatils" })
        }

        const addtocart = await Addtocart.findById(addtocartId)
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



exports.addtocartDelete = async (req, res) => {
    try {
        const { addtocartId } = req.query
        console.log(req.query);

        if (!addtocartId) {
            return res.status(201).json({ status: false, message: "invalid delete deatails in addToCart" })
        }
        const addtocart = await Addtocart.findById(addtocartId)
        await addtocart.deleteOne()

        return res.status(200).json({ status: true, message: "successfully deleted in addtocart", addtocart })


    } catch (error) {
        return res.status(500).json({ status: false, error })
    }
}






