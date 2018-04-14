<template>
 <div class="page-usermy">
        <head-top headerTitle="我的" :showBack="false" @torepair="toRepair">
            <!-- <span slot="right">去报修</span> -->
        </head-top>
        <div class="usermy-content">
          <div class="usermy-top">
            <div class="usermy-pic">
              <img src="../assets/images/defaultpic.jpg" alt="">
            </div>
            
            <span class="usermy-name">
              欢迎您！苍老师
            </span>
            
          </div>
          <group>
            <cell title="姓名" value="苍老师">
            </cell>
            <cell title="电话" value="18233995275"></cell>
            <cell title="身份证号" value="130526199011270000"></cell>
            <cell title="微信号" value="beanLau"></cell>
            <cell title="银行卡" is-link></cell>
            <cell title="订单" is-link></cell>
          </group>
        </div>
        <foot-tabbar></foot-tabbar>
 </div>
</template>

<script>
import headTop from "../components/headerTop";
import footTabbar from "../components/footTabbar";
import { Group, Cell, CellBox } from "vux";
import socket from '../mixins/polling'
export default {
  mixins:[socket],
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
      list2: [
        {
          title: "精修细检--还送保险！",
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523522425173&di=3c981f3a5e77299338d9537c92a95859&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F010870559755f96ac7253264207360.jpg%401280w_1l_2o_100sh.jpg"
        },
        {
          title: "一流的技术、一流的服务",
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523522792028&di=fb3d23487f81738471947e21d225f773&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1602%2F26%2Fc16%2F18626503_1456460458306.jpg"
        },
        {
          title: "远离车内毒气，日本车载空气净化器",
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523522530312&di=ff6951b74cf1d09c70405ba0bad60f69&imgtype=0&src=http%3A%2F%2Fp18.qhimg.com%2Fbdr%2F__%2Fd%2F_open360%2Fcarn0222%2F3.jpg"
        }
      ],
      asyncCount: 5
    };
  },

  components: {
    headTop,
    footTabbar,
    Group,
    Cell,
    CellBox
  },
  mounted() {},
  computed: {},

  methods: {
    toLogin() {},
    onIndexChange(index) {
      this.listIndex = index;
    },
    toRepair() {
      console.log("跳转到报修");
    }
  },
  // beforeDestroy(){
  //   this.clearTimer();
  // }
};
</script>
<style lang='less' scoped>
.page-usermy {
  width: 100%;
  position: absolute;
  height: 100%;
}
.usermy-content {
  padding-top: 48px;
  padding-bottom: 50px;
  background: #fff;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
}
.usermy-list{
  font-size: 14px;
  margin-bottom: 10px;
}
.orderitem-title {
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 28px;
  line-height: 28px;
  background: #fff;
  color: #999;
}
.orderitem-content {
  padding: 0 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 12px;
  background: #fff;
}
.orderitem-content-tiem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 24px;
  line-height: 24px;
}
.usermy-top{
  height: 80px;
  display: flex;
  justify-content: space-around;
  text-align: center;
}
.usermy-pic{
  width: 50px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.usermy-pic img{
  width: 50px;
  height: 50px;
}
.usermy-name{
  font-size: 14px;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>