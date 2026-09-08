<template>
  <section class="section">
    <div class="section-heading">
      <span class="eyebrow">OPINIONES Y RESEÑAS</span>
      <h2>Creadores y referentes</h2>
      <p>Personas y medios que generan contenido sobre cómics, Marvel y cultura geek.</p>
    </div>

    <div class="influencer-grid">
      <article v-for="influencer in influencers" :key="influencer.nombre" class="influencer-card">
        <div class="avatar">{{ influencer.iniciales }}</div>
        <div>
          <h3>{{ influencer.nombre }}</h3>
          <p>{{ influencer.descripcion }}</p>
          <a :href="influencer.enlace" target="_blank" rel="noopener noreferrer">
            Consultar contenido ↗
          </a>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
const influencers = [
  {
    nombre: 'Variant Comics',
    iniciales: 'VC',
    descripcion: 'Canal dedicado a historias, personajes y curiosidades de cómics.',
    enlace: 'https://www.youtube.com/@VariantComics'
  },
  {
    nombre: 'Comicstorian',
    iniciales: 'C',
    descripcion: 'Contenido narrativo y comentarios relacionados con historias de cómics.',
    enlace: 'https://www.youtube.com/@Comicstorian'
  },
  {
    nombre: 'Marvel Entertainment',
    iniciales: 'M',
    descripcion: 'Canal oficial con avances, entrevistas y contenido de Marvel.',
    enlace: 'https://www.youtube.com/@marvel'
  }
]
</script>

<style scoped>
.influencer-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
.influencer-card { display: flex; gap: 15px; padding: 24px; border: 1px solid #292929; background: #141414; }
.avatar {
  flex: 0 0 52px;
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  background: var(--red);
  font-family: 'Bebas Neue';
  font-size: 20px;
}
.influencer-card h3 { font-size: 15px; }
.influencer-card p { color: #777; font-size: 11px; line-height: 1.5; margin: 8px 0; }
.influencer-card a { color: #fff; font-size: 10px; font-weight: 800; text-decoration: none; }
.influencer-card a:hover { color: var(--red); }

@media (max-width: 900px) {
  .influencer-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 620px) {
  .influencer-grid { grid-template-columns: 1fr; }
}
</style>