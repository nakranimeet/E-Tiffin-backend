const { User } = require("../model/index.model")
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken');
const { JWT_TOKEN } = require("../utils/config");

exports.userSignIn = async (req, res) => {
    console.log("req.body", req.body);
    console.log("req.file", req.file);

    try {
        const { name, email, phone, password,username,gender,address } = req.body
       
        if (!name || !email || !phone || !password || !gender || !username || !address ||!req.file) {

            return res.status(201).json({ status: false, message: "Invalid Details" })
        }
        
        const users = await User.findOne({ email });
        if (users) {
            return res.status(201).json({ status: false, message: "email already axist..!" });
        }
      
        const user = await new User()

        user.name = name      
        user.email = email
        user.phone = phone
        user.password = bcrypt.hashSync(password, 10)
        user.gender = gender
        user.username = username
        user.address = address
        user.Image = req.file.path
        user.uniqueId = Math.floor(Math.random() * (99999 - 10000)) + 10000,


        await user.save()

        return res.status(200).json({ status: true, message: "User SignIn successfully", user })

    } catch (error) {
        return res.status(500).json({ status: false, error })
    }
}


exports.userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        // console.log(req.body)

        if (!email || !password) {
            return res.status(201).json({ status: false, message: "Invalid details" })
        }
        const user = await User.findOne({ email })

        if (!user) {
            return res.status(201).json({ status: false, message: "Invalid Email..!" })
        }

        const checkPass = bcrypt.compareSync(password, user.password)

        if (!checkPass) {

            return res.status(201).json({ status: false, message: "Invalid password" })

        }
        const payload = {
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone, 
            password: user.password,
            gender: user.gender,
            username: user.username,
            address: user.address, 
            Image: user.Image,
            uniqueId: user.uniqueId          
        }

        const token = jwt.sign(payload, JWT_TOKEN)
        return res.status(200).json({ status: true, message: "User Login Successfully....", token })


    } catch (error) {
        console.log("error", error);
        return res.status(500).json({ status: false, error })
    }
}



exports.userUpdate = async (req, res) => {
    try {
        const oldUser = req.user
        const { name,email,phone,gender,username,address } = req.body

        if (!oldUser) {
            return res.status(201).json({ status: false, message: "Invalid Details" })
        }
        const user = await User.findById(oldUser._id)
        if (!user) {
            return res.status(201).json({ status: false, message: "Invalid Token....!" })

        }

        user.name = name || user.name
        user.email = email || user.email
        user.phone = phone || user.phone
        user.gender = gender || user.gender
        user.username = username || user.username
        user.address = address || user.address
        await user.save()


        const payload = {
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone, 
            password: user.password,
            gender: user.gender,
            username: user.username,
            address: user.address, 
            Image: user.Image,
            uniqueId: user.uniqueId    
        }
        const token = jwt.sign(payload, JWT_TOKEN)
        return res.status(200).json({ status: true, message: "User Update successfully...!", token })


    } catch (error) {
        console.log("error", error);
        return res.status(500).json({ status: false, error })

    }
}


exports.userGet = async (req,res) =>{
    try {
          const user= await User.find()
          return res.status(201).json({status:true,message:"get successfully-----",user})

                      
    } 
    catch (error) {
        return res.status(500).json({status:false,error})

    }
}


exports.userUpdateImage = async (req, res) => {
    try {
        const oldUser = req.user
        console.log("errrrr", req.user);
        console.log(req.body);
        if (!oldUser) {
            return res.status(201).json({ status: false, message: "Invalid details" })
        }
        const user = await User.findById(oldUser._id)
        if (!user) {
            return res.status(201).json({ status: false, message: "Invalid Token....!" })
        }

        user.Image = req.file.path

        await user.save()

        const payload = {
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone, 
            password: user.password,
            gender: user.gender,
            username: user.username,
            address: user.address, 
            Image: user.Image,
            uniqueId: user.uniqueId          
        }

        const token = jwt.sign(payload, JWT_TOKEN)
        return res.status(200).json({ status: true, message: "User image  successfully updated...!", token })


    } catch (error) {
        console.log("error", error);
        
        return res.status(500).json({ status: false, error })

    }
}




exports.userallUpdate = async (req, res) => {
    console.log(req.body)
    try {

        const { name,email,phone,gender,username,address,password } = req.body
        const { userId } = req.query
        console.log(req.body);
        console.log(req.query);

        if (!userId) {
            return res.status(201).json({ status: false, message: "invalid update deatils" })
        }
        const user = await User.findById(userId)

        user.name = name || user.name
        user.email = email || user.email
        user.phone = phone || user.phone
        user.gender = gender || user.gender
        user.username = username || user.username
        user.address = address || user.address
        user.password = password || user.password
        user.password=bcrypt.hashSync(password, 10)
        user.Image = req?.file?.path || user.Image
        await user.save()
        
        return res.status(200).json({ status: true, message: "User Update successfully...!", user })

    } catch (error) {
        console.log("error", error);
        return res.status(500).json({ status: false, error })

    }
}

