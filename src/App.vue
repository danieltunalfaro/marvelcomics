<script setup lang="ts">
import { computed, ref } from 'vue'
import HeaderComponent from './components/HeaderComponent.vue'
import PersonajeCard, { type Personaje } from './components/PersonajeCard.vue'
import Influencers from './components/Influencers.vue'
import spiderman from './assets/spiderman.jpg'
import spider1 from './assets/spider1.jpg'
import spider2 from './assets/spider2.jpg'
import spider3 from './assets/spider3.jpg'
import venom from './assets/venom.jpg'
import venom1 from './assets/venom1.jpg'
import venom2 from './assets/venom2.jpg'
import venom3 from './assets/venom3.jpg'
import hulk from './assets/hulk.jpg'
import hulk1 from './assets/hulk1.jpg'
import hulk2 from './assets/hulk2.jpg'
import hulk3 from './assets/hulk3.jpg'
import thor from './assets/thor.jpg'
import thor1 from './assets/thor1.jpg'
import thor2 from './assets/thor2.jpg'
import thor3 from './assets/thor3.jpg'
import doom from './assets/doom.jpg'
import doom1 from './assets/doom1.jpg'
import doom2 from './assets/doom2.jpg'
import doom3 from './assets/doom3.jpg'
import thanos from './assets/thanos.jpg'
import thanos1 from './assets/thanos1.jpg'
import thanos2 from './assets/thanos2.jpg'
import thanos3 from './assets/thanos3.jpg'

const comicImagesByCharacter: Record<string, string[]> = {
  'Spider-Man': [spider1, spider2, spider3],
  Venom: [venom1, venom2, venom3],
  Hulk: [hulk1, hulk2, hulk3],
  Thor: [thor1, thor2, thor3],
  'Dr. Doom': [doom1, doom2, doom3],
  Thanos: [thanos1, thanos2, thanos3]
}

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
    imagen: spiderman
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
    imagen: venom
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
    imagen: hulk
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
    imagen: thor
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
    imagen: doom
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
    imagen: thanos
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

function getComicImages(personaje: Personaje) {
  return comicImagesByCharacter[personaje.nombre] ?? [personaje.imagen]
}

const comicsDisponibles = computed(() => {
  const base = personajeSeleccionado.value ?? personajes[0]
  return getComicImages(base)
})

function mostrarPersonaje(personaje: Personaje) {
  personajeSeleccionado.value = personaje
  personajeMultimedia.value = { ...personaje, imagen: getComicImages(personaje)[0] }
  setTimeout(() => {
    document.getElementById('caracteristicas')?.scrollIntoView({ behavior: 'smooth' })
  }, 50)
}

function seleccionarComic(index: number) {
  const base = personajeSeleccionado.value ?? personajes[0]
  const images = getComicImages(base)
  personajeMultimedia.value = {
    ...base,
    imagen: images[index] ?? base.imagen,
    nombre: `${base.nombre} • Comic ${index + 1}`
  }
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
        <h2 class="eyebrow">CATÁLOGO</h2>
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
        <h2 class="eyebrow">CARACTERÍSTICAS</h2>
      </div>

      <div v-if="personajeSeleccionado" class="character-detail">
        <div class="detail-top">
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
          </div>
        </div>

        <ul class="feature-list">
          <li class="feature">
            <div class="feature-content">
              <small>PODERES</small>
              <strong>{{ personajeSeleccionado.poderes }}</strong>
            </div>
          </li>
          <li class="feature">
            <div class="feature-content">
              <small>PRIMERA APARICIÓN</small>
              <strong>{{ personajeSeleccionado.primeraAparicion }}</strong>
            </div>
          </li>
          <li class="feature">
            <div class="feature-content">
              <small>AFILIACIÓN</small>
              <strong>{{ personajeSeleccionado.afiliacion }}</strong>
            </div>
          </li>
          <li class="feature">
            <div class="feature-content">
              <small>DEBILIDAD</small>
              <strong>{{ personajeSeleccionado.debilidad }}</strong>
            </div>
          </li>
          <li class="feature">
            <div class="feature-content">
              <small>UNIVERSO</small>
              <strong>{{ personajeSeleccionado.universo }}</strong>
            </div>
          </li>
        </ul>

        <button class="secondary-btn" @click="personajeSeleccionado = null">
          Cerrar ficha
        </button>
      </div>

      <div v-else class="empty-state">
        <div class="empty-icon">+</div>
        <h3>Selecciona un personaje</h3>
        <p>Haz clic en “Ver características” en cualquier tarjeta del catálogo.</p>
      </div>
    </section>

    <section id="multimedia" class="section">
      <div class="section-heading">
        <h2 class="eyebrow">CÓMICS</h2>
        <p>Conoce algunos de los mejores cómics del personaje</p>
      </div>

      <div class="media-layout">
        <div class="media-card">
          <img :src="personajeMultimedia.imagen" :alt="personajeMultimedia.nombre" />
        </div>

        <div class="video-card">
          <div class="comic-gallery">
            <button
              v-for="(image, index) in comicsDisponibles"
              :key="image"
              class="comic-thumb"
              :class="{ active: personajeMultimedia.imagen === image }"
              @click="seleccionarComic(index)"
            >
              <img :src="image" :alt="`Comic ${index + 1}`" />
              <span>Comic {{ index + 1 }}</span>
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
      <strong>MARVEL COMICS WIKI</strong>
      <p>Daniel Emmanuel Tun Alfaro</p>
    </div>
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
  background: transparent;
}

