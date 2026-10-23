
<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Caracteristicas from '../components/Caracteristicas.vue'
import { personajes } from '../constants/personajes'

const route = useRoute()
const router = useRouter()

const personajeSeleccionado = computed(() => {
  const nombre = route.query.personaje

  return personajes.find(
    (personaje) => personaje.nombre === nombre
  ) ?? null
})

function cerrarFicha() {
  router.push('/catalogo')
}
</script>

<template>
  <Caracteristicas
    :personaje="personajeSeleccionado"
    @cerrar="cerrarFicha"
  />
</template>
