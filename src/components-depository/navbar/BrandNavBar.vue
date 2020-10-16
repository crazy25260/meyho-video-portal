<template>
  <div class="md-layout">
    <div class="md-layout-item">
      <md-toolbar class="md-info">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <router-link to="/">
              <h3 class="md-title">
                {{ site_info.title }}
                <span class="brand-ext brand-ext-toggle"
                  >——开源Vue站群系统</span
                >
              </h3>
            </router-link>
          </div>
          <md-list>
            <md-list-item href="javascript:void(0)">
              <router-link to="/simple">
                <p>首页</p>
                <md-icon>home</md-icon>
              </router-link>
            </md-list-item>
            <md-list-item href="javascript:void(0)">
              <a @click="onSearchClick">
                <p>搜索</p>
                <md-icon>search</md-icon>
              </a>
            </md-list-item>
            <md-list-item href="javascript:void(0)">
              <a @click="onLoginClick">
                <p>登录</p>
              </a>
            </md-list-item>
          </md-list>
          <div class="md-toolbar-section-end">
            <md-button
              class="md-just-icon md-simple md-white md-toolbar-toggle"
              @click="onSlideMenuClick"
            >
              <span class="icon-bar" />
              <span class="icon-bar" />
              <span class="icon-bar" />
            </md-button>
          </div>
        </div>
      </md-toolbar>
    </div>
    <EuiDrawer ref="slideDrawer"></EuiDrawer>

    <el-drawer
      title="搜索面板"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
      size="200"
      :withHeader="false"
    >
      <!--      <template slot="title">-->
      <!--        这是老子的标题区域啊-->
      <!--      </template>-->
      <md-list>
        <md-list-item>
          <span class="md-list-item-text">搜索面板规划中...</span>
          <button @click="drawer = false" class="el-drawer__close-btn">
            <i class="el-dialog__close el-icon el-icon-close"></i>
          </button>
        </md-list-item>

        <md-list-item>
          <div class="md-autocomplete search-pane">
            <md-autocomplete
              v-model="selectedMovie"
              class="search has-white"
              :md-options="movies"
              :md-open-on-focus="false"
            >
              <label>输入影片名/演员/导演</label>
            </md-autocomplete>
          </div>
          <md-button class="md-info">搜索</md-button>
        </md-list-item>

        <md-list-item>
          <span class="md-list-item-text">中国女排</span>

          <md-button class="md-icon-button md-list-action">
            <md-icon class="md-primary">chat_bubble</md-icon>
          </md-button>
        </md-list-item>

        <md-list-item>
          <span class="md-list-item-text">信条</span>

          <md-button class="md-icon-button md-list-action">
            <md-icon class="md-primary">chat_bubble</md-icon>
          </md-button>
        </md-list-item>

        <md-list-item>
          <span class="md-list-item-text">姜子牙</span>

          <md-button class="md-icon-button md-list-action">
            <md-icon>chat_bubble</md-icon>
          </md-button>
        </md-list-item>
      </md-list>
    </el-drawer>
  </div>
</template>

<script>
import VscMixins from "@/mixins/vsc-mixins";
import EuiDrawer from "@/components-depository/sideboard/EuiDrawer";
import {addClass} from "element-ui/src/utils/dom";
export default {
  name: "BrandNavBar",
  components: {
    EuiDrawer
  },
  data() {
    return {
      selectedMovie: "",
      movies: [
        "庆余年",
        "囧妈",
        "徐峥",
        "速度与激情9",
        "肥龙过江",
        "新世界",
        "孙红雷",
        "周冬雨"
      ],
      drawer: false,
      direction: "ttb",
      showClose: true
    };
  },
  mixins: [VscMixins.SiteInfo],
  created() {
    // 为了防止——elementUI的抽屉窗口弹出时，会因为检测el-popup-parent--hidden不存在，而自动添加padding-right的style
    // 造成窗口抖动，本组件在创建初期，自动加上el-popup-parent--hidden，来防止页面抖动。
    addClass(document.body, "el-popup-parent--hidden");
  },
  methods: {
    onSlideMenuClick() {
      this.$emit("slide_drawer_show");
      this.$refs.slideDrawer.drawer = true;
    },
    onSearchClick() {
      let bodyHasOverflow =
        document.documentElement.clientHeight < document.body.scrollHeight;
      console.log(
        "document.documentElement.clientHeight:" +
          document.documentElement.clientHeight +
          ",document.body.scrollHeight:" +
          document.body.scrollHeight +
          ", bodyHasOverflow:" +
          bodyHasOverflow
      );
      this.drawer = true;
    },
    handleClose(done) {
      done();
    },
    onLoginClick() {
      this.$store.commit("navigate", {
        router: this.$router,
        path_name: "login",
        data: {}
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/material-kit/variables";

.md-toolbar {
  margin-bottom: 0;
}

.md-info {
  border-radius: 0;
}

.brand-ext {
  padding-left: 1rem;
}

.el-drawer__close-btn {
  color: white;
}

.search-pane {
  background-color: $brand-info;
  width: 100%;
}

.md-list.md-theme-default {
  background-color: $brand-info;
  color: white;
  .md-list-item-text {
    color: white;
  }
}
</style>
