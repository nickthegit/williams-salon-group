<template>
  <section>
    <header>
      <h1>Headline here</h1>
      <h2>Sub header here Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit libero eos omnis, aliquam nihil quas quod vitae! </h2>
      <nuxt-link to="/">btn text here</nuxt-link>
    </header>
    <figure>
      <img src="https://via.placeholder.com/600x600" alt="">
    </figure>
  </section>
</template>

<style lang="scss" scoped>
section {
  width: 100%;
  height: calc(100vh - 80px);
  position: relative;
  background: fuchsia;
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: auto;
  header {
    display: flex;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  figure {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    width: 100%;
    display: flex;
    overflow: hidden;
    img {
      object-fit: cover;
    }
  }
}
</style>
