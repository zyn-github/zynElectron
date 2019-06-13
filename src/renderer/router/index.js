import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: '/',
            component: require('@views/process-communication').default
        },
        {
            path: '/popup-alert',
            name: 'popup-alert',
            components: require('@views/popup-alert')
        },
        {
            path: '/print-page',
            name: 'print-page',
            components: require('@views/print-page')
        },
        {
            path: '/process-communication',
            name: 'process-communication',
            components: require('@views/process-communication')
        },
        {
            path: '/system-setting',
            name: 'system-setting',
            components: require('@views/system-setting')
        },
        {
            path: '/window-setting',
            name: 'window-setting',
            components: require('@views/window-setting')
        },
        {
            path: '/menu-view',
            name: 'menu-view',
            components: require('@views/menu-view')
        },
        {
            path: '/shell',
            name: 'shell',
            components: require('@views/shell')
        },
        {
            path: '/online-offline',
            name: 'online-offline',
            components: require('@views/online-offline')
        },
        {
            path: '/lowdb',
            name: 'lowdb',
            components: require('@views/lowdb')
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
});

router.beforeEach((to, from, next) => {
    let store = router.app.$options.store;
    if(window.$mvvm && window.$mvvm.$route) {
        store.commit('STE_VISIT_INFO', window.$mvvm.$route.path);
    }
    next();
});
export default router;