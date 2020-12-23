<template>
<div class="d-flex justify-content-center p-2">
  <div class="project-section-header folio-content-max-width">
      {{text}}
  </div>
</div>
</template>

<script>
export default {
name: `ProjectSectionHeader`,
props: {
    text: String,
},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/main.scss';
.project-section-header {
    font-size: 2rem;
    font-weight: 300;
    border-bottom: $folio-section-border;
}
</style>