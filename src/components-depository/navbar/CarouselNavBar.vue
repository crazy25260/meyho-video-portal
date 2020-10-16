<template>
  <div class="carousel-nav-bar">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in nav_cates" :key="index">
          <el-menu-item
            :index="index.toString()"
            v-if="!item.children"
            :class="{ 'active-nav-item': onActive(item) }"
            >{{ item.name }}</el-menu-item
          >
          <el-submenu :index="item.id.toString()" v-if="item.children">
            <template slot="title">{{ item.name }}</template>
            <el-menu-item
              :index="subitem.id.toString()"
              v-for="(subitem, subindex) in item.children"
              :key="subindex"
              >{{ subitem.name }}</el-menu-item
            >
          </el-submenu>
        </swiper-slide>
      </swiper>
    </el-menu>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/swiper.scss";
import VscMixins from "@/mixins/vsc-mixins";
export default {
  name: "CarouselNavBar",
  props: {
    current_cate: Object
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 5 //,
        // spaceBetween: 30//
      }
    };
  },
  components: { Swiper, SwiperSlide },
  directives: { swiper: directive },
  computed: {
    activeIndex() {
      if (this.$store.state.nav_model.nav_index) {
        return this.$store.state.nav_model.nav_index.toString();
      }

      return "0";
    }
  },
  mixins: [VscMixins.NavMenu],
  methods: {
    onActive(item) {
      if (this.current_cate.id === item.id) {
        console.log("active nav index->" + this.activeIndex);
      }
      return this.current_cate.id === item.id;
    },
    // key：选中菜单的key。
    // keyPath： 含有子菜单时，选中菜单的keyPath。
    handleSelect(index, keyPath) {
      // let navItem = JSON.parse(index);
      // 此处的index是导航条目的当前选中的索引号。
      this.$emit("nav-click", index, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
.carousel-nav-bar {
  height: 2rem;
}

.el-menu-demo {
  z-index: 1030;
  left: 0;
  right: 0;
  border-radius: 0;
}

.el-menu-item {
  height: 2rem;
  line-height: 2rem;
}
.active-nav-item {
  color: #00bcd4;
  font-weight: bold;
  font-size: medium;
}
</style>
