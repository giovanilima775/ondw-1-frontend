import { AuthProvider } from 'context/AuthContext';

export * from './AuthContext';

type Props = {
  children: React.ReactNode;
};

export function AppContexts({ children }: Props) {
  return <AuthProvider>{children}</AuthProvider>;
}
