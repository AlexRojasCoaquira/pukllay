<template>
  <div class="bg-[#F2F2F2]">
    <div class="grid grid-cols-2 p-4">
      <RouletteTravel></RouletteTravel>
      <div class="">
        <ul>
          <li v-for="(dep, idx) of DEPARTMENTS" :key="idx">
            {{ dep.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import RouletteTravel from '@/components/ui/RouletteTravel.vue'
import { DEPARTMENTS } from '@/constants'
</script>
