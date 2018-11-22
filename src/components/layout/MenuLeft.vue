<template>
    <aside class="main-sidebar" style="margin-top: 2%;">
            <!-- sidebar: style can be found in sidebar.less -->
            <section class="sidebar">
                
                <ul class="sidebar-menu" data-widget="tree">
                    <li class="header">MENÚ DE NAEGACIÓN</li>
                    <!-- <li class="active"><a href="index.html"><i class="fa fa-dashboard"></i>Inicio</a></li> -->
                    <router-link to="/" tag="li"> <a><i class="fa fa-dashboard"></i>Inicio</a> </router-link>
                    <router-link :to="{name: 'usuarios'}" tag="li"><a><i class="fa fa-users"></i>Usuarios</a></router-link> 
                    <router-link :to="{name: 'grupos'}" tag="li"><a><i class="fa fa-group"></i>Grupos</a></router-link>   
                    <router-link :to="{name: 'mis-taraes', params: {id: idTareas}}" tag="li"><a><i class="fa fa-tasks"></i>Mis tareas</a></router-link>                                                            
                    <li  class="header">PROYECTOS</li>                    
                    <!-- <router-link :to="{name: 'proyectos', params: {id: 1}}" tag="li"><a><i class="fa fa-circle-o text-red"></i>Proyecto 1</a></router-link>                                                             -->
                    <router-link v-for="project in projects"  :key="project.id"  :to="{name: 'proyectos', params: {id: project.id}}" tag="li" ><a ><i  :class="project.color.value"></i> {{project.name}}</a></router-link>                                                            
                    
                    <!-- <router-link :to="{name: 'proyectos'}" tag="li"><a><i class="fa fa-circle-o text-red"></i>Proyecto 11</a></router-link>                                                            
                    <li><a href="#"><i class="fa fa-circle-o text-yellow"></i> <span>Proyecto 2</span></a></li>
                    <li><a href="#"><i class="fa fa-circle-o text-aqua"></i> <span>Proyecto 3</span></a></li> -->
                 
                </ul>
            </section>
            <!-- /.sidebar -->
        </aside>
</template>


<script>
 export default {  
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            projects: {}
        }
    },
    created(){
        this.$store.dispatch('returnProjects')
            .then((res) => this.setearProjects())
    },
    methods: {
        cambiarEstado(){
                alert("sias")
            },
        setearProjects(){
            this.projects = this.$store.state.allProjects
        }
    },
     computed: {
        idTareas () {            
            return  this.$store.state.user.id
        }
    },
 }
</script>