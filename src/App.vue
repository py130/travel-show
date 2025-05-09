<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import audioUrl from "./assets/music/夏恋.mp3";

const apiResponse = ref("...");
let timer: ReturnType<typeof setInterval>;
const audio = ref<HTMLAudioElement | null>(null);
const isPlaying = ref(false);

const fetchPoem = async () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const response = await fetch(`${baseUrl}/amorous-poem`);
  console.log("response:", response);
  if (response.status === 200) {
    const data = await response.text();
    apiResponse.value = data;
  }
};

const playMusic = () => {
  if (audio.value && !isPlaying.value) {
    audio.value
      .play()
      .then(() => (isPlaying.value = true))
      .catch((e) => console.log("播放失败:", e));
  } else if (audio.value && isPlaying.value) {
    audio.value.pause();
    isPlaying.value = false;
  }
};

onMounted(async () => {
  // 添加点击事件监听
  document.addEventListener("click", playMusic, { once: false });
  // 获取情诗
  fetchPoem();
  timer = setInterval(fetchPoem, 4000);
});

onUnmounted(() => {
  clearInterval(timer);
  if (audio.value) {
    audio.value.pause();
    audio.value = null;
  }
  document.removeEventListener("click", playMusic);
});
</script>

<template>
  <h1>Welcome to Our Wedding</h1>
  <p class="name">py & cmy</p>
  <transition name="fade" mode="out-in">
    <p class="api-response" :key="apiResponse">{{ apiResponse }}</p>
  </transition>
  <audio ref="audio" :src="audioUrl" controls hidden></audio>
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
