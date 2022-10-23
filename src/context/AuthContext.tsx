import { Constants } from 'configs';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface IAuthContext {
  isAuthenticated: boolean;
  setIsAuthenticated(isAuthenticated: boolean): void;
}

const AuthContext = createContext<IAuthContext>(null!);

type Props = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: Props) {
  const storage = JSON.parse(
    localStorage.getItem(Constants.AuthStorageKey) || '{}'
  );

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    storage?.isAuthenticated
  );

  useEffect(() => {
    localStorage.setItem(
      Constants.AuthStorageKey,
      JSON.stringify({ isAuthenticated })
    );
  }, [isAuthenticated]);
  return (
    <>
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}
export function useAuthContext() {
  return useContext(AuthContext);
}
