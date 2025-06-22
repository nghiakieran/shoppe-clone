import type { AuthResponse } from '~/types/auth.type'
import http from '~/utils/http'

export const URL_REGISTER = 'register'

const authApi = {
  registerAccount(body: { email: string; password: string }) {
    return http.post<AuthResponse>(URL_REGISTER, body)
  }
}

export default authApi
