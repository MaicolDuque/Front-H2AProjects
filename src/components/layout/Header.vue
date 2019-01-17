<template>

    <header class="main-header">

            <!-- Logo -->
            <a href="/" class="logo">
                <!-- mini logo for sidebar mini 50x50 pixels -->
                <span class="logo-mini"><b></b>H2A</span>
                <!-- logo for regular state and mobile devices -->
                <span class="logo-lg"><img src="/src/assets/img/logo-h2a.png" style="margin-top: 3%;" alt="H2A PROJECTS"></span>
            </a>

            <!-- Header Navbar: style can be found in header.less -->
            <nav class="navbar navbar-static-top">
                <!-- Sidebar toggle button-->
                <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
                    <span class="sr-only">Toggle navigation</span>
                </a>
                <!-- Navbar Right Menu -->
                <div class="navbar-custom-menu">
                    <ul class="nav navbar-nav">
                                            
                        <!-- User Account: style can be found in dropdown.less -->
                        <li class="dropdown user user-menu">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                <img :src="'http://127.0.0.1:8000/uploads/'+currentUser.picture" class="user-image" alt="User Image">
                                <span class="hidden-xs">{{currentUser.name}}</span>
                            </a>
                            <ul class="dropdown-menu">
                                <!-- User image -->
                                <li class="user-header">
                                    <img :src="'http://127.0.0.1:8000/uploads/'+currentUser.picture" class="img-circle" alt="User Image">

                                    <p>
                                        {{currentUser.name}}  <br>  
                                        <small v-if="occupationUser">- {{occupationUser[0].name}} -</small>                                    
                                    </p>
                                </li>
                                
                                <!-- Menu Footer-->
                                <li class="user-footer">
                                    <!-- <div class="pull-left">
                                        <a href="#" class="btn btn-default btn-flat">Mi Perfil</a>
                                    </div> -->
                                    <div class="pull-right">
                                        <button @click="loginFailed" class="btn btn-default btn-flat">Cerrar sesión</button>
                                    </div>
                                </li>
                            </ul>
                        </li>


                    </ul>
                </div>

            </nav>
        </header>
</template>

<script>
import ApiService from '../../services/api.service'
import { TokenService } from '../../services/storage.service'
export default {
    data () {
        return {
           nameUser: '',
           occupations: {},
           occupationUser: ''
        }
    },

    created(){
         this.$store.dispatch('returnOccupations')
            .then( res => {
                this.occupations = this.$store.state.allOccupations
                this.occupationUser = this.occupations.filter(occupation => occupation.id == this.currentUser.occupation_id)
            } )
    },
    methods: {
        loginFailed () {
           
            this.error = 'Login failed!'
            this.$store.commit('setAthenticate', false)
            this.$store.commit('MUTATION_allUsers', {})
            TokenService.removeToken()
            TokenService.removeRefreshToken()
            // NOTE: Again, we'll cover the 401 Interceptor a bit later. 
            ApiService.unmount401Interceptor()
            this.$router.push('/')
        }
    },

    computed: {
        currentUser() {               
            return this.$store.state.user
        },

        // occupationUser(){
        //     return this.occupations.filter(occupation => occupation.id == this.currentUser.occupation_id)
        // }
    },

    mounted: function () {
       //this.currentUser()
    }

}
</script>
