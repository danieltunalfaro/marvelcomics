<script setup lang="ts">
import { computed, ref } from 'vue'
import HeaderComponent from './components/HeaderComponent.vue'
import PersonajeCard, { type Personaje } from './components/PersonajeCard.vue'
import Influencers from './components/Influencers.vue'
import spiderman from './assets/spiderman.jpg'
import venom from './assets/venom.jpg'
import hulk from './assets/hulk.jpg'
import thor from './assets/thor.jpg'
import doom from './assets/doom.jpg'
import thanos from './assets/thanos.jpg'

const personajes: Personaje[] = [
  {
    id: 1,
    nombre: 'Spider-Man',
    alterEgo: 'Peter Parker',
    categoria: 'Héroe',
    universo: 'Tierra-616',
    poderes: 'Fuerza, agilidad, sentido arácnido',
    primeraAparicion: 'Amazing Fantasy #15 (1962)',
    afiliacion: 'Avengers',
    debilidad: 'Agotamiento y vulnerabilidad física',
    descripcion: 'Un joven héroe de Nueva York que utiliza sus poderes para proteger a otras personas.',
    imagen: spiderman,
    video: '/videos/spiderman.mp4'
  },
  {
    id: 2,
    nombre: 'Venom',
    alterEgo: 'Eddie Brock',
    categoria: 'Villano',
    universo: 'Tierra-616',
    poderes: 'Fuerza, agilidad y telarañas',
    primeraAparicion: 'The Amazing Spider-Man #300 (1988)',
    afiliacion: 'Ninguna',
    debilidad: 'Sonido y fuego',
    descripcion: 'Un simbionte alienígena que se une a Eddie Brock, convirtiéndolo en un formidable enemigo de Spider-Man.',
    imagen: venom,
    video: '/videos/ironman.mp4'
  },
  {
    id: 3,
    nombre: 'Hulk',
    alterEgo: 'Bruce Banner',
    categoria: 'Héroe',
    universo: 'Tierra-616',
    poderes: 'Fuerza, resistencia y regeneración',
    primeraAparicion: 'The Incredible Hulk #1 (1962)',
    afiliacion: 'Avengers',
    debilidad: 'Control emocional',
    descripcion: 'Bruce Banner se transforma en Hulk, una de las entidades físicamente más poderosas de Marvel.',
    imagen: hulk,
    video: '/videos/hulk.mp4'
  },
  {
    id: 4,
    nombre: 'Thor',
    alterEgo: 'Thor Odinson',
    categoria: 'Héroe',
    universo: 'Tierra-616',
    poderes: 'Fuerza, longevidad y control del rayo',
    primeraAparicion: 'Journey into Mystery #83 (1962)',
    afiliacion: 'Avengers',
    debilidad: 'Conflictos emocionales y límites mágicos',
    descripcion: 'Dios asgardiano del trueno y uno de los principales defensores de la Tierra.',
    imagen: thor,
    video: '/videos/thor.mp4'
  },
  {
    id: 5,
    nombre: 'Dr. Doom',
    alterEgo: 'Victor von Doom',
    categoria: 'Villano',
    universo: 'Tierra-616',
    poderes: 'Inteligencia, tecnología y poderes mágicos',
    primeraAparicion: 'Fantastic Four #53 (1964)',
    afiliacion: 'Ninguna',
    debilidad: 'Arrogancia y dependencia de sus máquinas',
    descripcion: 'Un genio científico y hechicero que gobierna Latveria y es uno de los enemigos más formidables de los héroes de Marvel.',
    imagen: doom,
    video: '/videos/wolverine.mp4'
  },
  {
    id: 6,
    nombre: 'Thanos',
    alterEgo: 'Thanos',
    categoria: 'Villano',
    universo: 'Tierra-616',
    poderes: 'Fuerza, resistencia y manipulación de energía',
    primeraAparicion: 'Iron Man Vol. 1 #55 ',
    afiliacion: 'Ninguna',
    debilidad: 'Obsesión por la muerte y la búsqueda de las Gemas del Infinito',
    descripcion: 'Un titán loco obsesionado con el equilibrio del universo, conocido por su búsqueda de las Gemas del Infinito.',
    imagen: thanos,
    video: '/videos/capitan-america.mp4'
  }
]

