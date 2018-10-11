import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        nombre: 'Maicol Duque',
        authenticate: false
    },

    getters: {
        isAuthenticated(state) {
            return `${state.authenticate}`
        }
    },

    mutations: {
        setAthenticate(state) {
            state.authenticate = true
        }
    },

    actions: {
        getTrackById(context, payload) {
            return trackService.getById(payload.id)
                .then(res => {
                    context.commit('setTrack', res)
                    return res
                })
        }
    }
})

export default store