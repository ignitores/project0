import axios from 'axios';

let ip=window.location.hostname
const finalurl='http://'+ip+':8000/'

export const axiosInstance = axios.create({
    baseURL: finalurl
})