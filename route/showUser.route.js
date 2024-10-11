const express = require("express");

const route = express.Router()
const showcontroller = require("../controller/showUser.controller")

const multer = require("multer");
const storage = require("../utils/multer")
const upload = multer({storage})


route.post("/creatShow",upload.single("Image"),showcontroller.createShow)
route.get("/getShow",showcontroller.getShow)
route.patch("/updatShow",upload.single("Image"),showcontroller.updateShow)

module.exports = route