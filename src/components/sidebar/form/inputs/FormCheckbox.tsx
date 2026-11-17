import CheckBox from "@/components/ui/CheckBox";
import type { AccentColor } from "@/types";

interface Props {
  checked: boolean;
  label: string;
  color: AccentColor;
  onChange: (checked: boolean) => void;
  // Muted second line under the label.
  hint?: string;
}

const FormCheckbox = ({ checked, label, color, onChange, hint }: Props) => (
  <label
    // `relative` anchors the sr-only input here. Otherwise it is positioned
    // against a far ancestor, and focusing it (Tab) scrolls the card's
    // overflow-hidden wrappers, which cuts the form's visible height.
    className="relative flex items-start gap-2.5 text-sm text-foreground"
    style={{ "--focus-color": `var(--accent-${color})` } as React.CSSProperties}
    onClick={(event) => {
      event.preventDefault();
      onChange(!checked);
    }}
  >
    <input
      type="checkbox"
      className="peer sr-only"
      checked={checked}
      onChange={(event) => onChange(event.target.checked)}
    />
    <CheckBox
      checked={checked}
      color={color}
      className="mt-0.5 peer-focus-visible:ring-2 peer-focus-visible:ring-(--focus-color) peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-surface"
    />
    <span className="flex flex-col">
      {label}
      {hint && <span className="text-xs text-foreground/60">{hint}</span>}
    </span>
  </label>
);

export default FormCheckbox;
