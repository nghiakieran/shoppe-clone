import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='bg-orangeCustom'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5 lg:pr-10 py-12 lg:py-32'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='bg-white rounded p-10 shadow-sm'>
              <div className='text-2xl'>Đăng ký</div>
              <input
                type='email'
                name='email'
                placeholder='Email'
                className='mt-8 w-full p-3 border border-gray-300 outline-none focus:border-gray-500 rounded-sm focus:shadow-sm'
              />
              <div className='mt-1 min-h-5 text-red-600 text-sm'></div>

              <input
                type='password'
                name='password'
                placeholder='Password'
                className='mt-2 w-full p-3 border border-gray-300 outline-none focus:border-gray-500 rounded-sm focus:shadow-sm'
              />
              <div className='mt-1 min-h-5 text-red-600 text-sm'></div>

              <input
                type='password'
                name='confirm_password'
                placeholder='Confirm Password'
                className='mt-2 w-full p-3 border border-gray-300 outline-none focus:border-gray-500 rounded-sm focus:shadow-sm'
              />
              <div className='mt-1 min-h-5 text-red-600 text-sm'></div>

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
