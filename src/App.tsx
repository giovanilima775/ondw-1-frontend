import { AppContexts } from 'context';
import { AppRoutes } from 'routes';

export function App() {
  return (
    <AppContexts>
      <AppRoutes />
    </AppContexts>
  );
}
