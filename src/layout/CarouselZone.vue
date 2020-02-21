<template>
  <div>
    <!-- swiper -->
    <swiper :options="swiperOption">
      <swiper-slide
        v-for="carouselItem in carousel_pics"
        :key="carouselItem.name"
        ><img
          :src="carouselItem.src"
          :alt="carouselItem.src"
          class="carousel-img"
      /></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <!--      <div class="swiper-button-prev" slot="button-prev"></div>-->
      <!--      <div class="swiper-button-next" slot="button-next"></div>-->
    </swiper>
  </div>
</template>

<script>
export default {
  name: "CarouselZone",
  data() {
    return {
      swiperOption: {
        spaceBetween: 30,
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
      },
      carousel_pics: [
        {
          name: "唐人街探案3",
          src:
            "http://epgmedia.chinaunicom.design/image/2020/meyho-video-portal/carousel/carousel1.jpg"
        },
        {
          name: "速度与激情9",
          src:
            "http://epgmedia.chinaunicom.design/image/2020/meyho-video-portal/carousel/carousel2.jpg"
        },
        {
          name: "庆余年",
          src:
            "http://epgmedia.chinaunicom.design/image/2020/meyho-video-portal/carousel/carousel2.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.carousel-img {
  max-height: 45vh;
  width: 100%;
}
</style>
