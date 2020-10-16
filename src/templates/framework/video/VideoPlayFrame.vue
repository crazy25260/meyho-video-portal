<template>
  <div class="wrapper" ref="playframe">
    <div>
      <div class="player-wrapper">
        <div class="video-wrapper" ref="playerframe">
          <video-player
            :options="videoOptions"
            :width="playerWidth"
            :height="playerHeight"
            ref="player"
          />
        </div>
      </div>
      <md-divider></md-divider>
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="tim-typo">
            <span class="md-body-2">{{ video_data.name }}</span>
            <small
              >【{{ video_data.playFromInfos[active_line].sourceName }}】</small
            >
          </div>
        </div>
      </div>
      <VideoLines
        :lines="video_data.playFromInfos"
        :checked="checked_line"
        @video_line_change="onLineChange"
        ref="videolines"
      ></VideoLines>
      <BreadFrame></BreadFrame>
      <md-divider></md-divider>
      <VideoRelatedTab
        @related-card-click="onRelatedClicked"
        :related_model="related_model"
      ></VideoRelatedTab>
    </div>
  </div>
</template>

<script>
import VideoPlayer from "@/components-depository/common/videojs/VideoPlayer";
import "video.js/dist/video-js.css";
import { vsc_common } from "@/api/vsc-common";
import VideoLines from "@/components-depository/video/VideoLines";
import VideoRelatedTab from "@/components-depository/video/VideoRelatedTab";
import FrameMixins from "@/mixins/frame-mixins";
import VscMixins from "@/mixins/vsc-mixins";
import BreadFrame from "@/templates/framework/base/BreadFrame";

export default {
  name: "VideoPlayFrame",
  components: {
    BreadFrame,
    VideoPlayer,
    VideoLines,
    VideoRelatedTab
  },
  mixins: [FrameMixins.ContentFrame, FrameMixins.VideoPlay, VscMixins.SiteInfo],
  data() {
    return {
      player_width: 800,
      player_height: 600,
      active_line: 0
    };
  },
  computed: {
    video_data() {
      if (this.play_video && this.play_video.playFromInfos) {
        return this.play_video;
      }

      return {
        name: "VSC视频",
        thumbPic: "http://media.meyho.cn/image/2020/vsc/sample/250kgmodel.png",
        playFromInfos: [
          {
            playUrl:
              "http://media.meyho.cn/video/2020/vsc/sample/250kgmodel/250kgmodel.m3u8",
            sourceName: "VSC默认线路",
            videoRemark: "480p"
          }
        ]
      };
    },
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
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            hls: {
              withCredentials: false
            }
          }
        ],
        poster: "http://media.meyho.cn/image/2020/vsc/sample/nezha.jpg"
      };
    },
    checked_line() {
      return this.video_data.playFromInfos[this.active_line].sourceName;
    }
  },
  created() {
    this.$on("video-data-ready", p => {
      //这里最好用箭头函数，不然this指向有问题
      this.fillData();
    });
    this.$on("video-related-ready", p => {
      // 这里添加视频相关列表加载完毕后的相关操作
      // console.log(
      //   "video-related-ready--->" + JSON.stringify(this.related_model)
      // );
    });
    this.$on("slide_drawer_show", (sender, emitter) => {
      console.log(
        "event=>slide_drawer_show," +
          "sender=>" +
          sender +
          ", emitter=>" +
          emitter
      );
      this.onSlideDrawerShow();
    });
  },
  mounted() {
    if (!vsc_common.isUndefined(this.$refs.playerframe)) {
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
    onLineChange(line, index) {
      if (this.$refs.player) {
        this.$refs.player.onSwitchSource(line.playUrl);
        this.active_line = index;
      }

      if (this.$refs.videolines) {
        this.$refs.videolines.radio = this.checked_line;
      }
    },
    onSlideDrawerShow() {
      this.$refs.player.pause();
    },
    fillData() {
      this.setTitle(this.video_data.name);
      if (!vsc_common.isUndefined(this.video_data.playFromInfos)) {
        this.videoOptions.poster = this.video_data.playFromInfos[0].playUrl;
        // 切换封面
        this.$refs.player.setVideoPoster(this.video_data.thumbPic);
        // 切换视频播放源
        this.onLineChange(this.video_data.playFromInfos[0], this.active_line);
      }
    },
    setTitle(title) {
      document.title = title + " --" + this.site_info.title;
    },
    // 使用页面
    refresh() {
      // window.location.reload();
      // this.$router.replace({
      //   path: "/refresh",
      //   query: {
      //     t: Date.now()
      //   }
      // });

      // 滚动条归顶
      window.pageYOffset = 0;
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding-top: 0;
}

.player-wrapper {
  width: 100%;
  height: 35vh;

  .video-wrapper {
    height: 100%;
  }
}

.typo {
  text-align: left;
}

.md-layout {
  margin-right: 0;
  margin-left: 0;
}

.btn-back {
  font-size: small;
}
</style>
