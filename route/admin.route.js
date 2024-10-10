const express = require("express")

const route = express.Router()
const checkAccessKey = require("../utils/checkAccessKey")
const Admincontroller = require("../controller/admin.controller")

const multer = require("multer")
const storage = require("../utils/multer")
const adminMiddlewere = require("../middlewere/admin.middlewere")
const upload = multer({storage})


route.post("/admincreate",checkAccessKey(),upload.single("Image"),Admincontroller.admincreate)
route.post("/adminLogin",checkAccessKey(),Admincontroller.adminLogin)
route.patch("/updateadmin",adminMiddlewere(),checkAccessKey(),Admincontroller.adminUpdateData)
route.patch("/updatepass",adminMiddlewere(),checkAccessKey(),Admincontroller.adminPassworddata)



module.exports = route