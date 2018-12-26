// import HTTP from './config'
import ApiService from './api.service'

const stateService = {}



// stateService.detailTask = function(id) {
//     return HTTP.get(`/occupations/${id}`)
//         .then(res => res.data)
// }

stateService.allStates = function() {
    return ApiService.get('/states')
        .then(res => res.data)
}

export default stateService