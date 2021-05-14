<template>
  <MiddleContentHolder>
    <template v-slot:middleContent>
      <div
        v-for="item in $store.state.language.pageInfo.projects"
        :key="item"
        class="main-text-color"
      >
        {{ item }}
      </div>
    </template>
    <template v-slot:rightContent>
      <h1>Projects</h1>
    </template>
  </MiddleContentHolder>
</template>

<script>
import MiddleContentHolder from "./MiddleContentHolder";

export default {
  name: "Projects",
  components: {
    MiddleContentHolder,
  },
  data() {
    return {};
  },
  beforeMount() {
    this.$store.commit("showProjectFilters");
  },
  beforeDestroy() {
    this.$store.commit("hideProjectFilters");
  },
};
</script>

<style scoped lang="scss">
</style>
