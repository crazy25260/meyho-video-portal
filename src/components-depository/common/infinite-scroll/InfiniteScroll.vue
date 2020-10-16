<template>
  <div class="scroll-wrapper">
    <div
      class="md-layout md-gutter infinite-list-wrapper"
      v-infinite-scroll="loadMore"
      :infinite-scroll-disabled="false"
      :infinite-scroll-immediate="false"
      :infinite-scroll-distance="100"
    >
      <div
        v-for="(blog_card, index) in blogCards"
        :key="index"
        class="md-layout-item md-medium-size-25 md-large-size-20 md-small-size-100"
      >
        <blog-card
          card-plain
          :shadow-normal="false"
          :no-colored-shadow="false"
          :card-image="blog_card.thumbPic"
          @card-click="onCardClicked"
          :card_data="blog_card"
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
              <a href="javascript:void(0)">Read More</a>
            </p>
          </template>
        </blog-card>
      </div>
    </div>
  </div>
</template>

<script>
import { BlogCard } from "@/components";
export default {
  name: "InfiniteScroll",
  components: {
    BlogCard
  },
  data() {
    return {
      category: "0",
      page_num: 1,
      loading: false,
      noMore: false,
      blogCards: [
        {
          thumbPic: require("@/assets/img/bg5.jpg"),
          name: "Autodesk looks to future of 3D printing with Project Escher1",
          desc:
            "Like so many organizations these days, Autodesk is a company in\n" +
            "              transition. It was until recently a traditional boxed software\n" +
            "              company selling licenses.",
          cardTitleHeader: "title1",
          pubTime: "2020-07-14 09:10:12"
        },
        {
          thumbPic: require("@/assets/img/bg5.jpg"),
          name: "blog2",
          desc:
            "Like so many organizations these days, Autodesk is a company in\n" +
            "              transition. It was until recently a traditional boxed software\n" +
            "              company selling licenses.",
          cardTitleHeader: "title2",
          pubTime: "2020-07-14 09:10:12"
        },
        {
          thumbPic: require("@/assets/img/bg5.jpg"),
          name: "Autodesk looks to future of 3D printing with Project Escher2",
          desc:
            "Like so many organizations these days, Autodesk is a company in\n" +
            "              transition. It was until recently a traditional boxed software\n" +
            "              company selling licenses.",
          cardTitleHeader: "title3",
          pubTime: "2020-07-14 09:10:12"
        },
        {
          thumbPic: require("@/assets/img/bg5.jpg"),
          name: "blog4",
          desc:
            "Like so many organizations these days, Autodesk is a company in\n" +
            "              transition. It was until recently a traditional boxed software\n" +
            "              company selling licenses.",
          cardTitleHeader: "title4",
          pubTime: "2020-07-14 09:10:12"
        },
        {
          thumbPic: require("@/assets/img/bg5.jpg"),
          name: "Autodesk looks to future of 3D printing with Project Escher3",
          desc:
            "Like so many organizations these days, Autodesk is a company in\n" +
            "              transition. It was until recently a traditional boxed software\n" +
            "              company selling licenses.",
          cardTitleHeader: "title5",
          pubTime: "2020-07-14 09:10:12"
        },
        {
          thumbPic: require("@/assets/img/bg5.jpg"),
          name: "blog6",
          desc:
            "Like so many organizations these days, Autodesk is a company in\n" +
            "              transition. It was until recently a traditional boxed software\n" +
            "              company selling licenses.",
          cardTitleHeader: "title6",
          pubTime: "2020-07-14 09:10:12"
        }
      ]
    };
  },
  methods: {
    loadMore() {
      console.log("load next page. category:" + this.category);
    },
    onCardClicked() {
      alert("You clicked.");
    }
  }
};
</script>

<style lang="scss" scoped>
.md-layout.md-gutter {
  margin-right: 0px;
  margin-left: 0px;
}
</style>
