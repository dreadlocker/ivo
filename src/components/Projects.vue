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
      <div class="right-content d-flex">
        <div
          v-if="showLeftArrow"
          @click="changeImage()"
          class="right-arrow d-flex jc-c ai-c"
        >
          ❮
        </div>
        <div
          v-if="showRightArrow"
          @click="changeImage('next')"
          class="left-arrow d-flex jc-c ai-c"
        >
          ❯
        </div>
        <div class="img-holder d-flex" :style="{ right: `${imgHolderRight}%` }">
          <img
            v-for="(img, idx) in projects"
            :key="idx"
            :src="img"
            class="main-bg-color"
          />
        </div>
      </div>
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
    return {
      projects: [
        require("@/assets/images/project1/1.jpg"),
        require("@/assets/images/project1/2.jpg"),
        require("@/assets/images/project1/3.jpg"),
        require("@/assets/images/project1/4.jpg"),
        require("@/assets/images/project1/5.jpg"),
        require("@/assets/images/project1/6.jpg"),
        require("@/assets/images/project1/7.jpg"),
        require("@/assets/images/project1/8.jpg"),
        require("@/assets/images/project1/9.jpg"),
        require("@/assets/images/project1/10.jpg"),
        require("@/assets/images/project1/11.jpg"),
        require("@/assets/images/project1/12.jpg"),
        require("@/assets/images/project1/13.jpg"),
      ],
      projectIndex: 0,
      showLeftArrow: false,
      showRightArrow: true,
      imgHolderRight: 0,
    };
  },
  methods: {
    changeImage(direction) {
      const projectsLength = this.projects.length - 1;

      if (direction === "next") {
        if (this.projectIndex < projectsLength) {
          this.projectIndex++;
          this.showLeftArrow = true;
          this.imgHolderRight += 100;
        }
        if (this.projectIndex === projectsLength) {
          this.showRightArrow = false;
        }
      } else {
        if (this.projectIndex > 0) {
          this.projectIndex--;
          this.showRightArrow = true;
          this.imgHolderRight -= 100;
        }
        if (this.projectIndex === 0) {
          this.showLeftArrow = false;
        }
      }
    },
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
@import "@/assets/globalVars.scss";

.right-content {
  position: relative;
  .right-arrow,
  .left-arrow {
    width: 10%;
    height: 100%;
    position: absolute;
    top: 0;
    cursor: pointer;
    user-select: none;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s linear;
    &:hover {
      opacity: 1;
    }
  }
  .right-arrow {
    left: 0;
  }
  .left-arrow {
    right: 0;
  }
  .img-holder {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    transition: right #{$transition-delay} linear;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>
