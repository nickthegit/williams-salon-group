<template>
  <header>
    <brand/>
    <a id="header-cta"></a>
    <button id="burger"></button>
    <nav></nav>
  </header>
</template>

<script>
import brand from '~/components/header/components/brand.vue'
export default {
  components: {
    brand
  }
}
</script>


<style lang="scss" scoped>
header {
  width: 100%;
  height: $headerHeight;
  // background: rgba($tint, 0.1);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
}
#brand {
  position: absolute;
  height: $headerHeight / 1.75;
  width: auto;
  top: $headerHeight / 5;
  left: $headerHeight / 4;
}
</style>

