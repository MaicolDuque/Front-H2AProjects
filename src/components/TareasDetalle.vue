

<template>
 
    <div class="content-wrapper" style="position: relative">

             
            <section class="content-header">
                <h1>
                    Detalle tareas                   
                </h1>               
            </section>
            <section class="content">
                        <div class="row">
                            
                            <div class="col-xs-12">

                                <div class="row">
                                    <div class="col-md-4">
                                        <input type="text" v-model="search" class="form-control" placeholder="Buscar tarea..."/>        
                                    </div>
                                </div>

                                <div var="sss" :class="[colorTareas]">

                                       <!-- /.box-header -->
                                    <div class="box-body">
                                        <table id="" class="table table-bordered table-striped">
                                            <thead>
                                                    <tr class="text-center">
                                                    <th class="text-center">ID</th>
                                                    <th class="text-center">Tarea</th>
                                                    <th class="text-center">Descripción</th>
                                                    <th class="text-center">Fecha entrega</th>
                                                    <th class="text-center">Duración</th>
                                                    <th class="text-center">Prioridad </th>
                                                </tr>
                                            </thead>
                                            <tbody>                                                
                                                <tr v-if="validarTareas" v-for="task in filteredTasks" :key="task.id">
                                                    <td class="centrar" @click="editarTarea(task.id)" style="cursor: pointer; text-decoration: underline;" >{{task.id}}</td>
                                                    <td >{{ task.name }}</td>
                                                    <td>{{ task.description }}</td>
                                                    <td class="centrar">{{ task.fecha_fin }}</td>
                                                    <td class="centrar"><i class="fa fa-clock-o"></i> {{ task.duration }} horas</td>
                                                    <td class="centrar">{{ task.priority }}</td>
                                                </tr>
                                                <tr v-else>
                                                    <td colspan="5">No hay tareas pendientes</td>
                                                </tr>                                        
                                            </tbody>                                        
                                        </table>
                                    </div>
                                <!-- /.box-body -->                      
                            
                                </div>
                            <!-- /.box -->
                            </div>
                        </div>
            </section>

            <div id="contentEditar" class="box box-primary" style="padding: 10px 47px;position: absolute;overflow: hidden;overflow-y: scroll;width: 50%; height: 100%; top: 0; right: -55%; margin-top: 4%;box-shadow: 1px 3px 26px -1px rgba(0,0,0,0.75);">                                       
                <TareasEditar style="height: 100%;" @ocultar="closeEditTask(1)" :edit="1" titulo="Editar Tarea" textButton="Actualizar"></TareasEditar>
            </div>

            
    </div>
    
    

</template>

 <script>
 import TareasEditar from "./TareasEditar.vue"
 export default {  
    // props: ['tipoTask'],
    name: "tareas-detalle",
    components: {TareasEditar},
    data () {
        return {
            search: '',
            msg: 'Welcome to Your Vue.js App',
            tipoTarea: '',
            users: {},
            colors:{
                "color3": 'box box-warning',
                "color4": 'box box-success',
                "color5": 'box box-danger'
            },
            taskType: '',
            retornarTareasEstado: {},
            idUser: '',
            stateTask: '',
            idTaskEdit: 0,
            controlEditar: 0, 
            groups: {}
        }
    },
    created () {       
        //this.returnAllUsers() 
        this.idUser = this.$route.params.id  
        this.stateTask = this.$route.params.state 
        
        this.$store.dispatch('getUserTasks', {id: this.idUser})
            .then((res1) => this.setearEstadoTareas())
            // .then((res) => $('#taskState').DataTable())           
        // this.$store.dispatch('returnUsers')
        //     // .then((res) => this.users = res)
        //     .then((res) => $('#taskState').DataTable())

        this.$store.dispatch('returnGroups')
            .then(res => {
                this.groups = this.$store.state.allGroups
                // $('#tableGroups').DataTable() 
            })


    },
    mounted: function () {        
        //  $('#taskState').DataTable()        
    },

    methods: {
        setearEstadoTareas () {   //Hacer llamado a la API que retorne total usuarios         
            this.retornarTareasEstado = this.$store.state.userTasks.filter(tasks => tasks.state_id == this.stateTask)
            // this.tipo = this.$store.state.currentTypeTaskDetail
        },

        editarTarea(idTarea) {                       
            this.$store.dispatch('getUserForGroups',this.allGroupsIds )
                .then((res) => console.log(res))
            
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
            this.$store.dispatch('getUserTasks', {id: this.idUser})
                .then((res1) => this.setearEstadoTareas())
                
            let position = ""
            let control = this.controlEditar
            
            this.controlEditar = 0
            position = "-55%"
            // }
            if(controlEditarTask == 1){
                $( "#contentEditar" ).animate({right: position}, 1300, function() {})
            }else{
                $( "#contentAgregarTarea" ).animate({right: position}, 1300, function() {})
            }
        },
    },
    computed: {
        colorTareas() {        
            let value = "color"+this.stateTask              
            return this.colors[value]
        },

        // retornarTareasEstado(){            
        //     return  this.$store.state.userTasks.filter(tasks => tasks.state_id == this.tipoTask)
        // },
        validarTareas() {
            if(this.retornarTareasEstado.length > 0){
                return true
            }
            return false
        },

        tipo(){
            return this.$store.state.currentTypeTaskDetail
        },

        allGroupsIds(){
            return this.groups.map(group => group.id)
        },


        filteredTasks() { //Retornar array con los nombres de las tareas que contengan el texto de la variable 'search' 
            if(this.retornarTareasEstado.length > 0){
                return this.retornarTareasEstado.filter(task => {
                    return task.name.toLowerCase().includes(this.search.toLowerCase())
                })
            }
        }
        
    },

}
</script>