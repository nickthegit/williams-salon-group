<template>
  <section>
    <header>
      <h1>{{ homeHeroAtts.copy.headline }}</h1>
      <p>{{ homeHeroAtts.copy.subtext }}</p>
      <btn :buttonAtts="{ text: homeHeroAtts.button.text, link: homeHeroAtts.button.link }"/>
    </header>
    <figure>
      <!-- <img src="https://via.placeholder.com/600x600" alt=""> -->
      <img src="/hero/hero5.jpg" alt="">
    </figure>
  </section>
</template>

<script>
import btn from '~/components/btn.vue'
export default {
  components: {
    btn
  },
  props: {
    homeHeroAtts: {
      type: Object,
      default: function() {
        return {
          copy: {
            headline: 'headline Txt',
            subtext: 'subtext'
          },
          button: {
            text: 'home hero btn text',
            link: '/'
          }
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
section {
  width: 100%;
  // height: calc(100vh - 80px);
  height: 100vh;
  position: relative;
  display: grid;
  grid-template-columns: [start] 40% [headline-end] 10% [figure-start] 50% [end];
  grid-template-rows: auto;
  padding: 120px;
  header {
    display: flex;
    grid-column: start / headline-end;
    grid-row: 1 / 2;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    z-index: 2;
    h1,
    p {
      padding-bottom: 25px;
    }
  }
  figure {
    grid-column: figure-start / end;
    grid-row: 1 / 2;
    width: 100%;
    display: flex;
    overflow: hidden;
    z-index: 1;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>
