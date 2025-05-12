import React from 'react';
import clsx from 'clsx';

export function ContentWrapper({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
      <div className="lg:ml-96 lg:flex lg:w-full lg:justify-start lg:pl-16">
        <div
          className={clsx(
            'mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto',
            className
          )}
          {...props}
        />
      </div>
    </div>
  );
}
