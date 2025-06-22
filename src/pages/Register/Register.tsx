import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { omit, type Omit } from 'lodash'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import authApi from '~/apis/auth.api'
import Input from '~/components/Input/Input'
import { schema, type RegisterType } from '~/utils/rules'

type FormData = RegisterType
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema) // Apply the zodResolver
  })

  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => authApi.registerAccount(body)
  })

  const onSubmit = handleSubmit((data) => {
    const body = omit(data, ['confirm_password'])
    registerAccountMutation.mutate(body, {
      // onError: (error, variables, context) => {
      //   // An error happened!
      // },
      onSuccess: (data, variables, context) => {
        console.log(data)
      }
    })
  })

  return (
    <div className='bg-orangeCustom'>
      <div className='my-container'>
        <div className='grid grid-cols-1 lg:grid-cols-5 lg:pr-10 py-12 lg:py-32'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='bg-white rounded p-10 shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Đăng ký</div>
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

              <Input
                className='mt-2'
                type='password'
                placeholder='Confirm Password'
                register={register}
                name='confirm_password'
                errorMessage={errors.confirm_password?.message}
              />

              <div className='mt-2'>
                <button className='flex items-center justify-center uppercase w-full bg-orangeCustom/80 px-2 py-4 text-sm text-white hover:bg-orangeCustom/90'>
                  Đăng ký
                </button>
              </div>
              <div className='mt-8 flex items-center justify-center'>
                <span className='text-gray-400'>Bạn đã có tài khoản?</span>
                <Link to='/login' className='ml-1 text-red-400'>
                  Đăng nhập
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
