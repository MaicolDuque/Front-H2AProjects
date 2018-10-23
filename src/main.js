import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import App from './App.vue'

import router from './routes'
import VueAxios from 'vue-axios'

import { http } from './services/config.js'

Vue.use(VueAxios, http)

new Vue({
    el: '#app',
    render: h => h(App),
    store,
    router
})