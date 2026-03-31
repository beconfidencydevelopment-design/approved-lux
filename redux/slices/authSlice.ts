// slices/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  token: string | null
  user: {
    id: string
    email: string
    firstName: string
    lastName: string
  } | null
}

// Helper functions to safely access localStorage
const getInitialToken = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token');
  }
  return null;
};

const getInitialUser = (): { id: string; email: string; firstName: string; lastName: string } | null => {
  if (typeof window !== 'undefined') {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  }
  return null;
};

const initialState: AuthState = {
  token: getInitialToken(),
  user: getInitialUser(),
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ user: any; token: string }>) => {
        // console.log(action.payload.user, "action.payload in setCredentials");
      state.user = action.payload.user
      state.token = action.payload.token
      localStorage.setItem('token', action.payload.token)
    },
    logout: (state) => {
      state.user = null
      state.token = null
      localStorage.removeItem('token')
    },
  },
})

export const { setCredentials, logout } = authSlice.actions
export default authSlice.reducer