<template>

    <header class="main-header">

            <!-- Logo -->
            <a href="index.html" class="logo">
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
                                        {{currentUser.name}} - Web Developer
                                        <small>Member since Nov. 2012</small>
                                    </p>
                                </li>
                                <!-- Menu Body -->
                                <li class="user-body">
                                    <div class="row">
                                        <div class="col-xs-4 text-center">
                                            <a href="#">Followers</a>
                                        </div>
                                        <div class="col-xs-4 text-center">
                                            <a href="#">Sales</a>
                                        </div>
                                        <div class="col-xs-4 text-center">
                                            <a href="#">Friends</a>
                                        </div>
                                    </div>
                                    <!-- /.row -->
                                </li>
                                <!-- Menu Footer-->
                                <li class="user-footer">
                                    <div class="pull-left">
                                        <a href="#" class="btn btn-default btn-flat">Profile</a>
                                    </div>
                                    <div class="pull-right">
                                        <button @click="loginFailed" class="btn btn-default btn-flat">Sign out</button>
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
           nameUser: ''
        }
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
        }
    },

    mounted: function () {
       //this.currentUser()
    }

}
</script>
