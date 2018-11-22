<template>
    <!-- <div id="contentEditar"  style="padding: 10px 47px;position: absolute; width: 50%; height: 50%; top: 0; right: -50%; margin-top: 5%;">                                        -->
    <div >
        <span class="close" @click="ocultarEditar"><i class=" fa fa-close"></i></span>  
        <h3 class="box-title">Quick Example</h3>            
        <form role="form">
            <div class="box-body">
                <div class="form-group">
                <label for="exampleInputEmail12">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail12" placeholder="Enter email">
                </div>
                <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>
                
            </div>
       

            <div class="box-footer">
                <button type="submit" class="btn btn-primary">Submit</button>
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
            msg: 'Welcome to Your Vue.js App',
            tipoTarea: this.tipoTask,
            users: {},            
            taskType: '',
            retornarTareasEstado: {},
            idUser: ''
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
    }
//     computed: {
//         colorTareas() {        
//             let value = "color"+this.tipoTask              
//             return this.colors[value]
//         },

//         // retornarTareasEstado(){            
//         //     return  this.$store.state.userTasks.filter(tasks => tasks.state_id == this.tipoTask)
//         // },
//         validarTareas() {
//             if(this.retornarTareasEstado.length > 0){
//                 return true
//             }
//             return false
//         },

//         tipo(){
//             return this.tipoTask
//         }
        
//     },

}
</script>