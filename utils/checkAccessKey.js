const {KEY} = require("./config")

module.exports = () =>{
    return (req,res,next) =>{
        const key = req.body.key || req.query.key || req.headers.key

        if(!key){
            return res.status(401).json({status : false,message:"Unauthraise Access"})
        }
        if(key == KEY){
            next()
        }else{
            return res.status(401).json({status : false,message:"unauthraise Access"})
        }
        }
    }
