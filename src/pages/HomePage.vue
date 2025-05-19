<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import audioUrl from "@/assets/music/夏恋.mp3";
import { useAudioPlayer } from "@/utils/audioPlayer";
import { useFetchPoem } from "@/utils/fetchPoem";

const { audio, initPlayMusic, destroyPlayMusic } = useAudioPlayer();
const { apiResponse, initFetchPoem, destroyFetchPoem } = useFetchPoem();

onMounted(async () => {
  // 获取情诗
  initFetchPoem();
  // 初始化音乐
  initPlayMusic();
});

onUnmounted(() => {
  // 销毁情诗
  destroyFetchPoem();
  // 销毁音乐
  destroyPlayMusic();
});
</script>

<template>
  <!-- <div style="display: flex; justify-content: flex-end">
    关闭
  </div> -->
  <div class="page-container background">
    <h1>Welcome to Our Wedding</h1>
    <p class="name">py & cmy</p>
    <transition name="fade" mode="out-in">
      <p class="api-response" :key="apiResponse">{{ apiResponse }}</p>
    </transition>
    <audio ref="audio" :src="audioUrl" controls hidden loop></audio>
  </div>
</template>

<style scoped>
.name {
  color: #8b5a2b;
  padding: 12px;
}
</style>
