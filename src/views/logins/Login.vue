<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
          >
            <login-card header-color="green">
              <h4 slot="title" class="card-title">
                登录
              </h4>
              <md-button
                slot="buttons"
                href="javascript:void(0)"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-facebook-square" />
              </md-button>
              <md-button
                slot="buttons"
                href="javascript:void(0)"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-twitter" />
              </md-button>
              <md-button
                slot="buttons"
                href="javascript:void(0)"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-google-plus-g" />
              </md-button>
              <p slot="description" class="description">
                欢迎登录vsc视频
              </p>
              <md-field slot="inputs" class="md-form-group">
                <md-icon>face</md-icon>
                <label>账号</label>
                <md-input v-model="firstname" />
              </md-field>
              <md-field slot="inputs" class="md-form-group">
                <md-icon>lock_outline</md-icon>
                <label>密码</label>
                <md-input v-model="password" />
              </md-field>
              <md-field slot="inputs" class="md-form-group">
                <md-icon>email</md-icon>
                <label>验证码</label>
                <md-input v-model="email" type="email" />
              </md-field>
              <md-button slot="footer" class="md-simple md-success md-lg">
                登录功能规划中
              </md-button>
            </login-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LoginCard } from "@/components";
import Mixins from "@/plugins/basicMixins";

export default {
  components: {
    LoginCard
  },
  mixins: [Mixins.HeaderImage],
  bodyClass: "login-page",
  data() {
    return {
      image: require("@/assets/img/profile_city.jpg"),
      firstname: null,
      email: null,
      password: null
    };
  }
};
</script>

<style lang="css"></style>
