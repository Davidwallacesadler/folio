<template>
  <div>
    <ProjectCardList :card-data="projects" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLeopoldOpen: false,
      isBpOpen: false,
      personalLogo: {src: "/personal-logo.svg", to:"/", alt: "A D blending into an S inside a circle."},
      projects: [
        {src: "/blue-pail-logo.svg", to:"/work/blue-pail", alt:"A blue watering pail with a yellow sun icon.", header: "Blue Pail", subHeader: "iOS 2019"},
        {src: "/dice-roll-logo.svg", to:"/work/dice-roll", alt:"A regular six-sided dice."},
        {src: "/good-game-logo.svg", to:"/work/good-game", alt:"A videogame controller"},
        {src: "/text-to-clip-logo.svg", to:"/work/text-to-clip", alt:"A clipboard with a letter T in the middle."},
        {src: "/workout-log-logo.svg", to:"/work/workout-log", alt:"A large bicep flexing."},
        
      ],
    };
  },
  methods: {
    emit() {
      this.$emit('clicked')
      this.isLeopoldOpen = !this.isLeopoldOpen
    },
    clickBP() {
      this.isBpOpen = !this.isBpOpen
    },
    checkLeo() {
      return this.isLeopoldOpen
    },
    checkBP() {
      return this.isBpOpen
    }
  }
};
</script>

<style lang="scss">
@import '../assets/styles/main.scss';

.hover-card {
  transition: box-shadow 1s;
  border: 1px solid transparent;
  padding: 0px;
  width: 350px;
  border-radius: 5px;
}
.clickable {
  cursor: pointer;
}

.hidden {
  background-color: rgba(0, 0, 0, 0.25);
  opacity: 0;
  transition: opacity 1s;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  border-radius: 25px;
}

.hidden h5,
.hidden p {
  color: white;
}

.hover-card:hover {
  /* animation: hover 1s infinite; */
  animation-delay: 1.5s;
  box-shadow: 20px 20px 20px rgb(143, 143, 143);
}
.hover-card:hover .hidden {
  transition-delay: 0.5s;
  opacity: 1;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
