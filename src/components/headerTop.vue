<template>
    <x-header :left-options="{showBack:showBack}" @on-click-back="$router.go(-1)" :title="headerTitle" >
      <span slot="right" @click="toRepair">
          <slot name="right"></slot>
      </span>
    </x-header>
</template>

<script>
import { XHeader } from 'vux'
export default {
  data() {
    return {};
  },
  props:{
    showBack:{
      type:Boolean,
      default:true
    },
    showRight:{
      type:Boolean,
      default:false
    },
    headerTitle:{
      type:String,
      default:'报修APP'
    }
  },
  components: {},

  computed: {},

  mounted() {},
  methods: {
    toRepair(){
      this.$emit('torepair');
    }
  }
};
</script>
<style lang='less' scoped>

</style>