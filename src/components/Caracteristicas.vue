
<script setup lang="ts">
import type { Personaje } from './PersonajeCard.vue'

defineProps<{
  personaje: Personaje | null
}>()

const emit = defineEmits<{
  cerrar: []
}>()
</script>

<template>
  <section id="caracteristicas" class="dark-section">
    <div class="section-heading">
      <h2 class="eyebrow">CARACTERÍSTICAS</h2>
    </div>

    <div v-if="personaje" class="character-detail">
      <div class="detail-top">
        <img
          :src="personaje.imagen"
          :alt="personaje.nombre"
          class="detail-image"
        />

        <div class="detail-info">
          <span class="eyebrow">{{ personaje.categoria }}</span>
          <h2>{{ personaje.nombre }}</h2>
          <p class="detail-alter">{{ personaje.alterEgo }}</p>
          <p>{{ personaje.descripcion }}</p>
        </div>
      </div>

      <ul class="feature-list">
        <li class="feature">
          <small>PODERES</small>
          <strong>{{ personaje.poderes }}</strong>
        </li>

        <li class="feature">
          <small>PRIMERA APARICIÓN</small>
          <strong>{{ personaje.primeraAparicion }}</strong>
        </li>

        <li class="feature">
          <small>AFILIACIÓN</small>
          <strong>{{ personaje.afiliacion }}</strong>
        </li>

        <li class="feature">
          <small>DEBILIDAD</small>
          <strong>{{ personaje.debilidad }}</strong>
        </li>

        <li class="feature">
          <small>UNIVERSO</small>
          <strong>{{ personaje.universo }}</strong>
        </li>
      </ul>

      <button class="secondary-btn" @click="emit('cerrar')">
        Cerrar ficha
      </button>
    </div>

    <div v-else class="empty-state">
      <div class="empty-icon">+</div>
      <h3>Selecciona un personaje</h3>
      <p>
        Haz clic en “Ver características” en cualquier tarjeta del catálogo.
      </p>
    </div>
  </section>
</template>

<style scoped>
.dark-section {
  background: #0f0f0f;
  padding: 100px 8vw;
}

.section-heading {
  margin-bottom: 45px;
}

.eyebrow {
  color: var(--red);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2.5px;
}

.character-detail {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.detail-top {
  display: grid;
  grid-template-columns: minmax(280px, 0.9fr) minmax(0, 1.8fr);
  gap: 50px;
  align-items: start;
}

.detail-image {
  width: 100%;
  max-height: 600px;
  object-fit: cover;
  background: #181818;
}

.detail-info {
  min-width: 0;
}

.detail-info h2 {
  font-family: 'Bebas Neue';
  font-size: 80px;
  line-height: 0.9;
  margin: 8px 0;
}

.detail-alter {
  color: #777;
  margin-bottom: 18px;
}

.detail-info p {
  color: #aaa;
  line-height: 1.7;
  margin-bottom: 25px;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature {
  padding: 18px;
  border-bottom: 1px solid #292929;
}

.feature small {
  display: block;
  color: var(--red);
  font-weight: 800;
  font-size: 10px;
  margin-bottom: 8px;
}

.feature strong {
  display: block;
  color: #fff;
  line-height: 1.6;
  overflow-wrap: break-word;
}

.secondary-btn {
  padding: 14px 20px;
  color: #fff;
  background: transparent;
  border: 1px solid #555;
  cursor: pointer;
  font-weight: 800;
  text-transform: uppercase;
}

.secondary-btn:hover {
  border-color: #fff;
}

.empty-state {
  min-height: 300px;
  display: grid;
  place-items: center;
  text-align: center;
  border: 1px dashed #333;
  padding: 40px;
}

.empty-icon {
  color: var(--red);
  font-size: 40px;
}

.empty-state h3 {
  font-family: 'Bebas Neue';
  font-size: 32px;
}

.empty-state p {
  color: #777;
}

@media (max-width: 900px) {
  .detail-top {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 620px) {
  .dark-section {
    padding: 70px 6vw;
  }

  .detail-info h2 {
    font-size: 60px;
  }
}
</style>
