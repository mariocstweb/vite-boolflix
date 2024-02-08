<script>
// import { store } from "../data/store.js";
export default {
  name: "AppMain",
  props: {
    movies: Array,
    series: Array
  }
}
</script>

<template>
  <ul v-for="movie in movies">
    <li>{{ movie.original_title }}</li>
  </ul>
</template>


<style scoped></style>
