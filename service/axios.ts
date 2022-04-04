import axios from "axios";
import {
  requestInterceptor,
  responseInterceptor,
  responseInterceptorError,
} from "../api/interceptors";

export const Axios = axios.create({
  baseURL: "http://localhost:5000/",
});

Axios.interceptors.request.use(requestInterceptor, responseInterceptorError);
Axios.interceptors.response.use(responseInterceptor, responseInterceptorError);
