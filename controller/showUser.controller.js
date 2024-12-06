const mongoose = require("mongoose");
const {Show} = require("../model/index.model")


exports.createShow = async (req, res) => {
    try {
        console.log(req.body);

        const { name, email, phone, password, gender, username, address } = req.body


        if (!name || !email || !phone || !password || !gender || !username || !address || !req.file) {

            return res.status(201).json({ status: false, message: "Invalid Details" })
        }

        const show = new Show()
        show.name = name
        show.email = email
        show.phone = phone
        show.password = password
        show.gender = gender
        show.username = username
        show.address = address
        show.Image = req.file.path
        show.uniqueId = Math.floor(Math.random() * (99999 - 10000)) + 10000
        // console.log('uniqueId', uniqueId)
        
        await show.save()



        return res.status(200).json({ status: true, message: "userShow successfully created", show })
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({ status: false, error })
    }
}

exports.getShow = async (req, res) => {
    try {

        const show = await Show.find()

        return res.status(200).json({ status: true, message: "get successfully show", show })

    } catch (error) {
        return res.status(500).json({ status: false, error })
    }
}


exports.updateShow = async (req, res) => {
    try {
        const { name, email, phone, gender, username, address } = req.body
        const { showId } = req.query
        console.log(req.body);
        console.log(req.query);

        if (!showId) {
            return res.status(201).json({ status: false, message: "invalid update deatils" })
        }

        const show = await Show.findById(showId)
        show.name = name || show.name
        show.email = email || show.email
        show.phone = phone || show.phone
        show.gender = gender || show.gender
        show.username = username || show.username
        show.address = address || show.address
        show.Image = req?.file?.path || show.Image
        await show.save()
        return res.status(200).json({ status: true, message: "show updated successfully", show })

    } catch (error) {
        console.log(error);
        
        return res.status(500).json({ status: false, error })
    }
}







