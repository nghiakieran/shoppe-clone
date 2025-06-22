import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { getRules } from '~/utils/rules'

export interface FormData {
  email: string
  password: string
  confirm_password: string
}

const Register = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<FormData>()

  const rules = getRules(getValues)
  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  // console.log(errors)
  return (
    <div className='bg-orangeCustom'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5 lg:pr-10 py-12 lg:py-32'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='bg-white rounded p-10 shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Đăng ký</div>
              <input
                type='email'
                placeholder='Email'
                {...register('email', rules.email)}
                className='mt-8 w-full p-3 border border-gray-300 outline-none focus:border-gray-500 rounded-sm focus:shadow-sm'
              />
              <div className='mt-1 min-h-5 text-red-600 text-sm'>{errors.email?.message}</div>

              <input
                type='password'
                placeholder='Password'
                {...register('password', rules.password)}
                autoComplete='on'
                className='mt-2 w-full p-3 border border-gray-300 outline-none focus:border-gray-500 rounded-sm focus:shadow-sm'
              />
              <div className='mt-1 min-h-5 text-red-600 text-sm'>{errors.password?.message}</div>

              <input
                type='password'
                placeholder='Confirm Password'
                {...register('confirm_password', rules.confirm_password)}
                autoComplete='on'
                className='mt-2 w-full p-3 border border-gray-300 outline-none focus:border-gray-500 rounded-sm focus:shadow-sm'
              />
              <div className='mt-1 min-h-5 text-red-600 text-sm'>{errors.confirm_password?.message}</div>

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
