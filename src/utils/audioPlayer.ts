import { ref } from "vue";

export const useAudioPlayer = () => {
  const audio = ref<HTMLAudioElement | null>(null);
  const isPlaying = ref(false);

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

  const initPlayMusic = () => {
    document.addEventListener("click", playMusic, { once: false });
  };

  const destroyPlayMusic = () => {
    if (audio.value) {
      audio.value.pause();
      audio.value = null;
    }
    document.removeEventListener("click", playMusic);
  };

  return {
    audio,
    playMusic,
    initPlayMusic,
    destroyPlayMusic,
  };
};
