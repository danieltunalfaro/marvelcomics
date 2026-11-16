<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import Caracteristicas from '../components/Caracteristicas.vue';

import { personajes } from '../constants/personajes';
import { dcPersonajes } from '../constants/dcPersonajes';
import { imagePersonajes } from '../constants/imagePersonajes';

const route = useRoute();
const router = useRouter();

// Unir los personajes de las tres compañías
const todosLosPersonajes = [
  ...personajes,
  ...dcPersonajes,
  ...imagePersonajes
];

// Buscar el personaje seleccionado
const personaje = computed(() => {
  const nombre = route.query.personaje;

  if (typeof nombre !== 'string') {
    return null;
  }

  return todosLosPersonajes.find(
    p => p.nombre === nombre
  ) || null;
});

// Regresar al catálogo
function cerrarFicha() {
  router.push({
    path: '/catalogo',
    query: {
      compania: obtenerCompania()
    }
  });
}

// Identificar la compañía del personaje
function obtenerCompania() {
  if (personajes.some(p => p.nombre === personaje.value?.nombre)) {
    return 'marvel';
  }

  if (dcPersonajes.some(p => p.nombre === personaje.value?.nombre)) {
    return 'dc';
  }

  if (imagePersonajes.some(p => p.nombre === personaje.value?.nombre)) {
    return 'image';
  }

  return 'marvel';
}

// Ir a Multimedia conservando el personaje seleccionado
function irAMultimedia() {
  router.push({
    path: '/multimedia',
    query: {
      personaje: personaje.value?.nombre
    }
  });
}
</script>

<template>
  <div class="caracteristicas-view">
    <Caracteristicas
      :personaje="personaje"
      @cerrar="cerrarFicha"
      @ver-multimedia="irAMultimedia"
    />
  </div>
</template>
