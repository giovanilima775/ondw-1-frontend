import { useAuthContext } from 'context';
import { AuthenticatedRoutes } from 'routes/AuthenticatedRoutes';
import { UnauthenticatedRoutes } from 'routes/UnauthenticatedRoutes';

export function AppRoutes() {
  const { isAuthenticated } = useAuthContext();
  return isAuthenticated ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />;
}
