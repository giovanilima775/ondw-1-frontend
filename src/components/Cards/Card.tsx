import { EthIcon, HeartButton } from 'components';

export function Card() {
  return (
    <div className="bg-white shadow-lg rounded-md">
      <div className="bg-nft-example bg-cover h-[242.5px]"></div>
      <div className="w-full flex items-center p-4">
        <div className="flex-1">
          <p className="font-display font-bold">Abstract #1</p>
          <p className="pb-1">Jhon Doe</p>
          <div className="flex items-center">
            <EthIcon />
            <p className="pl-2">5.29</p>
          </div>
        </div>
        <div>
          <HeartButton
            onClick={() => {
              console.log('teste');
            }}
          />
        </div>
      </div>
    </div>
  );
}
