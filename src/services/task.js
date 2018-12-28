// import HTTP from './config'
import ApiService from './api.service'

const taskService = {}



taskService.detailTask = function(id) {
    return ApiService.get(`/tasks/${id}`)
        .then(res => res.data)
}


taskService.updateTask = function(info) {
    return ApiService.put(`/tasks/${info.id}`, info)
        .then(res => res.data)
}

taskService.addTask = function(info) {
    return ApiService.post(`/tasks`, info)
        .then(res => res.data)
}

taskService.allTasks = function() {
    return ApiService.get('/tasks')
        .then(res => res.data)
}

taskService.allTasksByGroup = function(idGrupo) {
    return ApiService.get(`/tasksByGroup/${idGrupo}`)
        .then(res => res.data)
}

export default taskService