import HTTP from './config'

const occupationService = {}



occupationService.detailTask = function(id) {
    return HTTP.get(`/occupations/${id}`)
        .then(res => res.data)
}

occupationService.allOccupations = function() {
    return HTTP.get('/occupations')
        .then(res => res.data)
}

export default occupationService