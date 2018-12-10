<template>
    <div>
    
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
                    <li  class="header">PROYECTOS <i class="fa fa-plus" style="color:#fff;float: right;cursor: pointer; " title="Agregar proyecto"></i></li>                    
                    <!-- <router-link :to="{name: 'proyectos', params: {id: 1}}" tag="li"><a><i class="fa fa-circle-o text-red"></i>Proyecto 1</a></router-link>                                                             -->
                    <router-link v-for="project in projects"  :key="project.id"  :to="{name: 'proyectos', params: {id: project.id}}" tag="li" >
                        <a ><i  :class="project.color.value"></i> {{project.name}}</a>
                        <i class="fa fa-pencil-square-o editarProyecto" ref="editProject" title="Editar proyecto" data-toggle="modal" data-target="#addUser" @click="editProject(project.id)"></i>                    
                    </router-link>                                                            
                    
                    <!-- <router-link :to="{name: 'proyectos'}" tag="li"><a><i class="fa fa-circle-o text-red"></i>Proyecto 11</a></router-link>                                                            
                    <li><a href="#"><i class="fa fa-circle-o text-yellow"></i> <span>Proyecto 2</span></a></li>
                    <li><a href="#"><i class="fa fa-circle-o text-aqua"></i> <span>Proyecto 3</span></a></li> -->
                 
                </ul>
            </section>
            <!-- /.sidebar -->
        </aside>

        <div class="modal fade" id="addUser">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" ref="closeModal" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title">{{textProject}}</h4>
                    </div>                    
                    <div class="modal-body">
                        <form @submit.prevent="updateAddProject">
                            <div class="form-group">
                                <label for="name">Nombre: </label>
                                <input type="text" class="form-control" id="name" v-model="currentProject.name" placeholder="Nombre completo">
                            </div>

                            <div class="form-group">
                                <label for="description">Descripción: </label>
                                <textarea name="description" class="form-control" id="description" cols="10" rows="3" v-model="currentProject.description"> 
                                </textarea>                                
                            </div>

                            <div class="form-group">
                                
                                <label for="name">Grupos: </label>
                                <div style="width:100%;" v-for="group in groups" :key="group.id" >
                                    <input type="checkbox" v-model="groupsChecked"  name="group" class="flat-red" :value="group.id" >
                                    <!-- <input type="checkbox" v-else name="group" class="flat-red" :value="group.id" > -->
                                        {{group.name}}                                        
                                </div>                                                               
                            </div>
                            <div class="form-group">
                                    <label for="password">Color:</label>
                                    <select class="form-control" name="group"  id="group"  v-model="currentProject.color.id" >
                                        <option v-for="color in colors" name="color" :key="color.id" :value="color.id">
                                            {{color.description}}
                                        </option>                                        
                                    </select>
                            </div>
                            
                            <div class="box-footer">
                                <button type="submit" class="btn btn-primary">{{this.textButton}}</button>
                            </div>
                        </form>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
        <!-- /.modal -->


    </div>
</template>


<script>
import UsuariosAgregarEditar from "../UsuariosAgregarEditar.vue"
 export default {  
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            // projects: {},
            idProject: 0,
            textProject: '',
            textButton: '',
            currentProject: {
                name: '',
                color:{
                    id: 0
                }
            },
            groups: {},
            groupsChecked: {},
            colors: {}
        }
    },
    created(){
        this.$store.dispatch('returnProjects')
            .then((res) => console.log())

        this.$store.dispatch('returnGroups')
            .then((res) => this.groups = this.$store.state.allGroups)

        this.$store.dispatch('returnColorProjects')
            .then((res) => this.colors = this.$store.state.allColorsProject)
    },
    methods: {       
        setearProjects(){
            // this.projects = this.$store.state.allProjects
        },
        

        editProject(id){
            this.textProject = 'Editar Proyecto';
            this.textButton = 'Actualizar';
            this.idProject = id
            this.currentProject = this.projects.filter((project) => project.id == id)[0];           
            this.groupsChecked = this.currentProject.groups.map((group) => group.id);
        },


        validarChecked(id){
            return this.currentProject.groups.map((group) => group.id == id)
        },
        updateAddProject(){
            console.log("groups=>", this.groupsChecked);

            //Validar si viene un Id de proyecto (Para actualizar) de lo contrario vendrá um cero para agregar
            if(this.idProject){
                this.$store.dispatch('updateProject', {content: this.currentProject, groups: this.groupsChecked})
                    .then(res => {                       
                        // this.projects = this.$store.state.allProjects
                        this.currentProject = {
                            id: 0,
                            name: '',
                            description,
                            color_id: '',
                            color:{
                                id: 0
                            }
                        }
                        // this.currentProject = projects.filter((project) => project.id == this.currentProject.id)
                        const elem = this.$refs.closeModal
                        elem.click()
                    })
            }
        }


    },
     computed: {
        idTareas () {            
            return  this.$store.state.user.id
        },

        //Array con los grupos del project correspondiente
        projectsChecked(id){
            return this.currentProject.groups.map((group) => group.id == id)
        },

        projects(){
           return this.$store.state.allProjects
        },
        

        
    },
 }
</script>


