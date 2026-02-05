import api from './api';

export const loginApi = async (email: string, password: string) => {
  // Dummy return for now
  // return {
  //   token: '123456789',
  //   user: {
  //     id: 1,
  //     name: 'John Doe',
  //     student_id: 1
  //   }
  // };  

  const response = await api.post('/login', {
    email,
    password,
  });

  return response.data;
};