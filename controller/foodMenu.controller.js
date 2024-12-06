const mongoose = require("mongoose");
const {Menu} = require("../model/index.model")


exports.menuCreate = async (req, res) => {
    try {
        console.log(req.body);
        console.log(req.file);

        const {foodName, foodQuantity, foodPrice, foodInStock, categoryId} = req.body
        // console.log(error);
        console.log();
               
        if (!foodName || !foodQuantity || !foodPrice || !foodInStock || !categoryId || !req.file) {

            return res.status(201).json({ status: false, message: "Invalid Details" })
        }

        const menu = new Menu()
        
        menu.foodName = foodName
        menu.foodQuantity = foodQuantity
        menu.foodPrice = foodPrice
        menu.foodInStock = foodInStock
        menu.categoryId = categoryId
        menu.foodImage = req.file.path
        
        await menu.save()

        return res.status(200).json({ status: true, message: "FoodMenu successfully created", menu})
        
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({ status: false, error })
    }
}


exports.menuGet = async (req, res) => {
    try {
          const menu = await Menu.aggregate([
        {
          $lookup: {
            from: 'categories', 
            localField: 'categoryId',
            foreignField: '_id', 
            as: 'menus' 
          }
        },
        {
          $unwind: '$menus' // Unwind to deconstruct the array and make it a single object
        }
      ]);
  console.log(menu)
      return res.status(200).json({status:true,message:"menu get successfully",menu})

    } catch (error) {
      res.status(500).json({ status:false,error });
    }
  };

exports.menuUpdate = async (req, res) => {
    try {
        const { foodName,foodQuantity,foodPrice,foodInStock } = req.body
        const { menuId } = req.query
        console.log(req.body);
        console.log(req.query);

        if (!menuId) {
            return res.status(201).json({ status: false, message: "invalid update deatils" })
        }

        const menu = await Menu.findById(menuId)
        menu.foodName = foodName || menu.foodName
        menu.foodQuantity = foodQuantity || menu.foodQuantity
        menu.foodPrice = foodPrice || menu.foodPrice
        menu.foodInStock = foodInStock || menu.foodInStock
        menu.foodImage = req.file.path || menu.foodImage

        await menu.save()
        return res.status(200).json({ status: true, message: "menu updated successfully", menu })


    } catch (error) {
        console.log(error);
        
        return res.status(500).json({ status: false, error })
    }
}

exports.menuDelete = async (req, res) => {
    try {
        const { menuId } = req.query
        console.log(req.query);

        if (!menuId) {
            return res.status(201).json({ status: false, message: "invalid delete deatails in menu" })
        }
        const menu = await Menu.findById(menuId)
        await menu.deleteOne()

        return res.status(200).json({ status: true, message: "successfully deleted in menu", menu })


    } catch (error) {
        return res.status(500).json({ status: false, error })
    }
}






