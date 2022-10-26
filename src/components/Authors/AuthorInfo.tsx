import { AuthorStatus } from 'components';

export function AuthorInfo() {
  return (
    <div className="py-4 flex items-center justify-center">
      <div className="bg-author-example bg-cover bg-center bg-no-repeat bg-slate-300 w-[158px] h-[150px] border-4 border-white rounded-full shadow-lg"></div>
      <div className="px-4 flex flex-col items-start justify-center">
        <h1 className="text-3xl font-bold font-display">John Doe</h1>
        <p className="text-sm">
          <span className="font-bold">Hash :</span>
          Vh1359s5DSdf45DF4sVdf5d558dsAsd5F
        </p>
        <AuthorStatus />
      </div>
    </div>
  );
}
