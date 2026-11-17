<script setup lang="ts">
import { useRoute, RouterLink } from 'vue-router'
import { carrito } from '../constants/carrito'

const route = useRoute()
</script>

<template>
  <header class="header">
    <div class="contenedor">

      <RouterLink to="/" class="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=original"
          alt="Marvel"
        />
      </RouterLink>

      <nav class="navegacion">

        <RouterLink
          to="/"
          class="enlace"
          :class="{ activo: route.path === '/' }"
        >
          Inicio
        </RouterLink>

        <div class="dropdown">

          <RouterLink
            to="/catalogo"
            class="enlace"
            :class="{ activo: route.path === '/catalogo' }"
          >
            Personajes
          </RouterLink>

          <div class="dropdown-menu">

            <RouterLink
              to="/catalogo?compania=marvel"
              class="dropdown-item"
            >
              Marvel
            </RouterLink>

            <RouterLink
              to="/catalogo?compania=dc"
              class="dropdown-item"
            >
              DC Comics
            </RouterLink>

            <RouterLink
              to="/catalogo?compania=image"
              class="dropdown-item"
            >
              Image Comics
            </RouterLink>

          </div>
        </div>


        <RouterLink
          to="/tienda"
          class="enlace"
          :class="{ activo: route.path === '/tienda' }"
        >
          Tienda
        </RouterLink>


        <RouterLink
          to="/calendario"
          class="enlace"
          :class="{ activo: route.path === '/calendario' }"
        >
          Calendario
        </RouterLink>


        <RouterLink
          to="/soporte"
          class="enlace"
          :class="{ activo: route.path === '/soporte' }"
        >
          Soporte
        </RouterLink>


        <RouterLink
          to="/influencers"
          class="enlace"
          :class="{ activo: route.path === '/influencers' }"
        >
          Inicio de sesión
        </RouterLink>


        <RouterLink
          to="/carrito"
          class="carrito-nav"
          :class="{ activo: route.path === '/carrito' }"
        >
          <span class="icono-carrito">🛒</span>

          <span class="contador-carrito">
            {{ carrito.length }}
          </span>
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
  flex: 1;
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

/* Menú desplegable */
.dropdown {
  position: relative;
  display: flex;
  align-items: center;
  height: 40px;
}

.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 160px;
  background-color: #151515;
  border: 1px solid #333;
  border-top: 2px solid #e62429;
  border-radius: 0 0 6px 6px;
  padding: 8px 0;
  z-index: 1000;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

.dropdown-item {
  display: block;
  color: white;
  text-decoration: none;
  padding: 12px 15px;
  font-size: 14px;
  transition: background-color 0.3s;
}

.dropdown-item:hover,
.dropdown-item.router-link-active {
  background-color: #b71c1c;
  color: white;
}

/* Carrito */
.carrito-nav {
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-decoration: none;
  background-color: #252525;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #444;
  transition: background-color 0.3s;
  flex-shrink: 0;
}

.carrito-nav:hover,
.carrito-nav.activo {
  background-color: #b71c1c;
}

.icono-carrito {
  font-size: 22px;
}

.contador-carrito {
  color: white;
  background-color: #e62429;
  font-size: 12px;
  font-weight: bold;
  min-width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 700px) {
  .contenedor {
    flex-direction: column;
    gap: 15px;
  }

  .navegacion {
    width: 100%;
    gap: 15px;
  }

  .carrito-nav {
    margin-left: auto;
  }
}
</style>
