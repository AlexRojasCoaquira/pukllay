<template>
  <div class="bg-[#141414]">
    <div
      class="bg-[#141414] fixed top-0 left-0 w-full text-white py-4 px-10 shadow-md z-10 h-18 flex justify-between items-center"
    >
      <div class="flex gap-12">
        <img width="140" src="../assets/images/pukllay-logo.png" alt="logo" />
        <ul class="flex items-center gap-10">
          <li class="cursor-pointer">Inicio</li>
          <li class="cursor-pointer">Recuerdos</li>
          <li class="cursor-pointer">Cartas</li>
          <li class="cursor-pointer">Matrimonio</li>
        </ul>
      </div>
      <div class=""></div>
    </div>
    <div class="bg-[#000000] video">
      <iframe
        src="https://player.vimeo.com/video/969424659?background=1&autoplay=1&loop=1&byline=0&title=0&muted=0"
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
<script setup></script>
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
