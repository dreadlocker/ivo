<template>
  <nav class="navbar">
    <div class="tabs-holder d-flex">
      <div
        v-for="(tab, index) in this.$store.state.navbar"
        @click="changeActivetab(index)"
        :key="tab.name"
        :class="[
          'tab-holder d-flex',
          tab.active ? 'active-bg-color' : 'main-bg-color',
        ]"
      >
        <!-- class="tab-holder d-flex main-bg-color" -->
        <router-link :to="tab.path" class="link main-text-color">
          {{ tab.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  // data() {
  //   return {};
  // },
  methods: {
    changeActivetab(index) {
      this.$store.commit("changeActivetab", index);
      this.$store.commit("rerunLogoAnimation");
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/globalVars.scss";

$number-of-tabs: 3;
// $tab-height: calc(100% / #{$number-of-tabs});
$tab-height: 169px;
$padding: 20px;

.navbar {
  width: $navbar-width;
  height: $nav-height;
  margin-right: $gutter;
  .tabs-holder {
    // width: 100%;
    // height: 100%;
    flex-direction: column;
    .tab-holder {
      // width: 100%;
      height: $tab-height;
      margin-bottom: $gutter;
      &:last-child {
        margin-bottom: 0;
      }
      .link {
        width: calc(100% - #{$padding});
        height: calc(100% - #{$padding});
        font-size: 33px;
        padding: $padding 0 0 $padding;
        text-decoration: none;
        &:hover {
          transform: scale(1.05);
        }
        transition: all 0.3s;
      }
    }
  }
}
</style>
