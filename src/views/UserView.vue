<template>
  <div class="bg-[#141414] min-h-screen shadow-inner-top flex items-center justify-center py-4">
    <div class="text-center h-full">
      <h4 class="text-white text-3xl xl:text-5xl font-semibold">¿Quién está viendo ahora?</h4>
      <div class="flex flex-col md:flex-row items-center justify-between gap-8 mt-10">
        <div class="text-center w-40">
          <img
            class="w-full rounded-xl mb-2 hover:border-white hover:border-4 transition duration-300 ease-in-out"
            src="../assets/images/user1.png"
            alt="user1"
          />
          <span class="text-[grey] leading text-xl hover:text-white">Rommel Alex Rojas Coaquira</span>
        </div>
        <div class="text-center w-40 h-100" @click="viewUser()">
          <img
            class="w-full rounded-xl mb-2 hover:border-white hover:border-4 transition duration-300 ease-in-out"
            src="../assets/images/user2.png"
            alt="user1"
          />
          <span class="text-[grey] leading text-xl hover:text-white">Mi esposa</span>
        </div>
        <div class="text-center w-40">
          <img
            class="w-full rounded-xl mb-2 hover:border-white hover:border-4 transition duration-300 ease-in-out"
            src="../assets/images/user1.png"
            alt="user1"
          />
          <span class="text-[grey] leading text-xl hover:text-white">Para niños</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const viewUser = () => {
  router.push('pukllay')
}
</script>
