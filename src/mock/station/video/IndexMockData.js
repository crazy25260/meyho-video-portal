import { vsc_common } from "@/api/vsc-common";

const videoPool = [
  {
    name: "捍战",
    id: "1",
    thumbPic:
      "http://media.meyho.cn/image/2020/vsc/sample/video-list-cover/recommend/hanzhan.png",
    playFromInfos: [
      {
        playUrl:
          "http://media.meyho.cn/video/2020/vsc/sample/video-list/recommend/hanzhan/hanzhan.m3u8",
        sourceName: "俄罗斯线路",
        videoRemark: "480p"
      },
      {
        playUrl:
          "http://media.meyho.cn/video/2020/vsc/sample/video-list/recommend/hanzhan/hanzhan.m3u8",
        sourceName: "香港线路",
        videoRemark: "480p"
      }
    ]
  },
  {
    name: "花木兰",
    id: "2",
    thumbPic:
      "http://media.meyho.cn/image/2020/vsc/sample/video-list-cover/recommend/huamulan-pre.jpg",
    playFromInfos: [
      {
        playUrl:
          "http://media.meyho.cn/video/2020/vsc/sample/video-list/recommend/huamulan-pre/huamulan-pre.m3u8",
        sourceName: "俄罗斯线路",
        videoRemark: "480p"
      },
      {
        playUrl:
          "http://media.meyho.cn/video/2020/vsc/sample/video-list/recommend/huamulan-pre/huamulan-pre.m3u8",
        sourceName: "香港线路",
        videoRemark: "480p"
      }
    ]
  },
  {
    name: "浓眉压哨三分绝杀！湖人再胜掘金总分2-0，詹姆斯26+11",
    id: "3",
    thumbPic:
      "http://media.meyho.cn/image/2020/vsc/sample/video-list-cover/recommend/laker-james.png",
    playFromInfos: [
      {
        playUrl:
          "http://media.meyho.cn/video/2020/vsc/sample/video-list/recommend/laker-james/laker-james.m3u8",
        sourceName: "俄罗斯线路",
        videoRemark: "480p"
      },
      {
        playUrl:
          "http://media.meyho.cn/video/2020/vsc/sample/video-list/recommend/laker-james/laker-james.m3u8",
        sourceName: "香港线路",
        videoRemark: "480p"
      }
    ]
  },
  {
    name: "《姜子牙》“苏妲己”首亮相！每一个无辜之人都不该“被牺牲”",
    id: "4",
    thumbPic:
      "http://media.meyho.cn/image/2020/vsc/sample/video-list-cover/recommend/jiangziya.png",
    playFromInfos: [
      {
        playUrl:
          "http://media.meyho.cn/video/2020/vsc/sample/video-list/recommend/jiangziya/jiangziya.m3u8",
        sourceName: "俄罗斯线路",
        videoRemark: "480p"
      },
      {
        playUrl:
          "http://media.meyho.cn/video/2020/vsc/sample/video-list/recommend/jiangziya/jiangziya.m3u8",
        sourceName: "香港线路",
        videoRemark: "480p"
      }
    ]
  },
  {
    name: "八佰",
    id: "5",
    thumbPic:
      "http://media.meyho.cn/image/2020/vsc/sample/video-list-cover/recommend/babai.png",
    playFromInfos: [
      {
        playUrl:
          "http://media.meyho.cn/video/2020/vsc/sample/video-list/recommend/babai/babai.m3u8",
        sourceName: "俄罗斯线路",
        videoRemark: "480p"
      },
      {
        playUrl:
          "http://media.meyho.cn/video/2020/vsc/sample/video-list/recommend/babai/babai.m3u8",
        sourceName: "香港线路",
        videoRemark: "480p"
      }
    ]
  },
  {
    name: "怪物先生",
    id: "6",
    thumbPic:
      "http://media.meyho.cn/image/2020/vsc/sample/video-list-cover/recommend/MrMonster.png",
    playFromInfos: [
      {
        playUrl:
          "http://media.meyho.cn/video/2020/vsc/sample/video-list/recommend/MrMonster/MrMonster.m3u8",
        sourceName: "俄罗斯线路",
        videoRemark: "480p"
      },
      {
        playUrl:
          "http://media.meyho.cn/video/2020/vsc/sample/video-list/recommend/MrMonster/MrMonster.m3u8",
        sourceName: "香港线路",
        videoRemark: "480p"
      }
    ]
  },
  {
    name: "征途",
    id: "7",
    thumbPic:
      "http://media.meyho.cn/image/2020/vsc/sample/video-list-cover/recommend/zhengtu.png",
    playFromInfos: [
      {
        playUrl:
          "http://media.meyho.cn/video/2020/vsc/sample/video-list/recommend/zhengtu/zhengtu.m3u8",
        sourceName: "俄罗斯线路",
        videoRemark: "480p"
      },
      {
        playUrl:
          "http://media.meyho.cn/video/2020/vsc/sample/video-list/recommend/zhengtu/zhengtu.m3u8",
        sourceName: "香港线路",
        videoRemark: "480p"
      }
    ]
  },
  {
    name: "重启之极海听雷第一季第1集",
    id: "8",
    thumbPic:
      "http://media.meyho.cn/image/2020/vsc/sample/video-list-cover/recommend/cq-jhtl-1-001.png",
    playFromInfos: [
      {
        playUrl:
          "http://media.meyho.cn/video/2020/vsc/sample/video-list/recommend/cq-jhtl-1-001/cq-jhtl-1-001.m3u8",
        sourceName: "俄罗斯线路",
        videoRemark: "480p"
      },
      {
        playUrl:
          "http://media.meyho.cn/video/2020/vsc/sample/video-list/recommend/cq-jhtl-1-001/cq-jhtl-1-001.m3u8",
        sourceName: "香港线路",
        videoRemark: "480p"
      }
    ]
  },
  {
    name: "500斤模特",
    id: "9",
    thumbPic:
      "http://media.meyho.cn/image/2020/vsc/sample/video-list-cover/recommend/250kgmodel.png",
    playFromInfos: [
      {
        playUrl:
          "http://media.meyho.cn/video/2020/vsc/sample/250kgmodel/250kgmodel.m3u8",
        sourceName: "俄罗斯线路",
        videoRemark: "480p"
      },
      {
        playUrl:
          "http://media.meyho.cn/video/2020/vsc/sample/250kgmodel/250kgmodel.m3u8",
        sourceName: "香港线路",
        videoRemark: "480p"
      }
    ]
  },
  {
    name: "老梁讲套路",
    id: "10",
    thumbPic:
      "http://media.meyho.cn/image/2020/vsc/sample/video-list-cover/recommend/laoliang.png",
    playFromInfos: [
      {
        playUrl:
          "http://media.meyho.cn/video/2020/vsc/sample/video-list/recommend/laoliang/laoliang.m3u8",
        sourceName: "俄罗斯线路",
        videoRemark: "480p"
      },
      {
        playUrl:
          "http://media.meyho.cn/video/2020/vsc/sample/video-list/recommend/laoliang/laoliang.m3u8",
        sourceName: "香港线路",
        videoRemark: "480p"
      }
    ]
  },
  {
    name: "大决战之辽沈战役",
    id: "11",
    thumbPic: "http://media.meyho.cn/image/movie/youtube/202010/djz-lszy.png",
    playFromInfos: [
      {
        playUrl:
          "http://media.meyho.cn/video/movie/youtube/202010/djz-lszy/djz-lszy.m3u8",
        sourceName: "俄罗斯线路",
        videoRemark: "480p"
      },
      {
        playUrl:
          "http://media.meyho.cn/video/movie/youtube/202010/djz-lszy/djz-lszy.m3u8",
        sourceName: "香港线路",
        videoRemark: "480p"
      }
    ]
  }
];

