// import HTTP from './config'
import ApiService from './api.service'

const sectionService = {}



sectionService.detailSection = function(id) {
    return ApiService.get(`/sections/${id}`)
        .then(res => res.data)
}

sectionService.allSections = function() {
    return ApiService.get('/sections')
        .then(res => res.data)
}

sectionService.updateSection = function(info) {
    return ApiService.put(`/sections/${info.id}`, info)
        .then(res => res.data)
}

sectionService.addSection = function(info) {
    return ApiService.post(`/sections`, info)
        .then(res => res.data)
}

sectionService.sectionsProject = function(id) {
    return ApiService.get(`/sections_project/${id}`)
        .then(res => res.data)
}


export default sectionService