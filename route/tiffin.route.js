const express = require("express");

const route = express.Router()
const tiffincontroller = require("../controller/tiffin.controller")

const multer = require("multer");
const storage = require("../utils/multer")
const upload = multer({storage})


route.post("/creatTiffin",tiffincontroller.tiffinCreate)
route.get("/getTiffin",tiffincontroller.tiffinGet)
route.patch("/updateTiffin",tiffincontroller.tiffinUpdate)
route.delete("/deleteTiffin",tiffincontroller.tiffinDelete)


module.exports = route