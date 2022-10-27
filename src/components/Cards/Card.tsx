import { EthIcon, HeartButton } from 'components';
import { Constants } from 'configs';
import { INft } from 'interfaces';

type Props = {
  imgUrl: string;
  name: string;
  authorName: string;
  ethPrice: number;
};

export function Card({ imgUrl, name, authorName, ethPrice }: Props) {
  return (
    <div className="bg-white shadow-lg rounded-md">
      <div
        style={{ backgroundImage: `url(${Constants.ApiBaseUrl}/${imgUrl})` }}
        className="bg-cover h-[242.5px]"
      ></div>
      <div className="w-full flex items-center p-4">
        <div className="flex-1">
          <p className="font-display font-bold">{name}</p>
          <p className="pb-1">`{authorName}`</p>
          <div className="flex items-center">
            <EthIcon />
            <p className="pl-2">{ethPrice}</p>
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
