
<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import MultimediaSection from '../components/Multimedia.vue'
import { personajes } from '../constants/personajes'

import spider1 from '../assets/spider1.jpg'
import spider2 from '../assets/spider2.jpg'
import spider3 from '../assets/spider3.jpg'

import venom1 from '../assets/venom1.jpg'
import venom2 from '../assets/venom2.jpg'
import venom3 from '../assets/venom3.jpg'

import hulk1 from '../assets/hulk1.jpg'
import hulk2 from '../assets/hulk2.jpg'
import hulk3 from '../assets/hulk3.jpg'

import thor1 from '../assets/thor1.jpg'
import thor2 from '../assets/thor2.jpg'
import thor3 from '../assets/thor3.jpg'

import doom1 from '../assets/doom1.jpg'
import doom2 from '../assets/doom2.jpg'
import doom3 from '../assets/doom3.jpg'

import thanos1 from '../assets/thanos1.jpg'
import thanos2 from '../assets/thanos2.jpg'
import thanos3 from '../assets/thanos3.jpg'

const route = useRoute()

const comicImagesByCharacter: Record<string, string[]> = {
  'Spider-Man': [spider1, spider2, spider3],
  Venom: [venom1, venom2, venom3],
  Hulk: [hulk1, hulk2, hulk3],
  Thor: [thor1, thor2, thor3],
  'Dr. Doom': [doom1, doom2, doom3],
  Thanos: [thanos1, thanos2, thanos3]
}

const personajeMultimedia = computed(() => {
  const nombre = route.query.personaje

  return personajes.find(
    personaje => personaje.nombre === nombre
  ) ?? personajes[0]
})

const comicsDisponibles = computed(() => {
  return comicImagesByCharacter[personajeMultimedia.value.nombre]
    ?? [personajeMultimedia.value.imagen]
})

</script>

<template>
  <MultimediaSection
    :personaje-multimedia="personajeMultimedia"
    :comics-disponibles="comicsDisponibles"
  />
</template>
