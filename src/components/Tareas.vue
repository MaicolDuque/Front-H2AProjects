<template>
    <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <section class="content-header">
                <h1>
                    MIS TAREAS
                </h1>              
            </section>
{{getTaskPending}}
            <!-- Main content -->
            <section class="content">
                <div class="row">
                    <div class="col-xs-12 ">

                        <div class="info-box bg-yellow">
                            <span class="info-box-icon"><i class="ion ion-ios-eye"></i></span>

                            <div class="info-box-content">
                                <span class="info-box-text">Tareas en revisión</span>
                                <span class="info-box-number">{{reviewTasks}}</span>

                                <div class="progress">
                                    <div class="progress-bar" style="width: 50%"></div>
                                </div>
                                <span class="progress-description">
                                50% Increase in 30 Days
                              </span>
                            </div>
                            <!-- /.info-box-content -->
                        </div>


                        <!-- /.info-box -->
                        <div class="info-box bg-green">
                            <span class="info-box-icon"><i class="ion ion-ios-eye"></i></span>

                            <div class="info-box-content">
                                <span class="info-box-text">Tareas finalizadas</span>
                                <span class="info-box-number">{{completedTasks}}</span>

                                <div class="progress">
                                    <div class="progress-bar" style="width: 20%"></div>
                                </div>
                                <span class="progress-description">
                                20% Increase in 30 Days
                              </span>
                            </div>
                            <!-- /.info-box-content -->
                        </div>

                        
                        <!-- /.info-box -->
                        <div class="info-box bg-red">
                            <span class="info-box-icon"><i class="ion ion-ios-eye"></i></span>

                            <div class="info-box-content">
                                <span class="info-box-text">Tareas pendientes</span>
                                <span class="info-box-number">{{getTaskPending}}</span>

                                <div class="progress">
                                    <div class="progress-bar" style="width: 70%"></div>
                                </div>
                                <span class="progress-description">
                                70% Increase in 30 Days
                              </span>
                            </div>
                            <!-- /.info-box-content -->
                        </div>
                        <!-- /.info-box -->


                    </div>
                    <!-- /.col -->
                </div>
                <!-- /.row -->
            </section>
            <!-- /.content -->
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
        const idUser = this.$route.params.id
        this.$store.dispatch('getUserTasks', {id: idUser})
            .then((res) => console.log('Res->', res))
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
        getTaskPending () {           
            return  this.$store.state.userTasks.filter(tasks => tasks.state_id == 5).length           
        },
        completedTasks (){
            return  this.$store.state.userTasks.filter(tasks => tasks.state_id == 4).length           
        },
        reviewTasks (){
            return  this.$store.state.userTasks.filter(tasks => tasks.state_id == 3).length           
        }
    },

}
</script>