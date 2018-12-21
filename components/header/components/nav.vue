<template>
  <nav id="nav" :class="{navOpen: this.$store.state.menuOpenClose}">
    <section class="nav-clear" @click="menuToggle"></section>
    <section class="nav">
      <ul class="mainNav">
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">About</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">Prices</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">Contact</nuxt-link>
        </li>
      </ul>
      <div class="book">Book an Appointment</div>
      <ul class="socialsNav">
        <li>twitter</li>
        <li>face</li>
        <li>insta</li>
      </ul>
    </section>
  </nav>
</template>
<script>
export default {
  methods: {
    menuToggle(e) {
      this.$store.commit('toggle', e.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  // background: rebeccapurple;
  overflow: hidden;
}
.nav,
.nav-clear {
  position: absolute;
  height: 100%;
  top: 0;
}
.nav {
  width: 40%;
  background: $primary;
  color: $white;
  right: 0;
  border-radius: 0 0 0 50%;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  text-align: center;
  transform: translate(100%, -100%);
  opacity: 0;
  transition: all 0.25s cubic-bezier(0, 0, 0, 1);
}
.mainNav {
  margin-bottom: 20px;
  li {
    opacity: 0;
    transition: all 0.4s ease-out;
    transform: translateY(10px);
    font-family: 'Source Sans Pro', helvetica, sans-serif;
    // font-family: 'voga-medium', helvetica, sans-serif;
    // text-transform: uppercase;
    font-size: 30px;
    line-height: 36px;
    letter-spacing: 2px;
    text-align: right;
  }
  a {
    color: $white;
    text-decoration: none;
    padding: 5px;
    display: block;
  }
}

.nav-clear {
  width: 100%;
  background-color: rgba($white, 0.5);
  left: 0;
  z-index: 10;
  opacity: 0;
  display: none;
  transition: all 0.3s ease-out;
}

.navOpen {
  .nav {
    opacity: 1;
    transform: translate(0%, 0%);
    border-radius: 0 0 0 0%;
  }
  .nav-clear {
    opacity: 1;
    display: block;
  }
  .mainNav {
    li {
      opacity: 1;
      transform: translateY(0px);
      &:nth-child(1) {
        transition-delay: 0s;
      }
      &:nth-child(2) {
        transition-delay: 0.15s;
      }
      &:nth-child(3) {
        transition-delay: 0.3s;
      }
      &:nth-child(4) {
        transition-delay: 0.45s;
      }
      &:nth-child(5) {
        transition-delay: 0.6s;
      }
    }
  }
}
</style>

