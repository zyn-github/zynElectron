<template>
    <div id="shell">
        <el-row :gutter="20" class="history-flex">
            <el-col :span="6">
                <el-button type="primary" @click="openURL">调用主进程shell的模块方法跳转链接</el-button>
            </el-col>
            <el-col :span="6">
                <el-button type="primary" @click="showItemInFolder">打开文件所在文件夹,一般情况下还会选中它.</el-button>
            </el-col>
        </el-row>

        <el-row :gutter="20" class="history-flex">
            <el-col :span="6">
                <el-button type="primary" @click="moveItemToTrash">删除指定路径文件,并返回此操作的状态值(boolean类型).</el-button>
            </el-col>
            <el-col :span="6">
                <el-button type="primary" @click="beep">播放 beep 声音.</el-button>
            </el-col>
        </el-row>

        <el-row :gutter="20" class="history-flex">
            <el-col :span="6">
                <el-button type="primary" @click="openItem">以默认打开方式打开文件</el-button>
            </el-col>
            <el-col :span="6">
                <el-button type="primary" @click="other">添加用于测试删除的文件</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script type="text/ecmascript-6">
    const path = require('path');
    const fs = require('fs');
    export default {
        props: {},
        computed: {},
        name: 'shell',
        data () {
            return {};
        },
        created () {
            console.log(this.$electron.remote)
        },
        methods: {
            openURL () {
                // 调用主进程中的 node模块的功能
                this.$electron.remote.shell.openExternal('https://github.com/Molunerfinn/PicGo')
            },
            showItemInFolder(){
                const folder = path.join(process.cwd(), 'static');
                this.$electron.remote.shell.showItemInFolder(folder);
            },
            openItem(){
                const file = path.join(process.cwd(), 'static', 'menubar.png');
                this.$electron.remote.shell.openItem(file);
            },
            moveItemToTrash(){
                const delfile = path.join(process.cwd(), 'static/testFiles', 'need.html');
                const state = this.$electron.remote.shell.moveItemToTrash(delfile);
                this.$electron.remote.dialog.showMessageBox({
                    icon: path.join(process.cwd(), 'static', 'WechatIMG77.png'),
                    title: 'shell模块',
                    message: `${state ? '成功' : '失败'}`,
                    detail: `删除文件: ${delfile}\n`
                });
            },
            beep(){
                this.$electron.remote.shell.beep();
            },
            other(){
                this.writedelFile('static/testFiles', 'need.html', '动态写入文件');
            },
            writedelFile: function (dirname, filename, font) {
                const tragtDir = path.resolve(dirname); // 绝对地址
                try {
                    fs.writeFileSync(path.join(tragtDir, filename), font, 'utf8'); // 使用同步方式创建目录
                    this.$electron.remote.dialog.showMessageBox({
                        icon: path.join(process.cwd(), 'static', 'WechatIMG77.png'),
                        title: 'shell模块',
                        message: `${'成功'}`,
                        detail: `创建文件: ${path.join(tragtDir, filename)}，成功 \n`
                    });
                }
                catch (e) {
                    this.$electron.remote.dialog.showMessageBox({
                        icon: path.join(process.cwd(), 'static', 'WechatIMG77.png'),
                        title: 'shell模块',
                        message: `${'失败'}`,
                        detail: `创建文件失败: ${path.join(tragtDir, filename)}，检查文件路径 \n`
                    });
                }
            }
        },
        mounted () {
        },
        components: {},
        destroy () {
        }
    };
</script>

<style type="text/css">
    #shell .history-flex {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    }
</style>