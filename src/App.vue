<template>
  <div id="app">
    <MDheaders></MDheaders>
    <MDmenuLeft></MDmenuLeft>
    <router-view></router-view>

    <MDfooter></MDfooter>
  </div>
  
</template>

<script>

import MDheaders from "./components/layout/Header.vue"
import MDfooter from "./components/layout/Footer.vue"
import MDmenuLeft from "./components/layout/MenuLeft.vue"

export default {
  name: 'app',
  components: {MDheaders, MDfooter, MDmenuLeft},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
</style>
