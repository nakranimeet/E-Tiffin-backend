const express = require("express")
const route = express.Router();

const admin = require("./admin.route")
route.use("/admin",admin)

const user = require("./user.route")
route.use("/user",user)

module.exports = route
