<template>
  <div>
    <button
      class="my-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-300 ease-in-out"
    >
      {{ props.label }}
    </button>
  </div>
</template>
<script setup>
const props = defineProps(['label'])
</script>
