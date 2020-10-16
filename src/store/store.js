import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
  debug: true,
  state: {
    site_infos: [
      {
        title: "",
        brand: "",
        domain: "localhost"
      }
    ],
    nav_model: {},
    current_video_data: null,
    path_trace: []
  },
  mutations: {
    init(state, storeModel) {
      if (storeModel.site_infos) {
        state.site_infos = storeModel.site_infos;
      }

      if (storeModel.nav_model) {
        state.nav_model = storeModel.nav_model;
      }
    },
    setCurrentNavCategory(state, selectedIndex) {
      state.nav_model.nav_index = selectedIndex;
    },
    setCurrentVideoData(state, videoData) {
      state.current_video_data = videoData;
    },
    navigate(state, params) {
      console.log(
        "navigate ==> " +
          params.path_name +
          ", data:" +
          JSON.stringify(params.data)
      );
      params.router.push({ name: params.path_name, params: params.data });
    }
  },
  getters: {
    getSiteInfoByDomain: state => host => {
      for (let index = 0; index < state.site_infos.length; index++) {
        if (state.site_infos[index].domain === host) {
          return state.site_infos[index];
        }
      }

      return state.site_infos[0];
    }
  }
});

export { store };
