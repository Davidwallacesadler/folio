<template>
  <div class="gradient position-absolute pinned-bottom hidden">
      <h3>{{header}}</h3>
      <h5>{{subHeader}}</h5>
  </div>
</template>

<script>
export default {
name: "CardDetailFade",
props: {
    header: {
        type: String,
        default: "Header"
    },
    subHeader: {
        type: String,
        default: "Subheader"
    },
}
}
</script>

<style scoped>
.gradient {
    background: rgb(41,41,41);
    background: linear-gradient(0deg, rgba(41,41,41,1) 0%, rgba(79,70,70,1) 22%, rgba(255,255,255,1) 100%);
}
.pinned-bottom {
    bottom: 50vh;
    left: 50vw;
}

</style>