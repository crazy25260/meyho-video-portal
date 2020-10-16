import { loadIndexModel } from "@/api/data/index-model";
import { vsc_common } from "@/api/vsc-common";

const VideoIndex = {
  data() {
    return {
      brand_model: {},
      carousel_model: [],
      nav_model: []
    };
  },
  created() {
    loadIndexModel().then(r => this.renderIndex(r));
  },
  watch: {
    nav_model: function(newData, oldData) {
      if (
        newData.nav_categories.length > 0 &&
        !vsc_common.isUndefined(this.$refs.breadcrumb)
      ) {
        this.$refs.breadcrumb.onBreadCrumbLoad(newData.nav_index);
      }
    }
  },
  methods: {
    renderIndex(r) {
      let indexModel = r.data;
      this.brand_model = indexModel.brand_model;
      this.carousel_model = indexModel.carousel_pics;
      this.nav_model = indexModel.nav_model;

      this.$store.commit("init", {
        site_infos: [
          {
            title: "VSC",
            brand: "vsc",
            domain: "localhost"
          }
        ],
        nav_model: this.nav_model
      });
    }
  }
};

export default VideoIndex;
