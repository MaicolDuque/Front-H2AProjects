
<template>
 
    <div class="content-wrapper">

        {{allUsers}}          
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
                                                <th>Tareas </th>
                                                <th>Ver detalles</th>
                                            </tr>
                                        </thead>
                                        <tbody v-for="user in allUsers">
                                            <tr >
                                                <td>{{ user.name }}</td>
                                                <td>{{ user.email }}</td>
                                                <td v-if="user.state"><span class="label label-success">Activo</span></td>
                                                <td v-else><span class="label label-danger">Inactivo</span></td>
                                                <td> 4</td>
                                                <td>X</td>
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
        this.returnAllUsers()                    
    },
    mounted: function () {
        $( document ).ready(function() {
            $('#tableUsuarios').DataTable()
            //console.log( "ready!" );
        });
    },

    methods: {
        returnAllUsers () {   //Hacer llamado a la API que retorne total usuarios         
            this.$store.dispatch('returnUsers')
                .then(() => console.log('Track loaded...'))
        }
    },
    computed: {
        allUsers () {
            return  this.$store.state.allUsers
        }
    },

}
</script>