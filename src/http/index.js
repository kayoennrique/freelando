import axios from 'axios'
import { StoreToken } from '../utils/StoreToken';

const http = axios.create({
    baseURL: 'http://localhost:8080/'
})


http.interceptors.request.use(function (config) {
    const token = StoreToken.accessToken
    if(token) {
        config.headers.Authorization = `Bearer ${token}`
        console.log('Token foi adicionado ao cabeçalho')
    }
    return config;
  }, function (error) {
    return Promise.reject(error);
  });


export default http