<template>
  <div class="app">
    <Logo />
    <router-view />
    <BottomContent />
    <Footer />
  </div>
</template>

<script>
import Logo from "@/components/Logo";
import BottomContent from "@/components/BottomContent";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Logo,
    BottomContent,
    Footer,
  },
  data: () => ({}),
};
</script>

<style lang="scss">
@import "@/assets/globalClasses.scss";
@import "@/assets/globalVars.scss";

body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  background-color: #242424;
}
.app {
  // width: 1520px; // ORIGINAL, COMMENT ME WHEN DEVELOPING
  width: 700px; // FOR DEV
  height: fit-content;
}
.app,
button {
  font-family: Calibri;
  // "Gill Sans", "Gill Sans MT", "Trebuchet MS", sans-serif
}
</style>