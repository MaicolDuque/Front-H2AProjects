import Vue from 'vue'
import Vuex from 'vuex'
import userService from './services/user'
import taskService from './services/task'
import groupService from './services/group'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: '',
        authenticate: false,
        allUsers: {},
        userTasks: {},
        allTasks: {},
        allGroups: {}
    },

    getters: {
        isAuthenticated(state) {
            return `${state.authenticate}`
        },

        returnTasksPending(state) {
            // family.filter(person => person.age > 18);
            // difficult_tasks = tasks.filter((task) => task.duration >= 120);
            // return state.userTasks.filter(tasks => tasks.state_id == 3)

            return state.userTasks
        }

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
        },

        MUTATION_userTasks(state, infoUser) {
            state.userTasks = infoUser
        },

        MUTATION_allTasks(state, infoTasks) {
            state.allTasks = infoTasks
        },
        MUTATION_allGroups(state, infoTasks) {
            state.allGroups = infoTasks
        }


    },

    actions: {
        getUserTasks(context, payload) {
            return userService.userTasks(payload.id)
                .then(res => {
                    context.commit('MUTATION_userTasks', res.tasks)
                    return res.tasks
                })
        },
        returnUsers(context) {
            return userService.allUsers()
                .then(res => {
                    context.commit('MUTATION_allUsers', res)
                    return res
                })
        },

        returnTasks(context) {
            return taskService.allTasks()
                .then(res => {
                    context.commit('MUTATION_allTasks', res)
                    return res
                })
        },
        returnGroups(context) {
            return groupService.allGroups()
                .then(res => {
                    context.commit('MUTATION_allGroups', res)
                        //return res
                })
        }
    }
})

export default store