import { z } from 'zod/v4'
// type Rules = {
//   [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions<FormData, key>
// }

// export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
//   email: {
//     required: {
//       value: true,
//       message: 'Email là bắt buộc'
//     },
//     pattern: {
//       value: /^\S+@\S+\.\S+$/,
//       message: 'Email không đúng định dạng'
//     },
//     maxLength: {
//       value: 160,
//       message: 'Độ dài từ 5 - 160 ký tự'
//     },
//     minLength: {
//       value: 5,
//       message: 'Độ dài từ 5 - 160 ký tự'
//     }
//   },
//   password: {
//     required: {
//       value: true,
//       message: 'Password là bắt buộc'
//     },
//     maxLength: {
//       value: 160,
//       message: 'Độ dài từ 6 - 160 ký tự'
//     },
//     minLength: {
//       value: 6,
//       message: 'Độ dài từ 6 - 160 ký tự'
//     }
//   },
//   confirm_password: {
//     required: {
//       value: true,
//       message: 'Nhập lại password là bắt buộc'
//     },
//     maxLength: {
//       value: 160,
//       message: 'Độ dài từ 6 - 160 ký tự'
//     },
//     minLength: {
//       value: 6,
//       message: 'Độ dài từ 6 - 160 ký tự'
//     },
//     validate:
//       typeof getValues === 'function'
//         ? (value) => value === getValues('password') || 'Nhập lại password không khớp'
//         : undefined
//   }
// })

export const schema = z
  .object({
    email: z
      .email({ error: 'Email không hợp lệ' })
      .nonempty({ error: 'Email là bắt buộc' })
      .min(5, { error: 'Độ dài từ 5 - 160 ký tự' })
      .max(160, { error: 'Độ dài từ 5 - 160 ký tự' }),
    password: z
      .string() // cho lỗi khi `undefined` hoặc thiếu field
      .nonempty({ error: 'Password là bắt buộc' }) // cho lỗi khi là chuỗi rỗng `""`
      .min(6, { error: 'Độ dài từ 6 - 160 ký tự' })
      .max(160, { error: 'Độ dài từ 6 - 160 ký tự' }),

    confirm_password: z
      .string()
      .nonempty({ error: 'Nhập lại password là bắt buộc' })
      .min(6, { error: 'Độ dài từ 6 - 160 ký tự' })
      .max(160, { error: 'Độ dài từ 6 - 160 ký tự' })
  })
  .refine((data) => data.password === data.confirm_password, {
    error: 'Nhập lại password không khớp',
    path: ['confirm_password'] // path of error
  })

export type RegisterType = z.infer<typeof schema>
export const loginSchema = schema.omit({ confirm_password: true })
export type LoginType = z.infer<typeof loginSchema>
