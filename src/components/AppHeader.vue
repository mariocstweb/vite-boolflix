<script>
import SearchForm from './SearchForm.vue';
export default {
  name: "AppHeader",
  components: { SearchForm },
  methods: {
    searchMovies(term) {
      console.log("devo carcare", term)
    }


  }
}
</script>

<template>
  <div class="container d-flex justify-content-between p-2">
    <div>
      <h1>Netflix</h1>
    </div>
    <SearchForm @submit-search="searchMovies" />
  </div>
</template>

<style scoped></style>
