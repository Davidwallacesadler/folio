<template>
  <div class="p-5">
    <div class="project-list">
      <div
        v-for="(card, i) in cardData"
        :key="i"
        class="project-row"
        @click="toggleExpanded(i)"
      >
        <div class="project-row-content">
          <img :src="card.src" :alt="card.alt" class="project-image" />
          <div class="project-info">
            <h5 class="project-title">{{ card.title }}</h5>
            <p class="project-subtitle">{{ card.subTitle }}</p>
          </div>
          <div class="project-carat">
            <img :src="selectedIndex === i ? '/chevron.down.png' : '/chevron.left.png'" :alt="selectedIndex === i ? 'Collapse' : 'Expand'" class="chevron-icon" />
          </div>
        </div>
        <div v-if="selectedIndex === i" class="project-details">
          <div v-if="card.description" class="project-description mb-4">
            {{ card.description }}
          </div>
          <div class="project-links mb-3">
            <a v-if="card.link && card.link.href" :href="card.link.href" target="_blank" class="btn btn-pill folio-button">
              {{ card.link.title || 'View Project' }}
            </a>
          </div>
          <div class="project-media">
            <img v-for="src in card.media" :key="src" :src="src" class="img-fluid project-screenshot" />
          </div>
        </div>
      </div>
    </div>
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
      selectedIndex: null
    }
  },
  methods: {
    toggleExpanded (index) {
      this.selectedIndex = this.selectedIndex === index ? null : index
    }
  }
}
</script>

<style scoped>
.project-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.project-row {
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.project-row:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.project-row-content {
  display: flex;
  align-items: center;
  padding: 1rem;
  background: white;
}

.project-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 1rem;
}

.project-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-title {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
}

.project-subtitle {
  margin: 0.25rem 0 0 0;
  font-size: 0.9rem;
  color: #666;
  line-height: 1.4;
}

.project-carat {
  display: flex;
  align-items: center;
}

.chevron-icon {
  padding-left: 8px;
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.project-details {
  background: #f8f9fa;
  padding: 1rem;
  border-top: 1px solid #e9ecef;
}

.project-description {
  text-align: center;
  font-size: 0.95rem;
  color: #555;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.project-links {
  text-align: center;
}

.project-media {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.project-screenshot {
  max-width: 300px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .project-row-content {
    padding: 0.75rem;
  }

  .project-image {
    width: 60px;
    height: 60px;
  }

  .project-title {
    font-size: 1rem;
  }

  .project-subtitle {
    font-size: 0.8rem;
  }

  .project-screenshot {
    max-width: 100%;
  }
}
</style>
