import App from "./App.vue";
import Vue from "vue";
import router from "./router";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import MaterialKit from "./plugins/material-kit";

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(MaterialKit);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
