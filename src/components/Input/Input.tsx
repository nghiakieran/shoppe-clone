import type { UseFormRegister } from 'react-hook-form'

interface InputProps {
  type: React.HTMLInputTypeAttribute
  placeholder?: string
  errorMessage?: string
  className?: string
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>
}

const Input = ({ type, placeholder, errorMessage, className, name, register }: InputProps) => {
  return (
    <div className={className}>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className='w-full p-3 border border-gray-300 outline-none focus:border-gray-500 rounded-sm focus:shadow-sm'
      />
      <div className='mt-1 min-h-5 text-red-600 text-sm'>{errorMessage}</div>
    </div>
  )
}

export default Input
