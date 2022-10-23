import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

const SignInSchema = yup.object({
  email: yup.string().email('Type a valid email').required('Type your email'),
  password: yup.string().required('Type your password'),
})

export const SignInResolver = yupResolver(SignInSchema);