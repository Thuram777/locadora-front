import axios from "axios";

export const http = axios.create({
    baseURL: 'https://aw-locadora-api.herokuapp.com/api/'
})