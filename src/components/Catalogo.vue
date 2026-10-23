
<script setup lang="ts">
import PersonajeCard, {
  type Personaje
} from './PersonajeCard.vue'

defineProps<{
  personajes: Personaje[]
  categoriaActual: string
}>()

const emit = defineEmits<{
  cambiarCategoria: [categoria: string]
  seleccionar: [personaje: Personaje]
}>()

const categorias = ['Todos', 'Héroe', 'Villano']
</script>

<template>
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
        @click="emit('cambiarCategoria', categoria)"
      >
        {{ categoria }}
      </button>
    </div>

    <div class="character-grid">
      <PersonajeCard
        v-for="personaje in personajes"
        :key="personaje.id"
        :personaje="personaje"
        @select="emit('seleccionar', $event)"
      />
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 100px 8vw;
}

.section-heading {
  max-width: 650px;
  margin-bottom: 45px;
}

.section-heading h2 {
  margin: 8px 0 10px;
}

.eyebrow {
  color: var(--red);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2.5px;
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
  background: rgba(230, 36, 41, 0.08);
}

.character-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

@media (max-width: 900px) {
  .character-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 620px) {
  .section {
    padding: 70px 6vw;
  }

  .character-grid {
    grid-template-columns: 1fr;
  }
}
</style>
