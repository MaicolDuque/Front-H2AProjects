<template>
    <!-- <div id="contentEditar"  style="padding: 10px 47px;position: absolute; width: 50%; height: 50%; top: 0; right: -50%; margin-top: 5%;">                                        -->
    <div >
        <span class="close" @click="ocultarEditar"><i class=" fa fa-close"></i></span>  
        <h3 class="box-title">{{this.titulo}}</h3>   
          
        <form role="form" @submit.prevent="updateAdd">
             <div class="box-body">
                <div class="form-group">
                    <label for="name">Nombre completo</label>
                    <input type="text" class="form-control" v-model="infoUser.name" placeholder="Nombre completo">
                </div>
                <div class="form-group">
                    <label for="email">Correo electrónico</label>
                    <input type="email" class="form-control" v-model="infoUser.email" placeholder="Correo electrónico">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control"  v-model="infoUser.password" placeholder="Password">
                </div>
                <div class="form-group">
                    <label for="password">Grupo:</label>
                    <select class="form-control" name="group" v-model="infoUser.group_id" >
                        <option v-for="group in groups" :key="group.id" :value="group.id">
                            {{group.name}}
                        </option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="password">Ocupacion:</label>
                    <select class="form-control" name="occupation" v-model="infoUser.occupation_id" >
                        <option v-for="occupation in occupations" :key="occupation.id" :value="occupation.id">
                            {{occupation.name}}
                        </option>
                    </select>
                </div>
                <div class="form-group">
                <label for="exampleInputFile">Foto</label>
                <input  type="file" id="exampleInputFile" name="image" @change="createImage">

                <p class="help-block">Seleccione la foto de perfil.</p>
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
                this.$store.dispatch('updateUser',this.infoUser )
                    .then((res) => this.ocultarEditar())
            }else{
                this.$store.dispatch('addNewSection',this.infoUser )
                    .then((res) => this.ocultarEditar())
            }
        },

        createImage(e) {
            console.log(e.target.files[0])
            let reader = new FileReader();
            reader.readAsDataURL(e.target.files[0])
            let vm = this;
            reader.onload = (e) => {                
                this.$store.commit('MUTATION_updstePictureUser', e.target.result)
                // vm.infoUser.picture = e.target.result;
            };
            // reader.readAsDataURL(file);
            console.log(vm.infoUser.picture)
        },
    },
    computed: {      
        detalleSeccion(){
            return this.$store.state.currentSection
        },

        users(){
            return this.$store.state.userGroups
        },

        infoUser(){
            return this.$store.state.currentEditUser
        },
        occupations(){
            return this.$store.state.allOccupations
        },

        groups(){
            return this.$store.state.allGroups
        }
        
    },

}
</script>