<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import {
  carrito,
  eliminarDelCarrito,
  vaciarCarrito
} from '../constants/carrito';

const comicsCarrito = computed(() => {
  const agrupados = new Map();

  carrito.value.forEach(comic => {
    if (agrupados.has(comic.id)) {
      agrupados.get(comic.id).cantidad++;
    } else {
      agrupados.set(comic.id, {
        ...comic,
        cantidad: 1
      });
    }
  });

  return Array.from(agrupados.values());
});

const totalCompra = computed(() => {
  return comicsCarrito.value.reduce((total, comic) => {
    return total + comic.precio * comic.cantidad;
  }, 0);
});

const cantidadTotal = computed(() => {
  return carrito.value.length;
});

function quitarComic(id: number) {
  eliminarDelCarrito(id);
}
</script>

<template>
  <div class="carrito-view">

    <div class="encabezado">
      <h1>Mi carrito</h1>
      <p>Revisa los cómics que has agregado a tu compra.</p>
    </div>

    <div v-if="carrito.length === 0" class="carrito-vacio">
      <h2>Tu carrito está vacío</h2>
      <p>Aún no has agregado ningún cómic.</p>

      <RouterLink to="/tienda" class="btn-tienda">
        Ir a la tienda
      </RouterLink>
    </div>

    <div v-else class="contenido-carrito">

      <div class="lista-comics">

        <div
          v-for="comic in comicsCarrito"
          :key="comic.id"
          class="comic-carrito"
        >

          <div class="comic-imagen">
            <img
              :src="comic.imagen"
              :alt="comic.nombre"
            />
          </div>

          <div class="comic-info">

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
              <strong>Precio:</strong>
              ${{ comic.precio }} MXN
            </p>

            <p>
              <strong>Cantidad:</strong>
              {{ comic.cantidad }}
            </p>

            <h3>
              Subtotal: ${{ comic.precio * comic.cantidad }} MXN
            </h3>

            <button
              class="btn-eliminar"
              @click="quitarComic(comic.id)"
            >
              Eliminar
            </button>

          </div>

        </div>

      </div>

      <div class="resumen">

        <h2>Resumen de compra</h2>

        <div class="resumen-dato">
          <span>Artículos:</span>
          <span>{{ cantidadTotal }}</span>
        </div>

        <div class="resumen-dato total">
          <span>Total:</span>
          <span>${{ totalCompra }} MXN</span>
        </div>

        <button
          class="btn-vaciar"
          @click="vaciarCarrito"
        >
          Vaciar carrito
        </button>

        <button class="btn-comprar">
          Finalizar compra
        </button>

      </div>

    </div>

  </div>
</template>

<style scoped>
.carrito-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 35px 25px;
  color: white;
}

.encabezado {
  margin-bottom: 30px;
}

.encabezado h1 {
  color: #e62429;
  font-size: 32px;
  margin-bottom: 10px;
}

.encabezado p {
  color: #ccc;
}

/* Carrito vacío */
.carrito-vacio {
  text-align: center;
  background-color: #181818;
  padding: 50px 20px;
  border-radius: 10px;
}

.carrito-vacio h2 {
  color: #e62429;
}

.carrito-vacio p {
  color: #ccc;
  margin-bottom: 25px;
}

.btn-tienda {
  display: inline-block;
  background-color: #e62429;
  color: white;
  padding: 12px 20px;
  border-radius: 6px;
  text-decoration: none;
}

/* Distribución */
.contenido-carrito {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 25px;
  align-items: start;
}

/* Lista de cómics */
.lista-comics {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.comic-carrito {
  display: flex;
  gap: 20px;
  background-color: #181818;
  border: 1px solid #333;
  padding: 20px;
  border-radius: 10px;
}

.comic-imagen {
  width: 130px;
  height: 180px;
  flex-shrink: 0;
}

.comic-imagen img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.comic-info {
  flex: 1;
}

.comic-info h2 {
  color: #e62429;
  font-size: 20px;
  margin-top: 0;
}

.comic-info p {
  color: #ccc;
  font-size: 14px;
  margin: 8px 0;
}

.comic-info h3 {
  color: white;
}

.btn-eliminar {
  background-color: #444;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 6px;
  cursor: pointer;
}

.btn-eliminar:hover {
  background-color: #b71c1c;
}

/* Resumen */
.resumen {
  background-color: #181818;
  border: 1px solid #333;
  border-radius: 10px;
  padding: 25px;
  position: sticky;
  top: 110px;
}

.resumen h2 {
  color: #e62429;
  margin-top: 0;
}

.resumen-dato {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
  color: #ccc;
}

.total {
  border-top: 1px solid #444;
  padding-top: 15px;
  font-size: 20px;
  font-weight: bold;
  color: white;
}

.btn-vaciar,
.btn-comprar {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 6px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  margin-top: 12px;
}

.btn-vaciar {
  background-color: #444;
}

.btn-vaciar:hover {
  background-color: #666;
}

.btn-comprar {
  background-color: #e62429;
}

.btn-comprar:hover {
  background-color: #b71c1c;
}

@media (max-width: 800px) {
  .contenido-carrito {
    grid-template-columns: 1fr;
  }

  .resumen {
    position: static;
  }
}

@media (max-width: 500px) {
  .comic-carrito {
    flex-direction: column;
  }

  .comic-imagen {
    width: 100%;
    height: 250px;
  }
}
</style>
