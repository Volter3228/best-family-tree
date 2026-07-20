interface Props {
  count: number;
  isActive: boolean;
  isDraftActive: boolean;
  onReset: () => void;
  onApply: () => void;
}

const FiltersHeader = ({
  count,
  isActive,
  isDraftActive,
  onReset,
  onApply,
}: Props) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-3 py-2.5">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-foreground">Фільтри</span>
          {isActive && (
            <span className="text-xs text-accent-green">Знайдено: {count}</span>
          )}
        </div>
        {(isActive || isDraftActive) && (
          <button
            type="button"
            onClick={onReset}
            className="text-xs text-accent-green transition-colors hover:opacity-70"
          >
            Очистити
          </button>
        )}
      </div>
      <div className="px-3 pb-2.5">
        <button
          type="button"
          onClick={onApply}
          className="w-full rounded-lg bg-accent-green text-white text-sm py-1.5 transition-colors duration-150 hover:opacity-90 active:opacity-80"
        >
          Застосувати
        </button>
      </div>
    </div>
  );
};

export default FiltersHeader;
