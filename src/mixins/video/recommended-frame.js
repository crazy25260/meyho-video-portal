import { loadCardListModel, loadIndexModel } from "@/api/data/index-model";

const VideoRecommended = {
  data() {
    return {
      list_model: []
    };
  },
  created() {
    loadIndexModel().then(r => this.renderRecommendedContent(r));
    this.$eventBus.$on("more-data", p => {
      //这里最好用箭头函数，不然this指向有问题
      this.list_model.push({
        thumbPic: require("@/assets/img/bg5.jpg"),
        name: "push",
        desc: "push",
        cardTitleHeader: "push",
        pubTime: "2020-07-14 09:10:12"
      });
    });
  },
  methods: {
    renderRecommendedContent(r) {
      let indexModel = r.data;
      this.renderList({ data: indexModel.index_list });
      this.$emit("rendered", this.$options.name);
    },
    renderList(r) {
      this.list_model = r.data;
    },
    onVideoCoverClick(params) {
      this.$store.commit("navigate", {
        router: this.$router,
        path_name: "simple_play",
        data: params.card_data
      });
    },
    onLoadPage(cate_id, page) {
      loadCardListModel(cate_id, page).then(r => {
        this.renderList(r);
        this.$vscCommon.scrollToTop();
        this.setPage(page);
      });
    }
  }
};

export default VideoRecommended;
