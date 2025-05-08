<script setup lang="ts">
import { ref } from "vue";
const apiResponse = ref("Loading...");
import { onMounted } from "vue";

onMounted(async () => {
  const response = await fetch("/api/amorous-poem");
  const data = await response.text();
  apiResponse.value = data;
});
</script>

<template>
  <h1>Welcome to Our Wedding</h1>
  <p>py & cmy</p>
  <div class="api-response">{{ apiResponse }}</div>
</template>

<style scoped>
.api-response {
  margin-top: 20px;
}
</style>
