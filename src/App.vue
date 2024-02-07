<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import axios from "axios";
import { store } from "./data/store.js";
const movieUrl = "https://api.themoviedb.org/3/search/movie?query=pippo&api_key=07b2bf28730f4bef89116e5f43d2d759";
const seriesUrl = "https://api.themoviedb.org/3/search/tv?query=pippo&api_key=07b2bf28730f4bef89116e5f43d2d759";
export default {
  name: "Boolfix",
  data: () => ({

  }),
  components: { AppHeader, AppMain }
}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style scoped></style>