const videoCoverPool = [
  {
    thumbPic:
      "http://media.meyho.cn/image/2020/vsc/sample/video-list-cover/recommend/hanzhan.png",
    name: "捍战",
    id: "1",
    url:
      "http://media.meyho.cn/video/2020/vsc/sample/video-list/recommend/hanzhan/hanzhan.m3u8",
    desc:
      "本故事根据真实事件改编。故事里的捍战小队是由华人组成的非洲某保镖公司的主力成员，他们不仅每天要面对和远方亲人的骨肉分离还要面对执行任务时的生死考验...",
    cardTitleHeader: "捍战",
    pubTime: "2020-08-14 09:10:12"
  },
  {
    thumbPic:
      "http://media.meyho.cn/image/2020/vsc/sample/video-list-cover/recommend/huamulan-pre.jpg",
    name: "花木兰",
    id: "2",
    desc:
      "在古代中国，一位年轻的女子为了救她的父亲假扮成男装代父从军。在穿越中国广袤土地的壮丽征程中，她从紧张的训练和战争中存活下来，发现...",
    cardTitleHeader: "花木兰",
    pubTime: "2020-07-14 09:10:12"
  },
  {
    thumbPic:
      "http://media.meyho.cn/image/2020/vsc/sample/video-list-cover/recommend/laker-james.png",
    name: "湖人再胜掘金总分2-0",
    id: "3",
    desc: "浓眉压哨三分绝杀！湖人再胜掘金总分2-0，詹姆斯26+11",
    cardTitleHeader: "湖人再胜掘金总分2-0",
    pubTime: "2020-07-14 09:10:12"
  },
  {
    thumbPic:
      "http://media.meyho.cn/image/2020/vsc/sample/video-list-cover/recommend/jiangziya.png",
    name: "《姜子牙》“苏妲己”首亮相！",
    id: "4",
    desc: "《姜子牙》“苏妲己”首亮相！每一个无辜之人都不该“被牺牲",
    cardTitleHeader: "《姜子牙》“苏妲己”首亮相",
    pubTime: "2020-07-14 09:10:12"
  },
  {
    thumbPic:
      "http://media.meyho.cn/image/2020/vsc/sample/video-list-cover/recommend/babai.png",
    name: "八佰",
    id: "5",
    desc: "《八佰》高燃预告片，誓以我命固我土！",
    cardTitleHeader: "八佰",
    pubTime: "2020-07-14 09:10:12"
  },
  {
    thumbPic:
      "http://media.meyho.cn/image/2020/vsc/sample/video-list-cover/recommend/MrMonster.png",
    name: "怪物先生",
    id: "6",
    desc:
      "有些奇怪的事情一直存在，你以为是巧合，或编个理由让它合理，其实，是因为你们不想承认…… ",
    cardTitleHeader: "怪物先生",
    pubTime: "2020-07-14 09:10:12"
  },
  {
    thumbPic:
      "http://media.meyho.cn/image/2020/vsc/sample/video-list-cover/recommend/zhengtu.png",
    name: "征途",
    id: "7",
    desc:
      "故事发生在虚构的中原大陆。十国之中，南赵国与北燕国比邻而居。为了防御日益强大的北燕...",
    cardTitleHeader: "征途",
    pubTime: "2020-07-14 09:10:12"
  },
  {
    thumbPic:
      "http://media.meyho.cn/image/2020/vsc/sample/video-list-cover/recommend/cq-jhtl-1-001.png",
    name: "重启之极海听雷第一季",
    id: "8",
    desc:
      "该剧讲述吴邪、王胖子、张起灵铁三角十年之约结束退隐雨村。有一天吴邪忽然收到一条疑似三叔吴三省发来的短信...",
    cardTitleHeader: "重启之极海听雷",
    pubTime: "2020-07-14 09:10:12"
  },
  {
    thumbPic:
      "http://media.meyho.cn/image/2020/vsc/sample/video-list-cover/recommend/250kgmodel.png",
    name: "500斤模特",
    id: "9",
    desc: "讲述一个500斤的大胖子女模特的故事，喜欢的就点进来看...",
    cardTitleHeader: "500斤肥女模特",
    pubTime: "2020-07-14 09:10:12"
  },
  {
    thumbPic:
      "http://media.meyho.cn/image/2020/vsc/sample/video-list-cover/recommend/laoliang.png",
    name: "老梁讲套路",
    id: "10",
    desc: "社会艰险套路多，老梁帮你来击破。发刊词-超清720P...",
    cardTitleHeader: "老梁系列",
    pubTime: "2020-07-14 09:10:12"
  },
  {
    thumbPic: "http://media.meyho.cn/image/movie/youtube/202010/djz-lszy.png",
    name: "大决战之辽沈战役",
    id: "11",
    desc: "【大决战—辽沈战役】 1991年 中国经典怀旧电影 Chinese classical movie",
    cardTitleHeader: "经典怀旧-大决战",
    pubTime: "2020-10-14 16:10:12"
  }
];

