import { IAuthoredCollection } from 'interfaces';

type Props = {
  likes: number | undefined;
  collections: IAuthoredCollection[] | undefined;
};

export function AuthorStatus({ likes, collections }: Props) {
  const nfts = collections?.reduce((total, collection) => {
    total += collection.nfts.length;
    return total;
  }, 0);
  return (
    <div className="py-4 grid grid-cols-3 gap-4">
      <p className="text-gray-700">
        <span className="text-xl font-bold text-black">{likes}</span> Likes
      </p>
      <p className="text-gray-700">
        <span className="text-xl font-bold text-black">
          {collections?.length}
        </span>
        Collections
      </p>
      <p className="text-gray-700">
        <span className="text-xl font-bold text-black">{nfts}</span> NFTs
      </p>
    </div>
  );
}
