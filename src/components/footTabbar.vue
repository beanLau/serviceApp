<template>
    <tabbar class="userTabbar" style="position:fixed;">
      <tabbar-item :selected="$route.path.indexOf('userhome') !== -1" :link="$route.path.indexOf('userhome') !== -1 ? $route.path:'/userhome'">
        <img slot="icon" src="../assets/images/homeActive.png" v-if="$route.path.indexOf('userhome') !== -1">
        <img slot="icon" src="../assets/images/home.png" v-else>
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item :selected="$route.path.indexOf('userorder') !== -1" :link="$route.path.indexOf('userorder') !== -1 ? $route.path:'/userorder'">
        <img slot="icon" src="../assets/images/orderActive.png" v-if="$route.path.indexOf('userorder') !== -1">
        <img slot="icon" src="../assets/images/order.png" v-else>
        <span slot="label">订单</span>
      </tabbar-item>
      <tabbar-item :selected="$route.path.indexOf('usermy') !== -1" :link="$route.path.indexOf('usermy') !== -1 ? $route.path:'/usermy'">
        <img slot="icon" src="../assets/images/myActive.png" v-if="$route.path.indexOf('usermy') !== -1">
        <img slot="icon" src="../assets/images/my.png" v-else>
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
</template>
<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
  data() {
    return {};
  },
  props:{
    // showBack:{
    //   type:Boolean,
    //   default:true
    // },
    // showRight:{
    //   type:Boolean,
    //   default:false
    // },
    // headerTitle:{
    //   type:String,
    //   default:'报修APP'
    // }
  },
  components: {
    Tabbar,
    TabbarItem
  },

  computed: {},

  mounted() {},
  methods: {}
};
</script>
<style>
.weui-tabbar__label{
    margin: 0;
}
.userTabbar .weui-tabbar__icon img {
    width: 85% !important;
    height: 85% !important;
}
</style>