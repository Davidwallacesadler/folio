<template>
  <div class="card-darken">
      <a v-if="!!href" :href="href">
      <img :src="src" :alt="alt">
      </a>
      <nuxt-link v-else :to="to">
      <img :src="src" :alt="alt">
      </nuxt-link>
      <!-- <card-detail-fade :header="header" :sub-header="subHeader" /> -->
  </div>
</template>

<script>
export default {
name: "ProjectCard",
props: {
    src: String,
    alt: String,
    to: String,
    href: String,
    header: String,
    subHeader: String,
},
}
</script>

<style scoped>
img {
    width: 100%;
}
.card-darken:hover .hidden {
display: inline;
}
</style>