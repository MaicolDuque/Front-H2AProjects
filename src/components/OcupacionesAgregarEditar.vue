<template>
    <!-- <div id="contentEditar"  style="padding: 10px 47px;position: absolute; width: 50%; height: 50%; top: 0; right: -50%; margin-top: 5%;">                                        -->
    <div >
        <span class="close" @click="ocultarEditar"><i class=" fa fa-close"></i></span>  
        <h3 class="box-title">{{this.titulo}}</h3>   
          
        <form role="form" @submit.prevent="updateAdd">
             <div class="box-body">
                <div class="form-group">
                    <label for="name">Nombre</label>
                    <input type="text" class="form-control" v-model="infoOccupation.name" placeholder="Nombre">
                </div>
                <div class="form-group">
                    <label for="email">Descripción:</label>                    
                    <textarea class="form-control" name="description" id="description" cols="10" rows="2" v-model="infoOccupation.description" />
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
                this.$emit('ocultar');
            }else{
                this.$emit('ocultarAdd');
            }
        },

        

        updateAdd(){
            // console.log("Actulizar=>", this.detalleSeccion)
            if(this.edit == 1){
                this.$store.dispatch('updateOccupation',this.infoOccupation)
                    .then((res) => this.ocultarEditar())
            }else{
                this.$store.dispatch('addNewOccupation', this.infoOccupation)
                    .then((res2)=> this.ocultarEditar())                
            }
        },
        
    },
    computed: {             
        infoOccupation(){
            return this.$store.state.currentEditOccupation
        },                        
    },

}
</script>