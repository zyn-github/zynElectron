/**
 * Created by zyn on 2019/6/5.
 */

export default {
    computed: {},
    data() {
        return {
            systemInfo: {
                electron: process.versions.electron,
                node: process.versions.node,
                platform: require('os').platform(),
                vue: require('vue/package.json').version
            }
        };
    },
    created() {
    },
    methods: {},
    mounted() {
    },
    components: {},
    destroy() {
    }
};
