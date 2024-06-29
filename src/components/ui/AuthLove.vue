<template>
  <div class="w-96 p-10 bg-[#000000c8] rounded-xl">
    <div class="content-auth">
      <div class="flex flex-col items-center">
        <h1 class="text-center text-white text-2xl font-bold mb-5">NUESTRA PRIMERA EMPRESA</h1>
        <InputCustom v-model="key"></InputCustom>
        <ButtonCustom class="w-full mt-4 text-center" label="Verificar" @click="verifyKey()"></ButtonCustom>
      </div>
    </div>
  </div>
</template>
<script setup>
import InputCustom from '../shared/InputCustom.vue'
import ButtonCustom from '../shared/ButtonCustom.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const key = ref('')
const router = useRouter()
const verifyKey = () => {
  if (key.value.toUpperCase() === 'pukllay') {
    console.log('go')
    router.push('user')
  } else {
    // me mantengo
  }
}
</script>
