<template>
  <header class="header">
    <div class="brand">
      <span class="brand-mark">M</span>
      <div>
        <strong>MARVEL</strong>
        <small>Wiki Personajes</small>
      </div>
    </div>

    <nav class="nav">
      <button
        v-for="item in menu"
        :key="item.id"
        class="nav-link"
        :class="{ active: activeSection === item.id }"
        @click="$emit('navigate', item.id)"
      >
        {{ item.label }}
      </button>
    </nav>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  activeSection: string
}>()

defineEmits<{
  navigate: [id: string]
}>()

const menu = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'catalogo', label: 'Catálogo' },
  { id: 'caracteristicas', label: 'Características' },
  { id: 'multimedia', label: 'Multimedia' },
  { id: 'influencers', label: 'Influencers' }
]
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 76px;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5vw;
  background: rgba(9, 9, 9, 0.94);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--line);
}

.brand { display: flex; align-items: center; gap: 10px; }
.brand-mark {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  background: var(--red);
  font-family: 'Bebas Neue';
  font-size: 28px;
  transform: skew(-8deg);
}
.brand strong { display: block; font-family: 'Bebas Neue'; font-size: 22px; letter-spacing: 1px; }
.brand small { color: #999; font-size: 8px; letter-spacing: 2px; }
.nav { display: flex; gap: 5px; }
.nav-link {
  border: 0;
  background: transparent;
  color: #aaa;
  padding: 10px 12px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  transition: .2s;
}
.nav-link:hover, .nav-link.active { color: #fff; }
.nav-link.active { border-bottom: 2px solid var(--red); }

@media (max-width: 900px) {
  .nav-link { padding: 10px 6px; font-size: 9px; }
}

@media (max-width: 620px) {
  .header {
    height: auto;
    min-height: 70px;
    padding: 10px 5vw;
    flex-wrap: wrap;
  }
  .nav { width: 100%; overflow-x: auto; order: 2; }
}
</style>