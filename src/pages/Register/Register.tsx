import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Input from '~/components/Input/Input'
import { schema, type RegisterType } from '~/utils/rules'

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterType>({
    resolver: zodResolver(schema) // Apply the zodResolver
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  // console.log(errors)
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
