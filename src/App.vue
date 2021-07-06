<template>
  <div class="app">
    <div v-if="isPortraitMode" class="content-portrait-mode jc-c ai-c">
      <Logo />
    </div>
    <div v-else class="content-landscape-mode">
      <Logo />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Logo,
    Footer,
  },
  data() {
    return {
      isPortraitMode: true,
      interval: null,
    };
  },
  methods: {
    goToHomePage() {
      this.$store.commit("changeActivetab");
      this.$store.commit("rerunLogoAnimation");
      if (this.$route.fullPath !== "/") {
        this.$router.push("/");
      }
    },
    handleOrientationChange() {
      const orientation = window.screen.orientation.type;
      if (orientation === "portrait-primary") {
        this.isPortraitMode = true;
        this.interval = setTimeout(() => {
          this.isPortraitMode = false;
        }, 2500);
      } else if (orientation === "landscape-primary") {
        this.isPortraitMode = false;
        clearInterval(this.interval);
      }
    },
  },
  mounted() {
    this.$store.commit("rerunLogoAnimation");
    window.addEventListener("orientationchange", this.handleOrientationChange);
    this.handleOrientationChange();
  },
};
</script>

<style lang="scss">
@import "@/assets/globalClasses.scss";
@import "@/assets/globalVars.scss";

$margin-top: 2.396%;
$margin-bottom: 6.563%;
$margin-x: 10.417%;

html {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
body {
  width: 100%;
  height: 100vh;
  position: relative;
  margin: 0;
  background-color: #242424;
}
.app {
  width: 79.167vw;
  height: 47.292vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .content-portrait-mode {
    width: 100%;
    height: 100%;
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    .logo {
      transform: rotate(-90deg);
    }
  }
  .content-landscape-mode {
    width: 100%;
    height: 100%;
    display: block;
  }
}
.app,
button {
  font-family: Calibri;
  // "Gill Sans", "Gill Sans MT", "Trebuchet MS", sans-serif
}

@media (max-width: 567px) {
  .app {
    .content-portrait-mode {
      display: flex;
    }
    .logo-holder {
      width: 80%;
      height: 11vw;
    }
  }
}
@media (min-height: 280px) and (max-height: 280px) and (orientation: landscape) {
  .app {
    height: 39vw;
    .img-holder > img {
      height: 122% !important;
    }
  }
}
@media (min-height: 375px) and (max-height: 376px) and (orientation: landscape) {
  .app {
    height: 43vw;
    .img-holder > img {
      height: 110% !important;
    }
  }
}
</style>