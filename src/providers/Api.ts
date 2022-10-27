import axios from 'axios';
import { Constants } from 'configs';
import { IAuthContext } from 'context';

export const baseURL = Constants.ApiBaseUrl;

export const Api = axios.create({ baseURL});

const auth: Pick<IAuthContext, 'accessToken'> =  JSON.parse(localStorage.getItem(Constants.AuthStorageKey) || '{}') || {};
const  { accessToken } =  auth;

Api.interceptors.request.use((config: any) => {
  if(accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return config;
})