import { useRef, useId } from 'react';
import clsx from 'clsx';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Register the plugin outside of any component
gsap.registerPlugin(useGSAP);

// Floater configuration - customize motion parameters
const floaterConfigs = [
  { scale: 1.05, speed: 2, xRange: 15, yRange: 10, delay: 0.2, blur: true }, //floater-1
  { scale: 1.02, speed: 3, xRange: 20, yRange: 15, delay: 1.5, blur: true },
  { scale: 1.03, speed: 5, xRange: 25, yRange: 20, delay: 0.8, blur: true },
  { scale: 1.04, speed: 7, xRange: 18, yRange: 22, delay: 2.0, blur: true },
  { scale: 1.01, speed: 11, xRange: 12, yRange: 18, delay: 0.5, blur: true },
  { scale: 1.03, speed: 2, xRange: 22, yRange: 16, delay: 1.2, blur: true },
  { scale: 1.02, speed: 3, xRange: 16, yRange: 14, delay: 0.3, blur: true },
  { scale: 1.05, speed: 5, xRange: 20, yRange: 25, delay: 1.8, blur: true },
  { scale: 1.01, speed: 7, xRange: 14, yRange: 12, delay: 0.6, blur: true },
  { scale: 1.04, speed: 11, xRange: 24, yRange: 18, delay: 1.0, blur: true },
  { scale: 1.02, speed: 2, xRange: 18, yRange: 20, delay: 2.2, blur: true },
  { scale: 1.03, speed: 3, xRange: 16, yRange: 16, delay: 0.9, blur: true },
  { scale: 1.01, speed: 5, xRange: 22, yRange: 14, delay: 1.4, blur: true },
  { scale: 1.04, speed: 7, xRange: 26, yRange: 18, delay: 0.7, blur: true },
  { scale: 1.02, speed: 11, xRange: 18, yRange: 12, delay: 1.6, blur: true },
  { scale: 1.03, speed: 3, xRange: 19, yRange: 15, delay: 1.2, blur: true },
];

// Floater component
function Floater({
  id,
  path,
  config,
  blurId,
}: {
  id: string;
  path: string;
  config: {
    scale: number;
    speed: number;
    xRange: number;
    yRange: number;
    delay: number;
    blur?: boolean;
  };
  blurId?: string;
}) {
  const floaterRef = useRef<SVGPathElement>(null);

  useGSAP(
    () => {
      if (!floaterRef.current) return;

      // Set initial opacity
      gsap.set(floaterRef.current, {
        opacity: gsap.utils.random(0.2, 0.6),
        scale: 1,
        rotation: 0,
        x: 0,
        y: 0,
      });

      // Create a timeline for more natural movement
      const tl = gsap.timeline({ repeat: -1 });

      // Back and forth x movement
      tl.to(floaterRef.current, {
        x: config.xRange,
        duration: config.speed,
        ease: 'sine.inOut',
      }).to(floaterRef.current, {
        x: -config.xRange,
        duration: config.speed,
        ease: 'sine.inOut',
      });

      // Independent y movement
      gsap.to(floaterRef.current, {
        y: config.yRange,
        duration: config.speed * 1.3,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: config.delay,
      });

      // Very subtle rotation
      gsap.to(floaterRef.current, {
        rotation: 2,
        duration: config.speed * 1.7,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: config.delay * 1.5,
      });

      // Subtle size changes
      gsap.to(floaterRef.current, {
        scale: config.scale,
        duration: config.speed * 2,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: config.delay * 2,
      });
    },
    { scope: floaterRef }
  );

  return (
    <path
      ref={floaterRef}
      id={id}
      d={path}
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      fill="transparent"
      filter={blurId ? `url(#${blurId})` : undefined}
      style={{
        transformOrigin: 'center center',
        willChange: 'transform', // Performance hint
      }}
    />
  );
}

