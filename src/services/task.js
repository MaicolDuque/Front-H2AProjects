import HTTP from './config'

const taskService = {}

taskService.search = function(q) {
    const type = 'track'

    return HTTP.get('/search', {
            params: { q, type }
        })
        .then(res => res.data)
}

taskService.detailTask = function(id) {
    return HTTP.get(`/tasks/${id}`)
        .then(res => res.data)
}

taskService.allTasks = function() {
    return HTTP.get('/tasks')
        .then(res => res.data)
}

export default taskService