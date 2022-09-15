<template>
  <SearchInput v-model="city" class="search-input-wrapper"/>
  <div id="box">
    <b><p class="weathertext">Tämän hetkinen sää:</p></b>
    <div v-if="weather">
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
      <div id="box">
        <p>No mutta jonkin on nytten pielessä :D</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import axios from "axios";
import SearchInput from 'vue-search-input'
import 'vue-search-input/dist/styles.css'
const city = ref('')

export default {
  components: {
    SearchInput
  },
  setup() {
    return {
      city
    }
  },
  data() {
    return {
      city: "",
      weather: {},
      weatherinformation: {},
      weathermain: {}
    };
  },
  computed() {

  },
  async mounted() {
    try {
      const response = await axios.get("http://localhost:3001/saa");
      this.weather = response.data;
      this.weatherinformation = response.data.weather[0];
      this.weathermain = response.data.main
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  },
};
</script>
