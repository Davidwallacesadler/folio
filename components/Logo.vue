<template>
  <div class="logo">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
      <g id="personal-logo">
        <circle id="fill" class="theme-fill" cx="250" cy="250" r="238.5" />
        <path
          id="ring"
          class="white"
          d="M250,495C114.9,495,5,385.1,5,250S114.9,5,250,5,495,114.9,495,250,385.1,495,250,495Zm0-477C122.1,18,18,122.1,18,250S122.1,482,250,482,482,377.9,482,250,377.9,18,250,18Z"
        />
        <path
          id="letters"
          class="white"
          d="M370,273.2H138.4a8.3,8.3,0,0,1-8.3-8.3,8.4,8.4,0,0,1,8.3-8.4H350.8a55.8,55.8,0,1,0,0-111.5H120c-13.5,0-25,11.9-25,26h53.3v59.5h-9.9a34.4,34.4,0,0,0,0,68.8H370a8.3,8.3,0,0,1,0,16.6H118.5c-13.6,0-25.1,12-25.1,26.1H370a34.4,34.4,0,0,0,0-68.8ZM174.3,171H350.8a29.8,29.8,0,1,1,0,59.5H174.3Z"
        />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style lang="scss">
@import '@/assets/styles/main.scss';
.logo {
  margin: auto;
  width: 50px;
  svg {
    padding: 0px;
  }
}
.theme-fill {
fill: white;
}
</style>
