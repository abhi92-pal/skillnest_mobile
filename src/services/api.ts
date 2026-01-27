import axios from 'axios';
import * as Apis from '../Routes/Routes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: Apis.BASE_URL,
//   timeout: 10000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('SKILLNEST_TOKEN');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