.hero::after {
  content: none;
}

.hero-content {
  max-width: 690px;
  position: relative;
  z-index: 2;
}

.eyebrow {
  color: var(--red);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2.5px;
}

.hero h1 {
  margin: 18px 0;
  font-family: 'Bebas Neue';
  font-size: clamp(70px, 10vw, 140px);
  line-height: .78;
  letter-spacing: 2px;
}

.hero h1 span {
  color: var(--red);
  -webkit-text-stroke: 1px var(--red);
}

.hero p {
  max-width: 560px;
  color: #bbb;
  line-height: 1.8;
  font-size: 15px;
}

.secondary-btn {
  padding: 14px 20px;
  font-weight: 800;
  font-size: 12px;
  text-transform: uppercase;
  cursor: pointer;
  color: #fff;
  background: transparent;
  border: 1px solid #555;
}

.secondary-btn:hover {
  border-color: #fff;
}

.section {
  padding: 100px 8vw;
}

.dark-section {
  background: #0f0f0f;
  padding: 100px 8vw;
}

.section-heading {
  max-width: 650px;
  margin-bottom: 45px;
}

.section-heading h2 {
  margin: 8px 0 10px;
  font-family: 'Bebas Neue';
  font-size: clamp(45px, 6vw, 76px);
  line-height: .9;
}

.section-heading p {
  color: var(--gray);
  line-height: 1.7;
}

.filters {
  display: flex;
  gap: 8px;
  margin-bottom: 25px;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 9px 14px;
  background: transparent;
  color: #aaa;
  border: 1px solid #333;
  cursor: pointer;
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
}

.filter-btn.selected,
.filter-btn:hover {
  color: #fff;
  border-color: var(--red);
  background: rgba(230,36,41,.08);
}

.character-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.character-detail {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  max-width: 100%;
  margin: 0;
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
  width: 100%;
  min-width: 0;
}

.detail-info h2 {
  font-family: 'Bebas Neue';
  font-size: 80px;
  line-height: .85;
  margin: 8px 0;
}

.detail-alter {
  color: #777;
  margin-bottom: 18px;
}

.detail-info > p {
  color: #aaa;
  line-height: 1.7;
  margin-bottom: 25px;
}

.feature-list {
  display: block !important;
  width: 100% !important;
  max-width: none !important;
}

.feature {
  display: block !important;
  width: 100% !important;
  max-width: none !important;
  box-sizing: border-box !important;
}

.feature-content {
  display: block !important;
  width: 100% !important;
  max-width: none !important;
  box-sizing: border-box !important;
}

.feature strong {
  display: block !important;
  width: 100% !important;
  max-width: none !important;
  box-sizing: border-box !important;

  word-break: normal !important;
  overflow-wrap: normal !important;
  white-space: normal !important;
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

.media-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
}

.media-card,
.video-card {
  position: relative;
  min-height: 450px;
  background: #111;
  border: 1px solid #252525;
  overflow: hidden;
}

.media-card img {
  width: 100%;
  height: 100%;
  min-height: 450px;
  object-fit: cover;
}

.comic-gallery {
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 100%;
  padding: 20px;
}

.comic-thumb {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #333;
  background: rgba(255,255,255,0.02);
  cursor: pointer;
  color: #fff;
  text-align: left;
}

.comic-thumb img {
  width: 96px;
  height: 120px;
  object-fit: cover;
  border: 1px solid rgba(255,255,255,0.12);
}

.comic-thumb span {
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.2px;
  text-transform: uppercase;
}

.comic-thumb.active,
.comic-thumb:hover {
  border-color: var(--red);
  background: rgba(230,36,41,.06);
}

footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px 8vw;
  border-top: 1px solid #292929;
  color: #666;
  font-size: 10px;
}

footer strong {
  color: #fff;
  font-family: 'Bebas Neue';
  font-size: 20px;
}

footer p {
  margin-top: 3px;
}

@media (max-width: 900px) {
  .character-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .character-detail,
  .media-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 620px) {
  .hero {
    min-height: 700px;
    padding: 150px 7vw 70px;
  }

  .section,
  .dark-section {
    padding: 70px 6vw;
  }

  .character-grid {
    grid-template-columns: 1fr;
  }

  .detail-info h2 {
    font-size: 60px;
  }

  footer {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
}
</style>