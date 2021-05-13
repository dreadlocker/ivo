<template>
  <div class="top-content d-flex">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "Home",
  components: {
    Navbar,
  },
  // data() {
  //   return {};
  // },
};
</script>

<style scoped lang="scss">
@import "@/assets/globalVars.scss";

.top-content {
  margin: $gutter 0;
  // width: 100%;
  // height: 100%;
}
</style>
