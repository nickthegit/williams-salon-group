<template>
  <div :class="{navOpenMain: this.$store.state.menuOpenClose}">
    <mainheader/>
    <nuxt/>
  </div>
</template>

<script>
import mainheader from '~/components/header/index.vue'

export default {
  components: {
    mainheader
  }
}
</script>

<style>
</style>
