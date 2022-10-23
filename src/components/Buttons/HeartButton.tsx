import { HeartIcon } from 'components';

type Props = {
  onClick: VoidFunction;
};

export function HeartButton({ onClick }: Props) {
  return (
    <button onClick={onClick} className="heart-button">
      <HeartIcon />
    </button>
  );
}
