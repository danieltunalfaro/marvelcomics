<script setup lang="ts">
import { ref } from 'vue'
import ChatMessages from '../components/chat/ChatMessages.vue'
import MessageBox from '../components/chat/MessageBox.vue'
import type { ChatMessage } from '../interfaces/chat-message.interface'

const messages = ref<ChatMessage[]>([
  {
    id: 1,
    message: '¡Hola! Soy el asistente Marvel. ¿Qué quieres saber del universo Marvel?',
    itsMine: false
  }
])

// Genera una respuesta según el mensaje recibido
function generarRespuesta(texto: string): string {
  const pregunta = texto.toLowerCase()

  if (
    pregunta.includes('hola') ||
    pregunta.includes('buenas')
  ) {
    return '¡Hola! ¿Qué te gustaría conocer sobre Marvel?'
  }

  if (pregunta.includes('spider-man') || pregunta.includes('spiderman')) {
    return 'Spider-Man es Peter Parker, un héroe conocido por su agilidad, su sentido arácnido y sus telarañas. ¡Es uno de los personajes más populares de Marvel!'
  }

  if (pregunta.includes('venom')) {
    return 'Venom es un simbionte extraterrestre que suele estar vinculado con Eddie Brock. Aunque frecuentemente es un antagonista, también puede actuar como antihéroe.'
  }

  if (pregunta.includes('hulk')) {
    return 'Hulk es Bruce Banner, un científico que se transforma en un ser de enorme fuerza cuando experimenta emociones intensas, especialmente ira.'
  }

  if (pregunta.includes('thor')) {
    return 'Thor es el dios del trueno de Asgard. Utiliza poderes relacionados con el trueno y es conocido por armas como Mjolnir y Stormbreaker.'
  }

  if (
    pregunta.includes('doom') ||
    pregunta.includes('doctor doom')
  ) {
    return 'Doctor Doom, o Doctor Muerte, es Victor von Doom, un brillante científico y hechicero que gobierna Latveria y es uno de los grandes enemigos de los Cuatro Fantásticos.'
  }

  if (pregunta.includes('thanos')) {
    return 'Thanos es uno de los grandes villanos de Marvel. Busca reunir las Gemas del Infinito para alcanzar sus objetivos, que en las películas están relacionados con eliminar a la mitad de la vida del universo.'
  }

  if (
    pregunta.includes('villano') ||
    pregunta.includes('villanos')
  ) {
    return 'Algunos villanos famosos de Marvel son Thanos, Venom, Doctor Doom y Green Goblin. ¿Sobre cuál quieres saber más?'
  }

  if (
    pregunta.includes('héroe') ||
    pregunta.includes('heroe') ||
    pregunta.includes('heroes') ||
    pregunta.includes('héroes')
  ) {
    return 'Entre los héroes más conocidos de Marvel están Spider-Man, Hulk y Thor. ¡Puedes preguntarme por cualquiera de ellos!'
  }

  if (
    pregunta.includes('marvel') ||
    pregunta.includes('personaje')
  ) {
    return 'Marvel tiene muchos héroes y villanos. Puedes preguntarme por Spider-Man, Venom, Hulk, Thor, Doctor Doom o Thanos.'
  }

  if (
    pregunta.includes('gracias')
  ) {
    return '¡De nada! Siempre es buen momento para hablar de Marvel.'
  }

  return 'Todavía no conozco la respuesta a esa pregunta. Prueba preguntándome por Spider-Man, Venom, Hulk, Thor, Doctor Doom, Thanos o los villanos de Marvel.'
}

// Recibe el mensaje y agrega la respuesta del asistente
function onMessage(text: string) {
  const mensaje = text.trim()

  if (!mensaje) return

  messages.value.push({
    id: Date.now(),
    message: mensaje,
    itsMine: true
  })

  const respuesta = generarRespuesta(mensaje)

  messages.value.push({
    id: Date.now() + 1,
    message: respuesta,
    itsMine: false
  })
}
</script>


<template>
  <div
    class="min-h-screen w-full bg-neutral-950 px-4 py-8
           flex items-center justify-center"
  >
    <div
      class="flex w-full max-w-4xl h-[85vh] min-h-[500px]
             max-h-[850px] flex-col overflow-hidden
             rounded-2xl border border-neutral-800
             bg-neutral-900 shadow-2xl"
    >
      <!-- Encabezado -->
      <div
        class="flex shrink-0 items-center gap-4
               border-b border-neutral-800 bg-neutral-900
               px-6 py-5"
      >
        <div
          class="flex h-12 w-12 shrink-0 items-center
                 justify-center rounded-full bg-red-600
                 text-2xl font-black text-white"
        >
          M
        </div>

        <div class="min-w-0 flex-1">
          <h1 class="text-lg font-bold text-white">
            Asistente Marvel
          </h1>
          <p class="text-sm text-neutral-400">
            Universo Marvel
          </p>
        </div>

        <span
          class="shrink-0 rounded-full bg-red-600/15
                 px-3 py-1 text-xs font-semibold text-red-500"
        >
          CHAT
        </span>
      </div>

      <!-- Área de mensajes -->
      <ChatMessages :messages="messages" />

      <!-- Caja de escritura -->
      <div class="shrink-0">
        <MessageBox @send-message="onMessage" />
      </div>
    </div>
  </div>
</template>

