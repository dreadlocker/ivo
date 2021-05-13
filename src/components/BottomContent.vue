<template>
  <div class="bottom-content">
    <img
      v-if="this.$store.state.inProjects"
      src="@/assets/42-space-scrolling-background850-2.jpg"
      alt="projects"
    />
  </div>
</template>

<script>
export default {
  name: "BottomContent",
  // data() {
  //   return {};
  // },
};
</script>

<style scoped lang="scss">
.bottom-content {
  height: 185px;
  overflow-y: hidden;
  img {
    width: 150%;
  }
}
</style>
