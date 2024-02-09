<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import axios from "axios";
import { store } from "./data/store.js";
import { mapElements } from "./data/index.js";
const movieUrl = "https://api.themoviedb.org/3/search/movie?api_key=07b2bf28730f4bef89116e5f43d2d759";
const seriesUrl = "https://api.themoviedb.org/3/search/tv?api_key=07b2bf28730f4bef89116e5f43d2d759";
export default {
  name: "Boolfix",
  data: () => ({
    movies: [],
    series: []
  }),
  components: { AppHeader, AppMain },
  methods: {
    fetchData(endpoint, collection) {
      // Chiamata axios
      axios.get(endpoint)
        .then((res) => {
          console.log(res.data.results)
          // Tramite map restituisco un oggetto con i dati che mi servono
          this[collection] = res.data.results.map(mapElements);
        })
    },
    searchMovies(term) {
      this.fetchData(movieUrl + "&query=" + term, "movies");
      this.fetchData(seriesUrl + "&query=" + term, "series");
    },
  },

}

</script>

<template>
  <AppHeader @submitSearch="searchMovies" />
  <!-- <AppMain :movies="movies" :series="series" /> -->
  <AppMain :movies="movies" :series="series" />
</template>

<style scoped></style>

