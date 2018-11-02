<template>
  <main class="page-wrap container">
    <homehero :homeHeroAtts="{ copy: { headline: homePageContent.hero.headline,  subtext: homePageContent.hero.subtext }, button: {   text: homePageContent.hero.button.text,   link: homePageContent.hero.button.link } }" />
  </main>
</template>

<script>
import mainheader from '~/components/header/index.vue'
import homehero from '~/components/heroes/homehero.vue'

export default {
  components: {
    mainheader,
    homehero
  },
  data() {
    return {
      homePageContent: {
        hero: {
          headline: 'Where Dedication Meets Quality',
          subtext:
            'Sub header here Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit libero eos omnis, aliquam nihil quas quod vitae!',
          button: {
            text: 'Book online now',
            link: '/'
          }
        }
      }
    }
  }
}
</script>

<style lang="scss">
</style>

