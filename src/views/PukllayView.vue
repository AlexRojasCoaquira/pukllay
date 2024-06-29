<template>
  <div class="bg-[#141414]">
    <div class="bg-[#000000] video border">
      <!-- <iframe
        v-if="play"
        src="https://player.vimeo.com/video/969424659?background=1&loop=1&byline=0&title=0&muted=0"
        frameborder="0"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
        data-not-lazy
      ></iframe> -->
      <iframe
        title="vimeo-player"
        src="https://player.vimeo.com/video/969424659?h=4177008ab2&background=1&loop=1&byline=0&title=0&muted=0"
        frameborder="0"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
        data-not-lazy
      ></iframe>
    </div>
    <div class="h-80">Hola</div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const play = ref(false)
onMounted(() => {
  setTimeout(() => {
    play.value = true
  }, 2000)
})
</script>
<style scoped>
.video-container {
  perspective: 1000px;
}
.video-item {
  transform: scale(1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
.video-item:hover {
  transform: scale(1.2) translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
</style>
