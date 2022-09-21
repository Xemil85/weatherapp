const axios = require("axios");
const express = require("express");
const router = express.Router();
require("dotenv").config();

router.post("/saa", async (req, res) => {
  const city = req.body.city ? req.body.city : "";
  const apikey = process.env.WEATHERKEY;
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apikey}`
    );
    console.log(response.data);
    const responseWeather = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${response.data[0].lat}&lon=${response.data[0].lon}&appid=${apikey}&lang=fi&units=metric`
    );
    console.log(responseWeather.data);
    res.json(responseWeather.data);
  } catch (err) {
    return console.log(err);
  }
});

module.exports = router;
