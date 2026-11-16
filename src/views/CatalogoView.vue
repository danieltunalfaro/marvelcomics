<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import Catalogo from '../components/Catalogo.vue';

import { personajes } from '../constants/personajes';
import { dcPersonajes } from '../constants/dcPersonajes';
import { imagePersonajes } from '../constants/imagePersonajes';

const route = useRoute();
const router = useRouter();

const categoriaActual = ref('Todos');

// Identificar la compañía seleccionada
const compania = computed(() => {
  return typeof route.query.compania === 'string'
    ? route.query.compania
    : 'marvel';
});

// Seleccionar los personajes de la compañía
const personajesCompania = computed(() => {
  switch (compania.value) {
    case 'dc':
      return dcPersonajes;

    case 'image':
      return imagePersonajes;

    default:
      return personajes;
  }
});

// Filtrar los personajes por categoría
const personajesFiltrados = computed(() => {
  if (categoriaActual.value === 'Todos') {
    return personajesCompania.value;
  }

  return personajesCompania.value.filter(
    personaje => personaje.categoria === categoriaActual.value
  );
});

// Abrir las características del personaje
function seleccionarPersonaje(personaje: { nombre: string }) {
  router.push({
    path: '/caracteristicas',
    query: {
      personaje: personaje.nombre
    }
  });
}

// Cambiar categoría
function cambiarCategoria(categoria: string) {
  categoriaActual.value = categoria;
}
</script>

<template>
  <div class="catalogo-view">
    <Catalogo
      :personajes="personajesFiltrados"
      :categoria-actual="categoriaActual"
      @cambiar-categoria="cambiarCategoria"
      @seleccionar="seleccionarPersonaje"
    />
  </div>
</template>