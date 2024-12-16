<template>
  <div class="flex flex-col items-center h-screen">
    <div class="roulette border-4 border-gray-500 rounded-full relative" :style="rouletteStyle" v-if="items.length">
      <!-- Generamos cada segmento dinámicamente -->
      <div v-for="(i, index) in items" :key="index" :style="segmentStyle(index)" class="segment">
        <!-- Puedes colocar contenido dentro de cada segmento si lo deseas -->
        <span class="segment-label">{{ i.name }}</span>
      </div>
    </div>
    <div class="roulette border-4 border-gray-500 rounded-full relative bg-red-300" v-else></div>
    <button class="mt-8 px-4 w-40 bg-green-500 text-white rounded" @click="spin">Girar {{ props.items.length }}</button>
  </div>
</template>

<script setup>
import { ref, computed, defineProps } from 'vue'
const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
})
// Estado reactivo con ref()
const rotation = ref(0) // Rotación inicial
const isSpinning = ref(false) // Evita múltiples giros simultáneos
const pastelColors = [
  '#FAD02E', // Amarillo pastel
  '#F28D35', // Naranja pastel
  '#D83367', // Rosa pastel
  '#6B8E23', // Verde pastel
  '#99C5C1', // Azul pastel
  '#FFB7C5', // Lavanda pastel
  '#B7D3EB', // Azul cielo pastel
  '#F5A6D3', // Rosa suave pastel
  '#D8A7B1', // Rosa nude pastel
  '#FFCB77', // Durazno pastel
  '#F4D1AE', // Beige pastel
  '#A4D3A5', // Verde menta pastel
  '#A7C6ED', // Azul claro pastel
  '#F9C7B5', // Coral pastel
  '#F2C0A0', // Melocotón pastel
  '#E3C8F3', // Lavanda claro pastel
  '#B3D9C7', // Menta pastel
  '#E1F5A9', // Amarillo pálido pastel
]
const segmentAngle = computed(() => 360 / props.items.length) // Ángulo de cada segmento (360 / número de segmentos)

// Generamos el estilo de la ruleta con un gradiente cónico
const rouletteStyle = computed(() => {
  const gradient = `conic-gradient(${pastelColors
    .map((color, index) => `${color} ${index * segmentAngle.value}deg ${(index + 1) * segmentAngle.value}deg`)
    .join(', ')})`

  return {
    background: gradient,
    transform: `rotate(${rotation.value}deg)`,
    transition: 'transform 3s ease-out',
  }
})

// Estilo para cada segmento
const segmentStyle = (index) => {
  const angleStart = index * segmentAngle.value
  const angleEnd = (index + 1) * segmentAngle.value

  return {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '50%',
    height: '50%',
    backgroundColor: 'transparent',
    clipPath: `polygon(50% 0, 100% 50%, 50% 100%, 0 50%)`,
    transform: `rotate(${angleStart}deg)`,
    transformOrigin: '100% 100%',
  }
}

// Función para girar la ruleta
const spin = () => {
  if (isSpinning.value) return // Evita giros si ya está en marcha

  isSpinning.value = true
  const extraSpins = Math.floor(Math.random() * 5) + 5 // Giros adicionales aleatorios (5 a 10 vueltas)
  const randomStopAngle = Math.floor(Math.random() * 360) // Ángulo aleatorio para detenerse
  const finalRotation = extraSpins * 360 + randomStopAngle // Rotación total

  rotation.value += finalRotation // Actualiza la rotación

  // Detiene el estado de giro después de la animación
  setTimeout(() => {
    isSpinning.value = false
    const selectedSegment = Math.floor((randomStopAngle + (rotation.value % 360)) / segmentAngle.value)
    console.log(`¡La ruleta se detuvo en el segmento ${selectedSegment + 1}!`)
  }, 5000) // Tiempo de la animación (ajusta según sea necesario)
}
</script>

<style scoped>
/* Contenedor de la ruleta */
.roulette {
  position: relative;
  overflow: hidden;
  border-radius: 50%; /* Asegura la forma circular */
  width: 500px; /* Tamaño de la ruleta */
  height: 500px; /* Tamaño de la ruleta */
}

/* Cada segmento dentro de la ruleta */
.segment {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 50%;
  clip-path: polygon(100% 50%, 50% 50%, 100% 0, 50% 0); /* Forma de cada segmento */
}

.segment-label {
  position: relative;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-weight: bold;
}

/* Botón para girar */
button {
  font-size: 1.2rem;
  cursor: pointer;
}
</style>
