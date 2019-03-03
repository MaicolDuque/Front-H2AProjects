<template>
    
        <div class="content-wrapper" style="position: relative">
            <div id="secciones" style="padding: 1% 4%; ">
                <!-- Content Header (Page header) -->
                
                <section class="content-header">
                    <div class="row">
                        <div class="col-xs-12 " style="padding-top: 1.9em;width: 20%;float: right">
                                                        
                            <button type="button"  @click="addSection" class="btn btn-block btn-info">Agregar sección</button>
                                
                        </div>
                    </div>
                
                </section>
                <section class="content-header">
                    <div class="row">
                        <div class="col-xs-8 col-md-8">
                            <h1>
                                {{project.name}}
                                
                            </h1>

                        </div>
                       

                    </div>
                    
                </section>

                <!-- Main content -->
                <section class="content" style="position: relative">
                 
                    <div class="row">
                        <div class="col-md-12">
                            <div class="row" >
                                <div class="col-xs-12 ">
                                    <!-- TABLE: LATEST ORDERS -->
                                    <div v-if="sections.length" class="testValidar">
                                        <div  v-for="section in sections" :key="section.id">
                                            
                                            
                                            <div class="box box-info" >
                                                <div class="box-header with-border">

                                                    <h3 class="box-title">{{section.name}}</h3>
                                                    <div class="box-tools pull-right">
                                                        <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                                                        <!-- <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button> -->
                                                    </div>
                                                    <i class="fa fa-pencil-square-o editarSeccion" @click="editarSection(section.id)" style="cursor: pointer" ></i>
                                                </div>
                                                <!-- /.box-header -->
                                                <div class="box-body">
                                                    <div class="table-responsive">
                                                        <table class="table no-margin">
                                                            <thead>
                                                                <tr>
                                                                    <th class="centrar">ID</th>
                                                                    <th class="centrar">Tarea</th>
                                                                    <th class="centrar">Responsable</th>
                                                                    <th class="centrar">Estado</th>
                                                                    <th class="centrar">Prioridad</th>
                                                                    <th class="centrar">Duración</th>
                                                                    <th class="centrar">Fecha fin</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody v-for="task in section.tasks" :key="task.id">
                                                                <tr>
                                                                    <td class="centrar" @click="editarTarea(task.id)" style="cursor: pointer; text-decoration: underline;" >{{task.id}}</td>
                                                                    <td>{{task.name}}</td>
                                                                    <td style="text-align: center; width: 13%;"><img :src="ruta+'/uploads/'+userTask(task.user_id)[0].picture" class="responsablesTareas" :alt="userTask(task.user_id)[0].name"  :title="userTask(task.user_id)[0].name"></td>
                                                                    <td class="centrar"><span :class="stateTask[task.state_id]">{{task.state.name}}</span></td>
                                                                    <td class="centrar"><span :class="priorities[task.priority]">{{task.priority}}</span></td>
                                                                    <td class="centrar">
                                                                        <div class="sparkbar" data-color="#00a65a" data-height="20">{{task.duration}} horas </div>
                                                                    </td>
                                                                    <td class="centrar">
                                                                        {{task.fecha_fin}}
                                                                    </td>
                                                                </tr>
                                                            
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <!-- /.table-responsive -->
                                                </div>
                                                <!-- /.box-body -->
                                                <div class="box-footer clearfix">
                                                    <a @click="addTask(section.id)" class="btn btn-sm btn-info btn-flat pull-left">Agregar tarea</a>
                                                    <!-- <a href="javascript:void(0)" class="btn btn-sm btn-default btn-flat pull-right">View All Orders</a> -->
                                                </div>

                                                
                                                <!-- /.box-footer -->
                                            </div>
                                        </div>
                                    </div>
                                    <div v-else>
                                        <h3 v-if="cantSections">
                                            No hay secciones creadas.
                                        </h3>
                                    </div>
                                    <!-- /.box -->


                                </div>
                                <!-- /.col -->
                            </div>
                          
        
                                                  
                        </div>                        
                    </div>
                    
                </section>
                <!-- /.content -->
            </div>

                <div id="contentEditar" class="box box-primary" style="padding: 10px 47px;position: absolute;overflow: hidden;overflow-y: scroll;width: 50%; height: 100%; top: 0; right: -55%; margin-top: 4%;box-shadow: 1px 3px 26px -1px rgba(0,0,0,0.75);">                                       
                   <TareasEditar style="height: 100%;" @ocultar="closeEditTask(1)" :edit="1" titulo="Editar Tarea" textButton="Actualizar"></TareasEditar>
                </div>

                <div id="contentAgregarTarea" class="box box-primary" style="padding: 10px 47px;position: absolute;overflow: hidden;overflow-y: scroll;width: 50%; height: 100%; top: 0; right: -55%; margin-top: 4%;box-shadow: 1px 3px 26px -1px rgba(0,0,0,0.75);">                                       
                   <TareasEditar style="height: 100%;" @ocultarAdd="closeEditTask(0)" :edit="0" titulo="Agregar Tarea" textButton="Agregar"></TareasEditar>
                </div>

                <div id="contentEditSection" class="box box-primary" style="padding: 10px 47px;position: absolute;overflow: hidden;overflow-y: scroll;width: 50%; height: 100%; top: 0; right: -55%; margin-top: 4%;box-shadow: 1px 3px 26px -1px rgba(0,0,0,0.75);">                                       
                   <SeccionEditar style="height: 100%;" @ocultarSection="closeEditSection(1)" :edit="1" titulo="Editar Sección" textButton="Actualizar" ></SeccionEditar>
                </div>

                <div id="contentAddSection" class="box box-primary" style="padding: 10px 47px;position: absolute;overflow: hidden;overflow-y: scroll;width: 50%; height: 100%; top: 0; right: -55%; margin-top: 4%;box-shadow: 1px 3px 26px -1px rgba(0,0,0,0.75);">                                       
                   <SeccionEditar style="height: 100%;" @ocultarSectionAdd="closeEditSection(0)" :edit="0" titulo="Agregar Sección" textButton="Agregar" ></SeccionEditar>
                </div>

                <Cargando v-if="cargando"></Cargando>
        </div>

