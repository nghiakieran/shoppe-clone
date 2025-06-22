// import type { InputHTMLAttributes } from 'react'

import type { RegisterOptions, UseFormRegister } from 'react-hook-form'
import type { FormData } from '~/pages/Register/Register'

interface InputProps {
  type: React.HTMLInputTypeAttribute
  placeholder?: string
  errorMessage?: string
  className?: string
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>
  rules?: RegisterOptions<FormData>
}

const Input = ({ type, placeholder, errorMessage, className, name, register, rules }: InputProps) => {
  return (
    <div className={className}>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, rules)}
        className='w-full p-3 border border-gray-300 outline-none focus:border-gray-500 rounded-sm focus:shadow-sm'
      />
      <div className='mt-1 min-h-5 text-red-600 text-sm'>{errorMessage}</div>
    </div>
  )
}

export default Input
