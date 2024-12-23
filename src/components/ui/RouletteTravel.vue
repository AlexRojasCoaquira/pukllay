<template>
  <div class="roulette-container">
    <div class="" v-if="!items.length">Agregue ciudades para empezar</div>
    <div class="roulette" v-if="items.length">
      <!-- Ruleta -->
      <svg :width="size" :height="size" class="wheel" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(50,50)">
          <template v-for="(segment, index) in items" :key="index">
            <path
              :d="getPath(index)"
              :fill="
                (selectedIndex === index && !spinning.value) || (selectedSegment && selectedSegment.id === segment.id)
                  ? 'gray'
                  : segment.color
              "
              stroke="#fff"
              stroke-width="0.5"
            />
            <text
              :x="getTextPosition(index).x"
              :y="getTextPosition(index).y"
              fill="#000"
              font-size="3"
              text-anchor="middle"
              alignment-baseline="middle"
              :transform="`rotate(${getTextRotation(index)} ${getTextPosition(index).x} ${getTextPosition(index).y})`"
            >
              {{ segment.name }}
            </text>
          </template>
        </g>
      </svg>
    </div>

    <button v-if="items.length" @click="startSpinning" :disabled="spinning">¡Girar!</button>
    <p v-if="selectedSegment">¡Seleccionado: {{ selectedSegment.name }}!</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const size = 300
const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
})

const segmentAngle = 360 / props.items.length
const spinning = ref(false)
const selectedSegment = ref(null)
const selectedIndex = ref(null)

const getPath = (index) => {
  const angle = (2 * Math.PI) / props.items.length
  const startAngle = index * angle
  const endAngle = startAngle + angle
  const largeArcFlag = angle > Math.PI ? 1 : 0

  const startX = 50 * Math.cos(startAngle)
  const startY = 50 * Math.sin(startAngle)
  const endX = 50 * Math.cos(endAngle)
  const endY = 50 * Math.sin(endAngle)

  return `
        M 0 0
        L ${startX} ${startY}
        A 50 50 0 ${largeArcFlag} 1 ${endX} ${endY}
        Z
      `
}

const getTextPosition = (index) => {
  const angle = ((2 * Math.PI) / props.items.length) * (index + 0.5)
  const radius = 35
  return {
    x: radius * Math.cos(angle),
    y: radius * Math.sin(angle),
  }
}

const getTextRotation = (index) => {
  const angle = (360 / props.items.length) * (index + 0.5)
  return angle - 90
}

// Comienza el "giro" de la ruleta
const startSpinning = () => {
  if (spinning.value) return
  spinning.value = true
  selectedSegment.value = null

  const totalDuration = 5000 // Duración de la animación (5 segundos)
  const totalRotations = 10 // Número de rotaciones (8 vueltas)
  const intervalCount = props.items.length
  const timePerSegment = totalDuration / (intervalCount * totalRotations)

  let currentIndex = 0
  const interval = setInterval(() => {
    selectedIndex.value = currentIndex

    // Resaltar el segmento actual por un pequeño lapso
    // setTimeout(() => {
    //   selectedIndex.value = null
    // }, 400)

    currentIndex++

    if (currentIndex >= intervalCount) {
      currentIndex = 0
    }
  }, timePerSegment) // Animación rápida entre segmentos

  // Detener la animación después de un tiempo
  setTimeout(() => {
    clearInterval(interval)
    const finalIndex = Math.floor(Math.random() * intervalCount)
    selectedSegment.value = props.items[finalIndex]

    selectedIndex.value = finalIndex
    spinning.value = false
  }, totalDuration)
}
</script>

<style>
.roulette-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.roulette {
  position: relative;
  width: 300px;
  height: 300px;
}

.wheel {
  transform-origin: center;
  transition: transform 5s cubic-bezier(0.25, 0.1, 0.25, 1); /* Aceleración/desaceleración suave */
}

button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style>
