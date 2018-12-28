<template>
    <div class="login-box">
  <div class="login-logo" style="color: #fff">
    <b>Login</b>
  </div>
  <!-- /.login-logo -->
  <div class="login-box-body">
    <p class="login-box-msg">Sign in to start your session</p>
    <div class="alert alert-danger" v-if="error">{{ error }}</div>
    <form @submit.prevent="login">
      <div class="form-group has-feedback">
        <input v-model="email" type="email" class="form-control" placeholder="Email">
        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
      </div>
      <div class="form-group has-feedback">
        <input v-model="password" type="password" class="form-control" placeholder="Password">
        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
      </div>
      <div class="row">
        
        <!-- /.col -->
        <div class="col-xs-4">
          <button type="submit" class="btn btn-primary btn-block btn-flat">Ingresar</button>
        </div>

        <!-- <div class="col-xs-4">
          <button type="button" @click="loginFailed" class="btn btn-primary btn-block btn-flat">Ingresar</button>
        </div> -->
        <!-- /.col -->
      </div>
    </form>

    <!-- <a href="#">I forgot my password</a><br>
    <a href="register.html" class="text-center">Register a new membership</a> -->

  </div>
  <!-- /.login-box-body -->
</div>
</template>

<script>
import axios from 'axios';
import HTTP from '../services/config.js';
import { TokenService } from '../services/storage.service'
import ApiService from '../services/api.service'


export default {

  data () {
        return {
            email: '',
            password: '',
            error: false
        }
  },

  methods: {
    login() {
      // console.log(this.email)
      // console.log(this.password)
      var credentials = {
          email: this.email,
          password: this.password
        }
        console.log(credentials)
      ApiService.post('auth_login', credentials)
        .then(response => {
          console.log("res=>", response)
            this.loginSuccessful(response)
            // console.log(response)
        })
        .catch(e => {
          this.loginFailed()
          console.log("error")
        })
    },
    loginSuccessful (req) {      
      if (!req.data.token) {
        this.loginFailed()
        return
      }
      // console.log(req.data.user)

      let us = req.data.user

      TokenService.saveToken(req.data.token)
      TokenService.saveRefreshToken(req.data.token)
      ApiService.setHeader()
      // NOTE: We haven't covered this yet in our ApiService 
      //       but don't worry about this just yet - I'll come back to it later
      ApiService.mount401Interceptor();
      axios.defaults.headers.common["Authorization"] = `Bearer ${TokenService.getToken()}`
      // console.log(xios.defaults.headers)
      // localStorage.token = req.data.token
      localStorage.user  = JSON.stringify(req.data.user)
      // localStorage.user  = req.data.user
     
      this.error = false
      this.$store.commit('setAthenticate', true)
      this.$store.commit('addUser', req.data.user)

      this.$router.push('/')
    },

    loginFailed () {
      this.error = 'Login failed!'
      this.$store.commit('setAthenticate', false)

      TokenService.removeToken()
      TokenService.removeRefreshToken()
      // NOTE: Again, we'll cover the 401 Interceptor a bit later. 
      ApiService.unmount401Interceptor()

      // delete localStorage.token
      this.$router.push('/')
    }
  }

    
    
}
</script>
