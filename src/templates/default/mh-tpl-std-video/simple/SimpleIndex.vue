<template>
  <div>
    <router-view
      name="header"
      ref="header"
      @header-msg="onHeaderMsg"
      :carousel_model="carousel_model"
    />
    <router-view name="breadcrumb" ref="breadcrumb"></router-view>
    <router-view ref="content" @rendered="onContentRendered" />
    <router-view name="footer" ref="footer" />
  </div>
</template>

<script>
import VscMixins from "@/mixins/vsc-mixins";
import FrameMixins from "@/mixins/frame-mixins";

export default {
  name: "SimpleIndex",
  props: {
    test: {
      type: String
    }
  },
  mixins: [VscMixins.NavMenu, FrameMixins.VideoIndex],
  mounted() {
    console.log(this.$options.name + " mounted.");
  },
  methods: {
    onHeaderMsg(msg, params) {
      console.log(this.$options.name + "::onHeaderMsg():" + msg);
      // 特定子控件之间的事件，直接联动调用
      this.$refs.content.onHeaderMsg(
        msg,
        this.$options.name,
        this.$refs.header.$options.name
      );

      // 子控件事件处理，并转化新消息
      switch (msg) {
        case "nav-click":
          this.onNavClick(params.index);
          break;
      }
    },
    onNavClick(navIndex) {
      let navItem = this.$store.state.nav_model.nav_categories[navIndex];
      console.log("onNavClick to:" + JSON.stringify(navItem));
      console.log("onNavClick from:" + JSON.stringify(this.current_nav));
      if (this.$store.state.nav_model.nav_index !== navIndex) {
        this.$store.commit("setCurrentNavCategory", navIndex);
        if (this.$refs.breadcrumb) {
          this.$refs.breadcrumb.onBreadCrumbLoad(navIndex);
        }
        // 类目有变化，如果当前页面是列表页，则不跳转，只根据类别刷新列表内容。
        if (this.$router.currentRoute.name === navItem.path_name) {
          // // 如有必要，此处的回调方式，可以改成触发消息的方式。
          // this.$refs.content.$emit("nav-changed", navItem, this.current_nav);
          this.$refs.content.onHeaderMsg(
            "nav-changed",
            navItem,
            this.current_nav
          );
          return;
        }
      }

      // 如果路径有变化，就跳转。
      if (this.$router.currentRoute.name !== navItem.path_name) {
        this.$store.commit("navigate", {
          router: this.$router,
          path_name: navItem.path_name,
          data: navItem
        });
      }
    },
    onContentRendered(ref, params) {
      console.log("onContentRendered():" + ref);
      // 如果存在导航栏数据，则刷新面包屑。
      if (this.current_nav.name) {
        this.$refs.breadcrumb.onBreadCrumbLoad(
          this.$store.state.nav_model.nav_index
        );
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
