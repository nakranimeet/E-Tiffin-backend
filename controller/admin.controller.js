const { Admin } = require("../model/index.model")
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken');
const { JWT_TOKEN } = require("../utils/config");

exports.admincreate = async (req, res) => {
    console.log("req.body", req.body);
    console.log("req.file", req.file);

    try {
        const { name, email, password } = req.body
        if (!name || !email || !password || !req.file) {

            return res.status(201).json({ status: false, message: "Invalid Details" })
        }
               

        const admin = await new Admin()
        admin.name = name
        admin.email = email
        admin.password = bcrypt.hashSync(password, 10)   
        admin.image = req.file.path
        
        await admin.save()
        
        return res.status(200).json({ status: true, message: "Admin create successfully", admin })

    } catch (error) {
        console.log("error",error);
        
        return res.status(500).json({ status: false, error })
    }
}

exports.adminLogin = async(req,res) =>{
    try {
        const {email,password} = req.body;
        
        if(!email || !password){
            return res.status(201).json({status:false,message:"Invalid details"})
        }
        const admin = await Admin.findOne({email})      
        
        if(!admin){
            return res.status(201).json({status:false,message : "Invalid Email..!"})
        }
        
        const checkPass = bcrypt.compareSync(password,admin.password)
        
        if(!checkPass){
            
            return res.status(201).json({status:false,message:"Invalid password"})
            
        }
        const payload = {
            _id:admin._id,
            name:admin.name,
            email:admin.email,
            image : admin.image
        }
        
        const token = jwt.sign(payload, JWT_TOKEN)
        return res.status(200).json({status:true,message:"Admin Login Successfully....",token})
        
        
    } catch (error) {
        return res.status(500).json({status:false,error})
    }
}