<template>
  <div>
    <md-radio
      v-model="radio"
      :value="line.sourceName"
      v-for="(line, index) in lines"
      :key="index"
      @change="onLineChange(line, index)"
    >
      {{ line.sourceName }} : {{ line.videoRemark }}</md-radio
    >

    <!--    <small>Model value: {{ radio }}</small>-->
  </div>
</template>

<script>
export default {
  name: "VideoLines",
  props: {
    lines: Array,
    checked: String
  },
  data: () => ({
    radio: ""
  }),
  created() {
    this.radio = this.checked;
  },
  methods: {
    onLineChange(line, index) {
      this.$emit("video_line_change", line, index);
    }
  }
};
</script>

<style lang="scss" scoped>
small {
  display: block;
}
</style>
