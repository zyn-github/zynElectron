<template>
    <div id="aside-menu">
        <el-menu :default-openeds="menus.defaultOpeneds">
            <el-submenu :index="s_index + 1 + ''" v-for="(supItem, s_index) in menus.menus">
                <template slot="title"><i :class="supItem.icon"></i>{{supItem.text}}</template>
                <el-menu-item-group>
                    <router-link v-for="(subItem, index) in supItem.submenus" :to="subItem.link" tag="span">
                        <el-menu-item index="(s_index + 1) + '-' + (index + 1)">{{subItem.text}}
                        </el-menu-item>
                    </router-link>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script type="text/ecmascript-6">
    import Menus from '@/config/menu';
    export default {
        props: {},
        computed: {},
        name: 'aside-menu',
        data () {
            return {
                menus: Menus
            };
        },
        created () {
        },
        methods: {},
        mounted () {
        },
        components: {},
        destroy () {
        }
    };
</script>

<style type="text/css">
    #aside-menu {
    }
</style>