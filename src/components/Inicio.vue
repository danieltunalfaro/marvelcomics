
<template>
  <section id="inicio" class="hero">
    <div class="hero-content">
      <span class="eyebrow">MARVEL COMICS • WIKI PERSONAJES</span>

      <h1>Bienvenido a la Wiki Marvel</h1>

      <p>
        Explora algunos de los personajes más representativos de Marvel Comics,
        conoce sus poderes, historias y características principales.
        Aprende cuáles son sus cómics más populares y dónde puedes ver
        más contenido acerca de ellos y sus historias.
      </p>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 720px;
  display: flex;
  align-items: center;
  padding: 130px 9vw 90px;
}

.hero-content {
  max-width: 690px;
}

.eyebrow {
  color: var(--red);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2.5px;
}

h1 {
  margin: 18px 0;
  font-family: 'Bebas Neue';
  font-size: clamp(70px, 10vw, 140px);
  line-height: 0.9;
}

p {
  max-width: 560px;
  color: #bbb;
  line-height: 1.8;
  font-size: 15px;
}

@media (max-width: 620px) {
  .hero {
    min-height: 700px;
    padding: 150px 7vw 70px;
  }

  h1 {
    font-size: 65px;
  }
}
</style>
