import Vue from 'vue'
import Vuex from 'vuex'
import userService from './services/user'
import taskService from './services/task'
import groupService from './services/group'
import occupationService from './services/occupation'
import projectService from './services/project'
import sectionService from './services/section'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: '',
        authenticate: false,
        allUsers: {},
        userGroups: {},
        userTasks: {},
        allTasks: {},
        allGroups: {},
        allOccupations: {},
        allProjects: {},
        taskDetail: {},
        sectionProject: {},
        currentProject: {}
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
        },

        // groupsCurrentProject(state) {
        //     return state.currentProject.groups.map(project => project.id)
        // }

    },

    mutations: {
        setAthenticate(state, valor = false) {
            state.authenticate = valor
        },
        addUser(state, infoUser) {
            state.user = infoUser
        },
        MUTATION_addNewUser(state, infoUser) {
            state.allUsers.push(infoUser)
        },
        MUTATION_allUsers(state, infoUser) {
            state.allUsers = infoUser
        },

        MUTATION_userTasks(state, infoUser) {
            state.userTasks = infoUser
        },

        MUTATION_userForGroups(state, infoUser) {
            state.userGroups = infoUser
        },

        MUTATION_detailTask(state, info) {
            state.taskDetail = info
        },

        MUTATION_allTasks(state, infoTasks) {
            state.allTasks = infoTasks
        },
        MUTATION_allGroups(state, info) {
            state.allGroups = info
        },
        MUTATION_allOccupations(state, info) {
            state.allOccupations = info
        },
        MUTATION_allProjects(state, info) {
            state.allProjects = info
        },
        MUTATION_projectDetail(state, info) {
            state.currentProject = info
        },
        MUTATION_sectionsProject(state, info) {
            state.sectionProject = info
        }

    },

    actions: {

        //USERS
        getUserTasks(context, payload) {
            return userService.userTasks(payload.id)
                .then(res => {
                    context.commit('MUTATION_userTasks', res.tasks)
                    return res.tasks
                })
        },

        getUserForGroups(context, payload) {
            return userService.allUsersGroups(payload)
                .then(res => {
                    context.commit('MUTATION_userForGroups', res)
                    return res
                })
        },

        returnUsers(context) {
            return userService.allUsers()
                .then(res => {
                    context.commit('MUTATION_allUsers', res)
                    return res
                })
        },

        addNewUser(context, payload) {
            userService.addUser(payload)
                .then(res => {
                    // context.commit('MUTATION_addNewUser', res)
                    // return res
                    console.log("res=>", res)
                    return userService.allUsers()
                })
                .then(res2 => {
                    context.commit('MUTATION_allUsers', res2)
                        // return res
                })
        },





        //TASKS
        returnTasks(context) {
            return taskService.allTasks()
                .then(res => {
                    context.commit('MUTATION_allTasks', res)
                    return res
                })
        },

        returnDetailTask(context, id) {
            return taskService.detailTask(id)
                .then(res => {
                    context.commit('MUTATION_detailTask', res)
                        //return res
                })
        },



        //GROUPS
        returnGroups(context) {
            return groupService.allGroups()
                .then(res => {
                    context.commit('MUTATION_allGroups', res)
                        //return res
                })
        },




        //OCCUPATIONS
        returnOccupations(context) {
            return occupationService.allOccupations()
                .then(res => {
                    context.commit('MUTATION_allOccupations', res)
                        //return res
                })
        },



        //PROJECTS
        returnProjects(context) {
            return projectService.allProjects()
                .then(res => {
                    context.commit('MUTATION_allProjects', res)
                    return res
                })
        },

        returnProjectDetail(context, id) {
            return projectService.detailProject(id)
                .then(res => {
                    context.commit('MUTATION_projectDetail', res)
                    return res
                })
        },

        returnSectionsProject(context, id) {
            return sectionService.sectionsProject(id)
                .then(res => {
                    context.commit('MUTATION_sectionsProject', res)
                        // return res
                })
        }
    }
})

export default store