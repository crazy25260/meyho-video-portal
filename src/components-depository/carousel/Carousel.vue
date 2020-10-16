<template>
  <div>
    <!-- swiper -->
    <swiper :options="swiperOption" class="swiper-window" ref="mySwiper">
      <swiper-slide
        v-for="carouselItem in carousel_pics"
        :key="carouselItem.name"
      >
        <router-link
          :to="{ name: 'simple_play', query: { video_id: carouselItem.id } }"
          ><img
            :src="carouselItem.src"
            :alt="carouselItem.src"
            class="carousel-img"/></router-link
      ></swiper-slide>
      <div class="swiper-button-prev carousel-button" slot="button-prev"></div>
      <div class="swiper-button-next carousel-button" slot="button-next"></div>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
import "swiper/swiper-bundle";
import Swiper2, { Navigation, Pagination, Autoplay } from "swiper";
Swiper2.use([Navigation, Pagination, Autoplay]);
export default {
  name: "Carousel",
  components: { Swiper, SwiperSlide },
  directives: { swiper: directive },
  props: {
    carousel_pics: {
      type: Array,
      default: function() {
        return [
          {
            name: "pic1",
            id: "5",
            src:
              "http://media.meyho.cn/image/2020/vsc/sample/carousel/carousel1.jpg"
          },
          {
            name: "pic2",
            id: "2",
            src:
              "http://media.meyho.cn/image/2020/vsc/sample/carousel/carousel2.jpg"
          }
        ];
      }
    }
  },
  computed: {
    previewNum() {
      return document.body.clientWidth > 992 ? 3 : 1;
    },
    swiperOption() {
      return {
        // autoHeight: true,
        slidesPerView: this.previewNum,
        spaceBetween: 20,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      };
    }
  },
  mounted() {
    this.$refs.mySwiper.$swiper.slideTo(
      this.previewNum >= 3 ? 1 : 0,
      1000,
      false
    );
  },
  methods: {
    // 2020-08-26 swiper 6.X的版本的问题: 会导致前进后退按钮点击失效，且Pagination分页组件无法显示
    // 如果不引入Swiper2来解决，则需要自己实现以下函数,并绑定事件：@click="prev"
    // 参考链接：https://www.pianshen.com/article/19261669731/  和 https://blog.csdn.net/qq_36652782/article/details/108083954
    // prev() {
    //   this.$refs.mySwiper.$swiper.slidePrev();
    // },
    // next() {
    //   this.$refs.mySwiper.$swiper.slideNext();
    // }
  }
};
</script>

<style lang="scss" scoped>
.swiper-window {
  /*border: 1px solid red;*/
}

.carousel-img {
  //max-height: 45vh;
  //min-height: 10.1rem;
  //height: 100%;
  width: 100%;
  height: 30vh;
}

@media (max-width: 600px) {
  .carousel-button {
    display: none;
  }
}
</style>
