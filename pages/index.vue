<template>
  <main class="page-wrap container">
    <homehero />
  </main>
</template>

<script>
import mainheader from '~/components/header/index.vue'
import homehero from '~/components/heroes/homehero.vue'

export default {
  components: {
    mainheader,
    homehero
  }
}
</script>

<style lang="scss">
</style>

