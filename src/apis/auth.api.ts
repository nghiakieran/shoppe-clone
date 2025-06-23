import type { AuthResponse } from '~/types/auth.type'
import http from '~/utils/http'

export const URL_REGISTER = 'register'
export const URL_LOGIN = 'login'

const authApi = {
  registerAccount(body: { email: string; password: string }) {
    return http.post<AuthResponse>(URL_REGISTER, body)
  },
  login(body: { email: string; password: string }) {
    return http.post<AuthResponse>(URL_LOGIN, body)
  }
}

export default authApi
