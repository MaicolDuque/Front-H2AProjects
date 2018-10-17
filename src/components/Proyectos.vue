<template>
    
  <div class="content-wrapper">
            <div id="secciones" style="padding: 1% 4%; ">
                <!-- Content Header (Page header) -->
                <section class="content-header">
                    <div class="row">
                        <div class="col-xs-8 col-md-8">
                            <h1>
                                Proyecto 1
                            </h1>

                        </div>
                        <div class="col-xs-8 col-md-4" style="padding-top: 1.9em;">
                            <!-- <div class="col-md-6">
                                <button type="button" class="btn btn-block btn-info">Agregar tarea</button>
                            </div> -->
                            
                                <button type="button" class="btn btn-block btn-info">Agregar sección</button>
                            
                        </div>

                    </div>
                    <!-- <ol class="breadcrumb">
                    <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
                    <li><a href="#">Tables</a></li>
                    <li class="active">Data tables</li>
                </ol> -->
                </section>

                <!-- Main content -->
                <section class="content">
                    <div class="modal fade" id="modal-default">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span></button>
                                    <h4 class="modal-title">Editar sección</h4>
                                </div>
                                <div class="modal-body">
                                    <div class="box box-primary">
                                        <div class="box-header with-border">
                                        <h3 class="box-title">Quick Example</h3>
                                        </div>
                                        <!-- /.box-header -->
                                        <!-- form start -->
                                        <form role="form">
                                        <div class="box-body">
                                            <div class="form-group">
                                            <label for="exampleInputEmail1">Email address</label>
                                            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
                                            </div>
                                            <div class="form-group">
                                            <label for="exampleInputPassword1">Password</label>
                                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                                            </div>
                                            
                                        </div>
                                        <!-- /.box-body -->

                                        <div class="box-footer">
                                            <button type="submit" class="btn btn-primary">Submit</button>
                                        </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                            <!-- /.modal-content -->
                        </div>
                    <!-- /.modal-dialog -->
                    </div>


                    <div class="row">
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-xs-12 ">

                                    <!-- TABLE: LATEST ORDERS -->
                                    <div class="box box-info">
                                        <div class="box-header with-border">

                                            <h3 class="box-title">Sección 1</h3>
                                            <div class="box-tools pull-right">
                                                <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                                                <!-- <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button> -->
                                            </div>
                                            <i class="fa fa-pencil-square-o editarSeccion" data-toggle="modal" data-target="#modal-default" aria-hidden="true"></i>
                                        </div>
                                        <!-- /.box-header -->
                                        <div class="box-body">
                                            <div class="table-responsive">
                                                <table class="table no-margin">
                                                    <thead>
                                                        <tr>
                                                            <th>ID</th>
                                                            <th>Tarea</th>
                                                            <th>Estado</th>
                                                            <th>Popularity</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><a href="pages/examples/invoice.html">OR9842</a></td>
                                                            <td>Call of Duty IV</td>
                                                            <td><span class="label label-success">Shipped</span></td>
                                                            <td>
                                                                <div class="sparkbar" data-color="#00a65a" data-height="20">90,80,90,-70,61,-83,63</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href="pages/examples/invoice.html">OR1848</a></td>
                                                            <td>Samsung Smart TV</td>
                                                            <td><span class="label label-warning">Pending</span></td>
                                                            <td>
                                                                <div class="sparkbar" data-color="#f39c12" data-height="20">90,80,-90,70,61,-83,68</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href="pages/examples/invoice.html">OR7429</a></td>
                                                            <td>iPhone 6 Plus</td>
                                                            <td><span class="label label-danger">Delivered</span></td>
                                                            <td>
                                                                <div class="sparkbar" data-color="#f56954" data-height="20">90,-80,90,70,-61,83,63</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href="pages/examples/invoice.html">OR7429</a></td>
                                                            <td>Samsung Smart TV</td>
                                                            <td><span class="label label-info">Processing</span></td>
                                                            <td>
                                                                <div class="sparkbar" data-color="#00c0ef" data-height="20">90,80,-90,70,-61,83,63</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href="pages/examples/invoice.html">OR1848</a></td>
                                                            <td>Samsung Smart TV</td>
                                                            <td><span class="label label-warning">Pending</span></td>
                                                            <td>
                                                                <div class="sparkbar" data-color="#f39c12" data-height="20">90,80,-90,70,61,-83,68</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href="pages/examples/invoice.html">OR7429</a></td>
                                                            <td>iPhone 6 Plus</td>
                                                            <td><span class="label label-danger">Delivered</span></td>
                                                            <td>
                                                                <div class="sparkbar" data-color="#f56954" data-height="20">90,-80,90,70,-61,83,63</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href="pages/examples/invoice.html">OR9842</a></td>
                                                            <td>Call of Duty IV</td>
                                                            <td><span class="label label-success">Shipped</span></td>
                                                            <td>
                                                                <div class="sparkbar" data-color="#00a65a" data-height="20">90,80,90,-70,61,-83,63</div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <!-- /.table-responsive -->
                                        </div>
                                        <!-- /.box-body -->
                                        <div class="box-footer clearfix">
                                            <a href="javascript:void(0)" class="btn btn-sm btn-info btn-flat pull-left">Agregar tarea</a>
                                            <!-- <a href="javascript:void(0)" class="btn btn-sm btn-default btn-flat pull-right">View All Orders</a> -->
                                        </div>
                                        <!-- /.box-footer -->
                                    </div>
                                    <!-- /.box -->


                                </div>
                                <!-- /.col -->
                            </div>
                          
        
                            <div class="row">
                                <div class="col-xs-12 ">

                                    <!-- TABLE: LATEST ORDERS -->
                                    <div class="box box-info">
                                        <div class="box-header with-border">
                                            <h3 class="box-title">Sección 2</h3>

                                            <div class="box-tools pull-right">
                                                <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                                                <!-- <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button> -->
                                            </div>
                                            <i class="fa fa-pencil-square-o editarSeccion" aria-hidden="true"></i>
                                        </div>
                                        <!-- /.box-header -->
                                        <div class="box-body">
                                            <div class="table-responsive">
                                                <table class="table no-margin">
                                                    <thead>
                                                        <tr>
                                                            <th>ID</th>
                                                            <th>Tarea</th>
                                                            <th>Estado</th>
                                                            <th>Popularity</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><a href="pages/examples/invoice.html">OR9842</a></td>
                                                            <td>Call of Duty IV</td>
                                                            <td><span class="label label-success">Shipped</span></td>
                                                            <td>
                                                                <div class="sparkbar" data-color="#00a65a" data-height="20">90,80,90,-70,61,-83,63</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href="pages/examples/invoice.html">OR1848</a></td>
                                                            <td>Samsung Smart TV</td>
                                                            <td><span class="label label-warning">Pending</span></td>
                                                            <td>
                                                                <div class="sparkbar" data-color="#f39c12" data-height="20">90,80,-90,70,61,-83,68</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href="pages/examples/invoice.html">OR7429</a></td>
                                                            <td>iPhone 6 Plus</td>
                                                            <td><span class="label label-danger">Delivered</span></td>
                                                            <td>
                                                                <div class="sparkbar" data-color="#f56954" data-height="20">90,-80,90,70,-61,83,63</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href="pages/examples/invoice.html">OR7429</a></td>
                                                            <td>Samsung Smart TV</td>
                                                            <td><span class="label label-info">Processing</span></td>
                                                            <td>
                                                                <div class="sparkbar" data-color="#00c0ef" data-height="20">90,80,-90,70,-61,83,63</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href="pages/examples/invoice.html">OR1848</a></td>
                                                            <td>Samsung Smart TV</td>
                                                            <td><span class="label label-warning">Pending</span></td>
                                                            <td>
                                                                <div class="sparkbar" data-color="#f39c12" data-height="20">90,80,-90,70,61,-83,68</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href="pages/examples/invoice.html">OR7429</a></td>
                                                            <td>iPhone 6 Plus</td>
                                                            <td><span class="label label-danger">Delivered</span></td>
                                                            <td>
                                                                <div class="sparkbar" data-color="#f56954" data-height="20">90,-80,90,70,-61,83,63</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href="pages/examples/invoice.html">OR9842</a></td>
                                                            <td>Call of Duty IV</td>
                                                            <td><span class="label label-success">Shipped</span></td>
                                                            <td>
                                                                <div class="sparkbar" data-color="#00a65a" data-height="20">90,80,90,-70,61,-83,63</div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <!-- /.table-responsive -->
                                        </div>
                                        <!-- /.box-body -->
                                        <div class="box-footer clearfix">
                                            <a href="javascript:void(0)" class="btn btn-sm btn-info btn-flat pull-left">Place New Order</a>
                                            <a href="javascript:void(0)" class="btn btn-sm btn-default btn-flat pull-right">View All Orders</a>
                                        </div>
                                        <!-- /.box-footer -->
                                    </div>
                                    <!-- /.box -->


                                </div>
                                <!-- /.col -->
                            </div>
                            <!-- /.row -->                           
                        </div>                        
                    </div>
                    
                </section>
                <!-- /.content -->
            </div>
        </div>
</template>


<script>
 export default {  
    data () {
        return {
        msg: 'Welcome to Your Vue.js App'
        }
    },
    mounted: function () {
       $('.box').boxWidget('toggle')
    }
}
</script>
