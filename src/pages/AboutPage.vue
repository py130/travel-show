<script setup lang="ts">
import iconSrc from "@/assets/image/久久.png";
</script>
<template>
  <div class="about-container background">
    <div class="about-content">
      <p style="margin-top: 20px" class="wedding-text">[ Wedding Day ]</p>
      <p style="margin-top: 5px" class="wedding-text">诚邀您一起见证</p>
      <p style="margin-top: 20px" class="normal-text">PY & CMY</p>
      <p style="margin-top: 20px" class="normal-text">结婚典礼</p>
      <p style="margin-top: 5px" class="normal-text">2026年xx月xx日 周x</p>
      <p style="margin-top: 5px" class="normal-text">丙午年x月xx</p>
      <div style="margin-top: 20px" class="schedule-box normal-text">
        <div class="left-schedule">
          <p class="schedule-item">Guest Arrival</p>
          <p class="schedule-item">Greet guests</p>
          <p class="schedule-item">Ceremony</p>
        </div>
        <div class="divider-vertical"></div>
        <div class="right-schedule">
          <div class="schedule-item">
            <p>09:18 AM</p>
            <p>宾客到达</p>
          </div>
          <div class="schedule-item">
            <p>09:28 AM</p>
            <p>宾客合影</p>
          </div>
          <div class="schedule-item">
            <p>10:18 AM</p>
            <p>婚礼仪式</p>
          </div>
        </div>
      </div>
      <div style="margin-top: 20px; margin-bottom: 40px">
        <img :src="iconSrc" style="width: 40px" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.about-container {
  width: 100%;
  padding: 20px 20px 20px 20px;
  box-sizing: border-box;
}
.photo-image {
  width: 100%;
}
.about-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  border: 1px solid #8b5a2b;
}

.wedding-text {
  font-family: "URW Chancery L", cursive;
  font-style: italic;
  font-size: 20px;
  color: #411f00;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.normal-text {
  font-family: "Georgia", cursive;
  font-size: 16px;
  color: #411f00;
}

.schedule-box {
  display: flex;
  width: 200px;
  justify-content: space-between;
}

.left-schedule {
  text-align: center;
}

.left-schedule p {
  font-size: 12px;
}

.right-schedule {
  text-align: center;
}

.divider-vertical {
  height: auto;
  width: 1px;
  background-color: rgba(0, 0, 0, 0.158);
}

.schedule-item {
  min-height: 60px;
  min-width: 90px;
}
</style>
