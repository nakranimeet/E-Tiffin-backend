const mongoose = require("mongoose");
const Show = require("../model/index.model")


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
        console.log('uniqueId', uniqueId)
        await show.save()



        return res.status(200).json({ status: true, message: "userShow successfully created", show })
    } catch (error) {

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
        user.name = name || user.name
        user.email = email || user.email
        user.phone = phone || user.phone
        user.gender = gender || user.gender
        user.username = username || user.username
        user.address = address || user.address
        if (req.file) {
            error.file = req.file.path
        }
        await show.save()

        await show.save()
        return res.status(200).json({ status: true, message: "show updated successfully", show })



    } catch (error) {
        return res.status(500).json({ status: false, error })
    }
}





