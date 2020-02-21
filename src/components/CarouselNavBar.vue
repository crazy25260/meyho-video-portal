<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in nav_categories" :key="index">
          <el-menu-item
            :index="item.id.toString()"
            v-if="!item.children"
            :class="{ 'active-nav-item': onActive(item) }"
            @click="selected($event, item)"
            >{{ item.name }}</el-menu-item
          >
          <el-submenu :index="item.id.toString()" v-if="item.children">
            <template slot="title">{{ item.name }}</template>
            <el-menu-item
              :index="subitem.id.toString()"
              v-for="(subitem, subindex) in item.children"
              :key="subindex"
              >{{ subitem.name }}
            </el-menu-item>
          </el-submenu>
        </swiper-slide>
      </swiper>
    </el-menu>
  </div>
</template>

<script>
import eventBus from "@/api/eventBus";
export default {
  name: "CarouselNavBar",
  props: {
    with_carousel: {
      type: Boolean,
      default: true
    },
    nav_categories: {
      type: Array
    }
  },
  data() {
    return {
      activeIndex: "30",
      nav_selected_category: null,
      swiperOption: {
        slidesPerView: 5 //,
        // spaceBetween: 30//
      }
    };
  },
  computed: {
    padding_top() {
      //如果有走马灯图片区域，就不和顶端控件对其。
      //如果没有走马灯图片区域，就和顶端MainNavBar对齐。
      return !this.with_carousel;
    }
  },
  methods: {
    onActive(item) {
      console.log("onActive()::active->:" + this.activeIndex);
      return this.activeIndex === item.id.toString();
    },
    selected(e, item) {
      this.nav_selected_category = e;
      this.activeIndex = item.id.toString();
    },
    // key：选中菜单的索引号即第几个菜单项。
    // keyPath： 选中菜单的index属性的值。是个字符串。
    handleSelect(key, keyPath) {
      console.log("****key:" + key);
      console.log("****keyPath:" + keyPath);
      this.$parent.onVideoNavTypeSelected(keyPath);
      eventBus.$emit("nav_type_selected", keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
.active-nav-item {
  color: red;
  font-weight: bold;
  font-size: medium;
}
</style>
