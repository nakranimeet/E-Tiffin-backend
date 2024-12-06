const mongoose = require("mongoose");
const {Tiffin} = require("../model/index.model")


exports.tiffinCreate = async (req, res) => {
    try {
        console.log(req.body);

        const {tiffinTitle,menu,totalPrice,finalPrice} = req.body

        if (!tiffinTitle || !menu || !totalPrice || !finalPrice) {

            return res.status(201).json({ status: false, message: "Invalid Details" })
        }

        const tiffin = new Tiffin()
        tiffin.tiffinTitle = tiffinTitle
        tiffin.menu = menu
        tiffin.totalPrice = totalPrice
        tiffin.finalPrice = finalPrice
       
        
        await tiffin.save()

        return res.status(200).json({ status: true, message: "tiffin successfully created", tiffin })
        
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({ status: false, error })
    }
}

exports.tiffinGet= async (req, res) => {
    try {

        const tiffin = await Tiffin.find()

        return res.status(200).json({ status: true, message: "get successfully tiffin", tiffin })

    } catch (error) {
        return res.status(500).json({ status: false, error })
    }
}


exports.tiffinUpdate = async (req, res) => {
    try {
        const { tiffinTitle,menu,totalPrice,finalPrice } = req.body
        const { tiffinId } = req.query
        console.log(req.body);
        console.log(req.query);

        if (!tiffinId) {
            return res.status(201).json({ status: false, message: "invalid update deatils" })
        }

        const tiffin = await Tiffin.findById(tiffinId)

        tiffin.tiffinTitle = tiffinTitle || tiffin.tiffinTitle
        tiffin.menu = menu || tiffin.menu
        tiffin.totalPrice = totalPrice || tiffin.totalPrice
        tiffin.finalPrice = finalPrice || tiffin.finalPrice

        
        await tiffin.save()
        return res.status(200).json({ status: true, message: "tiffin updated successfully", tiffin })


    } catch (error) {
        console.log(error);
        
        return res.status(500).json({ status: false, error })
    }
}



exports.tiffinDelete = async (req, res) => {
    try {
        const { tiffinId } = req.query
        console.log(req.query);

        if (!tiffinId) {
            return res.status(201).json({ status: false, message: "invalid delete deatails in tiffin" })
        }
        const tiffin = await Tiffin.findById(tiffinId)
        await tiffin.deleteOne()

        return res.status(200).json({ status: true, message: "successfully deleted in tiffin", tiffin })


    } catch (error) {
        return res.status(500).json({ status: false, error })
    }
}