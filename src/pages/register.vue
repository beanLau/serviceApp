<template>
 <div>
     <!-- <x-header title="注册" ></x-header> -->
     <head-top headerTitle="注册"></head-top>
    <div class="login-content">
        <box gap="10px 10px">
            <button-tab v-model="buttonIndex">
                <button-tab-item @on-item-click="buttonIndex = 0">我是用户</button-tab-item>
                <button-tab-item @on-item-click="buttonIndex = 1">我是服务商</button-tab-item>
            </button-tab>
        </box>
        
        <group>
            <x-input title="姓名" name="username" placeholder="请输入姓名" is-type="china-name"></x-input>
            <x-input title="手机号码" v-model="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
            <x-input title="验证码" class="weui-vcode" v-model="code" placeholder="请输入验证码">
                <x-button slot="right" type="primary" mini>发送验证码</x-button>
            </x-input>
            <x-input title="密码" v-model="password" placeholder="请输入密码" keyboard="password"></x-input>
        </group>
        <box gap="10px 10px">
            <x-button :gradients="['#1D62F0', '#19D5FD']" @click.native="toLogin">注册</x-button>
        </box>
    </div>
 </div>
</template>

<script>
import headTop from "../components/headerTop";
import { XInput, Group, XButton, Cell, Tab, TabItem, Box,ButtonTab, ButtonTabItem } from "vux";
export default {
  data() {
    return {
      mobile: "",
      password: "",
      code: "",
      buttonIndex: 0
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
    ButtonTab, 
    ButtonTabItem
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