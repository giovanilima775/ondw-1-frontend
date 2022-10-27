import { Cards } from 'components';
import { INft } from 'interfaces';

type Props = {
  collectionName: string;
  authorName: string;
  nfts: INft[];
};

export function NFTsSection({ collectionName, authorName, nfts }: Props) {
  return (
    <section className="w-full  pb-10">
      <div className="container">
        <h2 className="text-xl font-bold py-4 text-center">{collectionName}</h2>
        <Cards author={authorName} nfts={nfts} />
      </div>
    </section>
  );
}
