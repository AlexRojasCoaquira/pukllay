<template>
  <div class="bg-[#141414] mt-30">
    <div class="bg-[#000000] text-[#FFFFFF] h-full py-5">
      <!-- <iframe
        v-if="play"
        src="https://player.vimeo.com/video/969424659?background=1&loop=1&byline=0&title=0&muted=0"
        frameborder="0"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
        data-not-lazy
      ></iframe> -->
      <!-- <iframe
        title="vimeo-player"
        src="https://player.vimeo.com/video/969424659?h=4177008ab2"
        frameborder="0"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
        data-not-lazy
      ></iframe> -->
      <p class="text-center mt-5 text-xl px-5 md:px-40">
        Bueno sé que estás leyendo esto y debes saber toda la verdad. Esperé este tiempo prudente para contarte ya más
        calmados. La relación estuvo rota porque venías con heridas sin sanar que yo no provoqué (no era el momento).
        Todo era complicado para ambos y aunque fue bonito en su momento, pasó a ser un tormento. De alguna manera
        seguíamos en conexión y no dejábamos de hablarnos. Yo era el más enamorado todavía y pues ambos seguíamos
        haciéndonos daño indirectamente.
        <br /><br />
        El error fue de ambos, pero esto se tenía que parar. Mi viaje fue para pensar todo eso y durante el viaje,
        conversaba con muchas personas y sinceramente no tenía sentido estar con esa ilusión de que algún día cambiaras
        de opinión. Pero fuí tan terco que solo me lastimaba yo. Sentía que jugabas conmigo de alguna manera y ya esas
        cosas me cansaron. <br /><br />
        Instintivamente te hice un presente para dartelas el día en que me iba a ir, también te devolvería la camiseta
        (porque te lo había pedido prestada). Pero sabía que no ibas a venir y visto que te fuiste a la disco con tu
        amiga, se acabó todo. Al día siguiente, te dije que tuve una conversación(con mi psicóloga) y todas las
        conversaciones pasadas(El sr de Jayanca, la Sra del desayuno y más) coincidieron en lo mismo y era alejarme de
        ti, pero eso yo jamás lo iba a hacer porque estuve realmente ilusionado. Recordé aquella vez(en el restaurant)
        que me bloqueaste en mi cara y me sentí frustado al regresar a casa. Tampoco podía bloquearte, porque eso es de
        cobardes.<br /><br />
        Simplemente trataba de alejarme de ti. Por eso quería que te enojarás conmigo para que seas tú la que guardes
        distancia. Pero quería decirtelo calmado (ese momento estabas tensa) y bueno te dije lo que pensaba. No me
        duelen las palabras, pero cuando dijiste que "yo no pedí que lo hicieras" el mundo se me derrumbó. Ahí me di
        cuenta de la doble moral que tienes y que solo te interesaba cuando te convenía. Yo sé que a ti las palabras te
        duelen y lo aprendí tantas veces. Pero que me aplicarás eso, me dolió. Decidí decirte que eres "interesada" y no
        porque lo económico, sino por interés en emociones conmigo. Pero te alteraste muy rápido y me bloqueaste. Tal
        vez, era la solución más rápida a todo esto y que desde tu lado me bloquees porque yo no era capaz de hacerlo.
        <br /><br />
        Decidí a decir tonterías para que me bloquees en todos lados y así perder comunicación contigo temporalmente,
        hasta que sanemos del todo(realmente). Me dí cuenta que ambos ibamos a pasarla mal, pero no había de otra para
        terminar con la relación inestable. Me conociste como una persona que planifica las cosas y pensé que te darías
        cuenta. Te pedí disculpas por las palabras que dije en parte no me entendiste del todo. Cuando estuve bloqueado,
        te mandé el primer Yape dándote las gracias porque pudiste bloquearme sin tener que desbloquearme pronto. Luego
        el segundo Yape para pedirte las disculpas del caso nuevamente(te mandé señal de que todo esto no era casual) y
        que te escribiría en un mes aprox. Sufrí mucho durante el bloqueo y quize llevarme la peor parte. Fue algo
        necesario para ambos, cortarla de una vez. Pasó un tiempo prudente y logré fortalecerme mentalmente. Espero que
        entiendas algún día que fue para salvarnos a ambos y crecer cada uno por su lado. Como te lo dije una vez, todas
        las personas merecen la verdad. Cuídate y ten buen año. No me guardes rencor, simplemente sana. No soy tu
        enemigo y aunque te perdono de todo, espero que el siguiente año tengas una percepción distinta de mi. Y ojalá
        me cuentes tus anécdotas algún día.
      </p>
      <p class="text-center mt-5 text-2xl"></p>
    </div>
    <!-- <div class="h-80">Hola</div> -->
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const play = ref(false)
onMounted(() => {
  setTimeout(() => {
    play.value = true
  }, 2000)
})
</script>
<style scoped>
.video-container {
  perspective: 1000px;
}
.video-item {
  transform: scale(1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
.video-item:hover {
  transform: scale(1.2) translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
</style>
