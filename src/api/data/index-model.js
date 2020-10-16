import axios from "axios";
import qs from "qs";

async function loadIndexModel() {
  let res = [];
  let params = {
    domain: window.location.host
  };

  let url = "/api/model/index?" + qs.stringify(params);
  await axios
    .get(url)
    .then(function(response) {
      res = response.data;
    })
    .catch(function(error) {
      console.log("loadIndexModel() error:" + error);
    });
  return res;
}

async function loadPlayModel(video_id) {
  let res = [];
  let params = {
    video_id: video_id
  };

  let url = "/api/model/play?" + qs.stringify(params);
  await axios
    .get(url)
    .then(function(response) {
      res = response.data;
    })
    .catch(function(error) {
      console.log("loadPlayModel() error:" + error);
    });
  return res;
}

async function loadRelatedModel(video_id) {
  let res = [];
  let params = {
    video_id: video_id
  };

  let url = "/api/model/related?" + qs.stringify(params);
  await axios
    .get(url)
    .then(function(response) {
      res = response.data;
    })
    .catch(function(error) {
      console.log("loadRelatedModel() error:" + error);
    });
  return res;
}

async function loadCardListModel(cate_id, page) {
  let res = [];
  let params = {
    cate_id: cate_id,
    page: page
  };

  let url = "/api/model/video_list?" + qs.stringify(params);
  await axios
    .get(url)
    .then(function(response) {
      res = response.data;
    })
    .catch(function(error) {
      console.log("loadCardListModel() error:" + error);
    });
  return res;
}

export { loadIndexModel, loadPlayModel, loadRelatedModel, loadCardListModel };
