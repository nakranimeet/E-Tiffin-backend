const express = require("express");
const route = express.Router()
const Addtocartcontroller = require("../controller/addToCart.controller")



route.post("/createCart",Addtocartcontroller.addtocartCreate)
route.get("/getCart",Addtocartcontroller.addtocartGet)
route.patch("/updateCart",Addtocartcontroller.addtocartUpdate)
route.delete("/deleteCart",Addtocartcontroller.addtocartDelete)


module.exports = route

