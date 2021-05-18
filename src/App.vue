<template>
  <div class="app">
    <Logo />
    <router-view />
    <Footer />
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
</style>