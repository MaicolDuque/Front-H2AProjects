import axios from 'axios'
import { TokenService } from '../services/storage.service'

const ApiService = {
    _401interceptor: null,

    init(baseURL) {
        axios.defaults.baseURL = baseURL;

    },

    setHeader() {
        axios.defaults.headers.common["Authorization"] = `Bearer ${TokenService.getToken()}`
    },

    removeHeader() {
        axios.defaults.headers.common = {}
    },

    get(resource) {
        return axios.get(resource)
    },

    post(resource, data) {
        return axios.post(resource, data)
    },

    put(resource, data) {
        return axios.put(resource, data)
    },

    delete(resource) {
        return axios.delete(resource)
    },

    /**
     * Perform a custom Axios request.
     *
     * data is an object containing the following properties:
     *  - method
     *  - url
     *  - data ... request payload
     *  - auth (optional)
     *    - username
     *    - password
     **/
    customRequest(data) {
        return axios(data)
    },

    mount401Interceptor() {
        this._401interceptor = axios.interceptors.response.use((response) => { // intercept the global error
            return response
        }, function(error) {
            let originalRequest = error.config
            if (error.response.status === 401) { // if the error is 401 and hasent already been retried
                // console.log("Entro!!!!!")
                // this.error = 'Login failed!'
                // this.$store.commit('setAthenticate', false)
                // this.$store.commit('MUTATION_allUsers', {})
                TokenService.removeToken()
                TokenService.removeRefreshToken()
                    // NOTE: Again, we'll cover the 401 Interceptor a bit later. 
                    // ApiService.unmount401Interceptor()
                    // this.$router.push('/')
                    // originalRequest._retry = true // now it can be retried 
                    // return Vue.axios.post('/users/token', null).then((data) => {
                    //     store.dispatch('authfalse')
                    //     store.dispatch('authtruth', data.data)
                    //     originalRequest.headers['Authorization'] = 'Bearer ' + store.state.token // new header new token
                    //     return Vue.axios(originalRequest) // retry the request that errored out
                    // }).catch((error) => {
                    //     for (let i = 0; i < error.response.data.errors.length; i++) {
                    //         if (error.response.data.errors[i] === 'TOKEN-EXPIRED') {
                    //             auth.logout()
                    //             return
                    //         }
                    //     }
                    // })
            }
            // if (error.response.status === 404 && !originalRequest._retry) {
            //     originalRequest._retry = true
            //     window.location.href = '/'
            //     return
            // }
            // Do something with response error
            return Promise.reject(error)
        })
    },

    unmount401Interceptor() {
        // Eject the interceptor
        axios.interceptors.response.eject(this._401interceptor)
    }
}

export default ApiService