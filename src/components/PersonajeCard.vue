<template>
  <article class="character-card">
    <div class="card-image-wrap">
      <img :src="personaje.imagen" :alt="`Imagen de ${personaje.nombre}`" class="card-image" />
      <span class="universe-tag">{{ personaje.universo }}</span>
    </div>

    <div class="card-content">
      <span class="card-category">{{ personaje.categoria }}</span>
      <h3>{{ personaje.nombre }}</h3>
      <p class="alter-ego">{{ personaje.alterEgo }}</p>
      <p class="description">{{ personaje.descripcion }}</p>

      <div class="mini-stats">
        <span><b>⚡</b>{{ personaje.poderes }}</span>
        <span><b>🛡</b>{{ personaje.afiliacion }}</span>
      </div>

      <button class="details-btn" @click="$emit('select', personaje)">
        Ver características →
      </button>
    </div>
  </article>
</template>

<script setup lang="ts">
export interface Personaje {
  id: number
  nombre: string
  alterEgo: string
  categoria: string
  universo: string
  poderes: string
  primeraAparicion: string
  afiliacion: string
  debilidad: string
  descripcion: string
  imagen: string
  video: string
}

defineProps<{
  personaje: Personaje
}>()

defineEmits<{
  select: [personaje: Personaje]
}>()
</script>

<style scoped>
.character-card {
  background: #111;
  border: 1px solid #242424;
  overflow: hidden;
  transition: transform .25s, border-color .25s;
}
.character-card:hover { transform: translateY(-6px); border-color: #555; }
.card-image-wrap { position: relative; height: 330px; overflow: hidden; background: #1b1b1b; }
.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: saturate(.85);
  transition: transform .4s;
}
.character-card:hover .card-image { transform: scale(1.04); }
.universe-tag {
  position: absolute;
  top: 14px;
  left: 14px;
  padding: 6px 8px;
  background: rgba(0,0,0,.75);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 1px;
}
.card-content { padding: 22px; }
.card-category { color: var(--red); font-size: 9px; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase; }
.card-content h3 { margin-top: 5px; font-family: 'Bebas Neue'; font-size: 38px; }
.alter-ego { color: #777; font-size: 11px; margin-bottom: 12px; }
.description { color: #aaa; font-size: 12px; line-height: 1.6; min-height: 58px; }
.mini-stats { display: grid; gap: 8px; margin: 16px 0; color: #ccc; font-size: 10px; }
.mini-stats span { display: flex; gap: 8px; align-items: center; }
.mini-stats b { color: var(--red); }
.details-btn {
  width: 100%;
  padding: 11px;
  border: 1px solid #333;
  background: transparent;
  color: white;
  cursor: pointer;
  font-size: 10px;
  font-weight: 800;
  text-transform: uppercase;
}
.details-btn:hover { border-color: var(--red); }
</style>