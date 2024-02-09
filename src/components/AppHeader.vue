<script>
import SearchForm from './SearchForm.vue';
export default {
  name: "AppHeader",
  components: { SearchForm },
  emits: ['submitSearch'],
  methods: {
    searchMovies(term) {
      console.log("devo carcare", term)
      this.$emit('submit-search', term);
    },


  }
}
</script>

<template>
  <header>
    <div class="container d-flex justify-content-between align-items-center p-2">
      <div>
        <img src="../assets/img/pino.png" alt="">
      </div>
      <SearchForm placeholder="Cerca qui.." buttonLabel="Cerca" @submit-search="$emit('submitSearch', $event)" />
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: #141414;
}

img {
  width: 300px;
}
</style>
