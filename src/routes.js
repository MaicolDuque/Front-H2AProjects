import Search from './components/Search.vue'
import Usuarios from './components/Usuarios.vue'
import Grupos from './components/Grupos.vue'

const routes = [
    { path: '/', component: Search, name: 'home' },
    { path: '/usuarios', component: Usuarios, name: 'usuarios' },
    { path: '/grupos', component: Grupos, name: 'grupos' }
]

export default routes