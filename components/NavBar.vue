<template>
<!-- TODO: MAke this FLEX!!!! -->
  <div class="container px-2 py-5">
    <div class="row">
      <div class="col-4">
        <Logo class="icon-lg" />
        <nav-header :text="title" class="header" />
      </div>
      <b-nav card-header class="col-8 justify-content-end">
        <b-nav-item v-for="option in options" :key="option">{{
          option
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
    </div>
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
    title: String,
    options: {
      type: Array, //IE ["option", ...""]
      defualt: ["Option 1", "Option 2"],
    },
    selectedIndex: {
      type: Number,
    },
    dropdowns: {
      type: Array, // IE [ {"option": "...", "values": ["DDoption, ...] }, ...{}]
    },
  },
  methods: {
    optionClicked: function (e) {
      this.$emit("option-changed", e);
    },
  },
  data() {
    return {
      optionStates: Array,
    };
  },
};
</script>

<style scoped>
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
  align-self: flex-end;
}
a {
  border: none;
  color: black;
  border-bottom: 4px solid transparent;
  transition: border 0.5s;
  margin-right: 5px;
}
a:hover {
  color: black;
  border-bottom: 4px solid black;
}
@keyframes underline {
  0% {
    border-bottom: 1px solid #2c3e50;
  }
  100% {
    border-bottom: 4px solid #2c3e50;
  }
}
</style>
