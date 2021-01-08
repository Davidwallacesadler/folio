<template>
<b-card-group class="grid-2 p-5">
    <ProjectCard v-for="(card, i) in cardData"
    :key="i"
    :to="card.to"
    :src="card.src" 
    :alt="card.alt" 
    :links="card.link"
    :title="card.title"
    :sub-title="card.subTitle"
    :has-dark-content="card.hasDarkContent" />
</b-card-group>
</template>

<script>
export default {
name: "ProjectCardList",
props: {
    cardData: Array,
},
}
</script>

<style scoped>
.card-list {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    width: 300px;
}
@media (min-width: 768px) {
  .card-list {
      width: 90vw;
      
  }
}
@media (min-width: 1440px) {
  .card-list {
      width: 1200px;
  }
}
</style>