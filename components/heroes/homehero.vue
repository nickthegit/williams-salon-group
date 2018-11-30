<template>
  <section>
    <header>
      <h3>{{ homeHeroAtts.copy.title }}</h3>
      <h1>{{ homeHeroAtts.copy.headline }}</h1>
      <btn :buttonAtts="{ text: homeHeroAtts.button.text, link: homeHeroAtts.button.link }"/>
    </header>
    <div id="hero-img">
      <div id="grad"></div>
      <figure>
        <containedimage
          :imgUrl="homeHeroAtts.image.url"
          :imgAlt="homeHeroAtts.image.alt"
          :desktop_size="{width: imageDesktopSize.width, height: imageDesktopSize.height }"
          :tablet_size="{width: imageTabletSize.width, height: imageTabletSize.height }"
          :mobile_size="{width: imageMobileSize.width, height: imageMobileSize.height }"
        />
      </figure>
    </div>
  </section>
</template>

<script>
import btn from '~/components/btn.vue'
import containedimage from '~/components/images/containedimage.vue'
export default {
  components: {
    btn,
    containedimage
  },
  data() {
    return {
      imageDesktopSize: {
        width: 900,
        height: 900
      },
      imageTabletSize: {
        width: 700,
        height: 700
      },
      imageMobileSize: {
        width: 400,
        height: 400
      }
    }
  },
  props: {
    homeHeroAtts: {
      type: Object,
      default: function() {
        return {
          copy: {
            title: 'above text here',
            headline: 'headline Txt',
            subtext: 'subtext'
          },
          button: {
            text: 'home hero btn text',
            link: '/'
          },
          image: {
            url: 'https://via.placeholder.com',
            alt: 'alt text here'
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  width: 100%;
  // height: calc(100% - 80px);
  height: 100vh;
  position: relative;
  top: 0;
  display: grid;
  grid-template-columns: [start] 35% [figure-start] 10% [headline-end] 55% [end];
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  padding: $surroundPadding;
  box-sizing: border-box;
  header {
    display: flex;
    grid-column: start / headline-end;
    grid-row: 1 / 2;
    flex-direction: column;
    align-items: flex-end;
    z-index: 2;
    text-align: right;
    h1,
    p {
      padding-bottom: 25px;
    }
    h3 {
      padding-bottom: 15px;
    }
  }
  #hero-img {
    grid-column: figure-start / end;
    grid-row: 1 / 2;
    width: 100%;
    height: 100%;
    z-index: 1;
    position: relative;
  }
  #grad {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    background: transparent;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.85) 0%,
      rgba(255, 255, 255, 0) 40%
    );
  }
  figure {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 1% 25%;
    overflow: hidden;
    position: relative;
    picture,
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
    }
  }
  @include breakpoint(tablet-mobile) {
    height: auto;
    min-height: 100vh;
    grid-template-columns: auto;
    grid-template-rows: [grid-top] 1fr [headline-start] 10vh [figure-end] 30vh [grid-bottom];
    justify-items: center;
    align-items: stretch;
    padding: 80px;
    padding-top: $headerHeight + 40px;
    header {
      grid-column: 1 / 2;
      grid-row: headline-start / grid-bottom;
      position: absolute;
    }
    #hero-img {
      grid-column: 1 / 2;
      grid-row: grid-top / figure-end;
      position: absolute;
    }
    #grad {
      background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.85) 0%,
        rgba(255, 255, 255, 0) 40%
      );
    }
  }
  @include breakpoint(mobile) {
    grid-template-rows: [grid-top] 1fr [headline-start] 10vh [figure-end] 1fr [grid-bottom];
    padding: 30px;
    padding-top: $headerHeightMobile + 30px;
  }
}
</style>
