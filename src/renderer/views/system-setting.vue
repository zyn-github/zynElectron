<template>
    <div id="system-setting">
        <system-information></system-information>
        <el-button type="primary" @click="zoomBig">页面放大</el-button>
        <el-button type="primary" @click="zoomSmall">页面缩小</el-button>
    </div>
</template>

<script type="text/ecmascript-6">
    import SystemInformation from '@/components/system-information';
    var webFrame = require('electron').webFrame;
    export default {
        props: {},
        computed: {},
        name: 'system-setting',
        data () {
            return {
                num: 1
            };
        },
        created () {
            console.log(this.$electron.remote)
        },
        methods: {
            zoomBig(){
                webFrame.setZoomFactor(this.num += 0.1);
            },
            zoomSmall(){
                webFrame.setZoomFactor(this.num -= 0.1);
            }
        },
        mounted () {
        },
        components: { SystemInformation },
        destroy () {
        }
    };
</script>

<style scoped type="text/css">
    #system-setting {
    }
</style>