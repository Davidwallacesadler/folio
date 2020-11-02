<template>
  <div class="card-darken">
      <a v-if="!!href" :href="href">
      <img :src="src" :alt="alt" class="card-darken">
      </a>
      <nuxt-link v-else :to="to">
      <img :src="src" :alt="alt">
      </nuxt-link>
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
},
}
</script>

<style scoped>
img {
    width: 100%;
}
</style>