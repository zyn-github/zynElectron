<template>
    <div id="process-communication">
        <el-row :gutter="20">
            <el-col :span="6">
                <el-button type="primary" @click="sendSyncIpcRenderer">GUI进程=>>主进程发送消息(同步)</el-button>
            </el-col>
            <el-col :span="6">
                <el-button type="primary" @click="sendAsyncIpcRenderer">GUI进程向主进程发送消息(异步)</el-button>
            </el-col>
            <el-col :span="6">
                <el-button @click="upprovide">inject修改通知provide数据->{{INFO.asideW}}</el-button>
            </el-col>
        </el-row>

    </div>
</template>

<script type="text/ecmascript-6">
    const { ipcRenderer } = require('electron');
    export default {
        props: {},
        computed: {},
        name: 'process-communication',
        data () {
            return {
                count: 0
            };
        },
        inject: ['INFO'],
        created () {
        },
        methods: {
            sendAsyncIpcRenderer(){
                // 将信息发送到 主进程 , 并接收返回值
                ipcRenderer.send('asynchronous-message', this.count++);
//                console.log(ipcRenderer.send('asynchronous-message', this.count++));
            },
            sendSyncIpcRenderer(){
                // 将信息发送到 主进程 , 并接收返回值
                console.log(ipcRenderer.sendSync('synchronous-message', 'ping'));
            },
            upprovide(){
                // 这里修改之后不会改变 App.vue 的值 (子组件)
                this.INFO.asideW = '200px';
            }
        },
        mounted () {
            ipcRenderer.on('asynchronous-reply', function(event, arg) {
                console.log(arg, '接收来自主进程的数据'); // prints "pong"
            });

            ipcRenderer.on('to-gui', (event, files) => {
                console.log(files, '接受主进程主动发送的信息');
            });
        },
        components: {},
        destroy () {
        }
    };
</script>

<style scoped type="text/css">
    #process-communication {
    }
</style>