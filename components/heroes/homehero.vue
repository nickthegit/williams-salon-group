<template>
  <section>
    <header>
      <h3>{{ homeHeroAtts.copy.title }}</h3>
      <h1>{{ homeHeroAtts.copy.headline }}</h1>
      <p>{{ homeHeroAtts.copy.subtext }}</p>
      <btn :buttonAtts="{ text: homeHeroAtts.button.text, link: homeHeroAtts.button.link }"/>
    </header>
    <div id="hero-img">
      <figure>
        <img src="https://via.placeholder.com/1000x750" alt>
        <!-- <img src="/hero/hero5.jpg" alt> -->
      </figure>
    </div>
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
            title: 'above text here',
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
  grid-template-columns: [start] 40% [headline-end] 5% [figure-start] 55% [end];
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
  padding: 120px;
  header {
    display: flex;
    grid-column: start / headline-end;
    grid-row: 1 / 2;
    flex-direction: column;
    align-items: flex-start;
    z-index: 2;
    h1,
    p {
      padding-bottom: 25px;
    }
    h3 {
      padding-bottom: 15px;
    }
  }
  #hero-img {
    grid-column: figure-start / end;
    grid-row: 1 / 2;
    width: 100%;
    z-index: 1;
  }
  figure {
    display: block;
    width: 100%;
    height: 0;
    padding-bottom: 75%;
    border-radius: 25% 5%;
    overflow: hidden;
    img {
      min-height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  @include breakpoint(tablet-mobile) {
    height: auto;
    min-height: 100vh;
    grid-template-columns: auto;
    grid-template-rows: [top] 1fr [figure-end] 5% [headline-start] 40% [bottom];
    padding: 80px;
    padding-top: $headerHeight + 40px;
    header {
      grid-column: 1 / 2;
      grid-row: headline-start / bottom;
    }
    #hero-img {
      grid-column: 1 / 2;
      grid-row: top / figure-end;
    }
  }
  @include breakpoint(mobile) {
    grid-template-rows: [top] 1fr [figure-end] 5% [headline-start] 1fr [bottom] 30px;
    padding: 30px;
    padding-top: $headerHeightMobile + 10px;
    header {
      grid-row: headline-start / bottom;
    }
    #hero-img {
      grid-row: top / figure-end;
    }
  }
}
</style>
