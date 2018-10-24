import HTTP from './config'

const userService = {}

userService.search = function(q) {
    const type = 'track'

    return HTTP.get('/search', {
            params: { q, type }
        })
        .then(res => res.data)
}

userService.getById = function(id) {
    return HTTP.get(`/tracks/${id}`)
        .then(res => res.data)
}

userService.allUsers = function() {
    return HTTP.get('/users')
        .then(res => res.data)
}

export default userService