<template>
  <div class="navbar d-flex align-items-center justify-content-between px-3 py-4">
      <div class="d-flex align-items-top justify-content-center">
        <Logo class="icon-lg" />
        <nav-header :text="title" class="header" />
      </div>
      <b-nav v-if="isScreenLarge" card-header class="justify-content-end">
        <b-nav-item class="regular-nav-item" v-for="(option,i) in options" :key="i" :to="option.to">{{
          option.label
        }}</b-nav-item>
        <b-nav-item-dropdown
          v-for="(dropdown, i) in dropdowns"
          :key="dropdown.option"
          :text="dropdown.option"
          :class="{ selected: selectedIndex === i }"
        >
          <b-dropdown-item v-for="value in dropdown.values" :key="value">{{
            value
          }}</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-nav>
      <b-button class="hamburger-bar" v-else v-b-toggle.navigation-slideout>
      </b-button>
      <b-sidebar id="navigation-slideout" backdrop right shadow no-header>
      <div class="px-3 py-2">
        <div class="d-flex align-items-center justify-content-start" v-for="option in options" :key="option.label">
          <div class="icon-placeholder"></div>
        <router-link class="slideout-nav-link" :to="option.to">{{option.label}}</router-link>
        </div>
      </div>
    </b-sidebar>
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
      defualt: ["Option 1", "Option 2"],
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
  computed: {
    isScreenLarge() {
      return this.windowWidth > 500
    }
  },
  methods: {
    optionClicked: function (e) {
      this.$emit("option-changed", e);
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
    }
  },
  created() {
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
  },
  destroyed() {
      window.removeEventListener('resize', this.handleResize);
  },
};
</script>

<style scoped>
.regular-nav-item {
  font-size: 1.1rem;
  font-weight: 250;
}
.icon-placeholder {
  width: 35px;
  height: 35px;
  background-color: black;
}
.hamburger-bar {
  width: 50px;
  height: 50px;
  background: white;
  border: 2px solid black;
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
  width: min-content;
  margin-left: 0.5rem;
}
.slideout-nav-link {
  font-size: 1.5rem;
  font-weight: 400;
}
</style>
