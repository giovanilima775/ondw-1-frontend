import { useForm } from 'react-hook-form';

import { ArtCryptoLogo } from 'components';
import { SignInResolver } from 'validations';
import { useAuthContext } from 'context';
import { useAuth } from 'hooks';
import { useNavigate } from 'react-router-dom';

interface ISignInForm {
  email: string;
  password: string;
}

export function SignIn() {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<ISignInForm>({ resolver: SignInResolver });
  const { setAccessToken } = useAuthContext();
  const { signIn } = useAuth();
  const navigate = useNavigate();

  async function onSubmit({ email, password }: ISignInForm) {
    const accessToken = await signIn(email, password);
    if (accessToken) {
      console.log(accessToken);
      setAccessToken(accessToken);
    }
  }
  return (
    <div className="w-full h-screen bg-primary-linear flex flex-col items-center justify-center">
      <ArtCryptoLogo width={200} height={'auto'} />
      <div className="bg-white max-w-lg rounded-md p-4 mx-4 mt-4 shadow-lg">
        <h1 className="text-xl font-bold ">Login</h1>
        <p>Access your account with your email and password</p>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full py-4">
          <label htmlFor="email" className="label">
            Email:
          </label>
          <input
            {...register('email')}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="input"
          />
          {errors?.email?.message && (
            <p className="text-red-500 pb-2 text-xs">{errors.email?.message}</p>
          )}
          <label htmlFor="password" className="label">
            Password:
          </label>
          <input
            {...register('password')}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="input"
          />
          {errors.password?.message && (
            <p className="text-red-500 pb-2 text-xs">
              {errors.password?.message}
            </p>
          )}
          <button className="button button--primary w-full mt-2" type="submit">
            Connect
          </button>
          <button
            className="button button--outline w-full mt-2"
            type="button"
            onClick={() => {
              navigate('/register');
            }}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
