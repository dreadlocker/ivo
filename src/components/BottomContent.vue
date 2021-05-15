<template>
  <div v-if="this.$store.state.inProjects" class="bottom-content">
    <img
      v-if="this.$store.state.inProjects"
      src="@/assets/42-space-scrolling-background850-2.jpg"
      alt="projects"
    />
    <button
      v-for="(info, idx) in this.$store.state.language.projectsInfo"
      :key="idx"
    >
      <div class="popup d-flex jc-c ai-c">
        {{ info }}
        <!-- <div v-for="info in project" :key="info">
        </div> -->
      </div>
      <!-- {{ project }} -->
    </button>
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
$popup-1-width: 100px;
$popup-1-height: 40px;

.bottom-content {
  height: 185px;
  overflow-y: hidden;
  position: relative;
  // background-image: url("../assets/42-space-scrolling-background850-2.jpg");
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
      bottom: calc((#{$button-1-height} - #{$popup-1-height}) / 2);
      left: calc(#{$button-1-width} + 5px);
      opacity: 0;
      border-radius: 5px;
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
      top: 40%;
      left: 2400px;
      .popup {
        left: calc(#{$popup-1-width * -1} - 6px);
      }
    }
  }
  // img {
  //   width: 150%;
  // }
}
</style>
