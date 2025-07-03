import path from '~/constants/path'
import type { AuthResponse } from '~/types/auth.type'
import http from '~/utils/http'

const authApi = {
  registerAccount(body: { email: string; password: string }) {
    return http.post<AuthResponse>(path.register, body)
  },
  login(body: { email: string; password: string }) {
    return http.post<AuthResponse>(path.login, body)
  },
  logOut() {
    return http.post<AuthResponse>(path.logout)
  }
}

export default authApi
