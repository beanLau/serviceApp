<template>
 <div>
    <head-top headerTitle="发布任务"></head-top>
    <div class="login-content">
        <!-- <tab v-model="currentTabIndex">
            <tab-item selected @on-item-click="currentTabIndex = 0">快捷登录</tab-item>
            <tab-item @on-item-click="currentTabIndex = 1">密码登录</tab-item>
        </tab> -->
        <group>
            <x-input title="姓名" v-model="password" placeholder="请输入姓名"></x-input>
            <x-input title="手机号码" v-model="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
            <!-- <x-input title="验证码">
                <img slot="right-full-height" src="https://ws1.sinaimg.cn/large/663d3650gy1fq684go3glj203m01hmwy.jpg">
            </x-input> -->
            <x-input title="选择车型" v-model="password" placeholder="请输入详细地址"></x-input>
            <x-input title="服务类型" v-model="password" placeholder="请输入详细地址"></x-input>
            <x-input title="详细地址" v-model="password" placeholder="请输入详细地址"></x-input>
            <x-input title="详细地址" v-model="password" placeholder="请输入详细地址"></x-input>
        </group>
        <box gap="10px 10px">
            <x-button type="primary" @click.native="toLogin">提交</x-button>
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
    headTop,
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
    margin-top: 50px;
}
</style>