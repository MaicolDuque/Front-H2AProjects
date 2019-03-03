
<template>
 
    <div class="content-wrapper" style="position: relative">

             <div class="modal fade" id="addUser">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="">
                        <button type="button">
                        <span aria-hidden="true">&times;</span></button>
                        <h4>Agregar usuario</h4>
                    </div>
                    <div class="modal-body">
                        <form role="form">
                            <!-- <div class="box-body">
                                <div class="form-group">
                                    <label for="name">Nombre completo</label>
                                    <input type="text" class="form-control" id="name" v-model="newUser.name" placeholder="Nombre completo">
                                </div>
                                <div class="form-group">
                                    <label for="email">Correo electrónico</label>
                                    <input type="email" class="form-control" id="email" v-model="newUser.email" placeholder="Correo electrónico">
                                </div>
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" class="form-control" id="password" v-model="newUser.password" placeholder="Password">
                                </div>
                                <div class="form-group">
                                    <label for="password">Grupo:</label>
                                    <select class="form-control" name="group" v-model="newUser.group_id" id="group">
                                        <option v-for="group in groups" :key="group.id" :value="group.id">
                                            {{group.name}}
                                        </option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="password">Ocupacion:</label>
                                    <select class="form-control" name="occupation" v-model="newUser.occupation_id" id="occupation">
                                        <option v-for="occupation in occupations" :key="occupation.id" :value="occupation.id">
                                            {{occupation.name}}
                                        </option>
                                    </select>
                                </div>
                                <div class="form-group">
                                <label for="exampleInputFile">Foto</label>
                                <input  type="file" id="exampleInputFile" name="image" @change="createImage">

                                <p class="help-block">Seleccione la foto de perfil.</p>
                                </div>
                                
                            </div> -->
                            <!-- /.box-body -->

                            <!-- <div class="box-footer">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div> -->
                            <div class="modal-footer">
                                <button type="button" @click="agregarUsuario()" class="btn btn-primary pull-left">Guardar</button>
                                <button type="button" class="btn btn-default " ref="closeModal" data-dismiss="modal">Cerrar</button>
                            </div>
                        </form>
                    </div>
                    </div>
                    <!-- /.modal-content -->
                </div>
                <!-- /.modal-dialog -->
            </div>
            <!-- /.modal -->


            <section class="content-header">
                <div>
                    <h1>
                        Usuarios
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
                                    <table id="tableUsuarios" class="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th>Nombre completo</th>
                                                <th>Correo electrónico</th>
                                                <th>Rol</th>
                                                <th>Estado</th>
                                                <th>Grupo </th>
                                                <th>Ver tareas</th>
                                            </tr>
                                        </thead>
                                        <tbody >
                                            <tr v-for="user in todosUsers" :key="user.id">
                                                <td style="cursor: pointer;" @click="editarUsuario(user.id)" >{{ user.name }}</td>
                                                <td>{{ user.email }}</td>
                                                <td>{{ rolUSer(user.is_admin) }}</td>
                                                <td v-if="user.state"><span class="label label-success">Activo</span></td>
                                                <td v-else><span class="label label-danger">Inactivo</span></td>
                                                <td> {{ user.group.name }}</td>
                                                <td style="text-align: center; font-size: 1.6em"><i @click="editarTarea(user.id)" style="cursor:pointer" :id="user.id" class="fa fa-eye"></i></td>
                                            </tr>
                                            

                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th>Nombre completo</th>
                                                <th>Correo electrónico</th>
                                                <th>Rol</th>
                                                <th>Estado</th>
                                                <th>Grupo</th>
                                                <th>Ver tareas</th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <!-- /.box-body -->
                            </div>
                            <!-- /.box -->
                            </div>
                            <div id="contentEditar" class="box box-primary" style="z-index: 4;padding: 10px 47px;position: absolute;overflow: hidden;overflow-y: scroll;width: 50%; height: 100%; top: 0; right: -55%; margin-top: 4%;box-shadow: 1px 3px 26px -1px rgba(0,0,0,0.75);">                                       
                                <UsuariosAgregarEditar style="height: 100%;" @ocultar="closeEditUser(1)" :edit="1" titulo="Editar Usuario" textButton="Actualizar"></UsuariosAgregarEditar>
                            </div>

                            <div id="contentAgregarUsuario" class="box box-primary" style="z-index: 4;padding: 10px 47px;position: absolute;overflow: hidden;overflow-y: scroll;width: 50%; height: 100%; top: 0; right: -55%; margin-top: 4%;box-shadow: 1px 3px 26px -1px rgba(0,0,0,0.75);">                                       
                                <UsuariosAgregarEditar style="height: 100%;" @ocultarAdd="closeEditUser(0)" :edit="0" titulo="Agregar Usuario" textButton="Agregar"></UsuariosAgregarEditar>
                            </div>
                        </div>
            
            
            </section>

            <Cargando v-if="cargando"></Cargando>

    </div>
    
    

