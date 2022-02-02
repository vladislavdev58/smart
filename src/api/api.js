import axios from 'axios'
import {SERVER_URL} from '../config/api.config'

export const api = axios.create({
    baseURL: SERVER_URL
})