export function FloaterField({ className }: { className?: string }) {
  const containerRef = useRef(null);
  const blurId = useId();

  const floaterPaths = [
    {
      id: 'floater-1',
      path: 'M436.11 378.729C436.11 359.509 440.349 340.805 440.349 321.508C440.349 312.437 442.374 300.475 439.289 291.838C434.634 278.804 428.781 266.057 422.923 253.691C418.566 244.492 417.406 234.054 411.62 224.962C401.751 209.453 381.888 183.832 362.994 179.633C350.591 176.877 326.741 164.163 317.43 180.457C309.564 194.223 296.237 197.253 296.237 215.543C296.237 232.121 291.178 243.556 283.992 257.929C275.865 274.184 272.925 288.547 272.925 306.673C272.925 314.911 281.489 319.163 283.639 326.688C285.254 332.34 291.571 337.608 294.117 342.701',
    },
    {
      id: 'floater-2',
      path: 'M378.889 1.49487C378.889 14.6315 385.247 26.598 385.247 39.6421C385.247 49.5831 383.585 52.2256 378.889 60.835C372.377 72.7747 372.869 88.6168 378.418 101.102C384.726 115.294 400.082 123.769 400.082 141.368C400.082 156.213 402.945 172.414 391.605 183.754',
    },
    {
      id: 'floater-3',
      path: 'M465.78 12.0913C464.97 19.3863 444.913 42.8699 454.124 50.2386C462.15 56.6592 461.541 66.4096 461.541 75.6701C461.541 81.0241 456.993 86.0421 454.124 90.5051C447.619 100.624 450.945 115.696 450.945 127.357C450.945 136.641 457.423 152.025 465.78 156.203',
    },
    {
      id: 'floater-4',
      path: 'M436.11 226.14C448.158 224.872 463.916 205.05 469.548 194.35C475.823 182.427 479.884 168.176 483.205 155.261C486.478 142.533 491.212 129.248 491.212 115.937C491.212 109.576 492.493 102.818 494.391 96.7453C496.227 90.8696 494.311 84.5663 496.51 78.849C501.804 65.0841 506.525 58.7157 523.943 58.7157C537.483 58.7157 555.43 48.5816 568.566 55.6546C578.183 60.8332 583.857 73.0118 592.938 78.849C600.91 83.974 613.999 88.1228 618.369 96.863',
    },
    {
      id: 'floater-5',
      path: 'M478.496 156.203C479.425 164.566 482.375 184.79 487.444 191.76C491.842 197.808 497.65 202.948 501.808 209.185',
    },
    {
      id: 'floater-6',
      path: 'M590.818 130.772C578.571 130.772 567.299 128.767 556.91 134.539C545.977 140.613 542.222 151.626 535.717 161.384C523.834 179.208 525.12 201.106 525.12 221.901C525.12 238.491 520.882 255.139 520.882 271.705C520.882 297.159 517.956 319.368 512.404 344.349C501.672 392.647 513.265 443.154 506.047 491.875C503.008 512.383 493.28 531.831 491.212 552.511C490.419 560.441 486.552 568.702 484.383 576.294C481.176 587.519 482.734 600.433 482.734 612.086C482.734 634.862 484.974 656.176 472.138 675.43',
    },
    {
      id: 'floater-7',
      path: 'M472.138 675.43C470.733 689.484 460.936 701.849 459.54 715.814C458.256 728.65 459.422 742.143 459.422 755.021C459.422 772.099 471.684 777.232 484.736 784.573C491.398 788.32 506.852 807.971 510.167 793.05C514.241 774.72 518.144 758.637 518.762 739.479C519.462 717.802 517.577 696.449 516.643 674.959C515.885 657.52 508.166 640.634 508.166 623.389C508.166 599.989 508.677 576.643 516.172 554.159C521.51 538.146 531.478 523.277 531.478 505.886C531.478 467.425 531.478 428.964 531.478 390.503C531.478 352.664 537.354 317.271 544.076 280.299C545.182 274.22 543.386 267.809 544.665 261.697C546.734 251.812 550.991 242.356 553.613 232.615C557.932 216.571 576.655 212.596 584.931 198.589C592.696 185.448 605.653 175.301 605.653 159.382C605.653 151.063 597.176 143.971 597.176 137.13',
    },
    {
      id: 'floater-8',
      path: 'M1.65518 719.935C1.65518 699.165 -2.6381 665.25 12.2516 647.879C25.7711 632.106 41.637 618.569 53.4601 601.372C59.8197 592.122 71.7439 588.055 80.5399 581.71C91.0454 574.132 98.8648 565.129 105.5 554.512C118.073 534.396 111.857 511.129 115.626 488.932C119.047 468.789 123.19 444.448 144.119 435.479C153.761 431.346 160.603 425.589 171.199 423.234C181.898 420.856 192.063 417.972 202.988 416.758C236.622 413.021 227.337 359.655 262.328 359.655',
    },
    {
      id: 'floater-9',
      path: 'M137.29 423.234C138.944 407.518 160.299 397.022 172.14 389.443C187.644 379.52 199.23 368.811 205.107 351.178',
    },
    {
      id: 'floater-10',
      path: 'M46.1603 552.511C48.3339 528.602 66.3271 504.279 75.7127 482.692C84.7926 461.808 87.1705 439.609 91.8428 417.582C99.2762 382.539 103.381 347.474 103.381 311.736C103.381 280.872 119.614 252.456 120.336 221.43C120.591 210.442 128.466 195.895 136.819 188.934C145.782 181.465 157.738 181.425 166.96 175.277',
    },
    {
      id: 'floater-11',
      path: 'M18.6095 550.391C18.6095 531.224 16.4902 512.08 16.4902 493.171C16.4902 479.958 27.0867 477.226 27.0867 464.678C27.0867 452.091 17.6826 439.728 16.608 426.295C14.968 405.795 16.1537 383.304 31.3253 368.132',
    },
    {
      id: 'floater-12',
      path: 'M188.153 554.63C231.098 554.63 284.32 559.204 317.43 590.658C336.787 609.047 342.379 636.868 359.816 656.356C367.2 664.609 372.292 676.522 383.128 682.258C391.458 686.668 395.377 691.345 402.201 697.682C404.949 700.233 414.917 717.554 414.917 709.338',
    },
    {
      id: 'floater-13',
      path: 'M268.686 535.556C294.996 535.556 319.276 538.582 344.039 548.272C361.387 555.061 388.418 566.879 398.905 583.358C408.42 598.311 411.234 631.11 429.752 637.282',
    },
    {
      id: 'floater-14',
      path: 'M569.625 760.201C576.163 761.654 581.985 779.209 584.46 783.985C594.149 802.678 602.437 822.047 609.421 841.912C614.153 855.371 616.25 868.011 616.25 882.061C616.25 895.632 616.25 912.562 616.25 927.625',
    },
    {
      id: 'floater-15',
      path: 'M389.486 344.82C389.486 384.458 368.733 419.94 379.36 459.262C382.023 469.116 389.394 476.31 394.784 484.693C401.74 495.514 402.039 507.86 407.382 519.309C410.749 526.523 404.021 553.421 410.679 556.749',
    },
    {
      id: 'floater-16',
      path: 'M1.28522 1.68878C29.1566 29.5601 41.5518 71.2602 41.5518 110.244C41.5518 154.637 33.2996 205.703 50.0289 247.527',
    },
  ];

  return (
    <div
      ref={containerRef}
      className={clsx(
        'absolute overflow-hidden pointer-events-none z-10',
        className
      )}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 620 1105"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id={blurId}>
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.7" />
          </filter>
        </defs>
        {floaterPaths.map((floater, index) => (
          <Floater
            key={floater.id}
            id={floater.id}
            path={floater.path}
            config={floaterConfigs[index % floaterConfigs.length]}
            blurId={blurId}
          />
        ))}
      </svg>
    </div>
  );
}
