import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import mixin from '@mixin';
import ElementUI from 'element-ui';
Vue.use(ElementUI);
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;
Vue.mixin(mixin);
import './assets/element-1F9B83/index.css';
/* eslint-disable no-new */

import db from '../datastore';
Vue.prototype.$db = db;
new Vue({
    components: { App },
    router,
    store,
    template: '<App/>'
}).$mount('#app');
