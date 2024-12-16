<template>
  <div class="bg-[#F2F2F2]">
    <div class="grid grid-cols-2 p-4">
      <RouletteTravel :items="departmentList"></RouletteTravel>
      <div class="">
        <ul>
          <li v-for="(dep, idx) of DEPARTMENTS" :key="idx">
            <input
              @change="selectDepartment($event, dep, idx)"
              type="checkbox"
              class="form-checkbox text-blue-500 h-5 w-5"
            />
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
