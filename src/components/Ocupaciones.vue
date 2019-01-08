<template>
 
    <div class="content-wrapper" style="position: relative">        
            <section class="content-header">
                <div>
                    <h1>
                        Ocupaciones
                    </h1> 
                    <button type="button" @click="agregarUsuario" style="float: right;width: 10%;margin-bottom: 15px" class="btn btn-block btn-info btn-sm">Agregar &nbsp;<i class="fa fa-plus"></i></button>              
                </div>
            </section>
            <section class="content">
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="box">

                                <!-- /.box-header -->
                                <div class="box-body">
                                    <table id="tableGroups" class="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th class="centrar">ID</th>
                                                <th class="centrar">Nombre</th>
                                                <th class="centrar">Descripción</th> 
                                                <!-- <th class="centrar">Eliminar</th>                                                -->
                                            </tr>
                                        </thead>
                                        <tbody >
                                            <tr v-for="group in allOccupations" :key="group.id">
                                                <td style="cursor: pointer;text-decoration: underline;" title="Editar" @click="editarUsuario(group.id)">{{ group.id }}</td>
                                                <td>{{ group.name }}</td>
                                                <td>{{ group.description }}</td> 
                                                <!-- <td class="eliminar" @click="deleteGroup(group.id)"> <i class="fa fa-trash"></i></td>                                              -->
                                            </tr>
                                            

                                        </tbody>                                        
                                    </table>
                                </div>
                                <!-- /.box-body -->
                            </div>
                            <!-- /.box -->
                            </div>
                            <div id="contentEditar" class="box box-primary" style="z-index: 4;padding: 10px 47px;position: absolute;overflow: hidden;overflow-y: scroll;width: 50%; height: 100%; top: 0; right: -55%; margin-top: 4%;box-shadow: 1px 3px 26px -1px rgba(0,0,0,0.75);">                                       
                                <OcupacionesAgregarEditar style="height: 100%;" @ocultar="closeEditUser(1)" :edit="1" titulo="Editar Ocupación" textButton="Actualizar"></OcupacionesAgregarEditar>
                            </div>

                            <div id="contentAgregarUsuario" class="box box-primary" style="z-index: 4;padding: 10px 47px;position: absolute;overflow: hidden;overflow-y: scroll;width: 50%; height: 100%; top: 0; right: -55%; margin-top: 4%;box-shadow: 1px 3px 26px -1px rgba(0,0,0,0.75);">                                       
                                <OcupacionesAgregarEditar style="height: 100%;" @ocultarAdd="closeEditUser(0)" :edit="0" titulo="Agregar Ocupación" textButton="Agregar"></OcupacionesAgregarEditar>
                            </div>
                        </div>
            
            
            </section>

    </div>
    
    

</template>

 <script>
 import OcupacionesAgregarEditar from "./OcupacionesAgregarEditar.vue"
 export default { 
    components: {OcupacionesAgregarEditar},
    data () {
        return {            
            allUsers: {},
            users: {},
            controlEditar: '',
            groups: {},                     
            idGroupEdit: 0,            
        }
    },
    created () {             
       this.$store.dispatch('returnOccupations')
            .then(res => {
                this.groups = this.$store.state.allOccupations
                $('#tableGroups').DataTable() 
            }) 
            
      


    },
    mounted: function () {        
        // $('#tableUsuarios').DataTable()        
    },

    methods: {
        //Validar si es administrador o usuario (1 => Administrador, 2=> Usuario)
        rolUSer(isAdmin){
            return this.roles[isAdmin]
        },

        deleteGroup(idGroup){            
            let txt;
            let r = confirm("¿Estás seguro que deseas eliminar el grupo?");
            if (r == true) {
                txt = "You pressed OK!";

            } else {
                txt = "You pressed Cancel!";
            }
            console.log(txt)
        },
        
        editarUsuario(idGroup) {   
                
                this.idGroupEdit = idGroup
                console.log("editar user=>", this.occupationEdit)
                this.$store.commit('MUTATION_currentOccupationEdit', this.occupationEdit)                                                
                let position = ""
                let control = this.controlEditar               
                position = "0%"
                this.controlEditar = 1
              
                $( "#contentEditar" ).animate({right: position,}, 1300, function() {})              
        },

        closeEditUser(controlEditarTask){                                         
                let position = ""
                let control = this.controlEditar               
                this.controlEditar = 0
                position = "-55%"                
                if(controlEditarTask == 1){
                    $( "#contentEditar" ).animate({right: position}, 1300, function() {})
                }else{
                    $( "#contentAgregarUsuario" ).animate({right: position}, 1300, function() {})
                }
        },

        editarUser() { 
            console.log("acacaaa")
            // this.$store.dispatch('returnUsers')
            //     .then(() => console.log('Track loaded...'))
        },

        editarTarea(id) {           
            // alert("Editar usuario!->"+id)
            this.$router.push(`/tareas/${id}`)
        },

        agregarUsuario(){  
           
            let position = ""
            let control = this.controlEditar            
            position = "0%"
            this.controlEditar = 1
            this.$store.commit('MUTATION_currentUserEdit', {})         
            $( "#contentAgregarUsuario" ).animate({right: position,}, 1300, function() {})

           
                        
        },       
    },
    computed: {     
      occupationEdit(){
          return this.allOccupations.filter((group) => group.id == this.idGroupEdit)[0]
      },
      allOccupations(){
          return this.$store.state.allOccupations
      }

    },

}
</script>