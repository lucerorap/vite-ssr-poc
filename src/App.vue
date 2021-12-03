<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Navbar from "/src/components/Navbar.vue";
</script>

<template>
  <navbar />
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  @apply pt-15;
}
html {
  font-family: "Lexend Deca", sans-serif;
}

.markdown-body {
  @apply w-full max-w-800px mx-auto;
}
</style>
