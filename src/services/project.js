import HTTP from './config'

const projectService = {}



projectService.detailProject = function(id) {
    return HTTP.get(`/projects/${id}`)
        .then(res => res.data)
}

projectService.allProjects = function() {
    return HTTP.get('/projects')
        .then(res => res.data)
}

projectService.updateProject = function(info) {
    return HTTP.put(`/projects/${info.content.id}`, info)
        .then(res => res.data)
}

export default projectService