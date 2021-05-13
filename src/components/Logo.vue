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
  height: 100px;
  .logo {
    width: 100%;
    height: 40px;
    cursor: pointer;
    background: url("../assets/logo.png") no-repeat;
  }
  .logo-animation {
    animation: changeImages 1s forwards 1s;
  }
}

@keyframes changeImages {
  0% {
    background: url("../assets/logo.png") no-repeat;
  }
  50% {
    background: url("../assets/logo1.png") no-repeat;
  }
  100% {
    background: url("../assets/logo2.png") no-repeat;
  }
}
</style>
