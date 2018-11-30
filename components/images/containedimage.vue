<template>
  <picture>
    <source media="(min-width: 769px)" :srcset="desktopPath">
    <source media="(min-width: 481px)" :srcset="tabletPath">
    <source media="(max-width: 480px)" :srcset="mobilePath">
    <img :src="fallbackPath" :alt="imgAlt">
  </picture>
</template>

<script>
export default {
  props: {
    imgUrl: {
      type: String,
      default: 'https://via.placeholder.com'
    },
    imgAlt: {
      type: String,
      default: 'alt text here'
    },
    desktop_size: {
      type: Object,
      default: function() {
        return {
          width: {
            type: Number,
            default: 900
          },
          height: {
            type: Number,
            default: 900
          }
        }
      }
    },
    tablet_size: {
      type: Object,
      default: function() {
        return {
          width: {
            type: Number,
            default: 700
          },
          height: {
            type: Number,
            default: 700
          }
        }
      }
    },
    mobile_size: {
      type: Object,
      default: function() {
        return {
          width: {
            type: Number,
            default: 400
          },
          height: {
            type: Number,
            default: 400
          }
        }
      }
    }
  },
  methods: {
    filterPath: function(img, width, height) {
      var string =
        img +
        '/' +
        width +
        'x' +
        height +
        ' 1x, ' +
        img +
        '/' +
        width * 2 +
        'x' +
        height * 2 +
        ' 2x'

      return string
    }
  },
  computed: {
    fallbackPath: function() {
      var string =
        this.imgUrl +
        '/' +
        this.desktop_size.width +
        'x' +
        this.desktop_size.height
      return string
    },
    desktopPath: function() {
      return this.filterPath(
        this.imgUrl,
        this.desktop_size.width,
        this.desktop_size.height
      )
    },
    tabletPath: function() {
      return this.filterPath(
        this.imgUrl,
        this.tablet_size.width,
        this.tablet_size.height
      )
    },
    mobilePath: function() {
      return this.filterPath(
        this.imgUrl,
        this.mobile_size.width,
        this.mobile_size.height
      )
    }
  },
  mounted() {
    console.log(this.fallbackPath)
  }
}
</script>

<style lang="scss">
img {
  // min-height: 100%;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>


