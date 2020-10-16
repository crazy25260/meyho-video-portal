<template>
  <el-row :gutter="20" style="margin:0">
    <el-col :span="20">
      <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item
            v-for="(item, index) in traces"
            :key="index"
            :to="{ path: item.path }"
          >
            <span class="bread-text">{{ item.name }}</span></el-breadcrumb-item
          >
        </el-breadcrumb>
      </div>
    </el-col>
    <el-col :span="4"
      ><a href="/" v-if="steps.length > 1"
        ><small><u>返回</u></small></a
      ></el-col
    >
  </el-row>
</template>

<script>
export default {
  name: "BreadCrumb",
  data() {
    return {
      traces: [{ path: "/", name: "缺省" }]
    };
  },
  computed: {
    steps() {
      return this.$store.state.path_trace;
    }
  },
  created() {
    this.$on("breadcrumb-changed", params => {
      console.log("hehehehe======breadcrumb-changed");
      this.traces = this.$store.state.path_trace;
    });
  }
};
</script>

<style lang="scss" scoped>
.breadcrumb {
  padding: 0.5rem 0 0.5rem 0;

  .bread-text {
    color: #00bcd4;
  }
}
</style>
