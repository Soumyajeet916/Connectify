export default function GlassCard({ children }) {
  return (
    <div className="backdrop-blur-lg bg-white/10 dark:bg-black/20 border border-white/20 rounded-2xl shadow-lg p-6">
      {children}
    </div>
  );
}
