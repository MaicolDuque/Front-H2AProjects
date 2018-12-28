<template>
    <div class="content-wrapper">
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
                            <span class="info-box-icon bg-red"><i class="ion ion-ios-eye"></i></span>

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
                            <span class="info-box-icon bg-green"><i class="ion ion-ios-eye"></i></span>

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
                            <span class="info-box-icon bg-yellow"><i class="ion ion-ios-eye"></i></span>

                            <div class="info-box-content">
                                <span class="info-box-text">TAREAS EN REVISIÓN</span>
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
                            <!-- ./box-body -->
                            <div class="box-footer">
                                <div class="row">
                                    <div class="col-sm-3 col-xs-6">
                                        <div class="description-block border-right">
                                            <span class="description-percentage text-green"><i class="fa fa-caret-up"></i> 17%</span>
                                            <h5 class="description-header">$35,210.43</h5>
                                            <span class="description-text">TOTAL REVENUE</span>
                                        </div>
                                        <!-- /.description-block -->
                                    </div>
                                    <!-- /.col -->
                                    <div class="col-sm-3 col-xs-6">
                                        <div class="description-block border-right">
                                            <span class="description-percentage text-yellow"><i class="fa fa-caret-left"></i> 0%</span>
                                            <h5 class="description-header">$10,390.90</h5>
                                            <span class="description-text">TOTAL COST</span>
                                        </div>
                                        <!-- /.description-block -->
                                    </div>
                                    <!-- /.col -->
                                    <div class="col-sm-3 col-xs-6">
                                        <div class="description-block border-right">
                                            <span class="description-percentage text-green"><i class="fa fa-caret-up"></i> 20%</span>
                                            <h5 class="description-header">$24,813.53</h5>
                                            <span class="description-text">TOTAL PROFIT</span>
                                        </div>
                                        <!-- /.description-block -->
                                    </div>
                                    <!-- /.col -->
                                    <div class="col-sm-3 col-xs-6">
                                        <div class="description-block">
                                            <span class="description-percentage text-red"><i class="fa fa-caret-down"></i> 18%</span>
                                            <h5 class="description-header">1200</h5>
                                            <span class="description-text">GOAL COMPLETIONS</span>
                                        </div>
                                        <!-- /.description-block -->
                                    </div>
                                </div>
                                <!-- /.row -->
                            </div>
                            <!-- /.box-footer -->
                        </div>
                        <!-- /.box -->
                    </div>
                    <!-- /.col -->
                </div>
                <!-- /.row -->
            </section>
    </div>
</template>
 <script>
 export default {  
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',  
            tasksPending: 0,
            tasksCompleted: 0,
            tasksReview: 0,
            totalTasks: 0,
            groups: {},
            miInfo:  [],
            projectsHours: {}


        }
    },
    created () {       
        //this.returnAllUsers()
        
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
            })

    },
    mounted: function () {                
    //    $('#tableProjectHours').DataTable()
    },

    methods: {
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