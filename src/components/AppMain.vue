<script>
export default {
  name: "AppMain",
  props: {
    movies: Array,
    series: Array
  },
  computed: {
    languages() {
      return this.movies.map(movie => movie.language);
    },

    // Verifico se una di queste lingue è presente
    hasFlag() {
      return language => {
        const flags = ['it', 'en'];
        return flags.includes(language);
      }
    },
    flagSrc() {
      //  Genero URL della bandiera
      return language => {
        const url = new URL(`../assets/img/${language}.png`, import.meta.url);
        return url.href;
      }
    }
  },

  // Genero URL della copertina
  methods: {
    getImageUrl(imgPath) {
      return `https://image.tmdb.org/t/p/w342/${imgPath}`;
    },
  }
}
</script>

<template>
  <ul v-for="movie in movies">
    <li>{{ movie.title }}</li>
    <li>{{ movie.originalTitle }}</li>
    <li>{{ movie.vote }}</li>
    <li>
      <img v-if="hasFlag(movie.language)" :src="flagSrc(movie.language)" :alt="movie.language">
      <span esle>{{ movie.language }}</span>
    </li>
    <li><img :src="getImageUrl(movie.imgpath)" alt="MoviePoster"></li>

  </ul>
</template>


<style scoped></style>
