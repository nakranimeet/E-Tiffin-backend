const multer = require("multer")

module.exports = multer.diskStorage({
    filename: function (req, file, callback) {
        const fileName = Date.now() + Math.round(Math.random() * 100) + file.originalname
        console.log("fileName", fileName);
        const newFileName = fileName.replaceAll(" ", "-")
        console.log("newFileName", newFileName);
        callback(null, newFileName)
    },
    destination: function (req, file, callback) {
        callback(null, 'storage')
    },
})