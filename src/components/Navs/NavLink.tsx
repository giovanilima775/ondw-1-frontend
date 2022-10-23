type Props = {
  href: string;
  label: string;
};

export function NavLink({ href, label }: Props) {
  return (
    <a
      href={href}
      className="font-display px-2 transition-all text-gray-700 hover:text-black font-bold"
    >
      {label}
    </a>
  );
}
