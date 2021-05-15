<template>
  <div class="d-flex jc-sb">
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
  .info {
    width: $content-left-width;
    height: inherit;
    font-size: 2.5vw;
    margin-right: $gutter;
  }
  h1 {
    width: $content-right-width;
    height: inherit;
    background-color: gray;
    font-size: 4.5vw;
    margin: 0;
  }
}

@media (min-width: 1025px) {
  .d-flex {
    .info {
      font-size: 1.5vw;
    }
    h1 {
      font-size: 2.5vw;
    }
  }
}
</style>
