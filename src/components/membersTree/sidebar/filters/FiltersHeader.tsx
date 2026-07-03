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
          <span className="text-sm font-semibold text-gray-100">Фільтри</span>
          {isActive && (
            <span className="text-xs text-fuchsia-400/80">
              Знайдено: {count}
            </span>
          )}
        </div>
        {(isActive || isDraftActive) && (
          <button
            type="button"
            onClick={onReset}
            className="text-xs text-fuchsia-400 hover:text-fuchsia-300 transition-colors"
          >
            Очистити
          </button>
        )}
      </div>
      <div className="px-3 pb-2.5">
        <button
          type="button"
          onClick={onApply}
          className="w-full rounded-lg bg-fuchsia-600 hover:bg-fuchsia-700 active:bg-fuchsia-800 text-gray-100 text-sm py-1.5 transition-colors duration-150"
        >
          Застосувати
        </button>
      </div>
    </div>
  );
};

export default FiltersHeader;
