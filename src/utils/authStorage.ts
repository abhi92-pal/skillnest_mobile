import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = 'SKILLNEST_TOKEN';
const USER_KEY = 'SKILLNEST_USER';

export const storeAuth = async (token: string, user: any) => {
  await AsyncStorage.setItem(TOKEN_KEY, token);
  await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const getToken = async () => {
  return AsyncStorage.getItem(TOKEN_KEY);
};

export const clearAuth = async () => {
  await AsyncStorage.multiRemove([TOKEN_KEY, USER_KEY]);
};
