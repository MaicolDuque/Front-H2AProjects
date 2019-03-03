<template>
    <div class="content-wrapper" style="position:relative">
            <!-- Content Header (Page header) -->
            <section class="content-header">
                <h1>
                    H2A PROJECTS

                </h1>
                <!-- <ol class="breadcrumb">
                    <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>

                </ol> -->
            </section>

            <!-- Main content -->
            <section class="content">
                <!-- Info boxes -->
                <div class="row">

                    <div class="col-md-3 col-sm-6 col-xs-12">
                        <div class="info-box">
                            <span class="info-box-icon bg-red"><i @click="detalleTareas(5)" style="cursor:pointer" class="ion ion-ios-eye"></i></span>

                            <div class="info-box-content">
                                <span class="info-box-text">TAREAS PENDIENTES</span>
                                <span class="info-box-number">{{tasksPending}}</span>
                            </div>
                            <!-- /.info-box-content -->
                        </div>
                        <!-- /.info-box -->
                    </div>
                    <!-- /.col -->

                    <!-- fix for small devices only -->
                    <div class="clearfix visible-sm-block"></div>

                    <div class="col-md-3 col-sm-6 col-xs-12">
                        <div class="info-box">
                            <span class="info-box-icon bg-green"><i @click="detalleTareas(4)" style="cursor:pointer" class="ion ion-ios-eye"></i></span>

                            <div class="info-box-content">
                                <span class="info-box-text">TAREAS FINALIZADAS</span>
                                <span class="info-box-number">{{tasksCompleted}}</span>
                            </div>
                            <!-- /.info-box-content -->
                        </div>
                        <!-- /.info-box -->
                    </div>
                    <!-- /.col -->
                    <div class="col-md-3 col-sm-6 col-xs-12">
                        <div class="info-box">
                            <span class="info-box-icon bg-yellow"><i @click="detalleTareas(3)" style="cursor:pointer" class="ion ion-ios-eye"></i></span>

                            <div class="info-box-content">
                                <span class="info-box-text">TAREAS EN PROCESO</span>
                                <span class="info-box-number">{{tasksReview}}</span>
                            </div>
                            <!-- /.info-box-content -->
                        </div>
                        <!-- /.info-box -->
                    </div>
                    <!-- /.col -->
                </div>
                <!-- /.row -->

                <div class="row">
                    <div class="col-md-12">
                        <div class="box">                            
                            <!-- /.box-header -->
                            <div class="box-body">
                                <div class="row">
                                    <div class="col-md-7">
                                        <p class="text-center">
                                            <strong>Grupo / Usuarios </strong>
                                        </p>
                                       <div class="box-body chart-responsive">
                                          <div class="chart" id="sales-chart" style="height: 300px; position: relative;"></div>
                                        </div>
                                    </div>
                                    <!-- /.col -->
                                    <div class="col-md-5">
                                        <p class="text-center">
                                            <strong>Proyecto / Horas </strong>
                                        </p>

                                        <table id="tableProjectHours" class="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th class="centrar">Proyecto</th>
                                                    <th class="centrar">Horas</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="projectsH in projectsHours" :key="projectsH.id">
                                                    <td>{{projectsH.project}}</td>
                                                    <td class="centrar" v-if="projectsH.cant">{{projectsH.cant}}</td>
                                                    <td class="centrar" v-else>0</td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                    <!-- /.col -->
                                </div>
                                <!-- /.row -->
                            </div>
                           
                        </div>
                        <!-- /.box -->
                    </div>
                    <!-- /.col -->
                </div>
                <!-- /.row -->
            </section>
            <Cargando v-if="cargando"></Cargando>
    </div>
</template>
 <script>
 import Cargando from './Cargando.vue'
 export default {  
    name: 'home',
    components: {Cargando},
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',  
            tasksPending: 0,
            tasksCompleted: 0,
            tasksReview: 0,
            totalTasks: 0,
            groups: {},
            miInfo:  [],
            projectsHours: {},
            cargando: false


        }
    },
    created () {       
        //this.returnAllUsers()
        this.cargando = true;
        let user = this.$store.state.user
        if(user.is_admin == 2){
            this.$store.dispatch('returnTasks')
                .then((res) => this.setearValorTareas())
        }else{
            this.$store.dispatch('returnTasksByGroup', user.group_id )
                .then((res) => this.setearValorTareas())
        }

        this.$store.dispatch('returnUsersCantByGroup')
            .then(res => {
                this.groups = this.$store.state.usersCantByGroup
                this.setearGroups()
                this.Morris()
                
            })
            // .then((res) => $('#tableUsuarios').DataTable())
        this.$store.dispatch('returnTotalProjectHours')
            .then(res => {
                this.projectsHours = res
                
            })
            .then(res => { 
                // $('#tableProjectHours').DataTable()
                $('#tableProjectHours').DataTable( {
                    dom: 'Bfrtip',
                        buttons: [
                            'excel'
                        ]
                } );

                this.cargando = false;
            })

    },
    mounted: function () {                
    //    $('#tableProjectHours').DataTable()
    },

    methods: {
        detalleTareas(idTask) { 
            // this.idTaskType = idTask
            // this.$store.commit("MUTATION_currentTypeTaskDetail", idTask)   
            this.$router.push({
                name: 'detalles-tarea-all',
                params: { id: 0, state: idTask}
            });                 
            //  this.$router.push(`/tarea-detalle/${id}`)
        },
        setearGroups(){            
            let cant = this.cantUserGroups.length                            
            for (let index = 0; index < cant; index++) {
                this.miInfo.push({label: this.cantUserGroups[index].group.name, value: this.cantUserGroups[index].total});
            }
        },
        Morris(){        
            var donut = new Morris.Donut({
                element: 'sales-chart',
                resize: true,
                colors: ["#3c8dbc", "#f56954", "#00a65a"],
                data: this.miInfo,
                hideHover: 'auto'
            });   
                        
        },
       
        setearValorTareas() {           
            this.tasksPending   =  this.$store.state.allTasks.filter(tasks => tasks.state_id == 5).length ,
            this.tasksCompleted = this.$store.state.allTasks.filter(tasks => tasks.state_id == 4).length,
            this.tasksReview    = this.$store.state.allTasks.filter(tasks => tasks.state_id == 3).length,          
            this.totalTasks     = this.$store.state.allTasks.length
        },
        
    },
    watch:{
        username(val){
            this.user = val;
        }
    },
    computed: {        
        porcentagePending(){           
            return (this.tasksPending*100)/this.totalTasks
        },       

        porcentageCompleted(){           
            return (this.tasksCompleted*100)/this.totalTasks
        },

       
        porcentageReview(){            
            return (this.tasksReview*100)/this.totalTasks
        },        
        
        cantUserGroups(){
            return this.$store.state.usersCantByGroup;
        },
        

    },

}
</script>