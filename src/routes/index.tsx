import { useAuthContext } from 'context';
import { AuthenticatedRoutes } from 'routes/AuthenticatedRoutes';
import { UnauthenticatedRoutes } from 'routes/UnauthenticatedRoutes';

export function AppRoutes() {
  const { accessToken } = useAuthContext();
  const isAuthenticated = !!accessToken;
  return isAuthenticated ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />;
}
