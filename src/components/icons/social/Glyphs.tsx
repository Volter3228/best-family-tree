// Glyph-only variants of the social icons, to sit inside a round button
// (the badge icons in this folder are filled circles with the glyph knocked out).
const svgProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": true,
} as const;

export const TelegramGlyph = ({ className }: { className?: string }) => (
  <svg {...svgProps} viewBox="7.6 11.1 30 30" className={className}>
    <path d="M32.934,34.375c0.423-1.298,2.405-14.234,2.65-16.783c0.074-0.772-0.17-1.285-0.648-1.514c-0.578-0.278-1.434-0.139-2.427,0.219c-1.362,0.491-18.774,7.884-19.78,8.312c-0.954,0.405-1.856,0.847-1.856,1.487c0,0.45,0.267,0.703,1.003,0.966c0.766,0.273,2.695,0.858,3.834,1.172c1.097,0.303,2.346,0.04,3.046-0.395c0.742-0.461,9.305-6.191,9.92-6.693c0.614-0.502,1.104,0.141,0.602,0.644c-0.502,0.502-6.38,6.207-7.155,6.997c-0.941,0.959-0.273,1.953,0.358,2.351c0.721,0.454,5.906,3.932,6.687,4.49c0.781,0.558,1.573,0.811,2.298,0.811C32.191,36.439,32.573,35.484,32.934,34.375z" />
  </svg>
);

export const InstagramGlyph = ({ className }: { className?: string }) => (
  <svg {...svgProps} fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
  </svg>
);

export const FacebookGlyph = ({ className }: { className?: string }) => (
  <svg {...svgProps} className={className}>
    <path d="M14 8.5V6.9c0-.7.2-1.1 1.2-1.1H17V3h-2.5C11.8 3 10.5 4.5 10.5 6.7v1.8H8v3h2.5V21H14v-9.5h2.6l.4-3z" />
  </svg>
);

export const LinkedinGlyph = ({ className }: { className?: string }) => (
  <svg {...svgProps} className={className}>
    <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
  </svg>
);
