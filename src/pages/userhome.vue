<template>
 <div class="page-userhome">
        <head-top headerTitle="首页" :showBack="false" @torepair="toRepair">
            <span slot="right">去报修</span>
        </head-top>
        <div class="userhome-content">
            <swiper height="160px" loop auto :list="list" v-model="listIndex" @on-index-change="onIndexChange"></swiper>
            <group-title>公告</group-title>
            <div class="align-middle">
                <marquee>
                    <marquee-item v-for="i in asyncCount" :interval="20000" :key="i" @click.native="onClick(i)" >这是公告内容第{{i}}条，用来显示新订单信息、评价信息、投诉信息等。</marquee-item>
                </marquee>
            </div>
            <!-- <box gap="10px 10px">
                <flexbox>
                    <flexbox-item>
                        <x-button mini plain>primary</x-button>
                    
                    </flexbox-item>
                    <flexbox-item>
                        <x-button mini plain>Delete</x-button>
                    </flexbox-item>
                </flexbox>
            </box> -->
            <group-title>友情推荐</group-title>
            <!-- <swiper  auto height="30px" direction="vertical" :interval=2000 class="text-scroll" :show-dots="false">
                <swiper-item><div>义务爱了 完成传奇世界H5-王者归来任务 获得20金币</div></swiper-item>
                <swiper-item><div>基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币</div></swiper-item>
                <swiper-item><div>零哥章魚 完成传奇世界H5-王者归来任务 获得30金币</div></swiper-item>
                <swiper-item><div>做迎而為 兑换【饿了么】畅享美食红包 消耗20金币</div></swiper-item>
                <swiper-item><div>只知道不知道 兑换【饿了么】畅享美食红包 消耗20金币</div></swiper-item>
                <swiper-item><div>基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币</div></swiper-item>
            </swiper> -->
            <div style="margin: 10px;overflow: hidden;" v-for="item in list2" :key="item.url">
                <masker style="border-radius: 2px;">
                    <div class="m-img" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
                    <div slot="content" class="m-title">
                    {{item.title}}
                    <br/>
                    <span class="m-time">2018-04-12</span>
                    </div>
                </masker>
            </div>
        </div>
        <foot-tabbar></foot-tabbar>
 </div>
</template>

<script>
import headTop from "../components/headerTop";
import footTabbar from "../components/footTabbar";
import {
  XInput,
  Group,
  XButton,
  Cell,
  Tab,
  TabItem,
  Swiper,
  SwiperItem,
  GroupTitle,
  Marquee,
  MarqueeItem,
  Masker,
  Box,
  Flexbox,
  FlexboxItem
} from "vux";
export default {
  data() {
    return {
      mobile: "",
      password: "",
      code: "",
      listIndex: 0,
      list: [
        {
          url: "javascript:",
          img:
            "http://bpic.588ku.com/element_origin_min_pic/16/11/23/08ca454e37272523e26716010bc78ee6.jpg",
          title: "快速上门维修服务APP"
        },
        {
          url: "javascript:",
          img:
            "http://bpic.588ku.com/element_origin_min_pic/17/03/20/25ede0e576c1a605f810bbc55edb4197.jpg",
          title: "提供最优质的服务"
        }
      ],
      list2: [{
        title: '精修细检--还送保险！',
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523522425173&di=3c981f3a5e77299338d9537c92a95859&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F010870559755f96ac7253264207360.jpg%401280w_1l_2o_100sh.jpg'
      }, {
        title: '一流的技术、一流的服务',
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523522792028&di=fb3d23487f81738471947e21d225f773&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1602%2F26%2Fc16%2F18626503_1456460458306.jpg'
      }, {
        title: '远离车内毒气，日本车载空气净化器',
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523522530312&di=ff6951b74cf1d09c70405ba0bad60f69&imgtype=0&src=http%3A%2F%2Fp18.qhimg.com%2Fbdr%2F__%2Fd%2F_open360%2Fcarn0222%2F3.jpg'
      }],
      asyncCount: 5
    };
  },

  components: {
    headTop,
    footTabbar,
    XInput,
    XButton,
    Group,
    Cell,
    Tab,
    TabItem,
    Box,
    Swiper,
    SwiperItem,
    GroupTitle,
    Marquee,
    MarqueeItem,
    Masker,
    Flexbox,
    FlexboxItem
  },
  mounted() {},
  computed: {},

  methods: {
    toLogin() {},
    onIndexChange(index) {
      this.listIndex = index;
    },
    toRepair(){
        console.log('跳转到报修')
    }
  }
};
</script>
<style lang='less' scoped>
.page-userhome {
  width: 100%;
  position: absolute;
  height: 100%;
}
.userhome-content {
    padding-top: 48px;
    padding-bottom: 50px;
}
.align-middle {
  font-size: 12px;
  padding: 0 16px;
  color: #d66e6ed1;
}
.m-img {
  padding-bottom: 33%;
  display: block;
  position: relative;
  max-width: 100%;
  background-size: cover;
  background-position: center center;
  cursor: pointer;
  border-radius: 2px;
}

.m-title {
  color: #fff;
  text-align: center;
  text-shadow: 0 0 2px rgba(0, 0, 0, .5);
  font-weight: 500;
  font-size: 16px;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
}

.m-time {
  font-size: 12px;
  padding-top: 4px;
  border-top: 1px solid #f0f0f0;
  display: inline-block;
  margin-top: 5px;
}
</style>