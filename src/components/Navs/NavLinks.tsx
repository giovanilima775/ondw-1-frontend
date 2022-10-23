import { UserIcon, NavLink, IconButton } from 'components';

export function NavLinks() {
  return (
    <div className="flex items-center justify-center">
      <NavLink href="#" label="Explore" />
      <NavLink href="#" label="Collect" />
      <NavLink href="#" label="Create" />
      <IconButton onClick={() => {}} href="#" Icon={<UserIcon />}></IconButton>
    </div>
  );
}
