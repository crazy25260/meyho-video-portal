import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "@/assets/scss/material-kit.scss";

import globalComponents from "./globalComponents";
import globalMixins from "./globalMixins";
import globalDirectives from "./globalDirectives";
export default {
  install(Vue) {
    Vue.use(VueMaterial);
    Vue.use(globalDirectives);
    Vue.use(globalMixins);
    Vue.use(globalComponents);
  }
};
