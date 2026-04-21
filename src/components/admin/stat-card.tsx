export function StatCard({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="surface rounded-lg p-5">
      <div className="text-sm font-bold text-slate-500">{label}</div>
      <div className="mt-2 text-3xl font-black">{value}</div>
    </div>
  );
}