const activeSection = ref('inicio')
const categoriaActual = ref('Todos')
const personajeSeleccionado = ref<Personaje | null>(personajes[0])
const personajeMultimedia = ref<Personaje>(personajes[0])

const categorias = ['Todos', 'Héroe', 'Villano']


const personajesFiltrados = computed(() => {
  if (categoriaActual.value === 'Todos') return personajes
  return personajes.filter((personaje) => personaje.categoria === categoriaActual.value)
})


function mostrarPersonaje(personaje: Personaje) {
  personajeSeleccionado.value = personaje
  setTimeout(() => {
    document.getElementById('caracteristicas')?.scrollIntoView({ behavior: 'smooth' })
  }, 50)
}


function scrollToSection(id: string) {
  activeSection.value = id
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>



<template>
  <HeaderComponent :active-section="activeSection" @navigate="scrollToSection" />

  <main>
    <section id="inicio" class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <span class="eyebrow">MARVEL COMICS • WIKI PERSONAJES</span>
        <h1>Bienvenido a la Wiki Marvel</h1>
        <p>
          Explora algunos de los personajes más representativos de Marvel Comics,
          conoce sus poderes, historias y características principales. Aprende acerca
          de cuales son sus cómics más populares y en donde puedes ver más contenido
          acerca de ellos y sus historias
        </p>
       
      </div>

    </section>

    <section id="catalogo" class="section">
      <div class="section-heading">
        <span class="eyebrow">CATÁLOGO</span>
        <h2>Personajes destacados</h2>
        <p>
          Selecciona un personaje para consultar sus principales características.
        </p>
      </div>

      <div class="filters">
        <button
          v-for="categoria in categorias"
          :key="categoria"
          class="filter-btn"
          :class="{ selected: categoriaActual === categoria }"
          @click="categoriaActual = categoria"
        >
          {{ categoria }}
        </button>
      </div>

      <div class="character-grid">
        <PersonajeCard
          v-for="personaje in personajesFiltrados"
          :key="personaje.id"
          :personaje="personaje"
          @select="mostrarPersonaje"
        />
      </div>
    </section>

    <section id="caracteristicas" class="section dark-section">
      <div class="section-heading">
        <span class="eyebrow">CARACTERÍSTICAS</span>
        <h2>Ficha del personaje</h2>
        <p>La información se despliega mediante una función al seleccionar una tarjeta.</p>
      </div>

      <div v-if="personajeSeleccionado" class="character-detail">
        <img
          :src="personajeSeleccionado.imagen"
          :alt="personajeSeleccionado.nombre"
          class="detail-image"
        />

        <div class="detail-info">
          <span class="eyebrow">{{ personajeSeleccionado.categoria }}</span>
          <h2>{{ personajeSeleccionado.nombre }}</h2>
          <p class="detail-alter">{{ personajeSeleccionado.alterEgo }}</p>
          <p>{{ personajeSeleccionado.descripcion }}</p>

          <div class="feature-list">
            <div class="feature">
              <span>01</span>
              <div><small>PODERES</small><strong>{{ personajeSeleccionado.poderes }}</strong></div>
            </div>
            <div class="feature">
              <span>02</span>
              <div><small>PRIMERA APARICIÓN</small><strong>{{ personajeSeleccionado.primeraAparicion }}</strong></div>
            </div>
            <div class="feature">
              <span>03</span>
              <div><small>AFILIACIÓN</small><strong>{{ personajeSeleccionado.afiliacion }}</strong></div>
            </div>
            <div class="feature">
              <span>04</span>
              <div><small>DEBILIDAD</small><strong>{{ personajeSeleccionado.debilidad }}</strong></div>
            </div>
            <div class="feature">
              <span>05</span>
              <div><small>UNIVERSO</small><strong>{{ personajeSeleccionado.universo }}</strong></div>
            </div>
          </div>

          <button class="secondary-btn" @click="personajeSeleccionado = null">
            Cerrar ficha
          </button>
        </div>
      </div>

      <div v-else class="empty-state">
        <div class="empty-icon">+</div>
        <h3>Selecciona un personaje</h3>
        <p>Haz clic en “Ver características” en cualquier tarjeta del catálogo.</p>
      </div>
    </section>

    <section id="multimedia" class="section">
      <div class="section-heading">
        <span class="eyebrow">03 / MULTIMEDIA</span>
        <h2>Contenido visual</h2>
        <p>Las imágenes y clips se definen mediante objetos dentro del arreglo de personajes.</p>
      </div>

      <div class="media-layout">
        <div class="media-card">
          <img :src="personajeMultimedia.imagen" :alt="personajeMultimedia.nombre" />
          <div class="media-caption">
            <span>IMAGEN</span>
            <h3>{{ personajeMultimedia.nombre }}</h3>
          </div>
        </div>

        <div class="video-card">
          <div class="video-placeholder">
            <div class="play">▶</div>
            <h3>Clip multimedia</h3>
            <p>
              Para evitar depender de material con copyright dentro del proyecto,
              puedes colocar un clip propio en <code>public/videos</code>.
            </p>
          </div>
          <div class="video-controls">
            <button
              v-for="personaje in personajes.slice(0, 3)"
              :key="personaje.id"
              @click="personajeMultimedia = personaje"
              :class="{ active: personaje.id === personajeMultimedia.id }"
            >
              {{ personaje.nombre }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <section id="influencers" class="dark-section">
      <Influencers />
    </section>
  </main>

  <footer>
    <div>
      <strong>MARVEL COMICS HUB</strong>
      <p>Proyecto académico desarrollado con Vue 3.</p>
    </div>
    <span>© {{ new Date().getFullYear() }} • Uso educativo</span>
  </footer>
</template>


<style>
.hero {
  position: relative;
  min-height: 720px;
  display: flex;
  align-items: center;
  padding: 130px 9vw 90px;
  overflow: hidden;
  background: linear-gradient(90deg, #090909 0%, rgba(9,9,9,.88) 45%, rgba(9,9,9,.25) 100%), radial-gradient(circle at 75% 45%, rgba(230,36,41,.25), transparent 32%), repeating-linear-gradient(115deg, #0b0b0b 0 2px, #101010 2px 4px);
}
.hero::after { content: ''; position: absolute; right: -100px; bottom: -180px; width: 620px; height: 620px; border: 70px solid rgba(230,36,41,.08); border-radius: 50%; }
.hero-content { max-width: 690px; position: relative; z-index: 2; }
.eyebrow { color: var(--red); font-size: 11px; font-weight: 800; letter-spacing: 2.5px; }
.hero h1 { margin: 18px 0; font-family: 'Bebas Neue'; font-size: clamp(70px, 10vw, 140px); line-height: .78; letter-spacing: 2px; }
.hero h1 span { color: var(--red); -webkit-text-stroke: 1px var(--red); }
.hero p { max-width: 560px; color: #bbb; line-height: 1.8; font-size: 15px; }
.hero-actions { display: flex; gap: 12px; margin-top: 30px; }
.primary-btn, .secondary-btn { border: 0; padding: 14px 20px; font-weight: 800; font-size: 12px; text-transform: uppercase; cursor: pointer; transition: .2s; }
.primary-btn { color: #fff; background: var(--red); }
.primary-btn:hover { transform: translateY(-2px); background: #ff3035; }
.secondary-btn { color: #fff; background: transparent; border: 1px solid #555; }
.secondary-btn:hover { border-color: #fff; }
.hero-badge { position: absolute; right: 9vw; bottom: 90px; z-index: 2; display: flex; align-items: center; gap: 15px; border-left: 2px solid var(--red); padding-left: 15px; }
.hero-badge strong { font-family: 'Bebas Neue'; font-size: 60px; }
.hero-badge span { font-size: 10px; font-weight: 800; line-height: 1.5; }
.section { padding: 100px 8vw; }
.dark-section { background: #0f0f0f; padding: 100px 8vw; }
.section-heading { max-width: 650px; margin-bottom: 45px; }
.section-heading h2 { margin: 8px 0 10px; font-family: 'Bebas Neue'; font-size: clamp(45px, 6vw, 76px); line-height: .9; }
.section-heading p { color: var(--gray); line-height: 1.7; }
.filters { display: flex; gap: 8px; margin-bottom: 25px; flex-wrap: wrap; }
.filter-btn { padding: 9px 14px; background: transparent; color: #aaa; border: 1px solid #333; cursor: pointer; font-size: 11px; font-weight: 800; text-transform: uppercase; }
.filter-btn.selected, .filter-btn:hover { color: #fff; border-color: var(--red); background: rgba(230,36,41,.08); }
.character-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 22px; }
.character-detail { display: grid; grid-template-columns: minmax(300px, .8fr) 1.2fr; gap: 50px; align-items: center; max-width: 1100px; }
.detail-image { width: 100%; max-height: 600px; object-fit: cover; background: #181818; }
.detail-info h2 { font-family: 'Bebas Neue'; font-size: 80px; line-height: .85; margin: 8px 0; }
.detail-alter { color: #777; margin-bottom: 18px; }
.detail-info > p { color: #aaa; line-height: 1.7; margin-bottom: 25px; }
.feature-list { border-top: 1px solid #292929; margin-bottom: 25px; }
.feature { display: grid; grid-template-columns: 40px 1fr; padding: 14px 0; border-bottom: 1px solid #292929; }
.feature > span { color: var(--red); font-family: 'Bebas Neue'; font-size: 18px; }
.feature small { display: block; color: #666; font-size: 8px; letter-spacing: 1.5px; margin-bottom: 3px; }
.feature strong { font-size: 12px; }
.empty-state { min-height: 300px; display: grid; place-items: center; text-align: center; border: 1px dashed #333; padding: 40px; }
.empty-icon { color: var(--red); font-size: 40px; }
.empty-state h3 { font-family: 'Bebas Neue'; font-size: 32px; }
.empty-state p { color: #777; }
.media-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 25px; }
.media-card, .video-card { position: relative; min-height: 450px; background: #111; border: 1px solid #252525; overflow: hidden; }
.media-card img { width: 100%; height: 100%; min-height: 450px; object-fit: cover; }
.media-caption { position: absolute; bottom: 0; left: 0; right: 0; padding: 35px 25px 25px; background: linear-gradient(transparent, rgba(0,0,0,.9)); }
.media-caption span { color: var(--red); font-size: 9px; font-weight: 800; }
.media-caption h3 { font-family: 'Bebas Neue'; font-size: 42px; }
.video-placeholder { min-height: 385px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 40px; background: linear-gradient(rgba(9,9,9,.82), rgba(9,9,9,.92)), repeating-linear-gradient(45deg, #141414 0 8px, #101010 8px 16px); }
.play { width: 70px; height: 70px; display: grid; place-items: center; margin-bottom: 20px; border: 1px solid var(--red); border-radius: 50%; color: var(--red); }
.video-placeholder h3 { font-family: 'Bebas Neue'; font-size: 35px; }
.video-placeholder p { max-width: 430px; color: #777; font-size: 12px; line-height: 1.6; margin-top: 10px; }
.video-controls { display: flex; gap: 5px; padding: 15px; border-top: 1px solid #292929; overflow-x: auto; }
.video-controls button { white-space: nowrap; padding: 8px 12px; color: #aaa; border: 1px solid #333; background: transparent; cursor: pointer; font-size: 10px; }
.video-controls button.active, .video-controls button:hover { color: white; border-color: var(--red); }
footer { display: flex; justify-content: space-between; align-items: center; padding: 35px 8vw; border-top: 1px solid #292929; color: #666; font-size: 10px; }
footer strong { color: #fff; font-family: 'Bebas Neue'; font-size: 20px; }
footer p { margin-top: 3px; }

@media (max-width: 900px) {
  .character-grid { grid-template-columns: repeat(2, 1fr); }
  .character-detail, .media-layout { grid-template-columns: 1fr; }
}
@media (max-width: 620px) {
  .hero { min-height: 700px; padding: 150px 7vw 70px; }
  .hero-badge { display: none; }
  .hero-actions { flex-direction: column; }
  .section, .dark-section { padding: 70px 6vw; }
  .character-grid { grid-template-columns: 1fr; }
  .detail-info h2 { font-size: 60px; }
  footer { flex-direction: column; gap: 15px; text-align: center; }
}
</style>