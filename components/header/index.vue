<template>
  <header>
    <brand/>
    <a id="header-cta"></a>
    <burger/>
    <navigation/>
  </header>
</template>

<script>
import brand from '~/components/header/components/brand.vue'
import burger from '~/components/header/components/burger.vue'
import navigation from '~/components/header/components/nav.vue'

export default {
  components: {
    brand,
    burger,
    navigation
  }
}
</script>


<style lang="scss" scoped>
header {
  width: 100%;
  height: $headerHeight;
  background: rgba($tint, 0.1);
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
  z-index: 90;
}
#burger {
  position: absolute;
  top: $headerHeight / 4;
  right: $headerHeight / 4;
  width: $headerHeight / 2;
  height: $headerHeight / 2;
  z-index: 99;
}
#nav {
  z-index: 80;
}
</style>

