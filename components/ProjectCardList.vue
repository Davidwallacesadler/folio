<template>
  <div class="p-5">
    <transition name="slide-fade" mode="out-in">
      <b-card-group v-if="!selectedData" key="project-list" class="grid-2">
        <ProjectCard
          v-for="(card, i) in cardData"
          :key="i"
          :to="card.to"
          :src="card.src"
          :alt="card.alt"
          :title="card.title"
          :sub-title="card.subTitle"
          :has-dark-content="card.hasDarkContent"
          @click="selectedData = card"
        />
      </b-card-group>
      <div v-else class="d-flex">
        <div class="mx-auto d-flex flex-column align-items-center text-center" style="max-width: 800px">
          <h4 class="folio-weight-thick">
            {{ selectedData.title }}
          </h4>
          <h6 class="folio-weight-thin">
            {{ selectedData.subTitle }}
          </h6>
          <div class="mb-2">
            <a :href="selectedData.link.href" target="_blank">{{ selectedData.link.title }}</a>
          </div>
          <div>
            <b-img v-for="src in selectedData.media" :key="src" :src="src" fluid style="max-height:500px" />
          </div>
          <b-btn pill class="mt-2" @click="selectedData = null">
            Back to the list
          </b-btn>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ProjectCardList',
  props: {
    cardData: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      selectedData: null
    }
  }
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
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
