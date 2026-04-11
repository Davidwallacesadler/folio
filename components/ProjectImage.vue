<template>
  <div class="card project-card position-relative" :class="{dark: hasDarkContent}" @click="emitClick()">
    <img :src="src" :alt="alt">
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    src: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: ''
    },
    links: {
      type: Array,
      default: () => []
    },
    header: {
      type: String,
      default: ''
    },
    subHeader: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    },
    hasDarkContent: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    emitClick () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped lang="scss">
@use '@/assets/styles/main.scss' as main;
.project-card {
  cursor: pointer;
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
    background-image: url('/folio/sprinkles.svg');
    padding: 5px;
    background-repeat: round;
    opacity: 0;
    height: 100%;
}
.project-card:hover,
.project-card:focus,
.project-card:focus-within {
  &.hover-contents {
    opacity: 1;
  }
  & img {
    transform: scale(1.2);
  }

}
img {
    transition: all 0.5s;
    width: 100%;
}
.card {
    border: transparent;
    box-shadow: main.$folio-card-shadow;
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
    box-shadow: main.$folio-card-hover-shadow;
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
