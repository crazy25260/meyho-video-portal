import VideoPlayer from "vue-video-player";
require("video.js/dist/video-js.css");
require("vue-video-player/src/custom-theme.css");

export default {
  install(Vue) {
    Vue.use(VideoPlayer);
  }
};
