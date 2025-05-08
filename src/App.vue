<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const apiResponse = ref("...");
let timer: ReturnType<typeof setInterval>; // 使用ReturnType动态获取类型
const fetchPoem = async () => {
  const response = await fetch("/api/amorous-poem");
  const data = await response.text();
  apiResponse.value = data;
};

onMounted(async () => {
  fetchPoem();
  timer = setInterval(fetchPoem, 8000);
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>

<template>
  <h1>Welcome to Our Wedding</h1>
  <p class="name">py & cmy</p>
  <transition name="fade" mode="out-in">
    <p class="api-response" :key="apiResponse">{{ apiResponse }}</p>
  </transition>
</template>

<style scoped>
.name {
  color: #8b5a2b;
  padding: 12px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
