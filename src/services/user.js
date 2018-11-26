import HTTP from './config'

const userService = {}

userService.search = function(q) {
    const type = 'track'

    return HTTP.get('/search', {
            params: { q, type }
        })
        .then(res => res.data)
}

userService.userTasks = function(id) {
    return HTTP.get(`/user_tasks/${id}`)
        .then(res => res.data)
}

userService.allUsers = function() {
    return HTTP.get('/users')
        .then(res => res.data)
}

userService.allUsersGroups = function(data) {
    return HTTP.post('/users/groups', { data: data })
        .then(res => res.data)
}

userService.addUser = function(data) {
    return HTTP.post('/users', data)
        .then(res => res)
}

export default userService