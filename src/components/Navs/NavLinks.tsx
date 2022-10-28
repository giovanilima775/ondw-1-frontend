import { useNavigate } from 'react-router-dom';
import { UserIcon, NavLink, IconButton } from 'components';
import { useAuthContext } from 'context';

export function NavLinks() {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center">
      <NavLink href="#" label="Explore" />
      <NavLink href="#" label="Collect" />
      <NavLink href="#" label="Create" />
      <IconButton
        onClick={() => navigate(`/author/${user?.id}`)}
        href="#"
        Icon={<UserIcon />}
      ></IconButton>
    </div>
  );
}
