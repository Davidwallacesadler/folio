<template>
<div class="grid-2 p-2 m-2">
    <ProjectCard v-for="(card, i) in cardData"
    :key="i"
    :to="card.to"
    :src="card.src" 
    :alt="card.alt" 
    :href="card.href"
    :title="card.title"
    :sub-title="card.subTitle"
    :has-dark-content="card.hasDarkContent" />
</div>
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

}
</style>