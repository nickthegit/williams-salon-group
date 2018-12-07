<template>
  <picture :style="{ backgroundImage: 'url(' + prelaodImg + ')' }">
    <source media="(min-width: 769px)" :srcset="desktopPath">
    <source media="(min-width: 481px)" :srcset="tabletPath">
    <source media="(max-width: 480px)" :srcset="mobilePath">
    <img id="testComplete" :src="fallbackPath" :alt="imgAlt">
  </picture>
</template>

<script>
export default {
  head() {
    return {
      link: [
        {
          rel: 'preload',
          href: this.prelaodImg,
          as: 'image'
        }
      ]
    }
  },
  data() {
    return {
      prelaodImg:
        'https://res.cloudinary.com/nickjohn/image/upload/e_blur:900,q_20,f_auto,c_fill,g_auto,w_' +
        this.mobile_size.width / 4 +
        ',h_' +
        this.mobile_size.height / 4 +
        '/purehair/' +
        this.imgUrl
    }
  },
  props: {
    imgUrl: {
      type: String
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
      var cloudinaryStart =
        'https://res.cloudinary.com/nickjohn/image/upload/q_auto,f_auto,c_fill,g_auto,w_'
      var string =
        cloudinaryStart +
        width +
        ',h_' +
        height +
        '/purehair/' +
        img +
        ' 1x, ' +
        cloudinaryStart +
        width * 2 +
        ',h_' +
        height * 2 +
        '/purehair/' +
        img +
        ' 2x'

      return string
    }
  },
  computed: {
    fallbackPath: function() {
      var string =
        'https://res.cloudinary.com/nickjohn/image/upload/q_auto,f_auto,c_fill,g_auto,w_' +
        this.desktop_size.width +
        ',h_' +
        this.desktop_size.height +
        '/purehair/' +
        this.imgUrl
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
    console.log(this.prelaodImg)
  }
}
</script>

<style lang="scss">
picture {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
img {
  // min-height: 100%;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>


