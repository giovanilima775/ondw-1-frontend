import { ArtCryptoLogo } from 'components/Icons';

export function Footer() {
  return (
    <footer className="w-full min-h-20 py-6 bg-white shadow-[0px_-2px_10px_rgba(0,0,0,0.1)] mt-20">
      <div className="container h-full flex flex-wrap items-center justify-between text-center">
        <div className="w-full lg:w-auto flex justify-center">
          <ArtCryptoLogo width={120} height={35} />
        </div>
        <p className="w-full lg:w-auto text-xs text-gray-700">
          ArtCrypto is a study project - 2022
        </p>
      </div>
    </footer>
  );
}
