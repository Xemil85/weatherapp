const express = require("express");
const cors = require("cors");
require("dotenv").config();

const saa = require("./routes/weatherlocation");

const app = express();
app.use(express.json());
app.use(cors());

app.use(express.static("dist"));

app.use("/", saa);

const PORT = process.env.PORT || 3001;
var server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})