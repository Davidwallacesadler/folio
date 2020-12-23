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
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(179,179,179,1) 100%);
    filter: blur(50%);
    color: white;
    height: 3rem;
    width: 80%;
    transform: skewX(20deg);
    margin-left: -20px;
}
.header-text {
    z-index: 100;
    font-size: 2rem;
    font-weight: 300;
    left: 1rem;
}
@media (min-width: 768px) {
  .content-area-header {
    width: 50%;
  }
}
</style>