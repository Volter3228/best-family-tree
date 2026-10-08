import { twMerge } from "tailwind-merge";

interface Props {
  // Path of an SVG in /public (e.g. "/images/lion.svg").
  src: string;
  // Size and colour (background) come from the class name.
  className?: string;
}

// An SVG drawn as a mask, so it takes any background colour of the class name.
const MaskIcon = ({ src, className }: Props) => {
  const url = 'url("' + src + '")';
  return (
    <span
      aria-hidden
      className={twMerge("inline-block shrink-0 bg-current", className)}
      style={{
        WebkitMaskImage: url,
        maskImage: url,
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
  );
};

export default MaskIcon;
