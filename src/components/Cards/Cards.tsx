import { Card } from 'components';

export function Cards() {
  return (
    <div className="w-full grid grid-cols-1 px-4 lg:px-0 lg:grid-cols-3 gap-4">
      <Card />
      <Card />
      <Card />
    </div>
  );
}
