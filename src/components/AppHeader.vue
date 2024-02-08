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
  <div class="container d-flex justify-content-between p-2">
    <div>
      <h1>Netflix</h1>
    </div>
    <SearchForm placeholder="Cerca qui.." buttonLabel="Cerca" @submit-search="$emit('submitSearch', $event)" />
  </div>
</template>

<style scoped></style>
