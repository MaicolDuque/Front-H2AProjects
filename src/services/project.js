// import HTTP from './config'
import ApiService from './api.service'


const projectService = {}



projectService.detailProject = function(id) {
    return ApiService.get(`/projects/${id}`)
        .then(res => res.data)
}

projectService.allProjects = function() {
    return ApiService.get('/projects')
        .then(res => res.data)
}

projectService.totalProjectHours = function() {
    return ApiService.get('/project-hours')
        .then(res => res.data)
}

projectService.updateProject = function(info) {
    return ApiService.put(`/projects/${info.content.id}`, info)
        .then(res => res.data)
}

projectService.addProject = function(info) {
    return ApiService.post(`/projects`, info)
        .then(res => res.data)
}

export default projectService