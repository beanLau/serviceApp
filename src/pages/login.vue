<template>
 <div>
    <!-- <x-header :left-options="{showBack: false}" title="登录" ></x-header> -->
    <head-top headerTop="登录" :showBack="false"></head-top>
    <div class="login-content">
        <tab v-model="currentTabIndex">
            <tab-item selected @on-item-click="currentTabIndex = 0">快捷登录</tab-item>
            <tab-item @on-item-click="currentTabIndex = 1">密码登录</tab-item>
        </tab>
        <group title="快捷登录" v-if="currentTabIndex == 0">
            <x-input title="手机号码" v-model="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
            <!-- <x-input title="验证码">
                <img slot="right-full-height" src="https://ws1.sinaimg.cn/large/663d3650gy1fq684go3glj203m01hmwy.jpg">
            </x-input> -->
            <x-input title="验证码" class="weui-vcode" v-model="code" placeholder="请输入验证码">
                <x-button slot="right" type="primary" mini>发送验证码</x-button>
            </x-input>
        </group>
        <group title="密码登录" v-if="currentTabIndex == 1">
            <x-input title="手机号码" v-model="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
            <!-- <x-input title="验证码">
                <img slot="right-full-height" src="https://ws1.sinaimg.cn/large/663d3650gy1fq684go3glj203m01hmwy.jpg">
            </x-input> -->
            <x-input title="密码" v-model="password" placeholder="请输入密码" keyboard="password"></x-input>
            <x-switch title="记住密码" v-model="memory" @on-change="changeMemory"></x-switch>
        </group>
        <box gap="10px 10px">
            <x-button :gradients="['#1D62F0', '#19D5FD']" @click.native="toLogin">登录</x-button>
        </box>
        <div class="bottom-content">
            <router-link to="register">立即注册</router-link>
            <span class="kong"></span>
            <router-link to="forget">忘记密码</router-link>
        </div>
    </div>
 </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import headTop from "../components/headerTop";
import { XInput, Group, XButton, Cell, Tab, TabItem, Box,XSwitch } from "vux";
export default {
  data() {
    return {
      mobile: "",
      password: "",
      code: "",
      currentTabIndex: 0,
      memory:false
    };
  },

  components: {
    headTop,
    XInput,
    XButton,
    Group,
    Cell,
    Tab,
    TabItem,
    Box,
    XSwitch 
  },
  mounted() {},
  computed: {
    ...mapState([
        'userInfo', 'geohash'
    ]),
  },

  methods: {
    ...mapMutations([
        'SAVE_ORDER'
    ]),
    toLogin() {
      //router.push({ path: 'register', query: { plan: 'private' }})
      this.$router.push('/userhome');
    },
    changeMemory(){}
  }
};
</script>
<style lang='less' scoped>
.login-content {
  .login-btn {
    margin-top: 40px;
  }
  .bottom-content {
    display: flex;
    align-items: center;
    justify-content: center;
    
  }
  .kong {
    width: 10px;
    height: 1px;
    display: inline-block;
  }
}
</style>