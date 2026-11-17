<script setup lang="ts">
import { ref, computed } from 'vue';
import { comics } from '../constants/comics';
import { agregarAlCarrito } from '../constants/carrito';

const carrito = ref<typeof comics>([]);

const cantidadCarrito = computed(() => {
  return carrito.value.length;
});

const totalCompra = computed(() => {
  return carrito.value.reduce((total, comic) => {
    return total + comic.precio;
  }, 0);
});
</script>

<template>
  <div class="tienda">

    <div class="encabezado">
      <div>
        <h1>Tienda de Cómics</h1>
        <p>Explora y adquiere tus cómics favoritos</p>
      </div>     
    </div>

    <div class="catalogo-tienda">

      <div
        v-for="comic in comics"
        :key="comic.id"
        class="comic-card"
      >

        <div class="comic-imagen">
          <img
            :src="comic.imagen"
            :alt="comic.nombre"
          />
        </div>

        <div class="comic-informacion">

          <h2>{{ comic.nombre }}</h2>

          <p>
            <strong>Autor:</strong>
            {{ comic.autor }}
          </p>

          <p>
            <strong>Editorial:</strong>
            {{ comic.editorial }}
          </p>

          <p>
            <strong>Clasificación:</strong>
            {{ comic.clasificacion }}
          </p>

          <p>
            <strong>Fecha de publicación:</strong>
            {{ comic.fechaPublicacion }}
          </p>

          <div class="comic-pie">

            <h3>${{ comic.precio }} MXN</h3>

            <button @click="agregarAlCarrito(comic)">
              Añadir al carrito
            </button>

          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<style scoped>
.tienda {
  max-width: 1200px;
  margin: 0 auto;
  padding: 35px 25px;
  color: white;
}

/* Encabezado */
.encabezado {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 35px;
}

.encabezado h1 {
  color: #e62429;
  font-size: 32px;
  margin-bottom: 10px;
}

.encabezado p {
  color: #cccccc;
  margin: 0;
}

/* Carrito */
.carrito {
  display: flex;
  align-items: center;
  gap: 15px;
  background-color: #1c1c1c;
  padding: 15px 20px;
  border-radius: 10px;
  border: 1px solid #333;
}

.icono-carrito {
  font-size: 35px;
}

.carrito h3 {
  color: #e62429;
  font-size: 16px;
  margin: 5px 0;
}

/* Catálogo */
.catalogo-tienda {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 25px;
}

/* Tarjeta del cómic */
.comic-card {
  background-color: #181818;
  border: 1px solid #333;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s, border-color 0.3s;
}

.comic-card:hover {
  transform: translateY(-5px);
  border-color: #e62429;
}

/* Imagen */
.comic-imagen {
  width: 100%;
  height: 350px;
  background-color: #252525;
}

.comic-imagen img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* Información */
.comic-informacion {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.comic-informacion h2 {
  color: #e62429;
  font-size: 20px;
  margin: 0 0 15px;
}

.comic-informacion p {
  color: #cccccc;
  font-size: 14px;
  margin: 7px 0;
  line-height: 1.5;
}

.comic-informacion strong {
  color: white;
}

/* Pie de tarjeta */
.comic-pie {
  margin-top: auto;
  padding-top: 20px;
}

.comic-pie h3 {
  color: #ffffff;
  font-size: 24px;
  margin-bottom: 15px;
}

.comic-pie button {
  width: 100%;
  background-color: #e62429;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

.comic-pie button:hover {
  background-color: #b71c1c;
}

/* Diseño responsivo */
@media (max-width: 900px) {
  .catalogo-tienda {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .encabezado {
    flex-direction: column;
    align-items: flex-start;
  }

  .catalogo-tienda {
    grid-template-columns: 1fr;
  }
}
</style>
