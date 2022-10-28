import { HomePage, AuthorPage, NotFoundPage, NFTsViewPage } from 'pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export function AuthenticatedRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/author/:id" element={<AuthorPage />}></Route>
        <Route path="/nfts/:id" element={<NFTsViewPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
