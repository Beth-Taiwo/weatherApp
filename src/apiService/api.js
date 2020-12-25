import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'api.openweathermap.org/data/2.5'
})

export const weatherApi = function(params){
    return axiosClient.get('/weather',params);
}