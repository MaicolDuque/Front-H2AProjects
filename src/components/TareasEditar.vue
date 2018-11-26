<template>
    <!-- <div id="contentEditar"  style="padding: 10px 47px;position: absolute; width: 50%; height: 50%; top: 0; right: -50%; margin-top: 5%;">                                        -->
    <div >
        <span class="close" @click="ocultarEditar"><i class=" fa fa-close"></i></span>  
        <h3 class="box-title">Editar tarea</h3>   
          
        <form role="form" @submit.prevent="update">
            <div class="box-body">
                
                <div class="form-group">                   
                <label for="nameTask">Tarea: </label>
                <input type="text" class="form-control" id="nameTask" v-model="detalleTarea.name">
                </div>

                <div class="form-group">                   
                <label for="nameTask">Responsable: </label>
                <!-- <input type="text" class="form-control" id="nameTask" v-model="detalleTarea.name"> -->
                <select class="form-control" v-model="detalleTarea.user_id" name="responsable" id="responsable">                    
                    <option v-for="user in users" :key="user.id" :value="user.id" v-if="user.id == detalleTarea.user_id"  selected  >{{user.name}}</option>
                    <option :value="user.id" v-else >{{user.name}}</option>
                </select>
                </div>
                
                <div class="form-group">
                <label for="description">Descripción: </label>
                <textarea class="form-control" name="description" id="description" cols="10" rows="2" v-model="detalleTarea.description" />
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
            detailTask: this.$store.state.taskDetail,
            
        }
    },
    created () {   
        
        
   
        // this.$store.dispatch('getUserTasks', {id: this.idUser})
        //     .then((res1) => this.setearEstadoTareas())
            // .then((res) => $('#taskState').DataTable())           

    },
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
        },

        update(){
            console.log("Actulizar=>", this.detalleTarea)
        }
    },
    computed: {      
        detalleTarea(){
            return this.$store.state.taskDetail
        },

        users(){
            return this.$store.state.userGroups
        }
        
    },

}
</script>