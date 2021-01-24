<template>
  <div class="d-flex flex-column align-items-center">
    <div class="profile-header position-relative d-flex align-items-center justify-content-center">
      <div class="profile-background position-absolute" />
      <b-img class="profile-image" src="david-sadler.png" rounded="circle" v-bind="profileImgProps" />
    </div>

    <div class="py-5 folio-content-max-width d-flex flex-column align-items-center">
      <h1 class="folio-font-medium folio-weight-medium text-center">
        Hi! My name is 
        <span class="text-theme folio-font-large folio-weight-thick">David!</span>
      </h1> 
      <h2 class="folio-font-medium folio-weight-thin text-center">I design and develop awesome software, and I love what I do
        <span class="text-theme folio-font-large folio-weight-medium fading">|</span>
      </h2>
    </div>

    <img class="background-image mr-5 ml-5" src="/computer.svg" alt="Icon of a computer with cup and simple shapes">

    <div class="bio-container position-relative">
      <div class="bio-background position-absolute">
        <div class="d-flex flex-column align-items-center p-5">
          <h3 class="folio-weight-thick text-white">A Little About Me</h3>
          <p class="folio-weight-thin folio-font-small text-white folio-detail-max-width pt-3 text-center">I have been an artist all my life. I love to draw, think, and build and I love to build and design apps.</p>
        </div>
      </div>
    </div>
    
    <b-card-group class="card-group skills-group folio-content-max-width">
        <b-card class="folio-card">
          <div class="d-flex align-items-center justify-content-center flex-column">
            <img class="folio-card-icon" src="/hand.svg" alt="Icon of a hand with brush, pencil, and ruler.">
            <h3 class="folio-font-small folio-weight-thick pt-3 text-center">Design</h3>
            <p class="folio-weight-thin folio-font-small pt-3 text-center">I love to design simple, beautiful interfaces and iconography.</p> 
            <p class="folio-weight-medium folio-font-small pt-3 text-center text-theme">Design Tools:</p> 
            <div class="container pt-2 d-flex align-items-center justify-content-center">
              <b-img class="tech-image m-1" v-for="(logo,i) in designToolLogos" :key="i" :src="logo.asset" :alt="logo.alt" v-b-tooltip.hover :title="logo.tip" fluid />
            </div>
          </div>
        </b-card>
        <b-card class="folio-card">
          <div class="d-flex align-items-center justify-content-center flex-column">
            <img class="folio-card-icon" src="/code.svg" alt="Icon denoting code">
            <h3 class="folio-font-small folio-weight-thick pt-3 text-center">Development</h3>
            <p class="folio-weight-thin folio-font-small pt-3 text-center">I am passionate about taking app ideas from conception to completion.</p> 
            <p class="folio-weight-medium folio-font-small pt-3 text-center text-theme">Dev Tools:</p> 
            <div class="d-flex justify-content-center">
              <div class="container pt-2">
                <b-img class="tech-image m-1" v-for="(logo,i) in devToolLogos" :key="i" :src="logo.asset" :alt="logo.alt" v-b-tooltip.hover :title="logo.tip" fluid />
              </div>
            </div>
          </div>
        </b-card>
    </b-card-group>
    
    <div class="d-flex flex-column align-items-center justify-content-center">
      <h3 class="folio-weight-thick pt-5">My Work</h3>
      <p class="folio-detail-max-width folio-weight-thin folio-font-small text-center px-2">Below is a collection of my recent design and development work. If you're interested in working with I would love to hear from you.</p>
    </div>
    <b-button href="mailto:davidwallacesadler@gmail.com" pill class="folio-button">
      <img class="folio-button-icon" src="/contact.svg" alt="Icon of a person waving.">
      Contact Me
      </b-button>
    <div class="py-5">
      <ProjectCardList :card-data="workProjects" />
    </div>
    <!-- <div class="folio-footer d-flex align-items-center justify-content-center text-center">
      <p class="folio-font-small text-white">Made with ♡ by Me 2021</p>
    </div> -->
  </div>

</template>

