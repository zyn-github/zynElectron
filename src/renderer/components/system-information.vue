<template>
    <div>
        <div class="title">当前运行系统信息</div>
        <div class="items">
            <div class="item">
                <div class="name">Path:</div>
                <div class="value">{{ systemInfo.path }}</div>
            </div>
            <div class="item">
                <div class="name">Route Name:</div>
                <div class="value">{{ systemInfo.name }}</div>
            </div>
            <div class="item">
                <div class="name">Vue.js:</div>
                <div class="value">{{ systemInfo.vue }}</div>
            </div>
            <div class="item">
                <div class="name">Electron:</div>
                <div class="value">{{ electron }}</div>
            </div>

            <div class="item">
                <div class="name">Chromium:</div>
                <div class="value">{{ Chromium }}</div>
            </div>

            <div class="item">
                <div class="name">JavaScript源代码路径:</div>
                <div class="value">{{ resourcesPath }}</div>
            </div>

            <div class="item">
                <div class="name">Node:</div>
                <div class="value">{{ node }}</div>
            </div>
            <div class="item">
                <div class="name">Platform:</div>
                <div class="value">{{ platform }}</div>
            </div>
            <div class="item">
                <div class="name">网络状态:</div>
                <div class="value">{{ INFO.online }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                electron: process.versions.electron,
                Chromium: process.versions.chrome,
                resourcesPath: process.resourcesPath,
                name: null,
                node: process.versions.node,
                path: this.$route.path,
                platform: require('os').platform(),
                vue: require('vue/package.json').version
            }
        },
        inject: ['INFO'],
        created () {
            this.name = this.$route.name;
            console.log(process.versions)
        },
    }
</script>

<style scoped>
    .title {
        color: #888888;
        font-size: 18px;
        font-weight: initial;
        letter-spacing: .25px;
        margin-top: 10px;
    }

    .items {
        margin-top: 8px;
    }

    .item {
        display: flex;
        margin-bottom: 6px;
    }

    .item .name {
        color: #6a6a6a;
        margin-right: 6px;
    }

    .item .value {
        color: #35495e;
        font-weight: bold;
    }
</style>
