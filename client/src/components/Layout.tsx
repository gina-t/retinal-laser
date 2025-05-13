import { useId } from 'react';
import { Intro, IntroFooter } from './Intro';
import { FloaterField } from './FloaterField';

function Glow() {
  const id = useId();

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-sky-400 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem]">
      <svg
        className="absolute -bottom-48 left-[-40%] h-[80rem] w-[180%] lg:top-[-40%] lg:-right-40 lg:bottom-auto lg:left-auto lg:h-[180%] lg:w-[80rem]"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id={`${id}-desktop`} cx="100%">
            <stop offset="0%" stopColor="rgba(56, 189, 248, 0.3)" />
            <stop offset="53.95%" stopColor="rgba(0, 71, 255, 0.09)" />
            <stop offset="100%" stopColor="rgba(10, 14, 23, 0)" />
          </radialGradient>
          <radialGradient id={`${id}-mobile`} cy="100%">
            <stop offset="0%" stopColor="rgba(56, 189, 248, 0.3)" />
            <stop offset="53.95%" stopColor="rgba(0, 71, 255, 0.09)" />
            <stop offset="100%" stopColor="rgba(10, 14, 23, 0)" />
          </radialGradient>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill={`url(#${id}-desktop)`}
          className="hidden lg:block"
        />
        <rect
          width="100%"
          height="100%"
          fill={`url(#${id}-mobile)`}
          className="lg:hidden"
        />
      </svg>
      <div className="absolute inset-x-0 right-0 bottom-0 h-px bg-white mix-blend-overlay lg:top-0 lg:left-auto lg:h-auto lg:w-px" />
    </div>
  );
}

function FixedSidebar({
  main,
  footer,
}: {
  main: React.ReactNode;
  footer: React.ReactNode;
}) {
  return (
    <div className="relative flex-none overflow-hidden px-6 lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex lg:px-0">
      <Glow />
      <div className="relative flex w-full lg:pointer-events-auto lg:mr-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] lg:overflow-x-hidden lg:overflow-y-auto lg:pl-[max(4rem,calc(50%-38rem))]">
        <div className="mx-auto max-w-lg lg:mx-0 lg:flex lg:w-96 lg:max-w-none lg:flex-col lg:before:flex-1 lg:before:pt-6">
          <div className="pt-20 pb-16 sm:pt-32 sm:pb-20 lg:py-20">
            <div className="relative">
              <FloaterField className="top-10 -right-18" />
              {main}
            </div>
          </div>
          <div className="flex flex-1 items-end justify-center pb-4 lg:justify-start lg:pb-6">
            {footer}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-transparent relative">
      <FixedSidebar main={<Intro />} footer={<IntroFooter />} />
      <div className="relative flex-auto">
        <main className="space-y-20 py-20 sm:space-y-32 sm:py-32 lg:ml-[31rem] px-6">
          {children}
        </main>
      </div>
    </div>
  );
}
