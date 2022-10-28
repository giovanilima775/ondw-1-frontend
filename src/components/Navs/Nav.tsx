import { ArtCryptoLogo, HamburgerIcon, IconButton, NavLinks } from 'components';
import { useNavigate } from 'react-router-dom';

export function Nav() {
  const navigate = useNavigate();
  return (
    <>
      <nav className="w-full h-20 shadow-lg bg-white">
        <div className="container px-4 h-full flex items-center justify-between">
          <IconButton
            opacityEnabled={false}
            onClick={() => navigate('/')}
            Icon={<ArtCryptoLogo />}
          />
          <div className="hidden lg:block">
            <NavLinks />
          </div>
          <div className="block lg:hidden">
            <IconButton onClick={() => {}} Icon={<HamburgerIcon />} />
          </div>
        </div>
      </nav>
    </>
  );
}
