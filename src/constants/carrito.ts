import { ref } from 'vue';
import { comics } from './comics';

export const carrito = ref<typeof comics>([]);

export function agregarAlCarrito(comic: typeof comics[number]) {
  carrito.value.push(comic);
}

export function eliminarDelCarrito(id: number) {
  const indice = carrito.value.findIndex(
    comic => comic.id === id
  );

  if (indice !== -1) {
    carrito.value.splice(indice, 1);
  }
}

export function vaciarCarrito() {
  carrito.value = [];
}
