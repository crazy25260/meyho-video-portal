<template>
  <div>
    <div ref="fixed_bar" class="md-layout header-frame">
      <div class="md-layout-item md-size-100">
        <BrandNavBar
          ref="brand_navbar"
          @slide_drawer_show="$emit('header-msg', 'slide_drawer_show')"
        ></BrandNavBar>
      </div>
      <div class="md-layout-item">
        <CarouselNavBar
          @nav-click="
            (index, keyPath) => {
              $emit('header-msg', 'nav-click', {
                index: index,
                keyPath: keyPath
              });
            }
          "
          :current_cate="current_nav"
          ref="navbar"
        ></CarouselNavBar>
      </div>
    </div>
    <!--    头部固定浮动区域的打底样式 -- start -->
    <div :style="headFixedBackground"></div>
    <!--    头部固定浮动区域的打底样式 -- end -->
    <Carousel
      v-if="showCarousel"
      ref="carousel"
      :carousel_pics="carousel_model"
    ></Carousel>
  </div>
</template>

<script>
import BrandNavBar from "@/components-depository/navbar/BrandNavBar";
import CarouselNavBar from "@/components-depository/navbar/CarouselNavBar";
import Carousel from "@/components-depository/carousel/Carousel";
import VscMixins from "@/mixins/vsc-mixins";

export default {
  name: "HeaderFrame",
  components: { Carousel, CarouselNavBar, BrandNavBar },
  mixins: [VscMixins.NavMenu],
  props: {
    showCarousel: {
      type: Boolean,
      default: false
    },
    carousel_model: {
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
          },
          {
            name: "pic3",
            id: "3",
            src:
              "http://media.meyho.cn/image/2020/vsc/sample/carousel/carousel3.jpg"
          },
          {
            name: "pic4",
            id: "4",
            src:
              "http://media.meyho.cn/image/2020/vsc/sample/carousel/carousel4.jpg"
          }
        ];
      }
    }
  },
  data() {
    return {
      fixed_height: 0
    };
  },
  computed: {
    headFixedBackground() {
      return {
        paddingTop: this.fixed_height + "px"
      };
    }
  },
  mounted() {
    console.log(this.$options.name + " mounted.");
    this.autoAdjustFixedBackGround();
    window.onresize = () => {
      return (() => {
        let newPreviewNum = document.body.clientWidth > 992 ? 3 : 1;
        if (
          this.showCarousel &&
          newPreviewNum !== this.$refs.carousel.previewNum
        ) {
          location = location; //页面刷新
        }
      })();
    };
  },
  watch: {
    showCarousel: function(newShowCarousel, oldShowCarousel) {
      this.autoAdjustFixedBackGround();
    }
  },
  methods: {
    autoAdjustFixedBackGround() {
      this.fixed_height =
        this.$refs.brand_navbar.$el.offsetHeight +
        this.$refs.navbar.$el.offsetHeight;
    }
  }
};
</script>

<style lang="scss" scoped>
.header-frame {
  position: fixed;
  z-index: 1030;
  left: 0;
  right: 0;
  border-radius: 0;
}

.header-fixed {
  position: fixed;
  z-index: 1030;
}
</style>
