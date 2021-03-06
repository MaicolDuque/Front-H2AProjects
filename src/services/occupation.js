// import HTTP from './config'
import ApiService from './api.service'


const occupationService = {}



occupationService.detailTask = function(id) {
    return ApiService.get(`/occupations/${id}`)
        .then(res => res.data)
}

occupationService.allOccupations = function() {
    return ApiService.get('/occupations')
        .then(res => res.data)
}

occupationService.updateOccupation = function(info) {
    return ApiService.put(`/occupations/${info.id}`, info)
        .then(res => res.data)
}

occupationService.addOccupation = function(info) {
    return ApiService.post(`/occupations`, info)
        .then(res => res.data)
}

export default occupationService