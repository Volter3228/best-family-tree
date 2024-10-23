import { XMarkIcon } from "@heroicons/react/24/outline"; // Tailwind Heroicons

interface IProps {
  headerTitle?: string;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Drawer: React.FC<IProps> = ({
  isOpen,
  onClose,
  headerTitle = "Drawer Header",
  children,
}) => {
  return (
    <div
      className={`
        fixed top-0 right-0 h-full w-dvw min-w-96 md:w-1/2 lg:w-1/3 xl:w-1/4 bg-white
        shadow-[-15px_0_36px_2px_rgba(0,0,0,0.2)] transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } duration-300 z-50
      `}
    >
      <div className="flex justify-between items-center p-4 border-b bg-primary">
        <h2 className="text-xl font-bold text-slate-50 pointer-events-none">
          {headerTitle}
        </h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <XMarkIcon className="h-6 w-6 stroke-slate-50 hover:stroke-2" />
        </button>
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
};

export default Drawer;
