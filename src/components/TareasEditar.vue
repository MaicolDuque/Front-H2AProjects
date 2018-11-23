<template>
    <!-- <div id="contentEditar"  style="padding: 10px 47px;position: absolute; width: 50%; height: 50%; top: 0; right: -50%; margin-top: 5%;">                                        -->
    <div >
        <span class="close" @click="ocultarEditar"><i class=" fa fa-close"></i></span>  
        <h3 class="box-title">Editar usuario</h3>   
          
        <form role="form">
            <div class="box-body">
                
                <div class="form-group">                   
                <label for="nameTask">Tarea: </label>
                <input type="email" class="form-control" id="nameTask" v-model="detalleTarea.name">
                </div>
                
                <div class="form-group">
                <label for="description">Descripción: </label>
                <textarea class="form-control" name="description" id="description" cols="10" rows="2">{{detalleTarea.description}}</textarea>                
                </div>
                
                <div class="form-group">
                <label for="priority">Prioridad: </label>
                <input type="text" class="form-control" id="priority" v-model="detalleTarea.priority">
                </div>

                <div class="form-group">
                <label for="duration">Duración (horas): </label>
                <input type="number" class="form-control" id="duration" v-model="detalleTarea.duration">
                </div>


                <div class="form-group">
                <label for="fecha_fin">Fecha fin: </label>
                <input type="date" class="form-control" id="fecha_fin" v-model="detalleTarea.fecha_fin">
                </div>
                
            </div>
       

            <div class="box-footer">
                <button type="submit" class="btn btn-primary">Actualizar</button>
            </div>
        </form>
    </div>
    <!-- </div> -->
</template>

 <script>



 export default {  
    props: ['id'],
    data () {
        return {
            detailTask: this.$store.state.taskDetail
        }
    },
//     created () {       
//         //this.returnAllUsers() 
//         // this.idUser = this.$route.params.id  
//         // this.$store.dispatch('getUserTasks', {id: this.idUser})
//         //     .then((res1) => this.setearEstadoTareas())
//             // .then((res) => $('#taskState').DataTable())           
//         // this.$store.dispatch('returnUsers')
//         //     // .then((res) => this.users = res)
//         //     .then((res) => $('#taskState').DataTable())


//     },
    mounted: function () {        
       console.log(this.id)
    },
    updated: function () {
        console.log(this.id)
    },

    methods: {
        setearEstadoTareas () {   //Hacer llamado a la API que retorne total usuarios         
            this.retornarTareasEstado = this.$store.state.userTasks.filter(tasks => tasks.state_id == this.tipoTask)
            this.tipo = this.tipoTask
        },

        ocultarEditar() {           
            // alert("Editar usuario!->")
            // this.$router.push(`/tareas/${id}`)
            this.$emit('ocultar');
        }
    },
    computed: {
        // colorTareas() {        
        //     let value = "color"+this.tipoTask              
        //     return this.colors[value]
        // },

        // // retornarTareasEstado(){            
        // //     return  this.$store.state.userTasks.filter(tasks => tasks.state_id == this.tipoTask)
        // // },
        // validarTareas() {
        //     if(this.retornarTareasEstado.length > 0){
        //         return true
        //     }
        //     return false
        // },

        detalleTarea(){
            return this.$store.state.taskDetail
        }
        
    },

}
</script>