// Shown only in the public demo, where the database is read-only.
const DemoBadge = () => (
  <div
    role="status"
    className="pointer-events-none fixed left-1/2 top-3 z-40 max-w-[calc(100vw-2rem)] -translate-x-1/2 rounded-full border border-accent-orange/40 bg-surface/80 px-3 py-1 text-center text-xs font-medium text-foreground shadow-lg backdrop-blur-md"
  >
    Демо · зміни не зберігаються
  </div>
);

export default DemoBadge;
