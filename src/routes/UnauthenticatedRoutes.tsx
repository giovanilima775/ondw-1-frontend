import { SignIn } from 'pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export function UnauthenticatedRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
