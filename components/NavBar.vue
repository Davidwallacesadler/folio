<template>
  <div
    class="navbar d-flex align-items-center justify-content-between p-4"
  >
    <div
      class="d-flex"
    >
      <nuxt-link to="/">
        <Logo />
      </nuxt-link>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    title: {
      type: String
    },
    options: {
      type: Array // IE ["option", ...""]
    },
    dropdowns: {
      type: Array // IE [ {"option": "...", "values": ["DDoption, ...] }, ...{}]
    }
  },
  data () {
    return {
      optionStates: Array,
      windowWidth: 0
    }
  }
  // computed: {
  //   // isScreenLarge() {
  //   //    return this.windowWidth > 500
  //   // },
  //   navigationIcons() {
  //     return [
  //       `/work.svg`,
  //       `/work.svg`,
  //       `/about-me.svg`
  //     ]
  //   }
  // },
  // methods: {
  //   optionClicked: function (e) {
  //     this.$emit("option-changed", e);
  //   },
  //   handleResize() {
  //     this.windowWidth = window.innerWidth;
  //   }
  // },
  // created() {
  //     window.addEventListener('resize', this.handleResize);
  //     this.handleResize();
  // },
  // destroyed() {
  //     window.removeEventListener('resize', this.handleResize);
  // },
}
</script>

<style scoped lang="scss">
@use '@/assets/styles/main.scss' as main;
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: main.$folio-background-color;
  border-bottom: 1px solid lightgray;
}
.navigation-icon {
  width: 30px;
  height: 30px;
  margin-right: 1rem;
}
.regular-nav-item > a {
  font-size: 1.1rem;
  border-bottom: 3px solid transparent;
  font-weight: 250;
  color: main.$folio-static-text-color;
}
.regular-nav-item > a:hover {
  color: main.$folio-theme-color;
  border-bottom: 3px solid main.$folio-theme-color;
}
.icon-placeholder {
  width: 35px;
  height: 35px;
  background-color: black;
}
.hamburger-button {
  width: 50px;
  height: 50px;
  background: white;
  border: none;
  border-radius: 25px;
}
.hamburger-button:hover {
  background-color: lightgray;
}
.icon-lg {
  width: 50px;
  height: 50px;
}
.selected {
  border-bottom: 4px solid black;
}
.icon {
  width: 50px;
  height: 50px;
}
.header {
  margin-left: 0.5rem;
  font-weight: 600;
}
.slideout-nav-link {
  font-size: 1.5rem;
  font-weight: 400;
}
.nav-row {
  padding: 0.5rem;
}
.nav-row:hover {
  background: lightgray;
}
</style>
