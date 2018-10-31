import Vue from 'vue'
import VueRouter from 'vue-router'

import Search from './components/Search.vue'
import Usuarios from './components/Usuarios.vue'
import Grupos from './components/Grupos.vue'
import Tareas from './components/Tareas.vue'
import TareasDetalle from './components/TareasDetalle.vue'
import Proyectos from './components/Proyectos.vue'
import Login from './components/Login.vue'

const routes = [
    { path: '/', component: Search, name: 'home' },
    { path: '/usuarios', component: Usuarios, name: 'usuarios' },
    { path: '/grupos', component: Grupos, name: 'grupos' },
    { path: '/tareas/:id', component: Tareas, name: 'mis-taraes' },
    { path: '/tareas/:id/detalles', component: TareasDetalle, name: 'detalles-tarea', props: true },
    { path: '/proyecto/:id', component: Proyectos, name: 'proyectos' },
    { path: '/login', component: Login, name: 'login', meta: { isPublic: true } }
]


Vue.use(VueRouter)

const router = new VueRouter({
    routes,
    linkExactActiveClass: "active",
    mode: 'history'
})

const isAuthenticated = function() {
    return localStorage.token
}

router.beforeEach((to, from, next) => {
    if (!to.meta.isPublic && !isAuthenticated()) {
        return next({ name: 'login' })
    }

    if (to.name === 'login' && isAuthenticated()) {
        return next({ name: 'home' })
    }

    return next()
})


export default router