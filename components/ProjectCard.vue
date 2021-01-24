<template>
  <b-card class="project-card position-relative" :class="{dark: hasDarkContent}">
      <!-- USE A B-card with text -->
      <img :src="src" :alt="alt">
      <div class="hover-contents">
          <h5 class="text-white text-center">{{ title }}</h5>
          <p class="text-white mb-2 text-center">{{ subTitle }}</p>
          <b-button v-for="item in links" :key="item.title" :href="item.href" target="_blank" pill class="folio-button">
              {{item.title}}
          </b-button>
      </div>
  </b-card>
</template>

<script>
export default {
name: "ProjectCard",
props: {
    src: String,
    alt: String,
    to: String,
    links: Array,
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
.project-card {
    overflow: hidden;
}
.hover-contents {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: opacity 0.6s;
    background-color: rgb(37, 25, 116);
    background-image: url('~@/static/sprinkles.svg');
    padding: 5px;
    background-repeat: round;
    opacity: 0;
    height: 100%;
}
.project-card:hover .hover-contents {
    opacity: 1;
}
.project-card:hover img {
    transform: scale(1.2);
}
img {
    transition: all 0.5s;
    width: 100%;
}
.card {
    border: transparent;
    box-shadow: $folio-card-shadow;
}
.card-title {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
.card-subtitle {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}
.card-subtitle,
.card-title {
    transition: all 0.5s;
    color: transparent !important;
    padding: 0.25rem;
}
.card-body:hover {
    box-shadow: $folio-card-hover-shadow;
.card-subtitle,
.card-title {
    color: black !important;
    background-color: rgba(254, 254, 254, 0.65);
    }
}
.dark:hover {
.card-subtitle,
.card-title {
    color: white !important;
    background-color: rgba(9, 9, 9, 0.5);
    }
}
</style>