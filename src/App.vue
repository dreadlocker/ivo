<template>
  <div class="app">
    <div class="content-portrait-mode jc-c ai-c">
      <Logo />
    </div>
    <div class="content-landscape-mode">
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
  data: () => ({}),
  mounted() {
    this.$store.commit("rerunLogoAnimation");
  },
};
</script>

<style lang="scss">
@import "@/assets/globalClasses.scss";
@import "@/assets/globalVars.scss";

html,
body {
  width: 100%;
  height: 100%;
}
body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #242424;
}
.app {
  width: 75%;
  height: 93%;
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

@media (max-aspect-ratio: 16/9) {
  .app {
    width: 70%;
    height: 67%;
  }
}
@media (max-width: 567px) {
  .app {
    .content-landscape-mode {
      display: none;
    }
    .content-portrait-mode {
      display: flex;
    }
    .logo-holder {
      width: 80%;
      height: 11vw;
    }
  }
}
</style>