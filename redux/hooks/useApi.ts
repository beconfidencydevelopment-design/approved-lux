// hooks/useApi.ts
import { useLoginMutation, useRegisterMutation } from '../services/api';
import { useAppDispatch } from '../store';
import { setCredentials } from '../slices/authSlice';

export const useAuthApi = () => {
  const [loginMutation] = useLoginMutation();
  const [registerMutation] = useRegisterMutation();
  const dispatch = useAppDispatch();

  const login = async (credentials: { email: string; password: string }) => {
    try {
      // Call the mutation and unwrap the result
      const response = await loginMutation(credentials).unwrap();
      
      if (response.success && response.data?.token) {
        dispatch(setCredentials({
          user: response.data.user,
          token: response.data.token
        }));
      }
      
      return response;
    } catch (error) {
      // Re-throw the error to be handled by the component
      throw error;
    }
  };

  const register = async (userData: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }) => {
    try {
      const response = await registerMutation(userData).unwrap();
      
      if (response.success && response.data?.token) {
        dispatch(setCredentials({
          user: response.data.user,
          token: response.data.token
        }));
      }
      
      return response;
    } catch (error) {
      throw error;
    }
  };

  return { login, register };
};