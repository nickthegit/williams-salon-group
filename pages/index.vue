<template>
  <main class="page-wrap container">
    <homehero
      :homeHeroAtts="{ 
        copy: { title: homePageContent.hero.title, headline: homePageContent.hero.headline,  subtext: homePageContent.hero.subtext }, 
        button: {   text: homePageContent.hero.button.text,   link: homePageContent.hero.button.link }, 
        image: { url: homePageContent.hero.image.url, alt: homePageContent.hero.image.alt }  }"
    />
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
          title: 'Pure Hair, Sherborne',
          // headline: 'Header text here with powerful msg',
          subtext:
            'Sub header here Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit libero eos omnis, aliquam nihil quas quod vitae!',
          button: {
            text: 'Book online now',
            link: '/'
          },
          image: {
            url: 'ph-hero-test.jpg',
            alt: 'alt text here top'
          }
        }
      }
    }
  }
}
</script>

<style lang="scss">
.page-wrap {
  height: 300vh;
  transition: 0.2s all ease-out;
}

.navOpenMain {
  .page-wrap {
    filter: blur(4px) grayscale(100%);
    transform: translateX(-5%);
  }
}
</style>

