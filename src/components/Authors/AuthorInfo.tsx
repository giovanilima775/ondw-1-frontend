import { AuthorStatus } from 'components';
import { IGetUserByIdResponse } from 'interfaces';

type Props = {
  user: IGetUserByIdResponse | undefined;
};

export function AuthorInfo({ user }: Props) {
  return (
    <div className="py-4 flex items-center justify-center">
      <div className="bg-author-example bg-cover bg-center bg-no-repeat bg-slate-300 w-[158px] h-[150px] border-4 border-white rounded-full shadow-lg"></div>
      <div className="px-4 flex flex-col items-start justify-center">
        <h1 className="text-3xl font-bold font-display">{user?.name}</h1>
        <p className="text-sm">
          <span className="font-bold">Hash :</span>
          {user?.id}
        </p>
        <AuthorStatus
          likes={user?.totalLikesInAuthoredCollections}
          collections={user?.authoredCollections}
        />
      </div>
    </div>
  );
}
