<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import axios from "axios";
import { store } from "./data/store.js";
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
    fetchData(endpoint, movies) {
      // Chiamata axios
      axios.get(endpoint)
        .then((res) => {
          console.log(res.data.results)
          // Tramite map restituisco un oggetto con i dati che mi servono
          store[movies] = res.data.results.map((element) => {
            return {
              id: element.id,
              language: element.original_language,
              title: element.title,
              originalTitle: element.original_title,
              vote: element.vote_average,
              imgpath: element.poster_path
            }
          })
        })
    }
  },
  created() {
    this.fetchData(movieUrl, "movies");
  }

}

</script>

<template>
  <AppHeader @submit-search="searchMovies" />
  <AppMain />
</template>

<style scoped></style>
