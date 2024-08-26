/* eslint-disable no-undef */
import axios from "axios"
const URL = import.meta.env.VITE_URL_PROD;

export const api = axios.create({
    baseURL: URL
})