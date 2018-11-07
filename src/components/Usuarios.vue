
<template>
 
    <div class="content-wrapper">

             <div class="modal fade" id="addUser">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title">Agregar usuario</h4>
                    </div>
                    <div class="modal-body">
                        <form role="form">
                            <div class="box-body">
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
                                
                            </div>
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
                    <button type="button" data-toggle="modal" data-target="#addUser" style="float: right;width: 10%;margin-bottom: 15px" class="btn btn-block btn-info btn-sm">Agregar &nbsp;<i class="fa fa-plus"></i></button>              
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
                                                <th>Correo</th>
                                                <th>Estado</th>
                                                <th>Grupo </th>
                                                <th>Ver detalles</th>
                                            </tr>
                                        </thead>
                                        <tbody >
                                            <tr v-for="user in allUsers" :key="user.id">
                                                <td>{{ user.name }}</td>
                                                <td>{{ user.email }}</td>
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
                                                <th>Estado</th>
                                                <th>Tareas</th>
                                                <th>Ver detalles</th>
                                            </tr>
                                        </tfoot>
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
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            users: {},
            groups: {},
            occupations: {},
            picture: '',
            image: '',
            newUser: {
                name: '',
                email: '',
                password: '',
                group_id: 0,
                occupation_id: 0,
                picture: 'sinimagen.jpg',
                state: 1,
                is_admin: 0   
            }
        }
    },
    created () {       
        //this.returnAllUsers()                    
        this.$store.dispatch('returnUsers')
            // .then((res) => this.users = res)
            .then((res) => $('#tableUsuarios').DataTable())
        
        this.$store.dispatch('returnGroups')
            .then((res) => this.groups = this.$store.state.allGroups)
            
        this.$store.dispatch('returnOccupations')
            .then((res) => this.occupations = this.$store.state.allOccupations)


    },
    mounted: function () {        
        $('#tableUsuarios').DataTable()        
    },

    methods: {
        returnAllUsers () {   //Hacer llamado a la API que retorne total usuarios         
            // this.$store.dispatch('returnUsers')
            //     .then(() => console.log('Track loaded...'))
        },

        editarTarea(id) {           
            // alert("Editar usuario!->"+id)
            this.$router.push(`/tareas/${id}`)
        },

        agregarUsuario(){  
            
            this.$store.dispatch('addNewUser', this.newUser)
                .then((res) => this.$refs.closeModal.click())
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
        allUsers () {           
            return  this.$store.state.allUsers
        }
    },

}
</script>