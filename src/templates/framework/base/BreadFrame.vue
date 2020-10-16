<template>
  <div class="vsc-breadcrumb">
    <span v-for="(item, index) in steps" :key="index">
      <span v-if="index !== 0" class="breadcrumb-arrow">-></span>
      <!--      <router-link :to="{ path: item.path }">-->
      <!--        {{ item.name }}</router-link-->
      <a href="javascript:void(0)" @click="onBreadCrumbClicked(item)">
        {{ item.name }}</a
      ></span
    >
  </div>
</template>

<script>
import VscMixins from "@/mixins/vsc-mixins";
export default {
  name: "BreadFrame",
  mixins: [VscMixins.NavMenu],
  computed: {
    steps() {
      return this.$store.state.path_trace;
    },
    hasItems() {
      return this.steps.length > 0;
    }
  },
  mounted() {
    console.log(this.$options.name + " mounted.");
  },
  methods: {
    onBreadCrumbLoad(navIndex) {
      let navItem = this.$store.state.nav_model.nav_categories[navIndex];
      this.$store.state.path_trace = [
        {
          path: "/simple",
          name: "首页",
          navIndex: 0
        },
        {
          path: navItem.path,
          name: navItem.name,
          navIndex: navIndex
        }
      ];
    },
    onBreadCrumbClicked(breadcrumbItem) {
      this.$store.commit("setCurrentNavCategory", breadcrumbItem.navIndex);
      let navItem = this.$store.state.nav_model.nav_categories[
        breadcrumbItem.navIndex
      ];
      this.$store.commit("navigate", {
        router: this.$router,
        path_name: navItem.path_name,
        data: navItem.id
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/material-kit/variables";

.vsc-breadcrumb {
  color: $brand-info;
  background-color: white;
  text-align: left;
  font-size: smaller;
  font-weight: normal;

  padding-left: 0.6rem;
  .breadcrumb-arrow {
    padding-left: 0.2rem;
    padding-right: 0.2rem;
  }
}
</style>
