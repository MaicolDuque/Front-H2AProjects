import HTTP from './config'

const colorProjects = {}



// colorProjects.detailProject = function(id) {
//     return HTTP.get(`/projects/${id}`)
//         .then(res => res.data)
// }

colorProjects.allColors = function() {
    return HTTP.get('/color-projects')
        .then(res => res.data)
}

export default colorProjects