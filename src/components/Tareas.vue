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
                                    <div class="progress-bar" :style="{width: porcentageReview+'%'}"></div>
                                </div>
                                <span class="progress-description">
                                {{porcentageReview}}% En revisión
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
                                    <div class="progress-bar" :style="{width: porcentageCompleted+'%'}"></div>
                                </div>
                                <span class="progress-description">
                                {{porcentageCompleted}}% Finalizadas
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
                                    <div class="progress-bar" :style="{width: porcentagePending+'%'}"></div>
                                </div>
                                <span class="progress-description">
                                {{porcentagePending}}% Pendientes
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
        
    },

    methods: {
        returnAllUsers () { 
        },

        detallesTarea(id) {                     
            this.$router.push(`/tareas/${id}`)
        }
    },
    computed: {
        totalTasks() {
            return  this.$store.state.userTasks.length
        },
        getTaskPending () {                       
            return  this.$store.state.userTasks.filter(tasks => tasks.state_id == 5).length           
        },
        porcentagePending(){
            return (this.getTaskPending*100)/this.totalTasks
        },
        completedTasks (){
            return  this.$store.state.userTasks.filter(tasks => tasks.state_id == 4).length           
        },

        porcentageCompleted(){
            return (this.completedTasks*100)/this.totalTasks
        },

        reviewTasks (){
            return  this.$store.state.userTasks.filter(tasks => tasks.state_id == 3).length           
        },

        porcentageReview(){
            return (this.reviewTasks*100)/this.totalTasks
        }

    },

}
</script>