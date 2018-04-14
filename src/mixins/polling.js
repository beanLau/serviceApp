import { mapState, mapMutations } from 'vuex'
export default {
    data: function () {
        return {
            socketData: '',
            timer: null,
            isShowModal: false
        }
    },
    mounted: function () {
        this.initSocket();
    },
    computed: {
        ...mapState([
            'isOpenSocket'
        ]),
    },
    methods: {
        ...mapMutations([
            'EDIT_ISOPENSOCKET'
        ]),
        initSocket() {
            //console.log(this.$store.state.isOpenSocket)
            console.log(this.isOpenSocket);
            if (false) {
                return;
            } else {
                this.EDIT_ISOPENSOCKET({ isOpenSocket: true });
                this.timer = setInterval(() => {
                    let random = Math.ceil(Math.random() * 10);
                    if (random === 9) {
                        //if(true){
                        this.socketData = {
                            address: '任县北环东路1号',
                            carType: 'SUV',
                            name: '刘伟涛',
                            phone: '18233995275'
                        };
                        this.isShowModal = true;
                        setTimeout(()=>{
                          if(this.isShowModal){
                            this.isShowModal = false;
                          }  
                        },30000)
                    }
                }, 2000);
            }

        },
        clearTimer() {
            clearInterval(this.timer);
            this.timer = null;
        },
        hideNewOrder() {
            this.isShowModal = false;
        },
    //     websocket () {
    //         let ws = new WebSocket('ws://localhost:8080')
    //         ws.onopen = () => {
    //            // Web Socket 已连接上，使用 send() 方法发送数据
    //              ws.send('Holle')
    //              console.log('数据发送中...')
    //          }
    //          ws.onmessage = evt => {
    //            // console.log('数据已接收...')
    //          }
    //          ws.onclose = function () {
    //            // 关闭 websocket
    //            console.log('连接已关闭...')
    //          }
    //           // 组件销毁时调用，中断websocket链接
    //          this.over = () => {
    //            ws.close()
    //          }
    //    }
    },
    // beforeDestroy () {
    //     this.over()
    // },
    destroyed: function () {
        this.clearTimer();
    },
    watch: {
        socketData(value) {
            // console.log(JSON.stringify(value));
            // alert(1);
            this.isShowModal = true;
        }
    }
};