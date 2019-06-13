<template>
    <div id="print-page">
        <el-row>
            <el-col :span="12">
                <el-card class="box-card">
                    <div slot="header" class="clearfix"><span>electron打印</span></div>
                    <div class="text item">1.直接调用打印机打印</div>
                    <div class="text item">2.打印到pdf</div>
                </el-card>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple-light">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix"><span>当前支持打印机列表</span></div>
                        <div class="text item" v-for="({name,description}, index) in printList" :key="index">
                            <p>{{index + 1}}、 名称：{{name}}</p>
                        </div>
                    </el-card>
                </div>
            </el-col>
        </el-row>

        <el-button @click="print">print</el-button>
        <div style="display: none">
            <webview ref="printWebview" :src="printPath" nodeintegration/>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    const { ipcRenderer } = require('electron');
    const path = require('path');
    export default {
        props: {},
        computed: {},
        name: 'print-page',
        data () {
            return {
                printList: [],
                printPath: 'file://'+ path.resolve(path.join('static/print', 'print.html'))
            };
        },
        created () {
            //渲染线程主动发送getPrinterList事件到主线程请求打印机列表
            ipcRenderer.send('getPrinterList');
        },
        methods: {
            getPrintList(){
                const that = this;
                ipcRenderer.once('getPrinterList', (event, data) => {
                    //data就是打印机列表
                    that.printList = data;
                    console.log(data)
                });

            },
            print(){
                ipcRenderer.send('webview-print-render');
            }
        },
        mounted () {
            this.getPrintList();
            //当vue节点渲染完成后，获取<webview>节点
            const webview = this.$refs.printWebview;
            //监听<webview>里面的消息，也就是监听print.html里面的ipcRenderer.sendToHost发送的事件，当该事件发送成功后就会进入下面的回调事件中执行打印操作。
            webview.addEventListener('ipc-message', (event) => {
                if (event.channel === 'webview-print-do') {
                    //如果收到<webview>传过来的事件，名为"webview-print-do"，就执行 webview.print打印方法，打印<webview>里面的内容。
                    webview.print(
                        {
                            //是否是静默打印
                            silent: true,
                            printBackground: true,
                            //打印机的名称，就是本文一开始获得的打印机列表其中一个
                            deviceName: 'xxx',
                        },
                        (data) => {
                            //这个回调是打印后的回调事件，data为true就是打印成功，为false就打印失败
                            console.log('webview success', data);
                        },
                    );
                }
            });

        },
        components: {},
        destroy () {
        }
    };
</script>

<style scoped type="text/css">
    #print-page {
    }
</style>