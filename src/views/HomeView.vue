<template>
  <main class="pukllay">
    <div class="pukllay-overlay"></div>
    <div class="pukllay-content">
      <AuthLove></AuthLove>
    </div>
  </main>
</template>
<script setup>
import AuthLove from '@/components/ui/AuthLove.vue'
</script>
<style scoped>
.pukllay {
  background-image: url('https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/5abb3963-b4c6-4c56-b71c-28b29be79395/CL-es-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg');
  background-size: auto;
  background-position: center;
  height: 100vh;
  position: relative;
  z-index: 0;
}
.pukllay-overlay {
  height: 100vh;
  background-color: rgb(0, 0, 0);
  width: 100%;
  position: absolute;
  z-index: -1;
  opacity: 0.5;
}
.pukllay-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
