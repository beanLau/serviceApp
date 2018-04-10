<template>
 <div>
     <x-header title="忘记密码" ></x-header>
    <div class="login-content">
        <!-- <tab v-model="currentTabIndex">
            <tab-item selected @on-item-click="currentTabIndex = 0">快捷登录</tab-item>
            <tab-item @on-item-click="currentTabIndex = 1">密码登录</tab-item>
        </tab> -->
        <group title="忘记密码">
            <x-input title="手机号码" v-model="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
            <!-- <x-input title="验证码">
                <img slot="right-full-height" src="https://ws1.sinaimg.cn/large/663d3650gy1fq684go3glj203m01hmwy.jpg">
            </x-input> -->
            <x-input title="验证码" class="weui-vcode" v-model="code" placeholder="请输入验证码">
                <x-button slot="right" type="primary" mini>发送验证码</x-button>
            </x-input>
            <x-input title="新密码" v-model="password" placeholder="请输入新密码" keyboard="password"></x-input>
        </group>
        <box gap="10px 10px">
            <x-button :gradients="['#1D62F0', '#19D5FD']" @click.native="toLogin">提交</x-button>
        </box>
    </div>
 </div>
</template>

<script>
import headTop from "../components/headerTop";
import { XInput, Group, XButton, Cell, Tab, TabItem, Box } from "vux";
export default {
  data() {
    return {
      mobile: "",
      password: "",
      code: "",
      currentTabIndex: 0
    };
  },

  components: {
    XInput,
    XButton,
    Group,
    Cell,
    Tab,
    TabItem,
    Box
  },
  mounted() {},
  computed: {},

  methods: {
    toLogin() {}
  }
};
</script>
<style lang='less' scoped>
.login-content {
  
}
</style>