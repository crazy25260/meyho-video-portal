<template>
  <footer
    class="footer"
    :class="{
      [`footer-${type}`]: type,
      [`footer-${size}`]: size
    }"
    :data-background-color="backgroundColor"
  >
    <div class="container flex-direction-row">
      <a class="footer-brand" href="/">VSC --专业的Vue站群系统</a>
      <div class="copyright">
        &copy; {{ year }}, 由 <md-icon>favorite</md-icon>
        <a
          target="_blank"
          href="http://wpa.qq.com/msgrd?v=3&uin=306388227&site=qq&menu=yes"
        >
          德玛大帝
          <img
            border="0"
            src="http://wpa.qq.com/pa?p=2:306388227:41"
            alt="点击这里给我发消息"
            title="点击这里给我发消息"
        /></a>
        制作，为了更好的web。
      </div>
      <ul>
        <li>
          <a href="javascript:void(0)">
            友情链接
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            关于我们
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            声明
          </a>
        </li>
      </ul>

      <ul class="social-buttons">
        <li>
          <md-button
            href="/"
            target="_blank"
            class="md-twitter md-just-icon md-simple"
          >
            <!--            <i class="fab fa-twitter" />-->
            <md-icon>stars</md-icon>
          </md-button>
        </li>
        <li>
          <md-button
            href="/"
            target="_blank"
            class="md-dribbble md-just-icon md-simple"
          >
            <!--            <i class="fab fa-dribbble" />-->
            <md-icon>shop</md-icon>
          </md-button>
        </li>
        <li>
          <md-button
            href="/"
            target="_blank"
            class="md-instagram md-just-icon md-simple"
          >
            <!--            <i class="fab fa-instagram" />-->
            <md-icon>home</md-icon>
          </md-button>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    backgroundColor: String,
    type: String,
    size: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  },
  mounted() {
    console.log(this.$options.name + " mounted.");
  }
};
</script>

<style lang="scss" scoped></style>
