import HTTP from './config'

const sectionService = {}



sectionService.detailSection = function(id) {
    return HTTP.get(`/sections/${id}`)
        .then(res => res.data)
}

sectionService.allSections = function() {
    return HTTP.get('/sections')
        .then(res => res.data)
}


sectionService.sectionsProject = function(id) {
    return HTTP.get(`/sections_project/${id}`)
        .then(res => res.data)
}


export default sectionService