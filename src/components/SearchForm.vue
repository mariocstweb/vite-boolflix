<script>
export default {
  name: "SearchForm",
  data: () => ({
    searchTerm: ""
  }),
  emits: ['submit-search']
}
</script>

<template>
  <div>
    <form @submit.prevent="$emit('submit-search', searchTerm)" class="mb-3 d-flex">
      <input type="text" class="form-control me-2" v-model.trim="searchTerm">
      <button type="submit" class="btn btn-primary">Cerca</button>
    </form>
  </div>
</template>

<style scoped></style>
