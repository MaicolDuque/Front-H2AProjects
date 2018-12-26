// import HTTP from './config'
import ApiService from './api.service'

const userService = {}

userService.search = function(q) {
    const type = 'track'

    return ApiService.get('/search', {
            params: { q, type }
        })
        .then(res => res.data)
}

userService.userTasks = function(id) {
    return ApiService.get(`/user_tasks/${id}`)
        .then(res => res.data)
}

userService.allUsers = function() {
    return ApiService.get('/users')
        .then(res => res.data)
}

userService.usersCantByGroup = function() {
    return ApiService.get('cant/users/by-group')
        .then(res => res.data)
}

userService.allUsersGroups = function(data) {
    return ApiService.post('/users/groups', { data: data })
        .then(res => res.data)
}

userService.addUser = function(data) {
    return ApiService.post('/users', data)
        .then(res => res)
}

userService.updateUser = function(data) {
    return ApiService.put(`users/${data.info.id}`, data)
        .then(res => res)
}

export default userService