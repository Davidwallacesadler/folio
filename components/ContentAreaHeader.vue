<template>
<div>
  <div class="header-text pl-4">{{text}}</div>
</div>
</template>

<script>
export default {
name: `ContentAreaHeader`,
props: {
    text: String,
  }
}
</script>

<style>
.header-text {
  background-color: black;
  z-index: 100;
  font-size: 2rem;
  font-weight: 500;
  left: 1rem;
  color: white;
}
@media (min-width: 768px) {
  .content-area-header {
    width: 50%;
  }
}
</style>