</template>


<script>
 import TareasEditar from "./TareasEditar.vue"
 import SeccionEditar from "./SeccionEditar.vue"
 import Cargando from "./Cargando.vue"
 import config from '../services/config'
 export default {  
    name: 'Proyectos',
    components: {TareasEditar,SeccionEditar,Cargando},
    data () {
        return {
            controlEditar: 0, 
            totalTasks: {},
            idProject: this.$route.params.id,
            sections: {},
            idTaskEdit: 0,
            // project:{},
            idCurrentSection: 0,
            priorities: {
                Baja: 'label boder-bottom-primary',
                Media: 'label boder-bottom-warning',
                Alta: 'label boder-bottom-danger'
            },

            stateTask:{
                3: 'label label-warning',
                4: 'label label-success',
                5: 'label label-danger',
            },
            ruta: config.url,
            cantSections: false,
            cargando: false
            
        }
    },
    watch: {
    '$route.params.id': function (id) {
        //this.setearSection(id)
        
        this.$store.dispatch('returnSectionsProject',id )
            .then( res => { 
                this.sections = this.$store.state.sectionProject
                this.cargando = false
                if(this.sections.length == 0){
                    this.cantSections = true
                }
            })

        this.$store.dispatch('returnProjectDetail',id )
            // .then((res) => this.project = this.$store.state.currentProject) 
    },

    '$route' (to, from) {
        $('.box').boxWidget('toggle')
    // react to route changes...
    console.log("TO=>>", to)
    console.log("fron=>>", from)
    }
    },

    created() {
        this.cargando = true
        this.idProject = this.$route.params.id
        
        this.$store.dispatch('returnUsers');

        this.$store.dispatch('returnProjectDetail',this.$route.params.id )
            // .then((res) => this.project = this.$store.state.currentProject)       

        this.$store.dispatch('returnSectionsProject',this.$route.params.id )
            .then((res) => this.sections = this.$store.state.sectionProject)
            .then((rest)=> $('.box').boxWidget('toggle'))
            .then(res => {
                this.cargando = false
                if(this.sections.length == 0){
                    this.cantSections = true
                }
            })

    },
    mounted: function () {
        

        // console.log("gr=>",this.groupsProject)
    },
    updated: function () {
        $('.box').boxWidget()
    },
    

    methods: {

            returnUsersGroups(){
                // this.$store.dispatch('getUserForGroups',this.groupsProject )
                //     .then((res) => console.log("USUSRIOS GROUPS=>>", res))
            },
            cambiarEstado(){
                console.log("desde hijo")
            },
            setearSection: function(){
                this.idProject = this.$route.params.id

                this.$store.dispatch('returnSectionsProject',this.idProject )
                    .then((res) => this.sections = this.$store.state.sectionProject)
            },
            editarTarea(idTarea) {                   
                this.$store.dispatch('getUserForGroups',this.groupsProject )
                    .then((res) => console.log())
                
                this.idTaskEdit = idTarea     
               
                let position = ""
                let control = this.controlEditar
               
                position = "0%"
                this.controlEditar = 1               
                this.$store.dispatch('returnDetailTask', idTarea)
                    .then((res) => console.log("TAREA=>",res))
                    .then((res) => $( "#contentEditar" ).animate({right: position,}, 1300, function() {}))                                  
            },

            closeEditTask(controlEditarTask){                          
                this.$store.dispatch('returnSectionsProject',this.$route.params.id )
                    .then((res) => this.sections = this.$store.state.sectionProject)
                let position = ""
                let control = this.controlEditar
               // console.log("control=>>>",this.controlEditar)
                // if(control == 0){
                //     position = "0%"
                //     this.controlEditar = 1
                // }else{
                this.controlEditar = 0
                position = "-55%"
                // }
                if(controlEditarTask == 1){
                    $( "#contentEditar" ).animate({right: position}, 1300, function() {})
                }else{
                    $( "#contentAgregarTarea" ).animate({right: position}, 1300, function() {})
                }
            },

            closeEditSection(controlEditarSection){                          
                this.$store.dispatch('returnSectionsProject',this.$route.params.id )
                    .then((res) => this.sections = this.$store.state.sectionProject)
                let position = ""
                let control = this.controlEditar
               // console.log("control=>>>",this.controlEditar)
                // if(control == 0){
                //     position = "0%"
                //     this.controlEditar = 1
                // }else{
                this.controlEditar = 0
                position = "-55%"
                // }
                if(controlEditarSection == 1){
                    $( "#contentEditSection" ).animate({right: position}, 1300, function() {})
                }else{
                    $( "#contentAddSection" ).animate({right: position}, 1300, function() {})
                }
            },

            editarSection(idSection) {  
                // alert("aca"+idSection)  
                console.log("Id seciont=", idSection)    
                this.idCurrentSection = idSection
                console.log("Id seciont=", this.idCurrentSection)

                console.log("Actual section=>",this.currentSection)

                this.$store.commit('MUTATION_currentSection',this.currentSection)

                let position = ""
                let control = this.controlEditar
               // console.log("control=>>>",this.controlEditar)
                if(control == 0){
                    position = "0%"
                    this.controlEditar = 1
                }else{
                    this.controlEditar = 0
                    position = "-50%"
                }

                $( "#contentEditSection" ).animate({right: position,}, 1300, function() {})
            //     this.$store.dispatch('returnDetailTask', 2)
            //         .then((res) => console.log("TAREA=>",res))
            //         .then((res) => $( "#contentEditSection" ).animate({right: position,}, 1300, function() {}))
                  
                
            },

            addTask(currentSection){
                // alert("sas=>"+id);
                 // alert("aca")     

                //Traer usuarios del grupos
                this.$store.dispatch('getUserForGroups',this.groupsProject )
                    .then((res) => console.log(res)) 
                let position = ""
                let control = this.controlEditar
               // console.log("control=>>>",this.controlEditar)
                if(control == 0){
                    position = "0%"
                    this.controlEditar = 1
                }else{
                    this.controlEditar = 0
                    position = "-50%"
                }

                this.$store.commit('MUTATION_detailTask', {archived: 0,created_at: "",description: '',duration: '',fecha_fin: '',id: '',name: '',priority: '',section_id: currentSection,state_id: 1,updated_at: '',user_id: ''});
                $( "#contentAgregarTarea" ).animate({right: position,}, 1300, function() {})
            },

            addSection(){               
                // this.$route.params.id                             
                let position = ""
                let control = this.controlEditar
               // console.log("control=>>>",this.controlEditar)
                if(control == 0){
                    position = "0%"
                    this.controlEditar = 1
                }else{
                    this.controlEditar = 0
                    position = "-50%"
                }                                

                this.$store.commit('MUTATION_currentSection', {id: "",name: "",description: '',order: 0,project_id: this.$route.params.id});
                $( "#contentAddSection" ).animate({right: position,}, 1300, function() {})
            },

            userTask(idUsuario){
                return this.$store.state.allUsers.filter((user) => user.id == idUsuario)
            }
        },

        computed: {
            idProyecto(){
                return this.setearSection()
            },
            groupsProject(){
                return this.project.groups.map(project => project.id)
            },
            currentSection(){
                let secionDetail = this.sections.filter(section => section.id == this.idCurrentSection)
                return secionDetail[0];
            },

            project(){
                return this.$store.state.currentProject
            },

            


        }


}
</script>
