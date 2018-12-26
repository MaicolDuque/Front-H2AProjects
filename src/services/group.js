// import HTTP from './config'
import ApiService from './api.service'


const groupService = {}



groupService.detailTask = function(id) {
    return ApiService.get(`/groups/${id}`)
        .then(res => res.data)
}

groupService.updateGroup = function(info) {
    return ApiService.put(`/groups/${info.id}`, info)
        .then(res => res.data)
}

groupService.addGroup = function(info) {
    return ApiService.post(`/groups`, info)
        .then(res => res.data)
}

groupService.allGroups = function() {
    return ApiService.get('/groups')
        .then(res => res.data)
}

export default groupService