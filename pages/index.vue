<template>
  <div class="d-flex flex-column align-items-center">

    <div class="profile-header position-relative d-flex align-items-center justify-content-center">
      <div class="background-rect position-absolute" />
      <b-img class="profile-image" src="david-sadler.png" rounded="circle" v-bind="profileImgProps" />
    </div>

    <div class="p-5 folio-content-max-width">
      <h1 class="folio-weight-medium">
        Hi I'm 
        <span class="text-active folio-font-large folio-weight-thick">David</span>
      </h1>
      <h1 class="folio-font-medium folio-weight-medium">A Driven Designer, Web and Mobile Developer</h1>
      <h2 class="folio-font-medium folio-weight-medium">I love to work with:</h2>
      <div class="d-flex row-wrap">
        <div v-for="(logo,i) in techLogos" :key="i" style="flex-basis:50px;">
          <b-img class="tech-image m-1" :src="logo.asset" :alt="logo.alt" v-b-tooltip.hover :title="logo.tip" />
        </div>
      </div>
    </div>

      
    
    <div>
      <div class="texture-background">
        
      </div>
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
  height: 260px;
}
.profile-image {
  z-index: 2;
}
.background-rect {
  z-index: 1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 200px;
  background-color: $folio-theme-color;
}
.tech-image {
  max-width: 50px;
  max-height: 50px;
  transition: all 0.25s;
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
