<template>
  <div class="footer d-flex jc-sb">
    <div v-if="!this.$store.state.inProjects"></div>
    <div v-else>
      <button @click="toggleFilter" class="main-text-color">
        {{ this.$store.state.language.filters.filters }}:&nbsp;
      </button>
      <button
        @click="toggleFilter"
        :class="isFilterAll ? 'main-text-color' : 'main-text-color-darker'"
      >
        {{ this.$store.state.language.filters.all }}
      </button>
      <span class="main-text-color">&nbsp;/&nbsp;</span>
      <button
        @click="toggleFilter"
        :class="!isFilterAll ? 'main-text-color' : 'main-text-color-darker'"
      >
        {{ this.$store.state.language.filters.realised }}
      </button>
    </div>
    <div>
      <button
        @click="toggleLanguage"
        :class="
          this.$store.state.activeLanguage === this.$store.state.langBgStr
            ? 'main-text-color'
            : 'main-text-color-darker'
        "
      >
        {{ this.$store.state.langBgStr }}
      </button>
      <span class="main-text-color">&nbsp;/&nbsp;</span>
      <button
        @click="toggleLanguage"
        :class="
          this.$store.state.activeLanguage === this.$store.state.langEnStr
            ? 'main-text-color'
            : 'main-text-color-darker'
        "
      >
        {{ this.$store.state.langEnStr }}
      </button>
    </div>
  </div>
</template>

<script>
import store from "@/store/index.js";

export default {
  name: "Footer",
  data() {
    return {
      isFilterAll: false,
    };
  },
  methods: {
    toggleFilter: function () {
      // TODO: da dobavq logika za smenqne na koi proekt se vijda
      this.isFilterAll = !this.isFilterAll;
    },
    toggleLanguage: function () {
      this.$store.commit("changeLanguage");
    },
  },
};
</script>

<style scoped lang="scss">
.footer {
  height: fit-content;
  margin: 0.5% 0;
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
}
</style>
