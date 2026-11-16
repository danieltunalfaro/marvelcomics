<script setup lang="ts">
import type { Personaje } from './PersonajeCard.vue';

defineProps<{
  personaje: Personaje | null
}>();

const emit = defineEmits<{
  (e: 'cerrar'): void
  (e: 'verMultimedia'): void
}>();
</script>

<template>
  <div class="contenedor-caracteristicas">

    <div v-if="personaje" class="ficha">

      <div class="imagen-personaje">
        <img
          :src="personaje.imagen"
          :alt="personaje.nombre"
        />
      </div>

      <div class="informacion">

        <h1>{{ personaje.nombre }}</h1>

        <p class="descripcion">
          {{ personaje.descripcion }}
        </p>

        <div class="datos">

          <div class="dato">
            <h3>Alter ego</h3>
            <p>{{ personaje.alterEgo }}</p>
          </div>

          <div class="dato">
            <h3>Categoría</h3>
            <p>{{ personaje.categoria }}</p>
          </div>

          <div class="dato">
            <h3>Universo</h3>
            <p>{{ personaje.universo }}</p>
          </div>

          <div class="dato">
            <h3>Primera aparición</h3>
            <p>{{ personaje.primeraAparicion }}</p>
          </div>

          <div class="dato">
            <h3>Afiliación</h3>
            <p>{{ personaje.afiliacion }}</p>
          </div>

          <div class="dato">
            <h3>Debilidad</h3>
            <p>{{ personaje.debilidad }}</p>
          </div>

          <div class="dato poderes">
            <h3>Poderes</h3>
            <p>{{ personaje.poderes }}</p>
          </div>

        </div>

        <div class="botones">
          <button @click="emit('verMultimedia')">
            Ver mejores cómics
          </button>

          <button class="btn-cerrar" @click="emit('cerrar')">
            Regresar al catálogo
          </button>
        </div>

      </div>
    </div>

    <div v-else class="sin-personaje">
      <h2>Personaje no encontrado</h2>
      <p>No se encontró información del personaje seleccionado.</p>

      <button @click="emit('cerrar')">
        Regresar al catálogo
      </button>
    </div>

  </div>
</template>

<style scoped>
.contenedor-caracteristicas {
  max-width: 1100px;
  margin: 40px auto;
  padding: 20px;
  color: white;
}

.ficha {
  display: flex;
  align-items: flex-start;
  gap: 35px;
  background-color: #181818;
  padding: 30px;
  border-radius: 12px;
}

.imagen-personaje {
  width: 38%;
  flex-shrink: 0;
}

.imagen-personaje img {
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 10px;
}

.informacion {
  flex: 1;
}

.informacion h1 {
  color: #e62429;
  font-size: 32px;
  margin: 0 0 15px;
}

.descripcion {
  color: #cccccc;
  line-height: 1.6;
  margin-bottom: 25px;
}

.datos {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.dato {
  background-color: #252525;
  padding: 15px;
  border-radius: 8px;
  min-width: 0;
}

.dato h3 {
  color: #e62429;
  font-size: 15px;
  margin: 0 0 8px;
}

.dato p {
  color: white;
  margin: 0;
  line-height: 1.5;
  overflow-wrap: anywhere;
}

.poderes {
  grid-column: span 2;
}

.botones {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 25px;
}

.botones button,
.sin-personaje button {
  background-color: #e62429;
  color: white;
  border: none;
  padding: 12px 18px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

.botones button:hover,
.sin-personaje button:hover {
  background-color: #b71c1c;
}

.botones .btn-cerrar {
  background-color: #444;
}

.botones .btn-cerrar:hover {
  background-color: #666;
}

.sin-personaje {
  text-align: center;
  padding: 60px 20px;
  background-color: #181818;
  border-radius: 12px;
}

.sin-personaje h2 {
  color: #e62429;
}

.sin-personaje p {
  color: #ccc;
}

@media (max-width: 750px) {
  .ficha {
    flex-direction: column;
  }

  .imagen-personaje {
    width: 100%;
  }

  .imagen-personaje img {
    height: 350px;
  }
}

@media (max-width: 500px) {
  .datos {
    grid-template-columns: 1fr;
  }

  .poderes {
    grid-column: span 1;
  }

  .informacion h1 {
    font-size: 26px;
  }
}
</style>
