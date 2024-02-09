<script>
export default {
  name: "AppMain",
  props: {
    movies: Array,
    series: Array,
    // id: String,
    // language: String,
    // title: String,
    // originalTitle: String,
    // vote: Number,
    // imgpath: String,
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
  <main>
    <!-- <ul v-for="movie in movies">
    <li>{{ movie.title }}</li>
    <li>{{ movie.originalTitle }}</li>
    <li>{{ movie.vote }}</li>
    <li>
      <img v-if="hasFlag(movie.language)" :src="flagSrc(movie.language)" :alt="movie.language">
      <span esle>{{ movie.language }}</span>
    </li>
    <li><img :src="getImageUrl(movie.imgpath)" alt="MoviePoster"></li>

  </ul> -->
    <!-- ------------------------------------ -->
    <div class="container d-flex flex-wrap">
      <div v-for="movie in movies" :key="movie.id" class="card" style="width: 18rem;">
        <img :src="getImageUrl(movie.imgpath)" class="card-img-top" :alt="movie.title">
        <div class="card-body">
          <h5 class="card-title">{{ movie.title }}</h5>
          <p class="card-text">{{ movie.originalTitle }}</p>
          <p class="card-text">{{ movie.vote }}</p>
          <p v-if="hasFlag(movie.language)" class="d-flex justify-content-center">
            <img :src="flagSrc(movie.language)" alt="" class="flag-img ">
          </p>
          <p v-else>{{ movie.language }}</p>
        </div>
      </div>
    </div>
  </main>
</template>


<style scoped>
main {
  background-color: #141414;
}

.flag-img {
  height: 50px;
}
</style>
