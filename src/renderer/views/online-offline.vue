<template>
    <div id="page2">page2</div>
</template>

<script type="text/ecmascript-6">
    const { ipcRenderer } = require('electron');
    export default {
        props: {},
        computed: {},
        name: 'page2',
        data () {
            return {};
        },
        created () {
        },
        methods: {
            updateOnlineStatus(){
                ipcRenderer.sendSync('online-status-changed', navigator.onLine ? 'online' : 'offline');
            }
        },
        mounted(){
            this.updateOnlineStatus();
            window.addEventListener('online', this.updateOnlineStatus);
            window.addEventListener('offline', this.updateOnlineStatus);
        },
        components: {},
        destroy () {
        }
    };
</script>

<style type="text/css">
    #page2 {
    }
</style>