<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue'
</script>

<template>
  <div class="app">
    <HeaderComponent />

    <main>
      <RouterView />
    </main>

    <footer class="footer">
      <p>Universo Marvel</p>
      <p>Proyecto desarrollado con Vue 3 y TypeScript</p>
    </footer>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background-color: #101010;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

.footer {
  background-color: #151515;
  border-top: 2px solid #e62429;
  padding: 25px 15px;
  text-align: center;
  color: #cccccc;
}

.footer p {
  margin: 8px 0;
}

.footer p:first-child {
  color: #e62429;
  font-size: 20px;
  font-weight: bold;
}
</style>
