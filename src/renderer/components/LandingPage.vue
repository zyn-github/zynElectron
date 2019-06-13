<template>
    <div id="wrapper">
        <!--<img id="logo" src="~@/assets/logo.png" alt="electron-vue">-->

        <main>
            <div class="left-side">
                <span class="title">xdfElectron</span>
                <button @click="openURL">调用主进程的模块方法</button>
                <button @click="openDialog">使用dialog模块打开弹窗</button>
                <button @click="sendSyncIpcRenderer">GUI进程向主进程发送消息(同步)</button>
                <button @click="sendAsyncIpcRenderer">GUI进程向主进程发送消息(异步)</button>
                <!--<system-information></system-information>-->
            </div>

            <div class="right-side">
                <div class="doc">
                    <div class="title">Getting Started</div>
                    <p>
                        electron-vue comes packed with detailed documentation that covers everything from
                        internal configurations, using the project structure, building your application,
                        and so much more.
                    </p>
                    <button @click="open('http://tfs.staff.xdf.cn/tfs/NIS/H5/_git/xdfElectron')">git仓库地址</button>
                    <br><br>
                </div>
                <div class="doc">
                    <div class="title alt">Other Documentation</div>
                    <button class="alt" @click="open('https://simulatedgreg.gitbooks.io/electron-vue/content/cn/')">
                        Electron vue
                    </button>
                    <button class="alt" @click="open('http://electronjs.org/docs')">Electron</button>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
//    import SystemInformation from './LandingPage/SystemInformation'
//    const {ipcRenderer} = require('electron');
    export default {
        name: 'landing-page',
//        components: { SystemInformation },
        data () {
            return {
                count: 0
            }
        },
        methods: {
            open (link) {
//                this.$electron.shell.openExternal(link)
            },
            openURL () {
                // 调用主进程中的 node模块的功能
//                this.$electron.remote.shell.openExternal('https://github.com/Molunerfinn/PicGo')
            },
            openDialog () {
                /**
                 * showCertificateTrustDialog
                 * showErrorBox
                 * showMessageBox
                 * showOpenDialog
                 * showSaveDialog
                 */
//                this.$electron.remote.dialog.showMessageBox({
//                    title: 'xdf',
//                    message: 'xdf-info',
//                    detail: `Version: ${ require('vue/package.json').version}\n`
//                });
            },
            sendAsyncIpcRenderer(){
//                ipcRenderer.send('asynchronous-message', this.count++)
            },
            sendSyncIpcRenderer(){
//                ipcRenderer.send('synchronous-message', 'ping')
            }
        },
        mounted(){
//            ipcRenderer.on('asynchronous-reply', (event, arg) => {
//                console.log(arg, 'GUI 进程') // prints "pong"
//            });
//
//            ipcRenderer.on('to-gui', (event, files) => {
//                console.log(files, '接受主进程主动发送的信息');
//            });
        }
    }
</script>

<style type="text/css">
    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Source Sans Pro', sans-serif;
    }

    #wrapper {
        background: radial-gradient(
                ellipse at top left,
                rgba(255, 255, 255, 1) 40%,
                rgba(229, 229, 229, .9) 100%
        );
        height: 100vh;
        padding: 60px 80px;
        width: 100vw;
    }

    #logo {
        height: auto;
        margin-bottom: 20px;
        width: 420px;
    }

    main {
        display: flex;
        justify-content: space-between;
    }

    main > div {
        flex-basis: 50%;
    }

    .left-side {
        display: flex;
        flex-direction: column;
        margin-right: 20px;
    }

    .title {
        color: #2c3e50;
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 6px;
    }

    .left-side button {
        margin-bottom: 10px;
    }

    .title.alt {
        font-size: 18px;
        margin-bottom: 10px;
    }

    .doc p {
        color: black;
        margin-bottom: 10px;
    }
</style>
