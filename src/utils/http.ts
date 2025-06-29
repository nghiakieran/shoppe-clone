import type { AxiosError, AxiosInstance } from 'axios'
import axios from 'axios'
import { toast } from 'sonner'
import { HttpStatusCode } from '~/constants/httpStatusCode.enum'
// import HttpStatusCode from '~/constants/httpStatusCode.enum'

class Http {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: 'https://api-ecom.duthanhduoc.com/',
      timeout: 10000,
      headers: { 'Content-Type': 'application/json' }
    })
    this.instance.interceptors.response.use(
      function (response) {
        return response
      },
      function (error: AxiosError) {
        // Chỉ toast lỗi không phải 422
        if (![HttpStatusCode.UnprocessableEntity].map(Number).includes(Number(error.response?.status))) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const data: any | undefined = error.response?.data
          const message = data?.message || error.message
          toast.error(message)
        }
        return Promise.reject(error)
      }
    )
  }
}

const http = new Http().instance
export default http
