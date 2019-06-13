<template>
    <div id="Popup-alert">


        <el-container>
            <el-header class="flex-centr">点击打开弹窗</el-header>
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-button type="primary" @click="showMessageBox">showMessageBox</el-button>
                </el-col>
                <el-col :span="6">
                    <el-button type="primary" @click="showOpenDialog">showOpenDialog</el-button>
                </el-col>
                <el-col :span="6">
                    <el-button type="primary" @click="showSaveDialog">showSaveDialog</el-button>
                </el-col>
                <el-col :span="6">
                    <el-button type="primary" @click="showErrorBox">showErrorBox</el-button>
                </el-col>
            </el-row>
        </el-container>
        <el-container>
            <el-header class="flex-centr">快捷键打开弹窗</el-header>
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-button type="primary">Command+K</el-button>
                </el-col>
                <el-col :span="6">
                    <el-button type="primary">Command+X</el-button>
                </el-col>
                <el-col :span="6">
                    <el-button type="primary">showSaveDialog</el-button>
                </el-col>
                <el-col :span="6">
                    <el-button type="primary">showErrorBox</el-button>
                </el-col>
            </el-row>
        </el-container>
    </div>
</template>

<script type="text/ecmascript-6">
    const { ipcRenderer } = require('electron');
    export default {
        props: {},
        computed: {},
        name: 'Popup-alert',
        data () {
            return {};
        },
        created () {
        },
        methods: {
            showMessageBox () {
                /**
                 * showCertificateTrust
                 * showErrorBox
                 * showMessageBox
                 * showOpenDialog
                 * showSaveDialog
                 */
                this.$electron.remote.dialog.showMessageBox({
                    title: 'xdf',
                    message: 'xdf-info',
                    detail: `Version: ${ require('vue/package.json').version}\n`
                });
            },
            showOpenDialog() {
                this.$electron.remote.dialog.showOpenDialog({ properties: ['openFile', 'openDirectory', 'multiSelections'] });
            },
            showSaveDialog() {
                this.$electron.remote.dialog.showSaveDialog({
                    title: 'showSaveDialog',
                    defaultPath: __dirname, // 文件保存的路径
                    filters: [{ name: 'Images', extensions: ['jpg', 'png', 'gif'] }]
                });
            },
            showErrorBox(){
                this.$electron.remote.dialog.showErrorBox('showErrorBox', '展示错误消息');
            }
        },
        mounted () {
            let that = this;
            ipcRenderer.on('globalShortcut', function (event, arg) {
                switch (arg) {
                    case 'P':
                        that.showOpenDialog();
                        break;
                    case 'K':
                        that.showMessageBox();
                        break;
                }
            });
        },
        components: {},
        destroy () {
        }
    };
</script>

<style scoped type="text/css">
    #Popup-alert .flex-centr {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>