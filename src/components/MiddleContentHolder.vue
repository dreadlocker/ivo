<template>
  <div class="d-flex">
    <div class="info main-bg-color">
      <slot name="middleContent"></slot>
    </div>
    <slot name="rightContent"></slot>
  </div>
</template>

<script>
export default {
  name: "MiddleContentHolder",
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/globalVars.scss";

.d-flex {
  height: $nav-height;
  .info {
    width: 276px;
    height: inherit;
    margin-right: $gutter;
  }
  h1 {
    width: $content-right-width;
    height: inherit;
    background-color: gray;
    margin: 0;
  }
}
</style>
