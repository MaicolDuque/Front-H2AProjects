
<template>
 
    <div class="content-wrapper">

             
            <section class="content-header">
                <h1>
                    Usuarios
                </h1>               
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
                                                <td style="text-align: center; font-size: 1.6em"><i @click="eidtarUsuario(user.id)" style="cursor:pointer" :id="user.id" class="fa fa-eye"></i></td>
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
            users: {}
        }
    },
    created () {       
        //this.returnAllUsers()                    
        this.$store.dispatch('returnUsers')
    },
    mounted: function () {
        $( document ).ready(function() {
            $('#tableUsuarios').DataTable()
            //console.log( "ready!" );
        });
    },

    methods: {
        returnAllUsers () {   //Hacer llamado a la API que retorne total usuarios         
            // this.$store.dispatch('returnUsers')
            //     .then(() => console.log('Track loaded...'))
        },

        eidtarUsuario(id) {           
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