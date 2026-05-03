<template>
  <v-app>
    <HomeView />
  </v-app>
</template>

<script setup>
import HomeView from './views/HomeView.vue'
</script>

<style scoped>
:global(body) {
  margin: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: #f8fafc;
}
</style>

