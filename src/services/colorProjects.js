// import HTTP from './config'
import ApiService from './api.service'


const colorProjects = {}



// colorProjects.detailProject = function(id) {
//     return HTTP.get(`/projects/${id}`)
//         .then(res => res.data)
// }

colorProjects.allColors = function() {
    return ApiService.get('/color-projects')
        .then(res => res.data)
}

export default colorProjects