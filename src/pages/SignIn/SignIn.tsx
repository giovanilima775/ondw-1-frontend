import { ArtCryptoLogo } from 'components';

export function SignIn() {
  return (
    <div className="w-full h-screen bg-primary-linear flex flex-col items-center justify-center">
      <ArtCryptoLogo width={200} height={'auto'} />
      <div className="bg-white max-w-lg rounded-md p-4 mx-4 mt-4 shadow-lg">
        <h1 className="text-xl font-bold ">Login</h1>
        <p>Access your account with your email and password</p>
        <form className="w-full py-4">
          <label htmlFor="email" className="label">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="input"
          />
          <label htmlFor="password" className="label">
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="input"
          />
          <button className="button button--primary w-full mt-2">
            Connect
          </button>
          <button className="button button--outline w-full mt-2">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
