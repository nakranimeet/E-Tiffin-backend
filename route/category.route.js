const express = require("express");

const route = express.Router()
const categorycontroller = require("../controller/category.controller")

const multer = require("multer");
const storage = require("../utils/multer")
const upload = multer({storage})


route.post("/creatCategory",upload.single("Image"),categorycontroller.categoryCreate)
route.get("/getCategory",categorycontroller.categoryGet)
route.patch("/updateCategory",upload.single("Image"),categorycontroller.categoryUpdate)
route.delete("/deleteCategory",categorycontroller.categoryDelete)


module.exports = route