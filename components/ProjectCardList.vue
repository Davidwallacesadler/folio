<template>
<div class="d-flex">
    <ProjectCard v-for="(card, i) in cardData" :key="i" :to="card.to" :src="card.src" :alt="card.alt" :href="card.href" />
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