// 推荐类列表
let SimpleVideoCardList = [
  videoCoverPool[3],
  videoCoverPool[10],
  videoCoverPool[2],
  videoCoverPool[1],
  videoCoverPool[0],
  videoCoverPool[9],
  videoCoverPool[8],
  videoCoverPool[7],
  videoCoverPool[6],
  videoCoverPool[5],
  videoCoverPool[4]
];

// 电影类列表
let SimpleVideoCardList2 = [
  videoCoverPool[0],
  videoCoverPool[1],
  videoCoverPool[2],
  videoCoverPool[3],
  videoCoverPool[4],
  videoCoverPool[5],
  videoCoverPool[6],
  videoCoverPool[7],
  videoCoverPool[8],
  videoCoverPool[9]
];

// 电视类列表
let SimpleVideoCardList3 = [
  videoCoverPool[7],
  videoCoverPool[0],
  videoCoverPool[1],
  videoCoverPool[2],
  videoCoverPool[3],
  videoCoverPool[4],
  videoCoverPool[5],
  videoCoverPool[6],
  videoCoverPool[8],
  videoCoverPool[9]
];

// 模特类列表
let SimpleVideoCardList4 = [
  videoCoverPool[8],
  videoCoverPool[0],
  videoCoverPool[1],
  videoCoverPool[2],
  videoCoverPool[3],
  videoCoverPool[4],
  videoCoverPool[5],
  videoCoverPool[6],
  videoCoverPool[7],
  videoCoverPool[9]
];

