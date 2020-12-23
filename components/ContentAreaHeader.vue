<template>
<div class="position-relative">
  <div class="position-absolute header-text">{{text}}</div>
  <div class="content-area-header">
  </div>
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
.content-area-header {
    background-color: lightgray;
    color: white;
    height: 3rem;
    width: 50%;
    transform: skewX(20deg);
    margin-left: -20px;
}
.header-text {
    z-index: 1000;
    font-size: 2rem;
    font-weight: 300;
    left: 1rem;
}
</style>