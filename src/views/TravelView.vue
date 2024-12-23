<template>
  <div class="bg-[#FFFFFF]">
    <div class="grid sm:grid-cols-2 p-4 gap-5">
      <RouletteTravel :items="departmentList"></RouletteTravel>
      <div class="">
        <ul class="flex flex-wrap">
          <li v-for="(dep, idx) of DEPARTMENTS" :key="idx" class="flex flex-wrap w-1/2">
            <div class="w2">
              <input
                @change="selectDepartment($event, dep, idx)"
                type="checkbox"
                class="form-checkbox text-blue-500 h-5 w-5"
              />
              {{ dep.name }}
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import RouletteTravel from '@/components/ui/RouletteTravel.vue'
import { DEPARTMENTS } from '@/constants'
import { ref } from 'vue'

const departmentList = ref([])
const selectDepartment = (event, dep, idx) => {
  const val = event.target.checked
  // const exist = departmentList.value.find((d) => d.id === dep.id)
  if (val) {
    console.log('dep', dep)
    // console.log('departmentList', departmentList.value)
    departmentList.value.push(dep)
  } else {
    console.log('idx', idx)
    departmentList.value = departmentList.value.filter((d) => d.id !== dep.id)
  }
  console.log('departmentList', departmentList.value)
}
</script>
