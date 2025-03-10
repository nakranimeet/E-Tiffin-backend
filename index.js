const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const { DB_USER_NAME, DB_USER_PASSWORD, DB_USER_SERVER, DB_NAME } = require("./utils/config")

const app = express();
app.use(cors())
app.use(express.json())
app.use("/storage", express.static(path.join(__dirname, "storage")))

app.use("/storage",express.static(path.join(__dirname,"storage")))

const Route = require("./route/index.route")
app.use("/", Route)


mongoose.connect(`mongodb+srv://${DB_USER_NAME}:${DB_USER_PASSWORD}@cluster0.${DB_USER_SERVER}.mongodb.net/${DB_NAME}`).then(() => console.log("mongoDb connected")).catch((error) => console.log("error", error))

app.listen(5000, () => {
    console.log("server successfully run: http://localhost:5000");

})