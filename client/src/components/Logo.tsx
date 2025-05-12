import logo from '../assets/logo.svg';

export function Logo(props: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className="relative flex items-center" {...props}>
      <img
        src={logo}
        alt="Portfolio"
        className="h-8 relative z-10"
      />
    </div>
  );
}
