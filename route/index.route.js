const express = require("express")
const route = express.Router();

const admin = require("./admin.route")
route.use("/admin",admin)

const user = require("./user.route")
route.use("/user",user)

const show = require("./showUser.route")
route.use("/show",show)

module.exports = route
