<template>
  <div>
    默认标准模板首页
  </div>
</template>

<script>
export default {
  name: "StandardIndex",
  props: {
    test: {
      type: String
    }
  },
  mounted() {
    console.log(this.$options.name + "333333333:" + this.test);
  }
};
</script>

<style lang="scss" scoped></style>
