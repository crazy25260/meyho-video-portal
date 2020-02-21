import axios from "axios";
import qs from "qs";

async function getVideoTypes(params) {
  let url = "/mockData/video_type.json?" + qs.stringify(params);
  const res = await axios.get(url);
  return res.data;
}

async function getVideoCoversByTypeId(typeId, pageIndex) {
  let params = {
    typeId: typeId.toString(),
    pageIndex: pageIndex.toString()
  };

  let url = "/mockData/video_cover.json?" + qs.stringify(params);
  console.log(url);
  let res = [];
  await axios
    .get(url)
    .then(function(response) {
      res = response.data;
    })
    .catch(function(error) {
      console.log("getVideoCoversByTypeId() error:" + error);
    });
  return res;
}

export { getVideoTypes, getVideoCoversByTypeId };
