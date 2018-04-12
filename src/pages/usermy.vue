<template>
 <div class="page-userhome">
        <head-top headerTitle="我的" :showBack="false"></head-top>
        <div class="userhome-content">
            <swiper loop auto :list="list" v-model="listIndex" @on-index-change="onIndexChange"></swiper>
        </div>
        <foot-tabbar></foot-tabbar>
 </div>
</template>

<script>
import headTop from "../components/headerTop";
import footTabbar from "../components/footTabbar";
import { XInput, Group, XButton, Cell, Tab, TabItem, Box, Swiper } from "vux";
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
      ]
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
    Swiper
  },
  mounted() {},
  computed: {},

  methods: {
    toLogin() {},
    onIndexChange(index) {
      this.listIndex = index;
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
.login-content {
}
</style>