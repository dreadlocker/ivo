<template>
  <div class="d-flex">
    <div class="info main-bg-color">
      <div
        v-for="item in this.$store.state.language.pageInfo.contacts"
        :key="item"
        class="main-text-color"
      >
        {{ item }}
      </div>
    </div>
    <h1>Contacts</h1>
  </div>
</template>

<script>
export default {
  name: "Contacts",
  // data() {
  //   return {};
  // },
};
</script>

<style scoped lang="scss">
@import "@/assets/globalVars.scss";

.d-flex {
  height: $nav-height;
}
</style>
