import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import { useT } from "@/i18n/useT";
import type { AccentColor } from "@/types";
import type { PendingRow } from "./pendingRows";

interface Props {
  rows: PendingRow[];
  color: AccentColor;
}

// What the user already suggested for this record and is awaiting review.
const PendingBlock = ({ rows, color }: Props) => {
  const t = useT().suggest;
  const colorClasses = COLOR_CLASSES[color];
  if (rows.length === 0) return null;

  return (
    <div
      className={twMerge("rounded-xl px-3 py-2 text-xs", colorClasses.softBg)}
    >
      <p className={twMerge("font-semibold", colorClasses.text)}>
        {t.awaitingReview}
      </p>
      <ul className="mt-1 flex flex-col gap-0.5">
        {rows.map(({ key, label, text, image }) => (
          <li
            key={key}
            className={twMerge(
              "break-words",
              image && "flex items-center gap-2",
            )}
          >
            <span className="text-foreground/60">
              {label}
              {image ? "" : ": "}
            </span>
            {image ? (
              <Image
                src={image}
                alt={label}
                width={32}
                height={32}
                className="h-8 w-8 rounded-lg object-cover"
              />
            ) : (
              text
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PendingBlock;
