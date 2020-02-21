import Vue from "vue";
import VueRouter from "vue-router";

//vue-router的非cdn引用
//Vue.use(Router);

//cdn 引入vue-router时，源码抛出的变量是：VueRouter
console.log(VueRouter);
Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "index",
      component: resolve => require(["./views/Index"], resolve)
    },
    {
      path: "/play_detail",
      name: "play_detail",
      component: resolve => require(["./views/PlayDetail"], resolve)
    }
  ]
});
