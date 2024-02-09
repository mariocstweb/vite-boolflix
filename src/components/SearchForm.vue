<script>
export default {
  name: "SearchForm",
  data: () => ({
    searchTerm: "",
  }),
  props: {
    buttonLabel: String,
    placeholder: String,
  },
  emits: ['submit-search'],
  methods: {
    clearForm() {
      this.searchTerm = ""
    }
  }
}
</script>

<template>
  <div>
    <form @submit.prevent="$emit('submit-search', searchTerm); clearForm()" class="mb-3 d-flex">
      <input type="text" class="form-control me-2" v-model.trim="searchTerm" :placeholder="placeholder">
      <button type="submit" class="btn btn-primary">{{ buttonLabel }}</button>
    </form>
  </div>
</template>

<style scoped></style>
