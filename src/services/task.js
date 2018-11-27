import HTTP from './config'

const taskService = {}



taskService.detailTask = function(id) {
    return HTTP.get(`/tasks/${id}`)
        .then(res => res.data)
}


taskService.updateTask = function(info) {
    return HTTP.put(`/tasks/${info.id}`, info)
        .then(res => res.data)
}

taskService.addTask = function(info) {
    return HTTP.post(`/tasks`, info)
        .then(res => res.data)
}

taskService.allTasks = function() {
    return HTTP.get('/tasks')
        .then(res => res.data)
}

export default taskService