<template>
  <MiddleContentHolder>
    <template v-slot:middleContent>
      <div
        v-for="item in $store.state.language.pageInfo.contacts"
        :key="item"
        class="main-text-color"
      >
        {{ item }}
      </div>
    </template>
    <template v-slot:rightContent>
      <h1>Contacts</h1>
    </template>
  </MiddleContentHolder>
</template>

<script>
import MiddleContentHolder from "./MiddleContentHolder";

export default {
  name: "Contacts",
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
