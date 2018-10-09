import Search from './components/Search.vue'
import Usuarios from './components/Usuarios.vue'
import Grupos from './components/Grupos.vue'
import Tareas from './components/Tareas.vue'
import Proyectos from './components/Proyectos.vue'

const routes = [
    { path: '/', component: Search, name: 'home' },
    { path: '/usuarios', component: Usuarios, name: 'usuarios' },
    { path: '/grupos', component: Grupos, name: 'grupos' },
    { path: '/tareas/:id', component: Tareas, name: 'mis-taraes' },
    { path: '/proyecto/:id', component: Proyectos, name: 'proyectos' }
]

export default routes