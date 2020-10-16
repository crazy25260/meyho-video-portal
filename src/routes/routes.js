import Vue from "vue";
import VueRouter from "vue-router";
import MainEntry from "@/layouts/MainEntry";
import StandardIndex from "@/templates/default/mh-tpl-std-0/StandardIndex";
import SimpleIndex from "@/templates/default/mh-tpl-std-video/simple/SimpleIndex";
import SimpleLogin from "@/templates/default/mh-tpl-std-video/simple/SimpleLogin";

import HeaderFrame from "@/templates/framework/base/HeaderFrame";
import Footer from "@/components-depository/footer/Footer";
import VideoRecommendedFrame from "@/templates/framework/video/VideoRecommendedFrame";
import VideoListFrame from "@/templates/framework/video/VideoListFrame";
import VideoPlayFrame from "@/templates/framework/video/VideoPlayFrame";
import BreadFrame from "@/templates/framework/base/BreadFrame";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: MainEntry
  },
  {
    path: "/index",
    name: "index",
    components: { default: StandardIndex },
    props: {
      default: { test: "test---props--hello!" }
    }
  },
  {
    path: "/simple",
    name: "simple",
    redirect: "/simple/",
    components: { default: SimpleIndex },
    children: [
      {
        path: "/",
        name: "simple-index",
        components: {
          default: VideoRecommendedFrame,
          header: HeaderFrame,
          breadcrumb: BreadFrame,
          footer: Footer
        },
        props: {
          header: { showCarousel: true }
        }
      },
      {
        path: "/simple/list",
        name: "simple_list",
        components: {
          default: VideoListFrame,
          header: HeaderFrame,
          breadcrumb: BreadFrame,
          footer: Footer
        }
      },
      {
        path: "/simple/play",
        name: "simple_play",
        components: {
          default: VideoPlayFrame,
          header: HeaderFrame,
          footer: Footer
        }
      },
      {
        path: "/login-page",
        name: "login",
        components: {
          default: SimpleLogin,
          header: HeaderFrame,
          footer: Footer
        }
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// 导航路径切换以后，滚动条归顶。 参考资料：https://www.jianshu.com/p/84b7647a1e03
router.afterEach((to, from) => {
  window.pageYOffset = 0;
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

export default router;