// 专题类列表
let SimpleVideoCardList5 = [
  videoCoverPool[9],
  videoCoverPool[0],
  videoCoverPool[1],
  videoCoverPool[2],
  videoCoverPool[3],
  videoCoverPool[4],
  videoCoverPool[5],
  videoCoverPool[6],
  videoCoverPool[7],
  videoCoverPool[8]
];

let SimpleVideoIndexData = {
  brand_model: { name: "VSC视频" },
  carousel_pics: [
    {
      name: "pic1",
      id: "5",
      src: "http://media.meyho.cn/image/2020/vsc/sample/carousel/carousel1.jpg"
    },
    {
      name: "pic2",
      id: "6",
      src: "http://media.meyho.cn/image/2020/vsc/sample/carousel/carousel2.jpg"
    },
    {
      name: "pic3",
      id: "7",
      src: "http://media.meyho.cn/image/2020/vsc/sample/carousel/carousel3.jpg"
    },
    {
      name: "pic4",
      id: "8",
      src: "http://media.meyho.cn/image/2020/vsc/sample/carousel/carousel4.jpg"
    }
  ],
  nav_model: {
    nav_categories: [
      { id: "30", name: "推荐", path: "/simple", path_name: "simple-index" },
      {
        id: "31",
        name: "电影",
        path: "/simple/list",
        path_name: "simple_list"
      },
      {
        id: "32",
        name: "电视",
        path: "/simple/list",
        path_name: "simple_list"
      },
      {
        id: "33",
        name: "模特",
        path: "/simple/list",
        path_name: "simple_list"
      },
      { id: "34", name: "专题", path: "/simple/list", path_name: "simple_list" }
    ],
    nav_index: 0
  },
  index_list: SimpleVideoCardList
};

let SimpleVideoPlayData = {
  play_video: {
    name: "测试视频1",
    thumbPic: "http://media.meyho.cn/image/2020/vsc/sample/250kgmodel.png",
    playFromInfos: [
      {
        playUrl:
          "http://media.meyho.cn/video/2020/vsc/sample/250kgmodel/250kgmodel.m3u8",
        sourceName: "俄罗斯线路",
        videoRemark: "480p"
      },
      {
        playUrl:
          "http://media.meyho.cn/video/2020/vsc/sample/250kgmodel/250kgmodel.m3u8",
        sourceName: "香港线路",
        videoRemark: "480p"
      }
    ]
  }
};

let SimpleVideoRelatedData = {
  related_model: {
    related_list: [
      videoCoverPool[0],
      videoCoverPool[1],
      videoCoverPool[2],
      videoCoverPool[3],
      videoCoverPool[4],
      videoCoverPool[5],
      videoCoverPool[6],
      videoCoverPool[7]
    ],
    comment:
      "这里是评论的相关内容，具体规范尚未制定，当前数据仅供参考。 \n" +
      "\n" +
      "一楼评论区，二楼评论，三楼评论，四楼评论，五楼评论，六楼评论，七楼评论，八楼评论，九楼评论，十楼评论。",
    tags: ["时尚", "娱乐", "院线大片", "文艺片", "豆瓣高分", "周星驰"]
  }
};

export default {
  "get|/api/model/index": option => {
    return {
      status: 200,
      message: "success",
      data: SimpleVideoIndexData
    };
  },
  "get|/api/model/play": option => {
    console.log("get|/api/model/play==>" + JSON.stringify(option));
    let video_id = "999";
    if ("/api/model/play?" !== option.url) {
      video_id = vsc_common.getUrlKey("video_id", option.url);
    }

    let video = SimpleVideoPlayData;

    for (let index = 0; index < videoPool.length; index++) {
      if (videoPool[index].id === video_id) {
        video = { play_video: videoPool[index] };
        break;
      }
    }

    return {
      status: 200,
      message: "success",
      data: video
    };
  },
  "get|/api/model/related": option => {
    return {
      status: 200,
      message: "success",
      data: SimpleVideoRelatedData
    };
  },
  "get|/api/model/video_list": option => {
    let cate_id = "30";
    let page = "1";
    if ("/api/model/video_list?" !== option.url) {
      cate_id = vsc_common.getUrlKey("cate_id", option.url);
      page = vsc_common.getUrlKey("page", option.url);
    }

    let cardList = SimpleVideoCardList;

    switch (cate_id) {
      case "31":
        cardList = SimpleVideoCardList2;
        break;
      case "32":
        cardList = SimpleVideoCardList3;
        break;
      case "33":
        cardList = SimpleVideoCardList4;
        break;
      case "34":
        cardList = SimpleVideoCardList5;
        break;
    }

    // 默认首页的第二页的内容。
    if (page === "2") {
      cardList = SimpleVideoCardList2;
    }

    if (page === "3") {
      cardList = SimpleVideoCardList3;
    }

    return {
      status: 200,
      message: "success",
      data: cardList
    };
  }
};
