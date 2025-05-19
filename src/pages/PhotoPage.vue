<script setup lang="ts">
import imgSrc from "@/assets/image/1.jpg";
</script>
<template>
  <div class="photo-container background">
    <img :src="imgSrc" class="photo-image" />
  </div>
</template>
<style scoped>
.photo-container {
  width: 100%;
  padding: 20px 20px;
  box-sizing: border-box;
}
.photo-image {
  width: 100%;
}
</style>
