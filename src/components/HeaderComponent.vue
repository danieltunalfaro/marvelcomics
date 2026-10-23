<script setup lang="ts">
import { useRoute } from 'vue-router'
import logo from '../assets/logo.png'

const route = useRoute()

const enlaces = [
  { nombre: 'Inicio', ruta: '/' },
  { nombre: 'Catálogo', ruta: '/catalogo' },
  { nombre: 'Características', ruta: '/caracteristicas' },
  { nombre: 'Multimedia', ruta: '/multimedia' },
  { nombre: 'Influencers', ruta: '/influencers' },
  { nombre: 'Soporte', ruta: '/soporte' }
]
</script>

<template>
  <header class="header">
    <div class="contenedor">
      <RouterLink to="/" class="logo">
        <img :src="logo" alt="Marvel" />
      </RouterLink>

      <nav class="navegacion">
        <RouterLink
          v-for="enlace in enlaces"
          :key="enlace.ruta"
          :to="enlace.ruta"
          class="enlace"
          :class="{ activo: route.path === enlace.ruta }"
        >
          {{ enlace.nombre }}
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  background-color: #151515;
  border-bottom: 2px solid #e62429;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.contenedor {
  max-width: 1200px;
  margin: 0 auto;
  padding: 12px 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
}

.logo {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.logo img {
  width: 90px;
  height: auto;
  object-fit: contain;
}

.navegacion {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
}

.enlace {
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
  transition: color 0.3s;
}

.enlace:hover,
.enlace.activo {
  color: #e62429;
}

@media (max-width: 700px) {
  .contenedor {
    flex-direction: column;
    gap: 15px;
  }

  .navegacion {
    gap: 15px;
  }
}
</style>
