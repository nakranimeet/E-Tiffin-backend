const express = require("express");
const route = express.Router()
const Feedbackcontroller = require("../controller/feedBack.controller")



route.post("/createFeedback",Feedbackcontroller.feedbackCreate)
route.get("/getFeedback",Feedbackcontroller.feedbackGet)
// route.patch("/updateCart",Addtocartcontroller.addtocartUpdate)
// route.delete("/deleteCart",Addtocartcontroller.addtocartDelete)


module.exports = route

