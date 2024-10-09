const express = require("express")
const route = express.Router();

const admin = require("./admin.route")
route.use("/admin",admin)



module.exports = route
