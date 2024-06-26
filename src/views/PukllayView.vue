<template>
  <div class="bg-gray-900 flex items-center justify-center min-h-screen">
    <div class="video">
      <iframe
        src="https://www.youtube.com/embed/8KBTMXaV9U0?si=cmb1G9cy8z3yL0AR"
        frameborder="0"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
        data-not-lazy
      ></iframe>
    </div>
    <!-- <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/8KBTMXaV9U0?si=cmb1G9cy8z3yL0AR"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe> -->
    <!-- <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 video-container">
      <div class="video-item bg-gray-800 rounded-lg overflow-hidden">
        <video class="w-full h-auto" src="https://www.w3schools.com/html/mov_bbb.mp4" controls></video>
      </div>
      <div class="video-item bg-gray-800 rounded-lg overflow-hidden">
        <video class="w-full h-auto" src="https://www.w3schools.com/html/mov_bbb.mp4" controls></video>
      </div>
      <div class="video-item bg-gray-800 rounded-lg overflow-hidden">
        <video class="w-full h-auto" src="https://www.w3schools.com/html/mov_bbb.mp4" controls></video>
      </div>
      <div class="video-item bg-gray-800 rounded-lg overflow-hidden">
        <video class="w-full h-auto" src="https://www.w3schools.com/html/mov_bbb.mp4" controls></video>
      </div>
    </div> -->
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
