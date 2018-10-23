import Vue from 'vue'
import Vuex from 'vuex'
import userService from './services/user'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: '',
        authenticate: false,
        allUsers: {}
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
        },
        MUTATION_allUsers(state, infoUser) {
            state.allUsers = infoUser
        }

    },

    actions: {
        getTrackById(context, payload) {
            return userService.getById(payload.id)
                .then(res => {
                    context.commit('setTrack', res)
                    return res
                })
        },
        returnUsers(context) {
            return userService.allUsers()
                .then(res => {
                    context.commit('MUTATION_allUsers', res)
                    return res
                })
        }
    }
})

export default store