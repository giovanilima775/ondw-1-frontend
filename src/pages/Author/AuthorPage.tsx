import { useParams } from 'react-router-dom';
import { AuthorInfo, Nav, NFTsSection } from 'components';

export function AuthorPage() {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <Nav />
      <div className="w-full bg-primary-linear px-4 py-10">
        <div className="container bg-white p-4 rounded-md">
          <AuthorInfo />
          <NFTsSection />
        </div>
      </div>
    </>
  );
}
