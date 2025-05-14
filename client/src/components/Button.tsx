import { Link } from 'react-router-dom'
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx'

function ButtonInner({
  arrow = false,
  children,
}: {
  arrow?: boolean
  children: React.ReactNode
}) {
  return (
    <>
      <span className="absolute inset-0 rounded-md bg-linear-to-b from-white/80 to-white opacity-10 transition-opacity group-hover:opacity-15" />
      <span className="absolute inset-0 rounded-md opacity-7.5 shadow-[inset_0_1px_1px_white] transition-opacity group-hover:opacity-10" />
      {children} 
      {arrow ? (
        <ChevronRightIcon
          className="inline-block h-4 w-4 text-gray-900 transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        />
      ) : null}
    </>
  )
}

export function Button({
  className,
  arrow,
  children,
  ...props
}: { arrow?: boolean } & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | ({ to?: undefined } & React.ComponentPropsWithoutRef<'button'>)
)) {
  className = clsx(
    className,
    'group relative isolate flex-none rounded-md py-1.5 text-[0.8125rem]/6 font-semibold text-gray-900',
    arrow ? 'pl-2.5 pr-[calc(9/16*1rem)]' : 'px-2.5',
  )

  return typeof props.to === 'undefined' ? (
    <button className={className} {...props}>
      <ButtonInner arrow={arrow}>{children}</ButtonInner>
    </button>
  ) : (
    <Link className={className} {...props}>
      <ButtonInner arrow={arrow}>{children}</ButtonInner>
    </Link>
  )
}


// import { Link } from 'react-router-dom';
// import { ChevronRightIcon } from '@heroicons/react/24/outline';

// type ButtonProps = {
//   children?: React.ReactNode;
//   arrow?: boolean;
//   className?: string;
// } & (
//   | { type: 'submit' | 'button' | 'reset'; to?: never }
//   | { to: string; type?: never }
// );

// export function Button({
//   children = 'Contact me',
//   arrow = false,
//   className = '',
//   type,
//   to = '/register',
//   ...rest
// }: ButtonProps) {
//   const content = (
//     <>
//       {children}
//       {arrow && (
//         <ChevronRightIcon
//           className="h-4 w-4 ml-2 text-gray-900"
//           aria-hidden="true"
//         />
//       )}
//     </>
//   );

//   const baseClassName =
//     'relative flex items-center px-4 py-2.5 text-sm text-gray-900 bg-transparent rounded-lg';
//   const combinedClassName = `${baseClassName} ${className}`;

//   return (
//     <div className="relative isolate mt-8 inline-block group">
//       {/* Outer glow ring - appears on hover */}
//       <div className="absolute inset-0 -z-10 rounded-lg transition group-hover:ring-1 group-hover:ring-sky-300/15" />

//       {/* Inner ring - always visible but changes color on hover */}
//       <div className="absolute inset-0 -z-10 rounded-lg bg-white/2.5 ring-1 ring-white/15 transition group-hover:ring-sky-600" />

//       {/* Either render a button or a link */}
//       {type ? (
//         <button type={type} className={combinedClassName} {...rest}>
//           {content}
//         </button>
//       ) : (
//         <Link to={to} className={combinedClassName} {...rest}>
//           {content}
//         </Link>
//       )}
//     </div>
//   );
// }
