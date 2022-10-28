import { NotFoundPage, SignIn, SignUpPage } from 'pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export function UnauthenticatedRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/register" element={<SignUpPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
