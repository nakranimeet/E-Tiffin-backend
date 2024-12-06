const express = require("express")
const route = express.Router();

const admin = require("./admin.route")
route.use("/admin",admin)

const user = require("./user.route")
route.use("/user",user)

const show = require("./showUser.route")
route.use("/show",show)

const category = require("./category.route")
route.use("/category",category)


const tiffin = require("./tiffin.route")
route.use("/tiffin",tiffin)

const gallery = require("./gallery.route")
route.use("/gallery",gallery)

const menu = require("./foodMenu.route")
route.use("/menu",menu)

const addtocart = require("./addToCart.route")
route.use("/cart",addtocart)


const feedback = require("./feedBack.route")
route.use("/feedback",feedback)


module.exports = route
