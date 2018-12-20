<template>
  <button
    id="burger"
    :class="{menuActive: menuActive}"
    class="hamburger hamburger--collapse"
    type="button"
    @click="menuToggle"
  >
    <span class="hamburger-box">
      <span class="hamburger-inner"></span>
    </span>
  </button>
</template>

<script>
export default {
  data() {
    return {
      menuActive: false
    }
  },
  methods: {
    menuToggle: function() {
      this.menuActive = !this.menuActive
    }
  }
}
</script>

<style lang="scss" scoped>
$hamburger-padding-x: 0;
$hamburger-padding-y: 0;
$hamburger-layer-width: 40px;
$hamburger-layer-height: 2px;
$hamburger-layer-spacing: 6px;
$hamburger-layer-color: $black;
$hamburger-layer-border-radius: 0px;
$hamburger-hover-opacity: 0.7;
$hamburger-active-layer-color: $hamburger-layer-color;
$hamburger-active-hover-opacity: $hamburger-hover-opacity;

@import '~/assets/sass/hamburgers/hamburgers.scss';

button {
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
}
</style>


