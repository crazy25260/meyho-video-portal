<template>
  <div class="video-list">
    <!--    <BreadFrame></BreadFrame>-->
    <BlogCardList
      :paddingTop="with_carousel ? 1.5 : 0.5"
      :blogCards="list_model"
      @video-cover-click="onVideoCoverClick"
    ></BlogCardList>
    <pagination v-model="infoPagination" :page-count="3" @input="onPageChange">
    </pagination>
  </div>
</template>

<script>
import BlogCardList from "@/components-depository/common/infinite-scroll/BlogCardList";
import Pagination from "@/components/Pagination";

import VscMixins from "@/mixins/vsc-mixins";
import FrameMixins from "@/mixins/frame-mixins";
// import BreadFrame from "@/templates/framework/base/BreadFrame";

export default {
  name: "SimpleVideoListFrame",
  components: {
    // BreadFrame,
    BlogCardList,
    Pagination
  },
  props: {
    with_carousel: {
      type: Boolean,
      default: true
    }
  },
  mixins: [
    FrameMixins.BaseFrame,
    FrameMixins.ContentFrame,
    FrameMixins.VideoList,
    VscMixins.Pagination
  ]
};
</script>

<style lang="scss" scoped>
.video-list {
  margin-top: 0;
}
</style>
