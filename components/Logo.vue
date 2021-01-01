<template>
  <div class="logo" @click="flippy()">  
    <svg :class="{flippy: flipped}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
      <defs>
        <style scoped>
          .transparent {
            fill: #ffffff00;
          }
          .black {
            fill: #000;
          }
        </style>
      </defs>
      <g id="personal-logo">
        <circle id="fill" class="transparent" cx="250" cy="250" r="238.5" />
        <path
          id="ring"
          class="black"
          d="M250,495C114.9,495,5,385.1,5,250S114.9,5,250,5,495,114.9,495,250,385.1,495,250,495Zm0-477C122.1,18,18,122.1,18,250S122.1,482,250,482,482,377.9,482,250,377.9,18,250,18Z"
        />
        <path
          id="letters"
          class="black"
          d="M370,273.2H138.4a8.3,8.3,0,0,1-8.3-8.3,8.4,8.4,0,0,1,8.3-8.4H350.8a55.8,55.8,0,1,0,0-111.5H120c-13.5,0-25,11.9-25,26h53.3v59.5h-9.9a34.4,34.4,0,0,0,0,68.8H370a8.3,8.3,0,0,1,0,16.6H118.5c-13.6,0-25.1,12-25.1,26.1H370a34.4,34.4,0,0,0,0-68.8ZM174.3,171H350.8a29.8,29.8,0,1,1,0,59.5H174.3Z"
        />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
name: `Logo`,
data() {
  return {
    flipped: false
  }
},
methods: {
  flippy() {
    this.flipped = !this.flipped
  },
}
}
</script>

<style lang="scss">
@import '@/assets/styles/main.scss';
.logo {
  margin: auto;
  cursor: pointer;
  transition: all 0.45s;
}
.black,
.transparent {
  transition: all 1s;
}
.flippy {
animation: flip 0.5s ease-in;
}
.flippy .transparent {
fill: $folio-theme-color;
}
.flippy .black {
fill: $folio-background-color;
}
@keyframes flip {
  10% {
    transform: rotate(-10deg);
  }
  80% {
    transform: rotate(360deg);
  }
  90% {
    transform: rotate(370deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
