<script setup lang="ts">
const influencers = [
  {
    nombre: 'De Todo Un Paco',
    imagen: '/src/assets/influencer1.jpg',
    descripcion: 'Canal dedicado a historias, personajes y curiosidades de cómics.',
    enlace: 'https://www.youtube.com/@detodounpaco'
  },
  {
    nombre: 'The Top Comics',
    imagen: '/src/assets/influencer2.jpg',
    descripcion: 'Narración de comics y noticias del universo de Marvel.',
    enlace: 'https://www.youtube.com/@TheTopComicsOficial'
  },
  {
    nombre: 'Marvel Entertainment',
    imagen: '/src/assets/influencer3.jpg',
    descripcion: 'Canal oficial con avances, entrevistas y contenido de Marvel.',
    enlace: 'https://www.youtube.com/@marvel'
  }
]
</script>




<template>
  <section class="section">
    <div class="section-heading">
      <h2 class="eyebrow">CREADORES DE CONTENIDO</h2>
      <p>Personas y canales que hacen contenido acerca de cómics y Marvel en general</p>
    </div>

    <div class="influencer-grid">
      <article v-for="influencer in influencers" :key="influencer.nombre" class="influencer-card">
        <img :src="influencer.imagen" :alt="influencer.nombre" class="avatar" />
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



<style scoped>
.influencer-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
.influencer-card { display: flex; gap: 15px; padding: 24px; border: 1px solid #292929; background: #141414; }
.avatar {
  flex: 0 0 52px;
  width: 52px;
  height: 52px;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid #3a3a3a;
  background: #1b1b1b;
  display: block;
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