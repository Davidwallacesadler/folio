<template>
  <div class="p-2" :class="{dark: hasDarkContent}">
      <!-- USE A B-card with text -->
      <a v-if="!!href" :href="href">
      <img :src="src" :alt="alt">
      </a>
      <nuxt-link v-else :to="to">
          <b-card overlay :img-src="src" :img-alt="alt" :title="title" :sub-title="subTitle"/>
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
    title: String,
    subTitle: String,
    hasDarkContent: {
        type: Boolean,
        default: false,
    },
},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/main.scss';
img {
    width: 100%;
}
.card {
    border: transparent;
}
.card-subtitle,
.card-title {
    transition: all 0.5s;
    color: transparent !important;
}
.card-body:hover {
    box-shadow: $folio-card-hover-shadow;
.card-subtitle,
.card-title {
    color: black !important;
}
}
.dark:hover {
.card-subtitle,
.card-title {
    color: white !important;
}
}
</style>