<script>
export default {
  data() {
    return {
      profileImgProps: { width: 250, height: 250, fluid: true, },
      designToolLogos:
      [
        { 
          asset: "xd-logo.png",
          tip: "Adobe Xd",
          alt: "Adobe x.d logo"
        },
        {
          asset: "ai-logo.png",
          tip: "Adobe Illustrator",
          alt: "Adobe Illustrator logo"
        },
        { 
          asset: "ps-logo.png",
          tip: "Adobe Photoshop",
          alt: "Adobe Photoshop logo"
        },
        {
          asset: "blender-logo.png",
          tip: "Blender",
          alt: "Blender logo"
        }
      ],
      devToolLogos: 
      [
        { 
          asset:"html5-logo.png",
          tip: "HTML5",
          alt: "Html 5 logo"
        },
        {
          asset:"css3-logo.png",
          tip: "CSS3",
          alt: "Css 5 logo"
        },
        {
          asset: "javaScript-logo.png",
          tip: "JavaScript",
          alt: "java script logo"
        },
        {
          asset: "vue-logo.png",
          tip: "Vue",
          alt: "Vue logo"
        },
        {
          asset: "swift-logo.png",
          tip: "Swift",
          alt: "Swift logo"
        },
        {
          asset:"kotlin-logo.png",
          tip: "Kotlin",
          alt: "Kotlin logo"
        },
      ],
      workProjects: 
      [
        {
          src: "/leopold.svg",
          link: [{ title: `View Site >`, href:"https://cnsrvit.usaconservation.org/" }],
          alt:"A canadian goose",
          title: "Project Leopold | Vue",
          subTitle: "Staffing application currently used by American Conservation Experience."
        },
        {
          src: "/vue-photo-editor.svg",
          link: [{ title: `In Progress`, href:"" }],
          alt:"A simple camera.",
          title: "VUE Photo Editor | Vue",
          subTitle: "Photo editor made using vue and vueCropper."
        },
        {
          src: "/blue-pail-logo.svg",
          link: [{ title: `View Code >`, href:"https://github.com/Davidwallacesadler/Blue-Pail" }],
          alt:"A blue watering pail with a yellow sun icon.",
          title: "Blue Pail | iOS, Android",
          subTitle: "Plant wantering reminder and tracking app."
        },
        {
          src: "/dice-roll-logo.svg",
          link: [{ title: `View Code >`, href:"https://github.com/Davidwallacesadler/diceSim" }],
          alt:"A regular six-sided dice.",
          title: "Dice Roll | iOS",
          subTitle: "3D dice rolling simulator utilizing SceneKit."
        },
        {
          src: "/good-game-logo.svg",
          link: [{ title: `View Code >`, href:"https://github.com/Davidwallacesadler/GG-GoodGame" }],
          alt:"A videogame controller",
          title: "Good Game | iOS",
          subTitle: "Videogame library manager and playthrough recording app."
        },
        {
          src: "/text-to-clip-logo.svg",
          link: [{ title: `View App >`, href:"https://apps.apple.com/us/app/texttoclip/id1525970670" }],
          alt:"A clipboard with a letter T in the middle.",
          title: "Text to Clip | iOS",
          subTitle: "Text scanning and digitizing app."
        },
        {
          src: "/workout-log-logo.svg",
          link: [{ title: `View App >`, href:"https://apps.apple.com/us/app/the-workout-log/id1254050586" }],
          alt:"A large bicep flexing.",
          title: "Workout Log | iOS",
          subTitle: "Workout tracker and fitness app."
        },
      ],
    socials:
      [
        {
          src: "/linkedin-logo.png",
          href: "https://www.linkedin.com/in/david-wallace-sadler/",
        },
        {
          src: "/github-logo.svg",
          href: "https://github.com/Davidwallacesadler",
        },
      ]
    }
  }
}
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
  display: grid;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 230px;
  background-color: $folio-theme-color;
  background-image: url('~@/static/shapes.svg');
  background-repeat: round;
}
.fading {
  animation: fading 1s infinite;
}
@keyframes fading {
  50% {
    opacity: 0%;
  }
  100% {
    opacity: 100%;
  }
}
.bio-container {
  width: 100vw;
  height: 400px;
}
.bio-background {
  z-index: 1;
  top: 1rem;
  left: 0;
  width: 100vw;
  height: 400px;
  background-color: $folio-theme-color;
  background-image: url('~@/static/sprinkles.svg');
}
.folio-card {
  z-index: 2;
  border-radius: $folio-border-radius;
  box-shadow: 0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 1px #E6ECF8;
  border: none;
}
.folio-card-icon {
  width: 100px;
  height: 100px;
}
.card-group.skills-group {
  margin-top: -5rem;
  width: 90vw;
}
.faux-text-box {
  border: 1px solid gray;
  border-radius: 10px;
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
@media (min-width: 600px) {
  .card-group.skills-group {
  margin-top: -8rem;
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
  background-image: url('~@/static/sprinkles.svg');
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
.folio-footer {
  width: 100vw;
  height: 100px;
  background-color: $folio-theme-color;
  background-image: url('~@/static/shapes.svg');
  background-repeat: round;
}
</style>
