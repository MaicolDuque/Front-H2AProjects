<template>
    <div class="content-wrapper" style="position: relative">
            <!-- Content Header (Page header) -->
            <section class="content-header">
                <h1>
                    MIS TAREAS
                </h1>              
            </section>
<!-- {{taskPending}} -->
            <!-- Main content -->
            <section class="content">
                <div class="row">
                    <div class="col-xs-12 ">

                        <div class="info-box bg-yellow">
                            <span class="info-box-icon"><i @click="detalleTareas(userID, 3)" style="cursor:pointer" class="ion ion-ios-eye"></i></span>

                            <div class="info-box-content">
                                <span class="info-box-text">Tareas en proceso</span>
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
                            <span class="info-box-icon"><i @click="detalleTareas(userID, 4)" style="cursor:pointer" class="ion ion-ios-eye"></i></span>

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
                            <span class="info-box-icon"><i @click="detalleTareas(userID, 5)" style="cursor:pointer" class="ion ion-ios-eye"></i></span>

                            <div class="info-box-content">
                                <span class="info-box-text">Tareas pendientes</span>
                                <span class="info-box-number">{{taskPending}}</span>

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

            <Cargando v-if="cargando"></Cargando>
        </div>
</template>

 <script>
import Cargando from './Cargando.vue'

export default {
    name: 'mis-taras', 
    components: {Cargando}, 
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            users: {},
            userID: '',
            totalTasks: 0,
            taskPending: 0,
            porcentagePending: 0,
            completedTasks: 0,
            porcentageCompleted: 0,
            reviewTasks: 0,
            porcentageReview: 0,
            idTaskType: '',
            cargando: false
        }
    },
    created () {       
        //this.returnAllUsers()   
        this.cargando = true     
        this.userID =  this.$route.params.id           
        const idUser = this.$route.params.id
        this.$store.dispatch('getUserTasks', {id: idUser})
            .then((res) => this.setearData())
            .then((res) => this.cargando = false)
    },
    mounted: function () {
        
    },

    methods: {
        // detalleTareas () { 
        //     alert("aca")
        // },
        detalleTareas(id,idTask) { 
            this.idTaskType = idTask
            this.$store.commit("MUTATION_currentTypeTaskDetail", idTask)   
            this.$router.push({
                name: 'detalles-tarea',
                params: { id: id, state: idTask}
            });                 
            //  this.$router.push(`/tarea-detalle/${id}`)
        },
        setearData(){
            this.totalTasks = this.$store.state.userTasks.length
            if(this.totalTasks > 0){
                this.taskPending =  this.$store.state.userTasks.filter(tasks => tasks.state_id == 5).length
                this.porcentagePending = (this.taskPending*100)/this.totalTasks
                this.completedTasks = this.$store.state.userTasks.filter(tasks => tasks.state_id == 4).length   
                this.porcentageCompleted = (this.completedTasks*100)/this.totalTasks
                this.reviewTasks =  this.$store.state.userTasks.filter(tasks => tasks.state_id == 3).length    
                this.porcentageReview =  (this.reviewTasks*100)/this.totalTasks             
            }
        }
    },
    computed: {
            

    },

}
</script>