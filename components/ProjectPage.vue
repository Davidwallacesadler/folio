<template>
<div>
  <div class="header">
      <h2></h2>
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