import { HomePage } from 'pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export function AuthenticatedRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
