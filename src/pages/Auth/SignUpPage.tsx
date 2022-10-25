import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { ArtCryptoLogo } from 'components';
import { SignUpResolver } from 'validations';
import { useAuth } from 'hooks';

interface ISignUpForm {
  name: string;
  email: string;
  password: string;
}

export function SignUpPage() {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<ISignUpForm>({ resolver: SignUpResolver });
  const { signUp } = useAuth();
  const navigate = useNavigate();

  async function onSubmit(values: ISignUpForm) {
    const isCreated = await signUp(values);
    if (isCreated) {
      navigate('/');
    }
  }

  return (
    <div className="px-4 w-full h-screen bg-primary-linear flex flex-col items-center justify-center">
      <ArtCryptoLogo width={158} height={35} />
      <div className="w-full max-w-lg bg-white rounded-md p-4 mt-10 shadow-lg">
        <h1 className="text-xl font-bold">Register</h1>
        <p>Create your account.</p>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full py-4">
          <label htmlFor="name" className="label">
            Name
          </label>
          <input
            {...register('name')}
            type="name"
            name="name"
            id="name"
            placeholder="Nome completo"
            className="input"
          />
          {errors?.name?.message && (
            <p className="error-message">{errors.name.message}</p>
          )}

          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            {...register('email')}
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            className="input"
          />
          {errors?.email?.message && (
            <p className="error-message">{errors.email.message}</p>
          )}

          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            {...register('password')}
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
            className="input"
          />
          {errors?.password?.message && (
            <p className="error-message">{errors.password.message}</p>
          )}

          <button type="submit" className="w-full mt-2 button button--primary">
            Register
          </button>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="w-full mt-2 button button--outline"
          >
            Connect
          </button>
        </form>
      </div>
    </div>
  );
}
