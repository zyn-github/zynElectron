<template>
    <div id="lowdb">
        <el-header class="lowdb-header">
            lowdb 数据存储
        </el-header>
        <el-container>
            <p>是用JSON为基本存储结构基于lodash开发的，参考链接：https://www.npmjs.com/package/lowdb</p>
        </el-container>
        <el-row :gutter="20">
            <el-col :span="12">
                <div class="grid-content bg-purple">
                    <el-button @click="postsWrite">进行数据存储(posts=> [])</el-button>
                    <el-button @click="postsRead">进行数据读取(posts=> [])</el-button>
                    <el-button @click="postsRemove">进行数据删除(posts=> [])</el-button>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple">
                    <ul class="infinite-list" v-infinite-scroll="load">
                        <li v-for="i in postsLis" class="infinite-list-item">{{ i }}</li>
                    </ul>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: {},
        computed: {},
        name: 'lowdb',
        data () {
            return {
                id: 1,
                postsLis: []
            };
        },
        created () {
            console.log(this.$db);
        },
        methods: {
            postsWrite(){
                this.$db.get('posts')
                    .push({
                        id: this.id++,
                        title: 'lowdb is awesome' + (
                            this.id++
                        )
                    })
                    .write()
            },
            postsRead(){
                this.postsLis = this.$db.read().get('posts')
                    .value()
            },
            postsRemove(){
                this.postsLis = this.$db.read().get('posts')
                    .remove()
                    .write()
            },
            load(){
            }
        },
        mounted () {
            this.$nextTick(_=> {
                this.postsRead();
            })
        },
        components: {},
        destroy () {
        }
    };
</script>

<style scoped type="text/css">
    #lowdb .lowdb-header {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>