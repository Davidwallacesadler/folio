<template>
  <div class="my-5">
    <div>
      Profile photo with a little bio and some stuff about what I have done (like resume)
    </div>
    <ContentAreaHeader text="Work" />
    <ProjectSectionHeader text="Web Projects" />
    <ProjectCardList :card-data="webProjects" />
    <ProjectSectionHeader text="Mobile Projects" />
    <ProjectCardList :card-data="mobileProjects" />
    <ContentAreaHeader text="Not Work" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLeopoldOpen: false,
      isBpOpen: false,
      personalLogo: {src: "/personal-logo.svg", to:"/", alt: "A D blending into an S inside a circle."},
      mobileProjects: [
        {src: "/blue-pail-logo.svg", to:"/work/blue-pail", alt:"A blue watering pail with a yellow sun icon.", title: "Blue Pail | iOS, Android", subTitle: "2019", hasDarkContent: false},
        {src: "/dice-roll-logo.svg", to:"/work/dice-roll", alt:"A regular six-sided dice.", title: "Dice Roll | iOS", subTitle: "2019", hasDarkContent: true},
        {src: "/good-game-logo.svg", to:"/work/good-game", alt:"A videogame controller", title: "Good Game | iOS", subTitle: "2019", hasDarkContent: false},
        {src: "/text-to-clip-logo.svg", to:"/work/text-to-clip", alt:"A clipboard with a letter T in the middle.", title: "Text to Clip | iOS", subTitle: "2020", hasDarkContent: true},
        {src: "/workout-log-logo.svg", to:"/work/workout-log", alt:"A large bicep flexing.", title: "Workout Log | iOS", subTitle: "2018", hasDarkContent: true},
        
      ],
      webProjects: [
        {src: "/leopold.svg", to:"/work/leopold", alt:"A canadian goose", title: "Project Leopold | Vue", subTitle: "2020 - Present", hasDarkContent: false},
        {src: "/vue-photo-editor.svg", to:"/work/vue-photo-editor", alt:"A simple camera.", title: "VUE Photo Editor | Vue", subTitle: "2019", hasDarkContent: false},
      ],
      notWorkProjects: [
        {src: "/leopold.svg", to:"/work/leopold", alt:"A canadian goose", title: "Project Leopold | Vue", subTitle: "2020 - Present", hasDarkContent: false},
        {src: "/vue-photo-editor.svg", to:"/work/vue-photo-editor", alt:"A simple camera.", title: "VUE Photo Editor | Vue", subTitle: "2019", hasDarkContent: false},
      ],
    };
  },
  methods: {
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
