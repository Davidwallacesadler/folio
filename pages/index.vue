<template>
  <div class="wrapper">
    <div>
      <NavBar :options="['About Me', 'Work', 'Not Work']" />
      <div class="container">
        <div class="row grid-row mb-2">
          <div class="col mr-2">
            <img :src="projects[0]" />
            <div class="hidden p-3">
              <h5>Blue Pail</h5>
              <p>a bunch of stuff about things</p>
            </div>
          </div>
          <div class="col">
            <img :src="projects[1]" />
          </div>
        </div>
        <div class="row grid-row">
          <div class="col mr-2">
            <img :src="projects[2]" />
          </div>
          <div class="col">
            <img :src="projects[3]" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        "/blue-pail-logo.png",
        "/good-game-logo.png",
        "/dice-roll-logo.png",
        "/shot-buddy-logo.png",
      ],
    };
  },
};
</script>

<style>
.wrapper {
  margin: 0 auto;
  min-height: 100vh;
  background-color: rgba(255, 255, 255, 0.986);
}
img {
  width: 500px;
}
.grid-row .col {
  border-radius: 25px;
  transition: box-shadow 1s;
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

.grid-row .col:hover {
  /* animation: hover 1s infinite; */
  animation-delay: 1.5s;
  box-shadow: 20px 20px 20px rgb(143, 143, 143);
}
.grid-row .col:hover .hidden {
  transition-delay: 0.5s;
  opacity: 1;
}
@keyframes hover {
  0% {
    box-shadow: 20px 20px 20px rgb(143, 143, 143);
    transform: rotate(3px);
  }
  50% {
    box-shadow: 18px 18x 18px rgb(143, 143, 143);
  }
  100% {
    box-shadow: 20px 20px 20px rgb(143, 143, 143);
  }
}
@keyframes details {
  0% {
    box-shadow: 20px 20px 20px rgb(143, 143, 143);
    transform: rotate(3px);
  }
  50% {
    box-shadow: 18px 18x 18px rgb(143, 143, 143);
  }
  100% {
    box-shadow: 20px 20px 20px rgb(143, 143, 143);
  }
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
</style>
