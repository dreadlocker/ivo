<template>
  <div class="footer d-flex jc-sb ai-c">
    <div v-if="!this.$store.state.inProjects"></div>
    <div v-else>
      <span class="filter main-text-color">
        {{ this.$store.state.language.filters.filters }}:
      </span>
      <button
        @click="toggleFilter"
        :class="isFilterAll ? 'main-text-color-darker' : 'main-text-color'"
      >
        {{ this.$store.state.language.filters.all }}
      </button>
      <span class="main-text-color">&nbsp;/&nbsp;</span>
      <button
        @click="toggleFilter"
        :class="!isFilterAll ? 'main-text-color-darker' : 'main-text-color'"
      >
        {{ this.$store.state.language.filters.realised }}
      </button>
    </div>
    <div>
      <button
        @click="changeLanguageToBg"
        :class="
          this.$store.state.activeLanguage === this.$store.state.langBgStr
            ? 'main-text-color-darker'
            : 'main-text-color'
        "
      >
        {{ this.$store.state.langBgStr }}
      </button>
      <span class="main-text-color">&nbsp;/&nbsp;</span>
      <button
        @click="changeLanguageToEn"
        :class="
          this.$store.state.activeLanguage === this.$store.state.langEnStr
            ? 'main-text-color-darker'
            : 'main-text-color'
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
    changeLanguageToBg: function () {
      this.$store.commit("changeLanguageToBg");
    },
    changeLanguageToEn: function () {
      this.$store.commit("changeLanguageToEn");
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/globalVars.scss";

$font-size: 2vw;
$font-size-max: 1vw;

.footer {
  width: 100%;
  height: $footer-height;
  font-size: $font-size;
  button {
    font-size: $font-size;
    border: none;
    background-color: transparent;
    cursor: pointer;
    padding: 0;
  }
}

@media (min-width: 1025px) {
  .footer {
    font-size: $font-size-max;
    button {
      font-size: $font-size-max;
    }
  }
}
</style>
