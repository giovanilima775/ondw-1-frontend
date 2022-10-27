import { Card } from 'components';
import { INft } from 'interfaces';

type Props = {
  author: string;
  nfts: INft[];
};

export function Cards({ author, nfts }: Props) {
  return (
    <div className="w-full grid grid-cols-1 px-4 lg:px-0 lg:grid-cols-3 gap-4">
      {nfts.map((nft, index) => (
        <Card
          imgUrl={nft.photoUrl}
          key={index}
          name={nft.name}
          authorName={author}
          ethPrice={Number(nft.price)}
        />
      ))}
    </div>
  );
}
