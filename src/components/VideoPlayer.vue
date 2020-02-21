<template>
  <div class="wrapper">
    <video
      ref="videoPlayer"
      class="video-js vjs-big-play-centered"
      :width="width"
      :height="height"
    ></video>
  </div>
</template>

<script>
import videojs from "video.js";
import eventBus from "@/api/eventBus";
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
    eventBus.$on("switch-player-source", playUrl => {
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
      this.player.src(playUrl);
      this.player.play();
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 0;
}
</style>
