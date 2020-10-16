import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
//引入创意汤姆的样式
import "@/assets/scss/material-kit.scss";
export default {
  install(Vue) {
    Vue.use(VueMaterial);
  }
};
