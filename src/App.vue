<script setup lang="ts">
// import HomePage from "@/pages/HomePage.vue";
</script>

<template>
  <RouterLink to="/wedding">Go to Home</RouterLink> |
  <RouterLink to="/wedding/about">Go to About</RouterLink>

  <RouterView v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </RouterView>
</template>

<style scoped></style>
