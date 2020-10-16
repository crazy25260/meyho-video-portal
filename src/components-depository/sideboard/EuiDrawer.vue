<template>
  <!--    抽屉区域-->
  <el-drawer
    :title="title"
    :visible.sync="drawer"
    :direction="direction"
    :before-close="handleClose"
    size="75%"
    :withHeader="false"
  >
    <md-list class="mine-panel">
      <md-list-item>
        <span class="md-list-item-text">这里是你的自定义面板内容</span>
        <button @click="drawer = false" class="el-drawer__close-btn">
          <i class="el-dialog__close el-icon el-icon-close"></i>
        </button>
      </md-list-item>
    </md-list>
  </el-drawer>
</template>

<script>
export default {
  name: "EuiDrawer",
  data() {
    return {
      title: "抽屉式侧面板",
      drawer: false,
      direction: "rtl"
    };
  },
  methods: {
    handleClose(done) {
      done();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/material-kit/variables";

.md-list.md-theme-default {
  color: white;
  background-color: $brand-info;
}

.mine-panel {
  padding: 0;
  height: 100%;

  .md-list-item-text {
    color: white;
  }

  .el-drawer__close-btn {
    color: white;
  }
}
</style>
