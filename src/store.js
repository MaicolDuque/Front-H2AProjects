import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: '',
        authenticate: false
    },

    getters: {
        isAuthenticated(state) {
            return `${state.authenticate}`
        },

    },

    mutations: {
        setAthenticate(state, valor = false) {
            state.authenticate = valor
        },
        addUser(state, infoUser) {
            state.user = infoUser
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