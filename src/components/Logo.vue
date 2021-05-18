<template>
  <div class="logo-holder d-flex ai-fe">
    <div
      @click="goToHomePage"
      :class="[
        'logo',
        this.$store.state.runLogoAnimation ? 'logo-animation' : '',
      ]"
    ></div>
  </div>
</template>

<script>
export default {
  name: "Logo",
  data() {
    return {};
  },
  methods: {
    goToHomePage: function () {
      this.$store.commit("changeActivetab");
      this.$store.commit("rerunLogoAnimation");
      if (this.$route.fullPath !== "/") {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/globalVars.scss";

.logo-holder {
  width: $navbar-width;
  height: $logo-height;
  .logo {
    width: 100%;
    height: 100%;
    background: url("../assets/images/logo.svg") no-repeat;
    cursor: pointer;
  }
  .logo-animation {
    animation: changeImages 1s forwards 1s;
  }
}

@keyframes changeImages {
  0% {
    background: url("../assets/images/logo.svg") no-repeat;
  }
  50% {
    background: url("../assets/images/logo1.svg") no-repeat;
  }
  100% {
    background: url("../assets/images/logo2.svg") no-repeat;
  }
}
</style>
