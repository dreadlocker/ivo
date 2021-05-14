<template>
  <div v-if="this.$store.state.inProjects" class="bottom-content">
    <button
      v-for="(project, idx) in this.$store.state.language.projectsInfo"
      :key="idx"
    >
      <div class="popup">
        <div v-for="info in project" :key="info">
          {{ info }}
        </div>
      </div>
      <!-- {{ project }} -->
    </button>

    <!-- <img
      v-if="this.$store.state.inProjects"
      src="@/assets/42-space-scrolling-background850-2.jpg"
      alt="projects"
    /> -->
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
$button-1-width: 50px;
$button-1-height: 30px;
$popup-1-width: 150px;
$popup-1-height: 60px;

.bottom-content {
  height: 185px;
  // overflow-y: hidden;
  position: relative;
  background-image: url("../assets/42-space-scrolling-background850-2.jpg");
  button {
    width: $button-1-width;
    height: $button-1-height;
    position: absolute;
    cursor: pointer;
    padding: 0;
    border: 0;
    &:hover {
      .popup {
        opacity: 1;
      }
    }
    .popup {
      width: $popup-1-width;
      height: $popup-1-height;
      border: 1px solid blue;
      position: absolute;
      bottom: $button-1-height;
      left: calc((#{$button-1-width} - #{$popup-1-width}) / 2);
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s linear;
    }
    &:first-of-type {
      // width: $button-1-height;
      // height: $button-1-width;
      top: 10%;
      left: 10%;
    }
    &:nth-of-type(2) {
      // width: $button-1-height;
      // height: $button-1-width;
      top: 60%;
      left: 20%;
    }
    &:nth-of-type(3) {
      // width: $button-1-height;
      // height: $button-1-width;
      top: 40%;
      left: 60%;
    }
    &:last-of-type {
      // width: $button-1-height;
      // height: $button-1-width;
      top: 60%;
      left: 80%;
    }
  }
  // img {
  //   width: 150%;
  // }
}
</style>
