<template>
  <div class="bg-[#141414] min-h-screen shadow-inner-top flex items-center justify-center py-4">
    <div class="text-center h-full">
      <h4 class="text-white text-3xl xl:text-5xl font-semibold">¿Quién está viendo ahora?</h4>
      <div class="grid justify-center md:flex md:flex-wrap gap-6 mt-10">
        <div
          v-for="(user, idx) of USERS"
          :key="idx"
          class="flex items-center justify-center flex-col w-28 md:w-40 cursor-pointer"
          @click="viewUser(user)"
        >
          <img
            class="w-full rounded-xl mb-2 hover:border-white hover:border-4 transition duration-300 ease-in-out"
            :src="`https://res.cloudinary.com/ddq6ilgjr/image/upload/v1734314687/${user.image}.png`"
            alt="user1"
          />
          <span class="text-[grey] leading text-xl hover:text-white">{{ `${user.name} ${user.lastname}` }}</span>
        </div>
        <!-- <div class="flex items-center justify-center flex-col w-28 md:w-40 cursor-pointer" @click="viewUser()">
          <img
            class="w-full rounded-xl mb-2 hover:border-white hover:border-4 transition duration-300 ease-in-out"
            src="../assets/images/user2.png"
            alt="user1"
          />
          <span class="text-[grey] leading text-xl hover:text-white">Keyla Danixa Guerrero Hoyos</span>
        </div> -->
        <!-- <div class="flex items-center flex-col w-28 md:w-40 cursor-pointer">
          <img
            class="w-full rounded-xl mb-2 hover:border-white hover:border-4 transition duration-300 ease-in-out"
            src="../assets/images/user1.png"
            alt="user1"
          />
          <span class="text-[grey] leading text-xl hover:text-white">Para niños</span>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { USERS } from '@/constants'
const router = useRouter()
const viewUser = (user) => {
  console.log('user', user)
  router.push(user.id === 1 ? 'travel' : 'pukllay')
}
</script>
