import { useParams } from 'react-router-dom';
import { AuthorInfo, Nav, NFTsSection } from 'components';
import { useUser } from 'hooks';
import { useEffect } from 'react';

export function AuthorPage() {
  const { id } = useParams<{ id: string }>();
  const { user, getUserById } = useUser();

  useEffect(() => {
    getUserById(String(id));
  }, [getUserById, id]);

  return (
    <>
      <Nav />
      <div className="w-full bg-primary-linear px-4 py-10">
        <div className="container bg-white p-4 rounded-md">
          <AuthorInfo user={user} />
          {user?.authoredCollections.map((collection, index) => (
            <NFTsSection
              key={index}
              collectionName={collection.name}
              nfts={collection.nfts}
              authorName={user.name}
            />
          ))}
        </div>
      </div>
    </>
  );
}
