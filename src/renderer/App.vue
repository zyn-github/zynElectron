<template>
    <div id="app">
        <el-container>
            <el-header class="app-header">
                当前客户端网络连接状态: {{online ? online : '---'}}
            </el-header>
            <el-header class="app-header">
                <el-button>electron-xdf</el-button>
                <el-button @click="upprovide">provide派送数据-> {{asideW}}</el-button>
                <el-button>当前路径-> {{visitInfo}}</el-button>
            </el-header>
            <el-container>
                <el-aside :width="asideW">
                    <aside-menu></aside-menu>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import AsideMenu from './components/aside-menu';
    const { ipcRenderer } = require('electron');
    import { mapState } from 'vuex';
    export default {
        name: 'electron-xdf',
        data () {
            return {
                asideW: '200px',
                _path: null,
                online: null,
            };
        },
        computed: {
            ...mapState({
                visitInfo: state => state.Counter.visitInfo,
            })
        },
        created () {
            this._path = this.$route.path;
        },
        provide() {
            return {
                INFO: this
            };
        },
        methods: {
            upprovide(){
                this.asideW = '300px';
            },
            updateOnlineStatus(){
                const state = navigator.onLine ? 'online' : 'offline';
                this.online = state;
                ipcRenderer.sendSync('online-status-changed', state);
            }
        },
        mounted(){
            this.updateOnlineStatus();
            window.addEventListener('online', this.updateOnlineStatus);
            window.addEventListener('offline', this.updateOnlineStatus);
        },
        components: { AsideMenu }
    }
</script>

<style type="text/css">
    @import url('./assets/stylesheet/common.css');

    .app-header {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #1f9b83;
    }
</style>
