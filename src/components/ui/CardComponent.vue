<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
    <img v-if="image" :src="image" alt="Card image" class="w-full h-48 object-cover" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ title }}</div>
      <p class="text-gray-700 text-base">
        {{ description }}
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span
        v-for="(tag, index) in tags"
        :key="index"
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
      >
        #{{ tag }}
      </span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  tags: {
    type: Array,
    default: () => [],
  },
})
</script>

<style>
/* Opcional: Puedes agregar estilos adicionales si no usas Tailwind CSS */
</style>
