<template>
  <h4>{{ text }}</h4>
</template>

<script>
export default {
  name: "NavHeader",
  props: {
    text: String,
  },
};
</script>

<style scoped>
h4 {
  display: inline;
}
</style>