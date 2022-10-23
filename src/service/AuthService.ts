import { ISignInResponse } from "interfaces"
import { Api } from "providers"

const signIn = (email: string, password: string) => Api.post<ISignInResponse>('/auth/signIn', {email, password})

export const  AuthService = {
  signIn
}