import { AuthService } from "service"

export function useAuth() {
  async function signIn(email: string, password: string) {
    const { status, data } = await AuthService.signIn(email, password);
    if(status === 201) {
      return data.accessToken;
    }
  }

  return {
    signIn
  }
}