<template>
  <div class="md-layout">
    <div class="md-layout-item">
      <md-toolbar class="md-info">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <router-link to="/">
              <h3 class="md-title">
                美豪影视
              </h3>
            </router-link>
            <md-list>
              <md-list-item href="javascript:void(0)">
                <a
                  href="https://github.com/crazy25260/meyho-video-portal"
                  target="_blank"
                >
                  <p>GitHub</p>
                </a>
              </md-list-item>

              <md-list-item href="javascript:void(0)">
                <p>Blog</p>
              </md-list-item>
            </md-list>
          </div>
          <div class="md-toolbar-section-end">
            <md-button
              class="md-just-icon md-simple md-white md-toolbar-toggle"
            >
              <span class="icon-bar" />
              <span class="icon-bar" />
              <span class="icon-bar" />
            </md-button>

            <div class="md-collapse">
              <div class="md-autocomplete">
                <md-autocomplete
                  v-model="selectedMovie"
                  class="search has-white"
                  :md-options="movies"
                  :md-open-on-focus="false"
                >
                  <label>输入影片名/演员/导演</label>
                </md-autocomplete>
              </div>
            </div>
          </div>
        </div>
      </md-toolbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "BrandNavBar",
  data() {
    return {
      selectedMovie: "",
      movies: [
        "庆余年",
        "囧妈",
        "徐峥",
        "速度与激情9",
        "肥龙过江",
        "新世界",
        "孙红雷",
        "周冬雨"
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.md-toolbar {
  margin-bottom: 0;
}
</style>
