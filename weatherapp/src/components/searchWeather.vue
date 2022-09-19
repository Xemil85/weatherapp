<template>
  <div class="container">
    <SearchInput v-model="city" class="search-input-wrapper" />
    <button @click="getWeather">Etsi</button>
  </div> <br />
  <div id="box">
    <div v-if="weather">
      <b><p class="weathertext">Tämän hetkinen sää:</p></b>
      <p>{{ weather.name }}</p>
      <div id="weatherbox">
        <p>{{ weatherinformation.description }}</p>
        <img
          :src="`http://openweathermap.org/img/wn/${weatherinformation.icon}@2x.png`"
          alt="sääkuva"
        />
      </div>
      <p>{{ weathermain.temp }} °C</p>
    </div>
    <div v-else>
      <p>Ei mitään :D</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SearchInput from "vue-search-input";
import "vue-search-input/dist/styles.css";

export default {
  components: {
    SearchInput,
  },
  data() {
    return {
      city: "",
      weather: {},
      weatherinformation: {},
      weathermain: {},
    };
  },
  methods: {
    async getWeather() {
      try {
        const response = await axios.post("http://localhost:3001/saa", {
          city: this.city,
        });
        this.weather = response.data;
        this.weatherinformation = response.data.weather[0];
        this.weathermain = response.data.main;
        console.log(response.data);
      } catch (err) {
        console.log(err);
        console.log(err.response);
      }
      console.log("city", city);
    },
  },
};
</script>
