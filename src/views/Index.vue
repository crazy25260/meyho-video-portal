<template>
  <div class="wrapper">
    <brand-nav-bar></brand-nav-bar>
    <carousel-nav-bar :nav_categories="nav_categories"></carousel-nav-bar>
    <carousel-zone></carousel-zone>
    <horizon-notify-bar></horizon-notify-bar>
    <card-list-zone
      :current_nav_category="current_nav_category"
    ></card-list-zone>
  </div>
</template>

<script>
const BrandNavBar = () => import("@/layout/BrandNavBar");
const CardListZone = () => import("@/layout/CardListZone");
const CarouselZone = () => import("@/layout/CarouselZone");
const CarouselNavBar = () => import("@/components/CarouselNavBar");
const HorizonNotifyBar = () =>
  import("@/components/notifications/HorizonNotifyBar");
import { getVideoTypes } from "@/data_fetch/data_fetcher";
import { meyho_common } from "@/api/meyho-common";

export default {
  name: "Index",
  components: {
    BrandNavBar,
    HorizonNotifyBar,
    CarouselNavBar,
    CarouselZone,
    CardListZone
  },
  data() {
    return {
      current_nav_category: "30",
      nav_categories: [
        {
          id: "100",
          name: "首页"
        },
        {
          id: "101",
          name: "电影"
        },
        {
          id: "102",
          name: "电视剧"
        }
      ],
      carousel: [
        {
          image: require("@/assets/img/nature-2.jpg"),
          title: "Somewhere Beyond, United States"
        },
        {
          image: require("@/assets/img/nature.jpg"),
          title: "Yellowstone National Park, United States"
        },
        {
          image: require("@/assets/img/nature-3.jpg"),
          title: "National Park, United States"
        }
      ]
    };
  },
  created() {
    this.initPageData();
  },
  mounted() {
    // console.log(url);
  },
  methods: {
    async initPageData() {
      // 获取视频分类
      let typeData = await getVideoTypes();
      if (meyho_common.isUndefined(typeData)) {
        console.log("typeData is null.");
        return;
      }

      console.log(typeData);
      this.nav_categories = typeData;

      // // 获取默认视频分类的数据
      // this.onVideoNavTypeSelected(this.nav_categories[0].id);
    },
    onVideoNavTypeSelected(typeId) {
      this.current_nav_category = typeId.toString();
      // let cateVideoCovers = await getVideoCoversByTypeId(typeId);
      // eventBus.$emit("refreshCardlist", cateVideoCovers);
    }
  }
};
</script>

<style xml:lang="scss" scoped>
.wrapper {
  padding-top: 0;
  /*background-color: yellow;*/
}
</style>
