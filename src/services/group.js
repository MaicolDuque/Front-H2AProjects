import HTTP from './config'

const groupService = {}



groupService.detailTask = function(id) {
    return HTTP.get(`/groups/${id}`)
        .then(res => res.data)
}

groupService.allGroups = function() {
    return HTTP.get('/groups')
        .then(res => res.data)
}

export default groupService