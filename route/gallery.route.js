const express = require("express");

const route = express.Router()
const gallerycontroller = require("../controller/gallery.controller")

const multer = require("multer");
const storage = require("../utils/multer")
const upload = multer({storage})


route.post("/creatGallery",upload.single("Image"),gallerycontroller.galleryCreate)
route.get("/getGallery",gallerycontroller.galleryGet)
route.patch("/updateGallery",upload.single("Image"),gallerycontroller.galleryUpdate)
route.delete("/deleteGallery",gallerycontroller.galleryDelete)


module.exports = route