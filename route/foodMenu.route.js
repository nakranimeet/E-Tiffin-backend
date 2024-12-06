const express = require("express");

const route = express.Router()
const menucontroller = require("../controller/foodMenu.controller")

const multer = require("multer");
const storage = require("../utils/multer")
const upload = multer({storage})


route.post("/creatFoodMenu",upload.single("foodImage"),menucontroller.menuCreate)
route.get("/getFoodMenu",menucontroller.menuGet)
route.patch("/updateFoodMenu",upload.single("foodImage"),menucontroller.menuUpdate)
route.delete("/deleteFoodMenu",menucontroller.menuDelete)


module.exports = route