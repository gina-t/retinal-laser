import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

function RetinaComponent() {
  const retinaRef = useRef(null);

  useGSAP(
    () => {
      // Animation code with slower speed and right-to-left sequencing
      gsap.to('#laser-spots .spot', {
        opacity: 1,
        stagger: {
          each: 0.7,
          from: 'start',
          grid: 'auto',
        },
        duration: 0.8,
        ease: 'power2.out',
      });
    },
    { scope: retinaRef }
  );

  return (
    <div
      ref={retinaRef}
      className="retina-container w-full max-w-[700px]"
    >
      <svg
        className="retina-diagram w-full h-auto"
        width="700"
        height="700"
        viewBox="0 0 700 700"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
      >
        {/* Main retina structure from Figma */}
        <circle cx="350" cy="350" r="349.5" fill="#FFE6C9" stroke="black" />
        <circle cx="349.5" cy="350.5" r="312.5" fill="#FFA09B" stroke="black" />
        <circle cx="350" cy="350" r="225" fill="#FFA09B" stroke="black" />
        <circle cx="351.5" cy="351.5" r="17.5" fill="#FBF3B9" stroke="black" />

        {/* Retinal vessels from Figma */}
        <g id="retinal-vessels" stroke="#FF6767" strokeWidth="2" fill="none">
          <path d="M355 368C400.244 461.803 506.057 460.646 534 423.318" />
          <path d="M356 358C393.655 263.543 429.222 244.196 517 266.272" />
          <path d="M490 258C500 221 534 210 534 210" />
          <path d="M470 450C484.249 478.64 508.513 483.852 515 483" />
        </g>

        {/* Retinal tear from Figma */}
        <g
          id="retinal-tear-middle"
          stroke="#FDB7EA"
          strokeWidth="2"
          fill="#FF6767"
        >
          <path d="M339.5 86C335.477 159.713 294.314 223.585 212.5 115C212.5 115 306.5 147 287.5 115C268.5 82.9999 339.5 86 339.5 86Z" />
        </g>

        {/* Laser spots - positioned exactly as shown in your reference */}
        <g id="laser-spots">
          {/* spot-1 */}
          <circle
            className="spot"
            cx="341"
            cy="128.5"
            r="5.5"
            opacity="0"
            fill="#FFFDEC"
          />

          {/* spot-2 */}
          <circle
            className="spot"
            cx="330"
            cy="155"
            r="5.5"
            opacity="0"
            fill="#FFFDEC"
          />

          {/* spot-3 */}
          <circle
            className="spot"
            cx="313"
            cy="175"
            r="5.5"
            opacity="0"
            fill="#FFFDEC"
          />
          {/* spot-4 */}
          <circle
            className="spot"
            cx="288"
            cy="184"
            r="5.5"
            opacity="0"
            fill="#FFFDEC"
          />

          {/* spot-5 */}
          <circle
            className="spot"
            cx="260"
            cy="175"
            r="5.5"
            opacity="0"
            fill="#FFFDEC"
          />

          {/* spot-6 */}
          <circle
            className="spot"
            cx="240"
            cy="160"
            r="5.5"
            opacity="0"
            fill="#FFFDEC"
          />
          {/* spot-7 */}
          <circle
            className="spot"
            cx="220.5"
            cy="145.5"
            r="5.5"
            opacity="0"
            fill="#FFFDEC"
          />

          {/* spot-8 */}
          <circle
            className="spot"
            cx="207"
            cy="125"
            r="5.5"
            opacity="0"
            fill="#FFFDEC"
          />

          {/* spot-9 */}
          <circle
            className="spot"
            cx="200"
            cy="107"
            r="5.5"
            opacity="0"
            fill="#FFFDEC"
          />

          {/* spot-10 */}
          <circle
            className="spot"
            cx="230"
            cy="110"
            r="5.5"
            opacity="0"
            fill="#FFFDEC"
          />

          {/* spot-11 */}
          <circle
            className="spot"
            cx="263"
            cy="115.5"
            r="6"
            opacity="0"
            fill="#FFFDEC"
          />
          {/* spot-12 */}
          <circle
            className="spot"
            cx="275"
            cy="95"
            r="5.5"
            opacity="0"
            fill="#FFFDEC"
          />

          {/* spot-13 */}
          <circle
            className="spot"
            cx="292"
            cy="83"
            r="5.5"
            opacity="0"
            fill="#FFFDEC"
          />

          {/* spot-14 */}
          <circle
            className="spot"
            cx="317.5"
            cy="77"
            r="5.5"
            opacity="0"
            fill="#FFFDEC"
          />

          {/* spot-15 */}
          <circle
            className="spot"
            cx="335"
            cy="75"
            r="5.5"
            opacity="0"
            fill="#FFFDEC"
          />

          {/* spot-16 */}
          <circle
            className="spot"
            cx="355"
            cy="78"
            r="5.5"
            opacity="0"
            fill="#FFFDEC"
          />

          {/* spot-17 */}
          <circle
            className="spot"
            cx="350"
            cy="105"
            r="5.5"
            opacity="0"
            fill="#FFFDEC"
          />

          {/* Second row of laser spots - positioned 25px further out */}
          {/* spot-18 (corresponds to spot-1) */}
          <circle
            className="spot"
            cx="360"
            cy="135"
            r="5.5"
            opacity="0"
            fill="#FFFDEC"
          />

          {/* spot-19 (corresponds to spot-2) */}
          <circle
            className="spot"
            cx="350"
            cy="165"
            r="5.5"
            opacity="0"
            fill="#FFFDEC"
          />

          {/* spot-20 (corresponds to spot-3) */}
          <circle
            className="spot"
            cx="333"
            cy="190"
            r="5.5"
            opacity="0"
            fill="#FFFDEC"
          />

          {/* spot-21 (corresponds to spot-4) */}
          <circle
            className="spot"
            cx="313"
            cy="203"
            r="5.5"
            opacity="0"
            fill="#FFFDEC"
          />

          {/* spot-22 (corresponds to spot-5) */}
          <circle
            className="spot"
            cx="285"
            cy="204"
            r="5.5"
            opacity="0"
            fill="#FFFDEC"
          />

          {/* spot-23 (corresponds to spot-5) */}
          <circle
            className="spot"
            cx="263"
            cy="200"
            r="5.5"
            opacity="0"
            fill="#FFFDEC"
          />
          {/* spot-24 (corresponds to spot-6) */}
          <circle
            className="spot"
            cx="242"
            cy="188"
            r="5.5"
            opacity="0"
            fill="#FFFDEC"
          />

          {/* spot-25 (corresponds to spot-6) */}
          <circle
            className="spot"
            cx="217"
            cy="170"
            r="5.5"
            opacity="0"
            fill="#FFFDEC"
          />

          {/* spot-26 (corresponds to spot-7) */}
          <circle
            className="spot"
            cx="195.5"
            cy="145.5"
            r="5.5"
            opacity="0"
            fill="#FFFDEC"
          />

          {/* spot-27 (corresponds to spot-8) */}
          <circle
            className="spot"
            cx="182"
            cy="125"
            r="5.5"
            opacity="0"
            fill="#FFFDEC"
          />

          {/* spot-28 (corresponds to spot-9) */}
          <circle
            className="spot"
            cx="175"
            cy="107"
            r="5.5"
            opacity="0"
            fill="#FFFDEC"
          />

          {/* spot-29 (corresponds to spot-10) */}
          <circle
            className="spot"
            cx="205"
            cy="85"
            r="5.5"
            opacity="0"
            fill="#FFFDEC"
          />

          {/* spot-30 (corresponds to spot-11) */}
          <circle
            className="spot"
            cx="238"
            cy="88"
            r="5.5"
            opacity="0"
            fill="#FFFDEC"
          />

          {/* spot-31 (corresponds to spot-12) */}
          <circle
            className="spot"
            cx="265"
            cy="75"
            r="5.5"
            opacity="0"
            fill="#FFFDEC"
          />

          {/* spot-32 (corresponds to spot-13) */}
          <circle
            className="spot"
            cx="290"
            cy="58"
            r="5.5"
            opacity="0"
            fill="#FFFDEC"
          />

          {/* spot-33 (corresponds to spot-14) */}
          <circle
            className="spot"
            cx="317.5"
            cy="52"
            r="5.5"
            opacity="0"
            fill="#FFFDEC"
          />

          {/* spot-34 (corresponds to spot-15) */}
          <circle
            className="spot"
            cx="345"
            cy="52"
            r="5.5"
            opacity="0"
            fill="#FFFDEC"
          />
          {/* spot-35 (corresponds to spot-15) */}
          <circle
            className="spot"
            cx="375"
            cy="57"
            r="5.5"
            opacity="0"
            fill="#FFFDEC"
          />

          {/* spot-36 (corresponds to spot-16) */}
          <circle
            className="spot"
            cx="382"
            cy="80"
            r="5.5"
            opacity="0"
            fill="#FFFDEC"
          />

          {/* spot-37 (corresponds to spot-17) */}
          <circle
            className="spot"
            cx="374"
            cy="105"
            r="5.5"
            opacity="0"
            fill="#FFFDEC"
          />
        </g>
      </svg>
    </div>
  );
}

export default RetinaComponent;
