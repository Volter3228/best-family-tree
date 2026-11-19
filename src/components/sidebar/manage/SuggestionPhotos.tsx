import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { UserGroupIcon, UserIcon } from "@heroicons/react/24/outline";
import { twMerge } from "tailwind-merge";
import PhotoOpenButton from "@/components/photoViewer/PhotoOpenButton";

interface Props {
  suggestionId: string;
  kind: "member" | "team";
  name: string;
  current: string | null;
  next: string | null;
}

const Thumb = ({
  id,
  kind,
  name,
  url,
}: {
  id: string;
  kind: "member" | "team";
  name: string;
  url: string | null;
}) => {
  const shape = kind === "team" ? "rounded-xl" : "rounded-full";
  if (!url) {
    const Icon = kind === "team" ? UserGroupIcon : UserIcon;
    return (
      <span
        className={twMerge(
          "flex h-12 w-12 shrink-0 items-center justify-center bg-foreground/5 text-foreground/40",
          shape,
        )}
      >
        <Icon className="h-6 w-6" />
      </span>
    );
  }
  return (
    <PhotoOpenButton
      id={id}
      src={url}
      previewSrc={url}
      alt={name}
      roundedClassName={shape}
      className="block h-12 w-12 shrink-0 overflow-hidden"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={url} alt="" className="h-full w-full object-cover" />
    </PhotoOpenButton>
  );
};

const SuggestionPhotos = ({
  suggestionId,
  kind,
  name,
  current,
  next,
}: Props) => (
  <div className="mt-1 flex items-center gap-2">
    <Thumb
      id={`${suggestionId}:current`}
      kind={kind}
      name={name}
      url={current}
    />
    <ArrowRightIcon className="h-3.5 w-3.5 shrink-0 text-foreground/40" />
    <Thumb id={`${suggestionId}:next`} kind={kind} name={name} url={next} />
  </div>
);

export default SuggestionPhotos;
