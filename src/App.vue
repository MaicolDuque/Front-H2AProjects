<template>
  <div id="app">  
      <MDheaders></MDheaders>
      <MDmenuLeft></MDmenuLeft> 
      <login></login>   
      <router-view></router-view>
      <MDfooter></MDfooter>  
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
      auth: true
    }
  }
}
</script>

<style>
</style>
