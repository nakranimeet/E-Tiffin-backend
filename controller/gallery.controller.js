const mongoose = require("mongoose");
const {Category, Gallery} = require("../model/index.model")


exports.galleryCreate = async (req, res) => {
    try {
        console.log(req.body);

        // const {fname} = req.body

        if (!req.file) {

            return res.status(201).json({ status: false, message: "Invalid Details" })
        }

        const gallery = new Gallery()
       
        gallery.Image = req.file.path
        
        await gallery.save()

        return res.status(200).json({ status: true, message: "gallery successfully created", gallery })
        
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({ status: false, error })
    }
}

exports.galleryGet= async (req, res) => {
    try {

        const gallery = await Gallery.find()

        return res.status(200).json({ status: true, message: "get successfully gallery", gallery })

    } catch (error) {
        return res.status(500).json({ status: false, error })
    }
}


exports.galleryUpdate = async (req, res) => {
    try {
        // const { fname } = req.body
        const { galleryId } = req.query
        console.log(req.body);
        console.log(req.query);

        if (!galleryId) {
            return res.status(201).json({ status: false, message: "invalid update deatils" })
        }

        const gallery = await Gallery.findById(galleryId)   
       
            gallery.Image = req?.file?.path || gallery.Image
        
        await gallery.save()
        return res.status(200).json({ status: true, message: "gallery updated successfully", gallery })


    } catch (error) {
        console.log(error);
        
        return res.status(500).json({ status: false, error })
    }
}



exports.galleryDelete = async (req, res) => {
    try {
        const { galleryId } = req.query
        console.log(req.query);

        if (!galleryId) {
            return res.status(201).json({ status: false, message: "invalid delete deatails in category" })
        }
        const gallery = await Gallery.findById(galleryId)
        await gallery.deleteOne()

        return res.status(200).json({ status: true, message: "successfully deleted in gallery", gallery })


    } catch (error) {
        return res.status(500).json({ status: false, error })
    }
}






