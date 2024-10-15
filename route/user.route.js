const express = require("express")

const route = express.Router()
const checkAccessKey = require("../utils/checkAccessKey")
const Usercontroller = require("../controller/user.controller")

const multer = require("multer")
const storage = require("../utils/multer")
const userMiddlewere = require("../middlewere/user.middlewere")
const upload = multer({storage})


route.post("/signIn",checkAccessKey(),upload.single("Image"),Usercontroller.userSignIn)
route.post("/userLogin",checkAccessKey(),Usercontroller.userLogin)
// route.patch("/userforget",checkAccessKey(),userMiddlewere(),Usercontroller.userforget)
route.patch("/updateuser",checkAccessKey(),userMiddlewere(),Usercontroller.userUpdate)
route.get("/getuser", Usercontroller.userGet)
route.patch("/imageupdate",checkAccessKey(),userMiddlewere(),upload.single("Image"),Usercontroller.userUpdateImage)

module.exports = route