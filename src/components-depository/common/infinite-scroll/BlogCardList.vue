<template>
  <div class="scroll-wrapper" ref="blog_card_list" :class="{ 'index-list': isIndex }">
    <div
      class="md-layout md-gutter infinite-list-wrapper"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="busy"
      infinite-scroll-immediate="false"
      infinite-scroll-distance="400"
    >
      <div
        v-for="(blog_card, index) in blogCards"
        :key="index"
        class="md-layout-item md-small-size-100 md-medium-size-25 md-large-size-20 md-xlarge-size-15"
      >
        <blog-card
          card-plain
          :shadow-normal="false"
          :no-colored-shadow="false"
          :card-image="blog_card.thumbPic"
          @card-click="onCardClicked"
          :card_data="blog_card"
          :top_space="paddingTop"
        >
          <template slot="cardTitleHeader">
            {{ blog_card.cardTitleHeader }}
          </template>
          <template slot="cardContent">
            <h6 class="card-category text-info">
              添加时间： {{ blog_card.pubTime }}
            </h6>
            <h4 class="card-title">
              <a href="javascript:void(0)">{{ blog_card.name }}</a>
            </h4>
            <p class="card-description">
              {{ blog_card.desc }}
              <a href="javascript:void(0)">更多</a>
            </p>
          </template>
        </blog-card>
      </div>
    </div>
    <!--    <p v-if="loading">-->
    <!--      <el-row>-->
    <!--        <el-col :span="24">-->
    <!--          <div class="grid-content bg-purple-dark">-->
    <!--            加载中，请稍后...-->
    <!--          </div></el-col-->
    <!--        >-->
    <!--      </el-row>-->
    <!--    </p>-->
    <!--    <p v-if="noMore">-->
    <!--      <el-backtop-->
    <!--        target=".scroll-wrapper"-->
    <!--        :bottom="40"-->
    <!--        :visibility-height="2000"-->
    <!--      >-->
    <!--        <div>-->
    <!--          回顶-->
    <!--        </div>-->
    <!--      </el-backtop>-->
    <!--    </p>-->
  </div>
</template>

<script>
import { BlogCard } from "@/components";
export default {
  name: "BlogCardList",
  components: {
    BlogCard
  },
  props: {
    paddingTop: {
      type: Number,
      default: 0.5
    },
    blogCards: {
      type: Array,
      default: function() {
        return [];
      }
    },
    isIndex: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      category: "0",
      page_num: 1,
      loading: false,
      noMore: false
    };
  },
  computed: {
    busy() {
      // 第一次达加载完毕后，滚动条，应该回归到顶部。--  这个体验需要优化。
      return this.blogCards.length >= 10;
    }
  },
  methods: {
    loadMore() {
      this.$eventBus.$emit("more-data");
    },
    onCardClicked(params) {
      this.$store.commit("setCurrentVideoData", params.card_data);
      this.$emit("video-cover-click", params);
    }
  }
};
</script>

<style lang="scss" scoped>
.md-layout .md-gutter {
  margin-right: 0;
  margin-left: 0;
}

.scroll-wrapper {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.index-list {
  border: 2px solid red;
}
</style>
