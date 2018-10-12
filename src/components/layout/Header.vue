<template>

    <header class="main-header">

            <!-- Logo -->
            <a href="index.html" class="logo">
                <!-- mini logo for sidebar mini 50x50 pixels -->
                <span class="logo-mini"><b></b>H2A</span>
                <!-- logo for regular state and mobile devices -->
                <span class="logo-lg"><img src="src/assets/img/logo-h2a.png" style="margin-top: 3%;" alt="H2A PROJECTS"></span>
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
                                <img src="src/assets/img/user2-160x160.jpg" class="user-image" alt="User Image">
                                <span class="hidden-xs">{{userName}}</span>
                            </a>
                            <ul class="dropdown-menu">
                                <!-- User image -->
                                <li class="user-header">
                                    <img src="src/assets/img/user2-160x160.jpg" class="img-circle" alt="User Image">

                                    <p>
                                        {{userName}} - Web Developer
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
export default {
    data () {
        return {
           // userName: ''
        }
    },
    methods: {
        loginFailed () {
           
            this.error = 'Login failed!'
            this.$store.commit('setAthenticate', false)
            delete localStorage.token
            this.$router.push('/')
        }
    },

    computed: {
        userName() {
            return this.$store.state.user.name
        }
    },

    mounted: function () {
       this.userName()
    }

}
</script>
