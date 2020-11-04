<template>
<div class="container">
  <div class="header">
      <nuxt-link to="/">
      Back
      </nuxt-link>
      <h2>{{header}}</h2>
      <slot name="header" />
  </div>
  <div class="body">
      <slot name="body" />
  </div>
  <div class="footer">
      <slot name="footer" />
  </div>
</div>
</template>

<script>
export default {
name: "ProjectPage",
props: {
    header: String,
}
}
</script>

<style>

</style>