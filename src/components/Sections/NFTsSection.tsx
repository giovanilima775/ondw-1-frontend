import { Cards } from 'components';

export function NFTsSection() {
  return (
    <section className="w-full  pb-10">
      <div className="container">
        <h2 className="text-xl font-bold py-4 text-center">Main NFTs</h2>
        <Cards />
      </div>
    </section>
  );
}
