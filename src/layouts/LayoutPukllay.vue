<template>
  <div class="">
    <div class="bg-[#141414]">
      <div
        class="bg-[#141414] fixed top-0 left-0 w-full text-white py-4 px-10 shadow-md z-10 h-18 flex justify-between items-center"
      >
        <div id="menu-btn" class="flex gap-12 w-full">
          <div class="flex justify-between w-full">
            <img width="140" src="../assets/images/pukllay-logo.png" alt="logo" />
            <svg
              @click="openMenu = !openMenu"
              class="w-8 h-8 md:hidden"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </div>
          <ul class="hidden md:flex items-center gap-10">
            <router-link to="/pukllay" class="cursor-pointer text-xl">Inicio</router-link>
            <router-link to="/pukllay/about" class="cursor-pointer text-xl">Aniversarios</router-link>
            <router-link to="/pukllay/date" class="cursor-pointer text-xl">Fechas</router-link>
            <router-link to="/pukllay/detail" class="cursor-pointer text-xl">Detalles</router-link>
            <router-link to="/pukllay/marry" class="cursor-pointer text-xl">Matrimonio</router-link>
          </ul>
        </div>
        <div class="absolute top-16 left-0 sm:hidden w-full bg-[#000000c9]" v-if="openMenu">
          <ul class="flex flex-col text-center gap-10 py-4 mt-3 space-y-1">
            <router-link to="/pukllay" class="cursor-pointer text-xl">Inicio</router-link>
            <router-link to="/pukllay/about" class="cursor-pointer text-xl">Aniversarios</router-link>
            <router-link to="/pukllay/date" class="cursor-pointer text-xl">Fechas</router-link>
            <router-link to="/pukllay/detail" class="cursor-pointer text-xl">Detalles</router-link>
            <router-link to="/pukllay/marry" class="cursor-pointer text-xl">Matrimonio</router-link>
          </ul>
        </div>
        <div class=""></div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const openMenu = ref(false)
</script>
