

<template>
 
    <div class="content-wrapper">

             
            <section class="content-header">
                <h1>
                    Detalle tareas
                    {{idUser}}
                    {{tipoTask}}
                </h1>               
            </section>
            <section class="content">
                        <div class="row">
                            <div class="col-xs-12">
                                <div var="sss" :class="[colorTareas]">

                                       <!-- /.box-header -->
                                    <div class="box-body">
                                        <table id="" class="table table-bordered table-striped">
                                            <thead>
                                                    <tr class="text-center">
                                                    <th class="text-center">Tarea</th>
                                                    <th class="text-center">Fecha entrega</th>
                                                    <th class="text-center">Duración</th>
                                                    <th class="text-center">Prioridad </th>
                                                    <th class="text-center">Ver detalles</th>
                                                </tr>
                                            </thead>
                                            <tbody style="text-align: center">                                                
                                                <tr v-if="validarTareas" v-for="task in retornarTareasEstado" :key="task.id">
                                                    <td>{{ task.name }}</td>
                                                    <td>{{ task.fecha_fin }}</td>
                                                    <td><i class="fa fa-clock-o"></i> {{ task.duration }} horas</td>
                                                    <td>{{ task.priority }}</td>
                                                    <td>{{ task.name }}</td>
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

            
    </div>
    
    

</template>

 <script>
 export default {  
    props: ['tipoTask'],
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            tipoTarea: this.tipoTask,
            users: {},
            colors:{
                "color3": 'box box-warning',
                "color4": 'box box-success',
                "color5": 'box box-danger'
            },
            taskType: '',
            retornarTareasEstado: {},
            idUser: ''
        }
    },
    created () {       
        //this.returnAllUsers() 
        this.idUser = this.$route.params.id  
        this.$store.dispatch('getUserTasks', {id: this.idUser})
            .then((res1) => this.setearEstadoTareas())
            // .then((res) => $('#taskState').DataTable())           
        // this.$store.dispatch('returnUsers')
        //     // .then((res) => this.users = res)
        //     .then((res) => $('#taskState').DataTable())


    },
    mounted: function () {        
        //  $('#taskState').DataTable()        
    },

    methods: {
        setearEstadoTareas () {   //Hacer llamado a la API que retorne total usuarios         
            this.retornarTareasEstado = this.$store.state.userTasks.filter(tasks => tasks.state_id == this.tipoTask)
            this.tipo = this.tipoTask
        },

        editarTarea(id) {           
            // alert("Editar usuario!->"+id)
            this.$router.push(`/tareas/${id}`)
        }
    },
    computed: {
        colorTareas() {        
            let value = "color"+this.tipoTask              
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

        // tipo(){
        //     return this.tipoTask
        // }
        
    },

}
</script>