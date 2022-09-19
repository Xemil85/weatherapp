const axios = require("axios");
const express = require("express");
const router = express.Router();
require("dotenv").config();

router.post("/saa", async (req, res) => {
  const city = req.body.city ? req.body.city : "";
  const apikey = process.env.WEATHERKEY
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&lang=fi&units=metric`);
    //console.log(response.data);
    console.log(response.data.weather[0]);
    res.json(response.data);
  } catch (err) {
    return console.log(err);
  }
});

module.exports = router;
