export interface ISignInResponse {
  accessToken: string;
}

export interface ISignUpRequest {
  name: string;
  email: string;
  password: string;
}
export interface ISignUpResponse {
  name: string;
  email: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
}