</template>

 <script>
 import UsuariosAgregarEditar from "./UsuariosAgregarEditar.vue"
 import Cargando from "./Cargando.vue"
 export default { 
    components: {UsuariosAgregarEditar,Cargando},
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            allUsers: {},
            users: {},
            controlEditar: '',
            groups: {},
            occupations: {},
            picture: '',
            image: '',
            editUser: 0,
            newUser: {
                name: '',
                email: '',
                password: '',
                group_id: 0,
                occupation_id: 0,
                picture: 'sinimagen.jpg',
                state: 1,
                is_admin: 0   
            },
            idUserEdit: 0,
            roles:{
                0: 'Usuario',
                1: 'Administrador',
                2: 'Super Administrador'
            },
            cargando: false
        }
    },
    created () {       
        //this.returnAllUsers()  
        this.cargando = true;                  
        this.$store.dispatch('returnUsers')
            .then((res) => this.cargando = false)
            .then((us) => this.allUsers = this.$store.state.allUsers)
            .then((res) => $('#tableUsuarios').DataTable())
        
        this.$store.dispatch('returnGroups')
            .then((res) => this.groups = this.$store.state.allGroups)
            
        this.$store.dispatch('returnOccupations')
            .then( res => {
                this.occupations = this.$store.state.allOccupations
                
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
        
        editarUsuario(idUsuario) {   
                
                this.idUserEdit = idUsuario
                console.log("editar user=>", this.usuarioEditar)
                this.$store.commit('MUTATION_currentUserEdit', this.usuarioEditar)  
                this.$store.commit('MUTATION_currentPassword', this.usuarioEditar.password)                              
                let position = ""
                let control = this.controlEditar
               // console.log("control=>>>",this.controlEditar)
                // if(control == 0){
                position = "0%"
                this.controlEditar = 1
                // }else{
                //     this.controlEditar = 0
                //     position = "-55%"
                // }
                $( "#contentEditar" ).animate({right: position,}, 1300, function() {})
                // this.$store.dispatch('returnDetailTask', idUsuario)
                //     .then((res) => console.log("TAREA=>",res))
                //     .then((res) => )
                  
                
        },

        closeEditUser(controlEditarTask){                                         
                let position = ""
                let control = this.controlEditar               
                this.controlEditar = 0
                position = "-55%"
                // }
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
      todosUsers(){
          let perfil = this.$store.state.user.is_admin;
          if(perfil == 1){ //Validar si es tipo administrador 
              let grupo = this.$store.state.user.group_id;
              return this.$store.state.allUsers.filter((user)=> user.group_id == grupo) //Retornar usuarios que pertenezcan al grupo del amdinistardor
          }
          return this.$store.state.allUsers
      },
      usuarioEditar(){
          return this.todosUsers.filter((user) => user.id == this.idUserEdit)[0]
      }
    },

}
</script>