// const mongoose = require("mongoose");
// const {Category} = require("../model/index.model")


// exports.menuCreate = async (req, res) => {
//     try {
//         console.log(req.body);

//         const {name,quentity,price,inStock} = req.body

//         if (!fname || !req.file) {

//             return res.status(201).json({ status: false, message: "Invalid Details" })
//         }

//         const category = new Category()
//         category.fname = fname
//         category.Image = req.file.path
        
//         await category.save()

//         return res.status(200).json({ status: true, message: "FoodCategory successfully created", category })
        
//     } catch (error) {
//         console.log(error);
        
//         return res.status(500).json({ status: false, error })
//     }
// }

// exports.categoryGet= async (req, res) => {
//     try {

//         const category = await Category.find()

//         return res.status(200).json({ status: true, message: "get successfully category", category })

//     } catch (error) {
//         return res.status(500).json({ status: false, error })
//     }
// }


// exports.categoryUpdate = async (req, res) => {
//     try {
//         const { fname } = req.body
//         const { categoryId } = req.query
//         console.log(req.body);
//         console.log(req.query);

//         if (!categoryId) {
//             return res.status(201).json({ status: false, message: "invalid update deatils" })
//         }

//         const category = await Category.findById(categoryId)
//         category.fname = fname || category.fname
        
//         if (req.file) {
//             category.file = req.file.path
//         }
//         await category.save()
//         return res.status(200).json({ status: true, message: "category updated successfully", category })


//     } catch (error) {
//         console.log(error);
        
//         return res.status(500).json({ status: false, error })
//     }
// }



// exports.categoryDelete = async (req, res) => {
//     try {
//         const { categoryId } = req.query
//         console.log(req.query);

//         if (!categoryId) {
//             return res.status(201).json({ status: false, message: "invalid delete deatails in category" })
//         }
//         const category = await Category.findById(categoryId)
//         await category.deleteOne()

//         return res.status(200).json({ status: true, message: "successfully deleted in category", category })


//     } catch (error) {
//         return res.status(500).json({ status: false, error })
//     }
// }






