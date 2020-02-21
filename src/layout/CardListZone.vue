<template>
  <div class="scroll-wrapper">
    <div
      class="md-layout md-gutter infinite-list-wrapper"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="busy"
      infinite-scroll-immediate="false"
      infinite-scroll-distance="100"
    >
      <div
        v-for="(video_card, index) in videoCards"
        :key="index"
        class="md-layout-item md-medium-size-25 md-large-size-16 md-small-size-50"
      >
        <blog-card
          card-plain
          :shadow-normal="false"
          :no-colored-shadow="false"
          :card-image="video_card.thumbPic"
          :card_data="video_card"
        >
          <template slot="cardContent">
            <!--          <h6 class="card-category text-danger">-->
            <!--            <md-icon class="text-danger">-->
            <!--              trending_up-->
            <!--            </md-icon>-->
            <!--            Trending-->
            <!--          </h6>-->
            <h4 class="card-title">
              <a href="javascript:void(0)"> {{ video_card.name }}</a>
            </h4>
          </template>
          <!--        <template slot="cardAction">-->
          <!--          <div class="author">-->
          <!--            <a href="javascript:void(0)">-->
          <!--              <img :src="avatar_icon(video_card.avatarIcon)" alt="..." class="avatar img-raised" />-->
          <!--              <span>Mike John</span>-->
          <!--            </a>-->
          <!--          </div>-->
          <!--          <div class="stats ml-auto">-->
          <!--            <md-icon>schedule</md-icon> 5 min read-->
          <!--          </div>-->
          <!--        </template>-->
        </blog-card>
      </div>
    </div>
    <p v-if="loading">
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            加载中，请稍后...
          </div></el-col
        >
      </el-row>
    </p>
    <p v-if="noMore">
      <el-backtop
        target=".scroll-wrapper"
        :bottom="40"
        :visibility-height="2000"
      >
        <div>
          回顶
        </div>
      </el-backtop>
    </p>
  </div>
</template>

<script>
import eventBus from "@/api/eventBus";
import { getVideoCoversByTypeId } from "../data_fetch/data_fetcher";
const BlogCard = () => import("@/components/cards/BlogCard");
export default {
  name: "CardListZone",
  components: {
    BlogCard
  },
  props: {
    current_nav_category: {
      type: String
    }
  },
  data() {
    return {
      page_num: 1,
      loading: false,
      noMore: false,
      videoCards: [],
      cardBlog: {
        cardBlog6: require("@/assets/img/examples/blog6.jpg")
      },
      marcImg: require("@/assets/img/faces/marc.jpg")
    };
  },
  computed: {
    current_type() {
      return this.current_nav_category;
    },
    busy() {
      return this.loading || this.noMore;
    }
  },
  created() {
    eventBus.$on("nav_type_selected", selected_category => {
      //这里最好用箭头函数，不然this指向有问题
      this.onNavTypeSelected(selected_category);
    });
    // this.onNavTypeSelected(this.current_type);
  },
  methods: {
    resetData() {
      this.noMore = false;
      this.page_num = 1;
      this.videoCards = [];
    },
    onNavTypeSelected(typeId) {
      this.resetData();
      this.$parent.onVideoNavTypeSelected(typeId);
      //切换导航栏时传递到父组件并改变到相应的值变更完毕需要有一定的时间，否则这里的数据不同步，滞后于父组件的数据。
      setTimeout(() => {
        this.loadMore();
      }, 200);
    },
    loadMore() {
      console.log("this.page_num:" + this.page_num);
      this.loading = true;
      let cateVideoCovers = [];
      getVideoCoversByTypeId(this.current_type, this.page_num++)
        .then(res => {
          cateVideoCovers = res;
          for (let i = 0; i < cateVideoCovers.length; i++) {
            this.videoCards.push(cateVideoCovers[i]);
          }
          if (cateVideoCovers.length <= 0) {
            this.noMore = true;
            this.$notify({
              title: "当前页数:" + (this.page_num - 1),
              message: "没有更多了",
              duration: 3500,
              position: "bottom-right"
            });
          }

          //为了展示滚动区域上限效果，添加以下限制，每类视频最多展示50条。
          //实际使用时，请删除本段代码
          if (this.videoCards.length >= 50) {
            this.noMore = true;
            this.$notify({
              title: "当前页数:" + (this.page_num - 1),
              message: "没有更多了",
              duration: 3500,
              position: "bottom-right"
            });
          }

          this.loading = false;
        })
        .catch(function(error) {
          console.log("loadMore::getVideoCoversByTypeId() error:" + error);
          this.noMore = true;
          this.loading = false;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.md-layout.md-gutter > .md-layout-item {
  padding-right: 0.4rem;
  padding-left: 0.4rem;
}

.el-row {
  &:last-child {
    margin-bottom: 0;
  }
}

.bg-purple-dark {
  background: #99a9bf;
}
/*.bg-purple {*/
/*  background: #d3dce6;*/
/*}*/
/*.bg-purple-light {*/
/*  background: #e5e9f2;*/
/*}*/
.grid-content {
  min-height: 36px;
  font-size: large;
  font-weight: bold;
  color: white;
  text-align: center;
  padding-top: 0.4rem;
}
/*.row-bg {*/
/*  padding: 10px 0;*/
/*  background-color: #f9fafc;*/
/*}*/

.scroll-wrapper {
  height: 100vh;
  overflow-y: scroll;
}
</style>
