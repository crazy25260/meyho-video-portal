<template>
  <div class="wrapper ox-absolute">
    <video
      ref="videoPlayer"
      class="video-js vjs-big-play-centered"
      :width="width"
      :height="height"
      x5-video-player-type="h5"
      x5-video-player-fullscreen="true"
      x5-video-orientation="portraint"
    ></video>
  </div>
</template>

<script>
import videojs from "video.js";
import { vsc_common } from "@/api/vsc-common";
export default {
  name: "VideoPlayer",
  props: {
    options: {
      type: Object,
      default() {
        return {};
      }
    },
    width: {
      type: Number
    },
    height: {
      type: Number
    }
  },
  data() {
    return {
      player: null
    };
  },
  created() {
    this.$eventBus.$on("switch-player-source", playUrl => {
      //这里最好用箭头函数，不然this指向有问题
      this.onSwitchSource(playUrl);
    });
  },
  mounted() {
    //为了防止父组件的宽高属性没有传过来，需要延时加载播放器。
    setTimeout(() => {
      this.play_hls();
    }, 200);
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  },
  methods: {
    play_hls() {
      this.player = videojs(
        this.$refs.videoPlayer,
        this.options,
        function onPlayerReady() {
          console.log("onPlayerReady", this);
        }
      );
    },
    onSwitchSource(playUrl) {
      console.log("switch playUrl to:" + playUrl);
      if (!vsc_common.isUndefined(this.player)) {
        // this.player.poster(this.options.poster);
        this.player.pause();
      }

      this.player.src(playUrl);
    },
    setVideoPoster(posterImg) {
      if (!vsc_common.isUndefined(this.player)) {
        this.player.poster(posterImg);
      }
    },
    pause() {
      if (!vsc_common.isUndefined(this.player)) {
        this.player.pause();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 0;
}

.ox-absolute {
  position: absolute;
}
</style>
