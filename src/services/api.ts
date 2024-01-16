import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { getToken } from './token.ts';

const baseURL = 'https://13.design.pages.academy/wtw';
const TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL,
    timeout: TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();
      if (token && config.headers) {
        config.headers['x-token'] = token;
      }
      return config;
    },
  );

  return api;
};
