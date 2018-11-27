<template>
    <!-- <div id="contentEditar"  style="padding: 10px 47px;position: absolute; width: 50%; height: 50%; top: 0; right: -50%; margin-top: 5%;">                                        -->
    <div >
        <span class="close" @click="ocultarEditar"><i class=" fa fa-close"></i></span>  
        <h3 class="box-title">{{this.titulo}}</h3>   
          
        <form role="form" @submit.prevent="updateAdd">
            <div class="box-body">
                
                <div class="form-group">                   
                    <label for="nameTask">Nombre: </label>
                    <input type="text" class="form-control" id="nameTask" v-model="detalleSeccion.name">
                    </div>

                    
                    
                    <div class="form-group">
                    <label for="description">Descripción: </label>
                    <textarea class="form-control" name="description" id="description" cols="10" rows="2" v-model="detalleSeccion.description" />
                    </div>
                                                        

                    <div class="form-group">
                    <label for="duration">Orden: </label>
                    <input type="number" class="form-control" id="duration" v-model="detalleSeccion.order">
                    </div>                       
            </div>
       

            <div class="box-footer">
                <button type="submit" class="btn btn-primary">{{this.textButton}}</button>
            </div>
        </form>
    </div>
    <!-- </div> -->
</template>

 <script>



 export default {  
    props: ['edit', 'titulo', 'textButton'],
    data () {
        return {
            detailTask: {},
            
        }
    },
    created () {       
    },
    mounted: function () {        
       //console.log(this.edit)
    },
    updated: function () {
        // console.log(this.edit)
    },

    methods: {       
        ocultarEditar() {                      
            if(this.edit == 1){
                this.$emit('ocultarSection');
            }else{
                this.$emit('ocultarSectionAdd');
            }
        },

        updateAdd(){
            // console.log("Actulizar=>", this.detalleSeccion)
            if(this.edit == 1){
                this.$store.dispatch('updateTask',this.detalleSeccion )
                    .then((res) => this.ocultarEditar())
            }else{
                this.$store.dispatch('addTask',this.detalleSeccion )
                    .then((res) => this.ocultarEditar())
            }
        }
    },
    computed: {      
        detalleSeccion(){
            return this.$store.state.currentSection
        },

        users(){
            return this.$store.state.userGroups
        }
        
    },

}
</script>