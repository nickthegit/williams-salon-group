<template>
  <nuxt-link class="btn" :to="buttonAtts.link">{{ buttonAtts.text }}</nuxt-link>
</template>

<script>
export default {
  props: {
    buttonAtts: {
      type: Object,
      default: function() {
        return {
          text: 'btn text',
          link: '/'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/global/variables.scss';

.btn {
  padding: 15px 50px;
  border: solid 1px $primary;
  // color: $primary;
  color: $white;
  display: block;
  text-decoration: none;
  font-size: 14px;
  border-radius: 25px;
  // background: rgba($white, 0);
  background: $primary;
  text-transform: uppercase;
  transition: transform 0.2s ease-out;
  transform-origin: 100% 50%;
  &:hover {
    background: $primary;
    transform: scale(1.025);
    transform-origin: 100% 50%;
    color: $white;
  }
}
</style>


