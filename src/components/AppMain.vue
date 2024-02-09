<script>
export default {
  name: "AppMain",
  props: {
    movies: Array,
    series: Array,

  },
  computed: {
    posterPath() {
      return
    }

  },
  methods: {
    // Verifico se una di queste lingue è presente
    hasFlag(language) {
      const flags = ['it', 'en'];
      return flags.includes(language);
    },

    flagSrc(language) {
      //  Genero URL della bandiera
      const url = new URL(`../assets/img/${language}.png`, import.meta.url);
      return url.href;
    },

    vote(vote) {
      // Calcolo il voto diviso per 2
      return Math.ceil(vote / 2);
    },

    getImageUrl(imgPath) {
      return `https://image.tmdb.org/t/p/w342/${imgPath}`;
    },
  }
}
</script>

<template>
  <main>
    <!-- Movies -->
    <h2 v-if="movies.length > 0">Movies</h2>
    <div class="container d-flex flex-wrap gap-1">
      <div v-for="movie in movies" :key="movie.id" class="card border-0 rounded-0" style="width: 18rem;">
        <img :src="movie.imgpath ? getImageUrl(movie.imgpath) : 'src/assets/img/notfound.png'" :alt="movie.title"
          class="card-img-top">
        <div class="card-info">
          <div class="card-body">
            <p class="card-title"><strong>Titolo:</strong> {{ movie.title }}</p>
            <p class="card-text"><strong>Titolo originale:</strong> {{ movie.originalTitle }}</p>
            <p>
              <i v-for="n in 5" :key="n" class="fa-star" :class="n <= vote(movie.vote) ? 'fas' : 'far'"></i>
            </p>
            <p v-if="hasFlag(movie.language)" class="d-flex justify-content-center">
              <img :src="flagSrc(movie.language)" alt="" class="flag-img ">
            </p>
            <p v-else>Lingua: {{ movie.language }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Serie TV -->
    <h2 v-if="series.length > 0">Series</h2>
    <div class="container d-flex flex-wrap mt-5 gap-1">
      <div v-for="serie in series" :key="serie.id" class="card border-0 rounded-0" style="width: 18rem;">
        <img :src="serie.imgpath ? getImageUrl(serie.imgpath) : 'src/assets/img/notfound.png'" :alt="serie.title"
          class="card-img-top ">
        <div class="card-info">
          <div class="card-body">
            <p class="card-text"><strong>Titolo originale:</strong> {{ serie.originalTitle }}</p>
            <p class="card-title"><strong>Titolo:</strong> {{ serie.title }}</p>
            <p>
              <i v-for="n in 5" :key="n" class="fa-star" :class="n <= vote(serie.vote) ? 'fas' : 'far'"></i>
            </p>
            <p v-if="hasFlag(serie.language)" class="d-flex justify-content-center">
              <img :src="flagSrc(serie.language)" alt="" class="flag-img ">
            </p>
            <p v-else>Lingua: {{ serie.language }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>


<style scoped>
main {
  background-color: #141414;
}

img {}

.flag-img {
  height: 30px;
}

.card-img-top {
  border-radius: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.card-body {
  background-color: black;
  height: 100%;
}

p {
  color: white
}

.fa-star {
  color: #FFBD00;
}

.card-container {
  position: relative;
  height: 100%;
}

.card-info {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0;
  transition: opacity 0.5s ease;
}

.card:hover .card-info {
  opacity: 1;
}
</style>
