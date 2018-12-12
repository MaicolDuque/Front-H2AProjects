import HTTP from './config'

const stateService = {}



// stateService.detailTask = function(id) {
//     return HTTP.get(`/occupations/${id}`)
//         .then(res => res.data)
// }

stateService.allStates = function() {
    return HTTP.get('/states')
        .then(res => res.data)
}

export default stateService