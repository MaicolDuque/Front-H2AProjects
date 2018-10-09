<template>
  <div id="app">
    <div v-if="auth">
      <MDheaders></MDheaders>
      <MDmenuLeft></MDmenuLeft>
      <router-view></router-view>

      <MDfooter></MDfooter>
    </div>
    <div v-else>
      <login></login>
    </div>
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
