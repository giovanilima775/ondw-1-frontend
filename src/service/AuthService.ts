import { ISignInResponse, ISignUpRequest, ISignUpResponse } from "interfaces"
import { Api } from "providers"

const signIn = (email: string, password: string) => Api.post<ISignInResponse>('/auth/signIn', {email, password})

const signUp = (data: ISignUpRequest) => Api.post<ISignUpResponse>('/auth/signUp', data)

export const  AuthService = {
  signIn,
  signUp
}