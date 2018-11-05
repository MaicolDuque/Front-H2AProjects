
<template>
 
    <div class="content-wrapper">

             <div class="modal fade" id="addUser">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title">Default Modal</h4>
                    </div>
                    <div class="modal-body">
                        <form role="form">
                            <div class="box-body">
                                <div class="form-group">
                                    <label for="name">Nombre completo</label>
                                    <input type="text" class="form-control" id="name" placeholder="Nombre completo">
                                </div>
                                <div class="form-group">
                                    <label for="email">Correo electrónico</label>
                                    <input type="email" class="form-control" id="email" placeholder="Correo electrónico">
                                </div>
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" class="form-control" id="password" placeholder="Password">
                                </div>
                                <div class="form-group">
                                    <label for="password">Grupo</label>
                                    <select name="group" id="group">
                                        <option value=""></option>
                                    </select>
                                </div>
                                <div class="form-group">
                                <label for="exampleInputFile">File input</label>
                                <input type="file" id="exampleInputFile">

                                <p class="help-block">Example block-level help text here.</p>
                                </div>
                                <div class="checkbox">
                                <label>
                                    <input type="checkbox"> Check me out
                                </label>
                                </div>
                            </div>
                            <!-- /.box-body -->

                            <!-- <div class="box-footer">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div> -->
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary pull-left">Guardar</button>
                                <button type="button" class="btn btn-default " data-dismiss="modal">Cerrar</button>
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
            groups: {}
        }
    },
    created () {       
        //this.returnAllUsers()                    
        this.$store.dispatch('returnUsers')
            // .then((res) => this.users = res)
            .then((res) => $('#tableUsuarios').DataTable())
        
        this.$store.dispatch('returnGroups')
            .then((res) => this.groups = this.$store.state.allGroups)            


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
        }
    },
    computed: {
        allUsers () {           
            return  this.$store.state.allUsers
        }
    },

}
</script>