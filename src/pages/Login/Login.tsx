import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import authApi from '~/apis/auth.api'
import Input from '~/components/Input/Input'
import type { ErrorResponse } from '~/types/utils.type'
import { loginSchema, type LoginType } from '~/utils/rules'
import { isAxiosUnprocessableEntityError } from '~/utils/utils'

type FormData = LoginType
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema) // Apply the zodResolver
  })

  const loginMutation = useMutation({ mutationFn: (body: FormData) => authApi.login(body) })

  const onSubmit = handleSubmit((data) => {
    loginMutation.mutate(data, {
      onSuccess: (data) => {
        console.log(data)
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ErrorResponse<FormData>>(error)) {
          const formError = error.response?.data.data
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof FormData, {
                message: formError[key as keyof FormData],
                type: 'Server'
              })
            })
          }
        }
      }
    })
  })

  return (
    <div className='bg-orangeCustom'>
      <div className='my-container'>
        <div className='grid grid-cols-1 lg:grid-cols-5 lg:pr-10 py-12 lg:py-32'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='bg-white rounded p-10 shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Đăng nhập</div>
              <Input
                className='mt-8'
                type='email'
                placeholder='Email'
                register={register}
                name='email'
                errorMessage={errors.email?.message}
              />
              <Input
                className='mt-2'
                type='password'
                placeholder='Password'
                register={register}
                name='password'
                errorMessage={errors.password?.message}
              />
              <div className='mt-2'>
                <button className='flex items-center justify-center uppercase w-full bg-orangeCustom/80 px-2 py-4 text-sm text-white hover:bg-orangeCustom/90'>
                  Đăng nhập
                </button>
              </div>
              <div className='mt-8 flex items-center justify-center'>
                <span className='text-gray-400'>Bạn chưa có tài khoản?</span>
                <Link to='/register' className='ml-1 text-red-400'>
                  Đăng ký
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
