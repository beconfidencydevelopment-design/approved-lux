// hooks/useAuth.ts
import { useDispatch } from 'react-redux'
import { setCredentials } from '../slices/authSlice'

export const useAuth = () => {
  const dispatch = useDispatch()

  const handleAuthResponse = (response: any) => {
    if (response.data?.token) {
      dispatch(setCredentials({
        user: response.data.user,
        token: response.data.token
      }))
    }
    return response
  }

  return { handleAuthResponse }
}