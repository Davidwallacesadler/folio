<template>
  <div class="d-flex flex-column align-items-center">

    <div class="profile-header position-relative d-flex align-items-center justify-content-center">
      <div class="profile-background position-absolute" />
      <b-img class="profile-image" src="david-sadler.png" rounded="circle" v-bind="profileImgProps" />
    </div>

    <div class="p-5 folio-content-max-width">
      <h1 class="folio-font-medium folio-weight-medium">
        Hi! My name is 
        <span class="text-active folio-font-large folio-weight-thick">David!</span>
      </h1>
      <div class="border-left-theme pl-5 pr-5">  
        <h2 class="folio-font-medium folio-weight-thin">I design and develop awesome software, and I love what I do.</h2>
      </div>
    </div>

    <img class="background-image mr-5 ml-5" src="/computer.svg" alt="A computer and cup icon">

    <div class="bio-container position-relative">
      <div class="bio-background position-absolute">
        <div class="d-flex flex-column align-items-center p-5">
          <h3 class="folio-weight-thick text-white">A Little About Me</h3>
          <p class="folio-weight-thin text-white">A bunch of things about me. A bunch of things about me. A bunch of things about me</p>
        </div>
      </div>
    </div>

    <div class="container pt-2">
      <b-img class="tech-image m-1" v-for="(logo,i) in techLogos" :key="i" :src="logo.asset" :alt="logo.alt" v-b-tooltip.hover :title="logo.tip" fluid/>
    </div>
  
    <!-- <ContentAreaHeader text="Work" />
    <ProjectSectionHeader text="Web Projects" />
    <ProjectCardList :card-data="webProjects" />
    <ProjectSectionHeader text="Mobile Projects" />
    <ProjectCardList :card-data="mobileProjects" />
    <ContentAreaHeader text="Not Work" /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      profileImgProps: { width: 250, height: 250, fluid: true, },
      techLogos: [{ asset:"html5-logo.png", tip: "HTML5", alt: "Html 5 logo"},
                  { asset:"css3-logo.png", tip: "CSS3", alt: "Css 5 logo"},
                  { asset: "javaScript-logo.png", tip: "JavaScript", alt: "java script logo"},
                  { asset: "vue-logo.png", tip: "Vue", alt: "Vue logo"},
                  { asset: "swift-logo.png", tip: "Swift", alt: "Swift logo"},
                  { asset: "kotlin-logo.png", tip: "Kotlin", alt: "Kotlin logo"},
                  { asset: "xd-logo.png", tip: "Adobe Xd", alt: "Adobe x.d logo"},
                  { asset: "ai-logo.png", tip: "Adobe Illustrator", alt: "Adobe Illustrator logo"},
                  { asset: "ps-logo.png", tip: "Adobe Photoshop", alt: "Adobe Photoshop logo"},
                  { asset: "blender-logo.png", tip: "Blender", alt: "Blender logo"}
                  ],
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
.overflow-hidden {
  overflow: hidden;
}
.profile-header {
  width: 100vw;
  height: 300px;
}
.profile-image {
  z-index: 2;
}
.profile-background {
  z-index: 1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 230px;
  background-color: $folio-theme-color;
  background-image: url('~@/static/shapes.svg');
}

.bio-container {
  width: 100vw;
  height: 275px;
}
.bio-background {
  z-index: 1;
  top: 2px;
  left: 0;
  width: 100vw;
  height: 400px;
  background-color: $folio-theme-color;
}
.background-image {
  max-width: 750px;
}
.tech-image {
  max-width: 50px;
  max-height: 50px;
  transition: all 0.25s;
}
@media (min-width: 1200px) {
  .background-image {
    width: 100vw;
  }
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
</style>
