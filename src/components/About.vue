<template>
  <MiddleContentHolder>
    <template v-slot:middleContent>
      <div
        v-for="item in $store.state.language.pageInfo.about"
        :key="item"
        class="main-text-color"
      >
        {{ item }}
      </div>
    </template>
    <template v-slot:rightContent>
      <h1>About</h1>
    </template>
  </MiddleContentHolder>
</template>

<script>
import MiddleContentHolder from "./MiddleContentHolder";

export default {
  name: "About",
  components: {
    MiddleContentHolder,
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
</style>
