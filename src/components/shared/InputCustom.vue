<template>
  <div>
    <div class="w-full max-w-sm">
      <div class="relative">
        <input
          type="text"
          :value="props.modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          placeholder="Email or phone number"
          class="w-full p-3 pl-5 pr-24 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent placeholder-gray-500 transition duration-300 ease-in-out"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(['modelValue'])
</script>
