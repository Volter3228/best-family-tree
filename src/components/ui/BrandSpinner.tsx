import { LION_PATHS } from "@/components/ui/lionPaths";

interface Props {
  className?: string;
  exiting?: boolean;
}

const LIONS = [
  { angle: -90, color: "var(--accent-green)" },
  { angle: 30, color: "var(--accent-orange)" },
  { angle: 150, color: "var(--accent-blue)" },
];
const ORBIT = 480;
const LION_SCALE = 0.34;
const LION_CENTER = { x: 919.5, y: 1021.5 };
const VIEW = 900;
const HALF = VIEW / 2;

const BrandSpinner = ({ className = "", exiting = false }: Props) => (
  <div
    className={`brand-spinner relative inline-block overflow-hidden${exiting ? " brand-spinner-exit" : ""} ${className}`}
    role="img"
    aria-label="Loading"
  >
    {LIONS.map(({ angle, color }, i) => (
      <div key={angle} className="brand-orbit" style={{ transform: `rotate(${angle}deg)` }}>
        <div className="brand-lion" style={{ animationDelay: `${i * 0.14}s` }}>
          <svg
            className="brand-lion-inner"
            style={{ animationDelay: `${1.7 + i * 0.2}s` }}
            viewBox={`${-HALF} ${-ORBIT - HALF} ${VIEW} ${VIEW}`}
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <g
              transform={`translate(0 ${-ORBIT}) scale(${LION_SCALE}) translate(${-LION_CENTER.x} ${-LION_CENTER.y})`}
            >
              <g transform="translate(0 2043) scale(0.1 -0.1)" fill={color}>
                {LION_PATHS.map((d) => (
                  <path key={d} d={d} />
                ))}
              </g>
            </g>
          </svg>
        </div>
      </div>
    ))}
    <div className="brand-dot" />
  </div>
);

export default BrandSpinner;
