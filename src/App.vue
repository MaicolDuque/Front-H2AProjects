<template>
  <div id="app"> 
      
      <div v-if="isAuth">
        <MDheaders></MDheaders>
        <MDmenuLeft></MDmenuLeft> 
        <router-view></router-view>
        <MDfooter></MDfooter>  
      </div>  

      <login v-else></login>   
  </div>
  
</template>

<script>

import MDheaders from "./components/layout/Header.vue"
import MDfooter from "./components/layout/Footer.vue"
import MDmenuLeft from "./components/layout/MenuLeft.vue"
import Login from "./components/Login.vue"

export default {
  name: 'app',
  components: {MDheaders, MDfooter, MDmenuLeft, Login},
  data () {
    return {
      auth: false
    }
  },

  created () {
    //Funcion para que al momento de refrescar la página no se cierrre la sesión
    if(localStorage.token) {
      this.$store.state.authenticate = true      
      this.$store.commit('addUser', JSON.parse(localStorage.user))
    }
    
  },

  computed: {
    isAuth() {
      return this.$store.state.authenticate
    }
  }
}
</script>

<style>
</style>
