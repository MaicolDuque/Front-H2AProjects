import axios from 'axios';
import { TokenService } from './storage.service'

const HTTP = axios.create({
    baseURL: `http://127.0.0.1:8000/`,
    headers: {
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer ' + localStorage.token
        'Authorization': 'Bearer ' + TokenService.getToken()
    }
})

export default HTTP