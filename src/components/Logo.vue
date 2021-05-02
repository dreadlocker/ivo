<template>
  <div @click="goToHomePage" class="logo"></div>
</template>

<script>
export default {
  name: "Logo",
  data() {
    return {
      url: this.$route,
    };
  },
  methods: {
    goToHomePage: function () {
      this.$store.commit("changeActivetab");
      this.$router.push("/");
    },
  },
  mounted() {
    // console.log(this.url);
  },
  // watch:{

  // }
};
</script>

<style scoped lang="scss">
.logo {
  width: 469px;
  height: 67px;
  margin: 1% 0;
  cursor: pointer;
  background: url("../assets/logo.png") no-repeat;
  animation: changeImages 1s forwards 1s;
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
