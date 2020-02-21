import { DropDown } from "../components";
import MobileMenu from "../layout/MobileMenu";
import { Carousel, CarouselItem } from "element-ui";
import VueAwesomeSwiper from "vue-awesome-swiper";
// require styles
import "swiper/dist/css/swiper.css";
//infiniteScroll control
import infiniteScroll from "vue-infinite-scroll";

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */
const GlobalComponents = {
  install(Vue) {
    Vue.component("drop-down", DropDown);
    Vue.component(MobileMenu.name, MobileMenu);
    Vue.use(Carousel);
    Vue.use(CarouselItem);
    Vue.use(VueAwesomeSwiper);
    Vue.use(infiniteScroll);
  }
};

export default GlobalComponents;
