import axios, {AxiosInstance} from 'axios';
import Qs from 'qs';
//import {jwtDecode} from "jwt-decode";
//import {useContext} from "react";

// let baseUrl = `${import.meta.env.VITE_APP_BASE_URL}${import.meta.env.VITE_APP_BASE_PATH}`

// if(import.meta.env.VITE_APP_BASE_URL === undefined && import.meta.env.VITE_APP_BASE_PATH === undefined) {
    const baseUrl = 'http://localhost:3000/';
// }

const api = axios.create({
    baseURL: baseUrl,
    timeout: 10000,
    paramsSerializer: params => Qs.stringify(params, { arrayFormat: 'repeat' })
});

const api_ = api



export { api, api_ };
