import { Constants } from 'configs';
import React, { createContext, useContext, useEffect, useState } from 'react';

export interface IAuthContext {
  accessToken?: string;
  setAccessToken(accessToken: string): void;
}

const AuthContext = createContext<IAuthContext>(null!);

type Props = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: Props) {
  const storage = JSON.parse(
    localStorage.getItem(Constants.AuthStorageKey) || '{}'
  );

  const [accessToken, setAccessToken] = useState<string>(storage?.accessToken);

  useEffect(() => {
    localStorage.setItem(
      Constants.AuthStorageKey,
      JSON.stringify({ accessToken })
    );
  }, [accessToken]);
  return (
    <>
      <AuthContext.Provider
        value={{
          accessToken,
          setAccessToken,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
}
export function useAuthContext() {
  return useContext(AuthContext);
}
