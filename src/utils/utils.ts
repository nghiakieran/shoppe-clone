import axios, { AxiosError } from 'axios'
import { HttpStatusCode } from '~/constants/httpStatusCode.enum'

// Type guard
// Giúp kiểm tra một giá trị có đúng loại (type) hay không
// => nếu hàm trả về true, thì TS hiểu error là AxiosError<T>.
export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
  return axios.isAxiosError(error)
}

export function isAxiosUnprocessableEntityError<FormError>(error: unknown): error is AxiosError<FormError> {
  return isAxiosError(error) && error.response?.status === HttpStatusCode.UnprocessableEntity
}
