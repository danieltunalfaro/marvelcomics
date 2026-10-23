
<script setup lang="ts">
import { ref, watch } from 'vue'
import type { Personaje } from './PersonajeCard.vue'

const props = defineProps<{
  personajeMultimedia: Personaje
  comicsDisponibles: string[]
}>()

const comicSeleccionado = ref(0)

watch(
  () => props.personajeMultimedia.nombre,
  () => {
    comicSeleccionado.value = 0
  }
)
</script>

<template>
  <div class="multimedia">
    <h1>Multimedia</h1>

    <h2>{{ personajeMultimedia.nombre }}</h2>

    <div class="imagen-principal">
      <img
        :src="comicsDisponibles[comicSeleccionado]"
        :alt="`Cómic ${comicSeleccionado + 1} de ${personajeMultimedia.nombre}`"
      />
    </div>

    <div class="comics">
      <img
        v-for="(comic, index) in comicsDisponibles"
        :key="comic"
        :src="comic"
        :alt="`Cómic ${index + 1}`"
        :class="{ seleccionado: comicSeleccionado === index }"
        @click="comicSeleccionado = index"
      />
    </div>
  </div>
</template>

<style scoped>
.multimedia {
  padding: 40px 20px;
  text-align: center;
  background-color: #101010;
  color: white;
}

.imagen-principal {
  margin: 25px auto;
  max-width: 700px;
}

.imagen-principal img {
  width: 100%;
  max-height: 600px;
  object-fit: contain;
  border-radius: 10px;
}

.comics {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

.comics img {
  width: 120px;
  height: 160px;
  object-fit: cover;
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 5px;
  transition: transform 0.2s, border-color 0.2s;
}

.comics img:hover {
  transform: scale(1.05);
}

.comics img.seleccionado {
  border-color: #e62429;
}
</style>
