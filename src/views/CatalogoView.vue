
<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import Catalogo from '../components/Catalogo.vue'
import { personajes } from '../constants/personajes'
import type { Personaje } from '../components/PersonajeCard.vue'

const router = useRouter()

const categoriaActual = ref('Todos')

const personajesFiltrados = computed(() => {
  if (categoriaActual.value === 'Todos') {
    return personajes
  }

  return personajes.filter(
    (personaje) => personaje.categoria === categoriaActual.value
  )
})

function seleccionarPersonaje(personaje: Personaje) {
  router.push({
    path: '/caracteristicas',
    query: { personaje: personaje.nombre }
  })
}
</script>

<template>
  <Catalogo
    :personajes="personajesFiltrados"
    :categoria-actual="categoriaActual"
    @cambiar-categoria="categoriaActual = $event"
    @seleccionar="seleccionarPersonaje"
  />
</template>
