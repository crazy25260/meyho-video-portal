<template>
  <div></div>
</template>

<script>
export default {
  name: "MainEntry",
  created() {
    this.$store.commit("navigate", {
      router: this.$router,
      path_name: "simple",
      data: "MainEntry"
    });
  }
};
</script>

<style lang="scss" scoped></style>
