<template>
  <div class="bottom-content">
    <img
      v-if="this.$store.state.inProjects"
      src="@/assets/42-space-scrolling-background850-2.jpg"
      alt="projects"
    />
    <template v-if="this.$store.state.inProjects">
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
    </template>
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
@import "@/assets/globalVars.scss";

$button-1-width: 7%;
$button-1-height: 25%;
$popup-1-width: 100%;
$popup-1-height: 100%;
$popup-left: 105%;
$popup-padding: 5%;

.bottom-content {
  width: 100%;
  height: 100%;
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
      min-width: fit-content;
      height: $popup-1-height;
      border: 1px solid blue;
      position: absolute;
      bottom: calc((100% - #{$popup-1-height} - #{$popup-padding}) / 2);
      left: $popup-left;
      opacity: 0;
      padding: $popup-padding;
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
      left: 90%;
    }
  }
  img {
    width: 100%;
    height: 100%;
  }
}

@media (max-width: 400px) {
  button {
    &:last-of-type {
      .popup {
        left: calc(#{-$popup-left} - 47%);
      }
    }
  }
}
@media (min-width: 400px) {
  button {
    &:last-of-type {
      .popup {
        left: calc(#{-$popup-left} - #{$popup-padding * 2} - 5%);
      }
    }
  }
}
</style>
