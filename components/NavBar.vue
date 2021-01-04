<template>
  <div 
    class="navbar d-flex align-items-center justify-content-between p-4">
    <div 
      class="d-flex">
      <Logo 
        class="icon-lg" />
    </div>
    <div>
      <slot />
    </div>
    <!-- <b-nav 
    v-if="isScreenLarge" 
    card-header
    class="justify-content-end">  
      <b-nav-item 
      class="regular-nav-item" 
      v-for="(option,i) in options"
      :key="i"
      :to="option.to">
      {{ option.label }}
      </b-nav-item>
      <b-nav-item-dropdown
      v-for="(dropdown, i) in dropdowns"
      :key="dropdown.option"
      :text="dropdown.option"
      :class="{ selected: selectedIndex === i }">
          <b-dropdown-item 
          v-for="value in dropdown.values"
          :key="value">
          {{ value }}
          </b-dropdown-item>
      </b-nav-item-dropdown>
    </b-nav>
    <b-button 
    v-else
    class="hamburger-button" 
    v-b-toggle.navigation-slideout>
        <img 
        src="/hamburger.svg"
        alt="">
    </b-button>
    <b-sidebar 
    id="navigation-slideout" 
    backdrop
    right
    shadow
    no-header>
        <div 
        class="d-flex align-items-center justify-content-start nav-row"
        v-for="(option, i) in options"
        :key="option.label">
          <img 
          class="navigation-icon"
          :src="navigationIcons[i]"
          :alt="option.label">
        <router-link 
        class="slideout-nav-link"
        :to="option.to">
        {{option.label}}
        </router-link>
      </div>
    </b-sidebar> -->
  </div>
</template>

<script>
import NavHeader from "./NavHeader.vue";
export default {
  name: "NavBar",
  components: {
    NavHeader,
  },
  props: {
    title: {
      type: String,
    },
    options: {
      type: Array, //IE ["option", ...""]
    },
    dropdowns: {
      type: Array, // IE [ {"option": "...", "values": ["DDoption, ...] }, ...{}]
    },
  },
  data() {
    return {
      optionStates: Array,
      windowWidth: 0,
    };
  },
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
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/main.scss';
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: $folio-background-color;
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
  color: $folio-static-text-color;
}
.regular-nav-item > a:hover {
  color: $folio-theme-color;
  border-bottom: 3px solid $folio-theme-color;
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
