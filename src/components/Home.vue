<template>
  <div class="top-content d-flex">
    <div class="nav-content-holder d-flex jc-sb">
      <Navbar />
      <router-view class="middle-content" />
    </div>
    <div class="projects-img-holder">
      <BottomContent />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import BottomContent from "@/components/BottomContent";

export default {
  name: "Home",
  components: {
    Navbar,
    BottomContent,
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/globalVars.scss";

.top-content {
  width: 100%;
  height: $content-height;
  flex-direction: column;
  .nav-content-holder {
    width: 100%;
    height: $content-top-height;
    margin-bottom: $gutter;
    .middle-content {
      width: $middle-content-width;
      height: 100%;
    }
  }
  .projects-img-holder {
    width: 100%;
    height: $content-bottom-height;
  }
}
</style>
