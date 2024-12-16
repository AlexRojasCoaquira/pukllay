<template>
  <div class="flex flex-col items-center h-screen">
    <div class="roulette border-4 border-gray-500 rounded-full relative" :style="rouletteStyle"></div>
    <button class="mt-8 px-4 w-40 bg-green-500 text-white rounded" @click="spin">Girar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rotation: 0, // Rotación inicial
      isSpinning: false, // Evita múltiples giros simultáneos
      pastelColors: [
        '#FAD02E', // Amarillo pastel
        '#F28D35', // Naranja pastel
        '#D83367', // Rosa pastel
        '#6B8E23', // Verde pastel
        '#99C5C1', // Azul pastel
        '#FFB7C5', // Lavanda pastel
      ],
      segmentAngle: 360 / 6, // Ángulo de cada segmento (360 / número de segmentos)
    }
  },
  computed: {
    // Generamos el estilo de la ruleta con un gradiente cónico
    rouletteStyle() {
      // Creamos un gradiente cónico con los colores pastel
      const gradient = `conic-gradient(${this.pastelColors
        .map((color, index) => `${color} ${index * this.segmentAngle}deg ${(index + 1) * this.segmentAngle}deg`)
        .join(', ')})`

      return {
        background: gradient,
        transform: `rotate(${this.rotation}deg)`,
        transition: 'transform 3s ease-out',
      }
    },
  },
  methods: {
    spin() {
      if (this.isSpinning) return // Evita giros si ya está en marcha

      this.isSpinning = true
      const extraSpins = Math.floor(Math.random() * 5) + 5 // Giros adicionales aleatorios (5 a 10 vueltas)
      const randomStopAngle = Math.floor(Math.random() * 360) // Ángulo aleatorio para detenerse
      const finalRotation = extraSpins * 360 + randomStopAngle // Rotación total

      this.rotation += finalRotation // Actualiza la rotación

      // Detiene el estado de giro después de la animación
      setTimeout(() => {
        this.isSpinning = false
        console.log(`¡La ruleta se detuvo en ${randomStopAngle}°!`)
      }, 5000) // Tiempo de la animación (ajusta según sea necesario)
    },
  },
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

/* Botón para girar */
button {
  font-size: 1.2rem;
  cursor: pointer;
}
</style>
