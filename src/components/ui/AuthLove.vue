<template>
  <div class="w-96 p-10 bg-[#000000ea]">
    <div class="content-auth">
      <div class="">
        <h1 class="text-center text-white text-2xl font-bold mb-5">EL DÍA QUE NOS CONOCIMOS {{ key }}</h1>
        <InputCustom v-model="key"></InputCustom>
        <ButtonCustom class="text-center" label="Verificar" @click="verifyKey()"></ButtonCustom>
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
  if (key.value === 'Hola') {
    console.log('go')
    router.push('user')
  } else {
    // me mantengo
  }
}
</script>
