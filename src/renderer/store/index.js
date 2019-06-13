import Vue from 'vue'
import Vuex from 'vuex'
/**
 * @link https://segmentfault.com/a/1190000018038529?utm_source=tag-newest
 */
import { createPersistedState, createSharedMutations } from 'vuex-electron'

import modules from './modules'

Vue.use(Vuex)
console.log(modules, 'modules')
export default new Vuex.Store({
  modules,
  plugins: [
    createPersistedState(),
    //createSharedMutations()
  ],
  strict: process.env.NODE_ENV !== 'production'
})
