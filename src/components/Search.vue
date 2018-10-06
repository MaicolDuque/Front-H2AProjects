<template>
  <div>
    <MDmenuLeft></MDmenuLeft>
    <MDhome></MDhome>
  </div>
</template>

<script>

import MDmenuLeft from "../components/MenuLeft.vue"
import MDhome from "../components/Home.vue"

export default {
 name: 'app',
  components: { MDmenuLeft, MDhome },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
</style>
