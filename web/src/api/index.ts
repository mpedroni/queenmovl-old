import axios, { AxiosResponse } from 'axios';
import { camelizeKeys } from 'humps';

const api = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.VUE_APP_API_TOKEN}`,
  },
});

api.interceptors.response.use((response: AxiosResponse) => {
  if (response.data && response.headers['content-type'].includes('application/json')) {
    /* eslint-disable-next-line */
    response.data = camelizeKeys(response.data as Record<string, unknown>)
  }

  return response;
}, (error) => Promise.reject(camelizeKeys(error as Record<string, unknown>)));

export default api;
