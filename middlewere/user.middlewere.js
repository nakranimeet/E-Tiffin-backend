const { User } = require("../model/index.model");
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

        const user = await User.findById(isAuth._id)
        console.log("user",user);
        req.user = user
        next()
    }
}