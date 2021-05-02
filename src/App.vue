<template>
  <div class="app">
    <Logo />
    <div class="content">
      <router-view />
    </div>
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

$body-margin: 3%;

html,
.app {
  width: 100%;
  height: 100%;
}
body {
  width: calc(100% - #{$body-margin * 2});
  height: calc(100% - #{$body-margin * 2});
  margin: $body-margin;
  padding: 0;
  background-color: #242424;
}
.app {
  .content {
    width: inherit;
    height: 50%;
    margin: $gutter 0;
  }
}
</style>