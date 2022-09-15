const axios = require("axios");
const express = require("express");
const router = express.Router();
require("dotenv").config();

router.get("/saa", async (req, res) => {
  //let city = req.body.city;
  let apikey = process.env.WEATHERKEY
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=helsinki&appid=${apikey}&lang=fi&units=metric`);
    //console.log(response.data);
    console.log(response.data.weather[0]);
    res.json(response.data);
  } catch (err) {
    return console.log(err);
  }
});

module.exports = router;
