<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import axios from "axios";
export default {
  name: "Boolfix",
  components: { AppHeader, AppMain }
}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style scoped></style>
