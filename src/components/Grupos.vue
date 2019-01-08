<template>
 
    <div class="content-wrapper" style="position: relative">        
            <section class="content-header">
                <div>
                    <h1>
                        Grupos
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
                                                                                   
                                            </tr>
                                        </thead>
                                        <tbody >
                                            <tr v-for="group in allGroups" :key="group.id">
                                                <td style="cursor: pointer;text-decoration: underline;" @click="editarUsuario(group.id)">{{ group.id }}</td>
                                                <td   >{{ group.name }}</td>
                                                <td>{{ group.description }}</td> 
                                                                                          
                                            </tr>
                                            

                                        </tbody>                                        
                                    </table>
                                </div>
                                <!-- /.box-body -->
                            </div>
                            <!-- /.box -->
                            </div>
                            <div id="contentEditar" class="box box-primary" style="z-index: 4;padding: 10px 47px;position: absolute;overflow: hidden;overflow-y: scroll;width: 50%; height: 100%; top: 0; right: -55%; margin-top: 4%;box-shadow: 1px 3px 26px -1px rgba(0,0,0,0.75);">                                       
                                <GruposAgregarEditar style="height: 100%;" @ocultar="closeEditUser(1)" :edit="1" titulo="Editar Grupo" textButton="Actualizar"></GruposAgregarEditar>
                            </div>

                            <div id="contentAgregarUsuario" class="box box-primary" style="z-index: 4;padding: 10px 47px;position: absolute;overflow: hidden;overflow-y: scroll;width: 50%; height: 100%; top: 0; right: -55%; margin-top: 4%;box-shadow: 1px 3px 26px -1px rgba(0,0,0,0.75);">                                       
                                <GruposAgregarEditar style="height: 100%;" @ocultarAdd="closeEditUser(0)" :edit="0" titulo="Agregar Grupo" textButton="Agregar"></GruposAgregarEditar>
                            </div>
                        </div>
            
            
            </section>

    </div>
    
    

</template>

 <script>
 import GruposAgregarEditar from "./GruposAgregarEditar.vue"
 export default { 
    components: {GruposAgregarEditar},
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
       this.$store.dispatch('returnGroups')
            .then(res => {
                this.groups = this.$store.state.allGroups
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
        
        editarUsuario(idGroup) {   
                
                this.idGroupEdit = idGroup
                console.log("editar user=>", this.groupEdit)
                this.$store.commit('MUTATION_currentGroupEdit', this.groupEdit)                                                
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
        reiniciarPropiedades(){
            this.allUsers = this.$store.state.allUsers
            this.newUser.name= '',
            this.newUser.email= '',
            this.newUser.password= '',
            this.newUser.group_id= 0,
            this.newUser.occupation_id= 0,
            this.newUser.picture= 'sinimagen.jpg',
            this.newUser.state= 1,
            this.newUser.is_admin= 0   
            this.$refs.closeModal.click()
        },
        createImage(e) {
            console.log(e.target.files[0])
            let reader = new FileReader();
            reader.readAsDataURL(e.target.files[0])
            let vm = this;
            reader.onload = (e) => {
                vm.newUser.picture = e.target.result;
            };
            // reader.readAsDataURL(file);
            console.log(vm.newUser.picture)
        },
    },
    computed: {     
      groupEdit(){
          return this.allGroups.filter((group) => group.id == this.idGroupEdit)[0]
      },
      allGroups(){
          return this.$store.state.allGroups
      }

    },

}
</script>