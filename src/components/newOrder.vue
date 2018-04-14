<template>
    <div class="neworder-content">
        <div class="neworder-center-content">
            <div class="neworder-title">
                订单提醒
            </div>
            <div class="neworder-items-content">
                <div class="neworder-items">
                    <div>姓名:</div>
                    <div>{{socketData.name}}</div>
                </div>
                <div class="neworder-items">
                    <div>电话:</div>
                    <div>{{socketData.phone}}</div>
                </div>
                <div class="neworder-items">
                    <div>地址:</div>
                    <div>{{socketData.address}}</div>
                </div>
                <div class="neworder-items">
                    <div>类型:</div>
                    <div>{{socketData.carType}}</div>
                </div>
            </div>
            
            <div class="neworder-btns">
                <div class="neworder-btns-item" @click="onCancel">取消</div>
                <div class="neworder-btns-item" @click="onConfirm">抢单</div>
            </div>
        </div>
    </div>
</template>

<script>
import { XButton, Confirm, TransferDomDirective as TransferDom } from "vux";
export default {
  data() {
    return {};
  },
  directives: {
    TransferDom
  },
  props: {
    isShowModal: {
      type: Boolean,
      default: true
    },
    socketData: {
      type: Object,
      default: function() {
        return null;
      }
    }
  },
  components: {
    XButton,
    Confirm
  },

  computed: {
    // isShowModal2: function() {
    //   return this.isShowModal;
    // }
  },

  mounted() {},
  methods: {
    toRepair() {
      this.$emit("torepair");
    },
    onCancel(e) {
        console.log(e);
        this.$emit("hideNewOrder");
    },
    onConfirm() {
      this.$emit("hideNewOrder");
    }
  }
};
</script>
<style lang='less' scoped>
.neworder-content {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #999999a1;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
.neworder-center-content {
  background: #fff;
  border-radius: 10px;
  width: 70%;
}
.neworder-title {
  text-align: center;
  color: #333;
  font-size: 16px;
  line-height: 40px;
  height: 40px;
  border-bottom: 1px solid #f2f2f2;
}
.neworder-items-content{
    padding: 0 10px;
    margin: 10px 0;
}
.neworder-items {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #333;
}
.neworder-btns {
  display: flex;
  border-top: 1px solid #f2f2f2;
  font-size: 16px;
  color: #3385ff;
}
.neworder-btns-item {
  height: 40px;
  line-height: 40px;
  width: 50%;
  box-sizing: border-box;
  text-align: center;
}
.neworder-btns-item:nth-of-type(1){
    border-right: 1px solid #f2f2f2;
}
</style>