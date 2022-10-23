import { ArtCryptoLogo, HamburgerIcon, IconButton, NavLinks } from 'components';

export function Nav() {
  return (
    <>
      <nav className="w-full h-20 shadow-lg bg-white">
        <div className="container px-4 h-full flex items-center justify-between">
          <ArtCryptoLogo />
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
