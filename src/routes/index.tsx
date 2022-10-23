import { AuthenticatedRoutes } from 'routes/AuthenticatedRoutes';
import { UnauthenticatedRoutes } from 'routes/UnauthenticatedRoutes';

export function AppRoutes() {
  const isAuthenticated = false;
  return isAuthenticated ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />;
}
