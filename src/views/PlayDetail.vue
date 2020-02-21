<template>
  <div class="wrapper">
    <brand-nav-bar></brand-nav-bar>
    <carousel-nav-bar
      :nav_categories="nav_categories"
      :with_carousel="with_carousel"
    ></carousel-nav-bar>
    <div class="player-wrapper">
      <div class="video-wrapper" ref="playerframe">
        <video-player
          :options="videoOptions"
          :width="playerWidth"
          :height="playerHeight"
        />
      </div>
    </div>
    <el-row>
      <el-col :span="24"
        ><div class="grid-content bg-purple-dark video-title">
          {{ video_data.name }}
        </div></el-col
      >
    </el-row>
    <div
      v-for="playFromInfo in video_data.playFromInfos"
      :key="playFromInfo.sourceName"
    >
      <div class="video-channel">
        {{ playFromInfo.sourceName }}
      </div>
      <el-row class="video-remark">
        <el-button
          type="primary"
          @click="onLineSwitch(playFromInfo.playUrl)"
          plain
          >{{ playFromInfo.videoRemark }}</el-button
        >
        <!--        {{ playFromInfo.playUrl }}-->
      </el-row>
    </div>
  </div>
</template>

<script>
const BrandNavBar = () => import("@/layout/BrandNavBar");
import { meyho_common } from "@/api/meyho-common";
const CarouselNavBar = () => import("@/components/CarouselNavBar");
import VideoPlayer from "@/components/VideoPlayer.vue";
import "video.js/dist/video-js.css";
import eventBus from "@/api/eventBus";
export default {
  name: "VideoExample",
  components: {
    BrandNavBar,
    CarouselNavBar,
    VideoPlayer
  },
  data() {
    return {
      with_carousel: false,
      nav_categories: [],
      defaultUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
      player_width: 800,
      player_height: 600,
      video_data: {},
      playFromInfos: []
    };
  },
  computed: {
    playerWidth() {
      return this.player_width;
    },
    playerHeight() {
      return this.player_height;
    },
    videoOptions() {
      return {
        autoplay: false,
        controls: true,
        sources: [
          {
            withCredentials: false,
            type: "application/x-mpegURL",
            src: this.defaultUrl,
            hls: {
              withCredentials: false
            }
          }
        ],
        poster:
          "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-5.jpg"
      };
    }
  },
  created() {
    console.log(
      "received card data:" + JSON.stringify(this.$route.query.card_data)
    );
    this.video_data = this.$route.query.card_data;
    if (!meyho_common.isUndefined(this.$route.query.nav_categories)) {
      this.nav_categories = this.$route.query.nav_categories;
    }
    if (!meyho_common.isUndefined(this.video_data.playFromInfos)) {
      this.playFromInfos = this.video_data.playFromInfos;
      this.defaultUrl = this.playFromInfos[0].playUrl;
    } else {
      this.video_data.playFromInfos = [
        {
          sourceName: "sourceName1",
          playUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
          videoRemark: "480p"
        },
        {
          sourceName: "sourceName2",
          playUrl:
            "http://epgmedia.chinaunicom.design/video/2019/kangmei/1106-001/video-test-m3u8/superman.m3u8",
          videoRemark: "720p"
        }
      ];
    }
  },
  mounted() {
    if (!meyho_common.isUndefined(this.$refs.playerframe)) {
      console.log(
        "playerframe.clientWidth:" + this.$refs.playerframe.clientWidth
      );
      console.log(
        "playerframe.clientHeight:" + this.$refs.playerframe.clientHeight
      );
      this.player_width = this.$refs.playerframe.clientWidth;
      this.player_height = this.$refs.playerframe.clientHeight;
    }
  },
  methods: {
    onLineSwitch(url) {
      console.log("onLineSwitch() entered." + url + " | " + eventBus);
      eventBus.$emit("switch-player-source", url);
    },
    onVideoNavTypeSelected(typeId) {
      console.log("00000:" + typeId);
      if ("100" === typeId.toString()) {
        window.location.href = "/";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding-top: 0;
}
.player-wrapper {
  padding: 0;
  width: 100%;
  height: 35vh;

  .video-wrapper {
    height: 100%;
  }
}

.video-title {
  text-align: center;
}

.video-remark {
  padding-left: 2rem;
  padding-bottom: 2rem;
}

.video-channel {
  padding-left: 2rem;
  padding-bottom: 0.6rem;
  color: #1a237e;
  font-weight: bold;
}
</style>
