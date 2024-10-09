const { Admin } = require("../model/index.model");
const { JWT_TOKEN } = require("../utils/config");
const jwt = require("jsonwebtoken")

module.exports = ()=>{
    return async(req,res,next) =>{
        const token = req.get("auth")
        console.log("token",token);

        if(!token){
            return res.status(401).json({status:false,message : "token expier"})
        }

        const isAuth = jwt.verify(token,JWT_TOKEN)

        const admin = await Admin.findById(isAuth._id)
        console.log("admin",admin);
        req.admin = admin
        next()
    }
}