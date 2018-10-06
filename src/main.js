import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
    routes,
    linkExactActiveClass: "active",
    mode: 'history'
})
new Vue({
    el: '#app',
    render: h => h(App),
    router
})