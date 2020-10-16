<template>
  <div class="md-layout">
    <div class="md-layout-item md-size-100 md-small-size-100">
      <tabs
        :tab-active="1"
        :tab-name="['相关推荐', '评论', '标签']"
        plain
        color-button="rose"
      >
        <!-- here you can add your content for tab-content -->
        <template slot="tab-pane-1">
          <BlogCardList
            :paddingTop="1"
            @video-cover-click="onCardClicked"
            :blogCards="related_model.related_list"
          ></BlogCardList>
        </template>
        <template slot="tab-pane-2">
          {{ related_model.comment }}
        </template>
        <template slot="tab-pane-3">
          <h4>标签TAB尚未开发，临时添加几个简易标签做示例：</h4>
          <p v-for="(tag, index) in related_model.tags" :key="index">
            {{ tag }}
          </p>
        </template>
      </tabs>
    </div>
  </div>
</template>

<script>
import { Tabs } from "@/components";
import BlogCardList from "@/components-depository/common/infinite-scroll/BlogCardList";
export default {
  name: "VideoRelatedTab",
  components: {
    Tabs,
    BlogCardList
  },
  props: {
    related_model: {
      type: Object
    }
  },
  methods: {
    onCardClicked(params) {
      this.$emit("related-card-click", params);
    }
  }
};
</script>

<style lang="scss" scoped>
.md-layout {
  margin-right: 0;
  margin-left: 0;
}
</style>
