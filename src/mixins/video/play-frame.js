import { vsc_common } from "@/api/vsc-common";
import { loadPlayModel, loadRelatedModel } from "@/api/data/index-model";

const VideoPlay = {
  data() {
    return {
      play_video: {},
      related_model: {}
    };
  },
  created() {
    // 加载更多的相关视频列表
    this.$eventBus.$on("more-data", p => {
      console.log("more-data");
    });
    // 如果是从首页点进来的，那么是有params。可以根据列表页传来的播放地址临时组装一个 video_data 的数据类型来进行播放，
    // 然后懒加载播放组信息等其他数据。这样可以使得用户体验更加顺滑。
    // 通过地址访问详情页，params是没有值的，需要通过接口加载数据。
    // this.$route.params 数据示例：
    // {
    // 	"thumbPic": "http://media.meyho.cn/image/2020/vsc/sample/video-list-cover/recommend/huamulan-pre.jpg",
    // 	"name": "花木兰",
    // 	"id": "2",
    // 	"desc": "在古代中国，一位年轻的女子为了救她的父亲假扮成男装代父从军。在穿越中国广袤土地的壮丽征程中，她从紧张的训练和战争中存活下来，发现...",
    // 	"cardTitleHeader": "花木兰",
    // 	"pubTime": "2020-07-14 09:10:12"
    // }
    if (vsc_common.isUndefined(this.$route.params.name)) {
      loadPlayModel(this.$route.query.video_id).then(r => this.renderPlay(r));
      loadRelatedModel().then(r => this.renderRelated(r));
      return;
    }

    loadPlayModel(this.$route.params.id).then(r => this.renderPlay(r));
    loadRelatedModel().then(r => this.renderRelated(r));
  },
  methods: {
    renderPlay(r) {
      let playModel = r.data;
      this.play_video = playModel.play_video;

      if (this.$store.state.path_trace.length > 2) {
        this.$store.state.path_trace.pop();
      } else if (this.$store.state.path_trace.length === 2) {
        this.$store.state.path_trace.push({
          path: this.$router.currentRoute.name,
          name: playModel.play_video.name
        });
      } else {
        this.$store.state.path_trace = [
          {
            path: "/simple",
            name: "首页"
          },
          {
            path: this.$router.currentRoute.name,
            name: playModel.play_video.name
          }
        ];
      }

      this.$emit("video-data-ready");
    },
    renderRelated(r) {
      let relatedModel = r.data;
      this.related_model = relatedModel.related_model;
      this.$emit("video-related-ready");
    },
    onRelatedClicked(params) {
      console.log("You clicked related:" + JSON.stringify(params));
      console.log("current path:" + this.$router.currentRoute.path);
      console.log("from path:" + params.path);
      if (params.path !== this.$router.currentRoute.path) {
        this.$store.commit("navigate", {
          router: this.$router,
          path: "/simple/play?name=" + params.name,
          data: params
        });
        return;
      }

      this.innerSwitchVideo(params.card_data);
      this.refresh();
    },
    // 同页面内切换视频进行播放，即点击相关的视频进行播放。
    innerSwitchVideo(card_data) {
      console.log("77777====>" + JSON.stringify(card_data));
      loadPlayModel(card_data.id).then(r => this.renderPlay(r));
    }
  }
};

export default VideoPlay;
