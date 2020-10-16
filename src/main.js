import Vue from "vue";
import App from "./App.vue";
import router from "@/routes/routes";

// 引入materialkit 主题组件库
import MaterialKit from "./plugins/vuematerial-kit";

// 引入无线滚动组件
import infiniteScroll from "./plugins/vsc-portal-kit";

// 引入elementui
import {
  Row,
  Menu,
  Drawer,
  Col,
  Breadcrumb,
  BreadcrumbItem,
  MenuItem
} from "element-ui";

// 引入全局store
import { store } from "@/store/store";

// 引入全局总线事件车
import eventBus from "@/api/eventBus";
Vue.prototype.$eventBus = eventBus;

// 引入全局通用函数
import { vsc_common } from "@/api/vsc-common";
Vue.prototype.$vscCommon = vsc_common;

// 引入Mock
require("./mock");

Vue.config.productionTip = false;

Vue.use(MaterialKit);
Vue.use(infiniteScroll);
// Vue.use(ElementUI);
Vue.use(Row);
Vue.use(Menu);
Vue.use(Drawer);
Vue.use(Col);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(MenuItem);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
