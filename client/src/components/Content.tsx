import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ContentWrapper } from './ContentWrapper';
import { ContentHeader } from './ContentHeader';

export const a = Link;

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>;
type ImagePropsWithOptionalAlt = Omit<ImageProps, 'alt'> & { alt?: string };

export const img = function Img(props: ImagePropsWithOptionalAlt) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-900">
      <img
        alt=""
        sizes="(min-width: 1280px) 36rem, (min-width: 1024px) 45vw, (min-width: 640px) 32rem, 95vw"
        {...props}
      />
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset dark:ring-white/10" />
    </div>
  );
};

export const article = function Article({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  const heightRef = useRef<React.ElementRef<'div'>>(null);
  const [heightAdjustment, setHeightAdjustment] = useState(0);

  useEffect(() => {
    if (!heightRef.current) {
      return;
    }

    const observer = new window.ResizeObserver(() => {
      if (!heightRef.current) {
        return;
      }
      const { height } = heightRef.current.getBoundingClientRect();
      const nextMultipleOf8 = 8 * Math.ceil(height / 8);
      setHeightAdjustment(nextMultipleOf8 - height);
    });

    observer.observe(heightRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <article
      id={id}
      className="scroll-mt-16"
      style={{ paddingBottom: `${heightAdjustment}px` }}
    >
      <div ref={heightRef}>
        <ContentHeader id={id} />
        <ContentWrapper className="typography">
          {children}
        </ContentWrapper>
      </div>
    </article>
  );
};

