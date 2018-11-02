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
  color: $primary;
  display: block;
  text-decoration: none;
  font-size: 14px;
  border-radius: 25px;
  background: transparent;
  text-transform: uppercase;

  &:hover {
    background: $primary;
    color: white;
  }
}
</style>


