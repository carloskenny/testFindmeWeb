import axios from "axios";
import { getToken } from "./auth";



const api = axios.create({
    baseURL: "http://localhost:3333"
});

export default api;