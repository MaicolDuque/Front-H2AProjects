import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import App from './App.vue'

import router from './routes'
import VueAxios from 'vue-axios'

import HTTP from './services/config.js'

Vue.use(VueAxios, HTTP)

new Vue({
    el: '#app',
    render: h => h(App),
    store,
    router
})