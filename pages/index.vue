<template>
  <div class="wrapper">
    <div>
      <NavBar :options="['About Me', 'Work', 'Not Work']" />
      <ProjectCardList :card-data="projects" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLeopoldOpen: false,
      isBpOpen: false,
      personalLogo: {src: "/personal-logo.svg", to:"#", alt: "A D blending into an S inside a circle."},
      projects: [
        {src: "/blue-pail-logo.svg", to:"#", alt:"A blue watering pail with a yellow sun icon."},
        {src: "/dice-roll-logo.svg", to:"#", alt:"A regular six-sided dice."},
        {src: "/good-game-logo.svg", to:"#", alt:"A videogame controller"},
        {src: "/text-to-clip-logo.svg", to:"#", alt:"A clipboard with a letter T in the middle."},
        {src: "/workout-log-logo.svg", to:"#", alt:"A clipboard with a letter T in the middle."},
        
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

.wrapper {
  margin: 0 auto;
  min-height: 100vh;
  //background-color: rgba(255, 255, 255, 0.986);
  // background-color: $folio-bkg-color;
}
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
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: black;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.details {
  height: 550px;
  width: 60vw;
  background-color: rgb(143, 143, 143);
  transition: all 0.75s;
  overflow-y: scroll;
}

.slide-enter, .slide-leave-to
/* .slide-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(120vw);
}
.slide-reverse-enter, .slide-reverse-leave-to
/* .slide-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-120vw);
}
.slide-leave-active {
  /* position: absolute; */
}
/* @media (min-width: 992px) { 
.hover-card svg {
  width: 700px;
}
}

@media (min-width: 1200px) { 
  .hover-card svg {
  width: 900px;
}
} */
</style>
