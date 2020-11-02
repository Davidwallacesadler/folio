<template>
<div class="grid-2">
    <ProjectCard v-for="(card, i) in cardData"
                 :key="i"
                  :to="card.to"
                 :src="card.src" 
                 :alt="card.alt" 
                 :href="card.href"
                 :header="card.header"
                 :sub-header="card.subHeader" />
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

<style>

</style>