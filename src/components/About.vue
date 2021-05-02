<template>
  <div class="d-flex">
    <div class="info main-bg-color">
      <div
        v-for="item in this.$store.state.language.pageInfo.about"
        :key="item"
        class="main-text-color"
      >
        {{ item }}
      </div>
    </div>
    <h1>About</h1>
  </div>
</template>

<script>
export default {
  name: "About",
  // data() {
  //   return {};
  // },
};
</script>

<style scoped lang="scss">
@import "@/assets/globalVars.scss";

.d-flex {
  width: $content-width;
  height: 100%;
  .info {
    width: $nav-width;
  }
}
</style>
