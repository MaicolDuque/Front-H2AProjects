import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import App from './App.vue'
import axios from 'axios';

import router from './routes'
import VueAxios from 'vue-axios'

import HTTP from './services/config.js'
import { TokenService } from './services/storage.service'
import ApiService from './services/api.service'



// Set the base URL of the API
ApiService.init("http://127.0.0.1:8000/")


// If token exists set header
if (TokenService.getToken()) {
    ApiService.setHeader()
        // axios.defaults.headers.common["Authorization"] = `Bearer ${TokenService.getToken()}`
}
ApiService.mount401Interceptor();

Vue.use(VueAxios, HTTP)

new Vue({
    el: '#app',
    render: h => h(App),
    store,
    router
})