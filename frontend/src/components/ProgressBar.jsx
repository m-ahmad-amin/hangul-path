export default function ProgressBar({ current, total = 30, label }) {
  const percent = Math.min((current / total) * 100, 100);

  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-400">{label}</span>
          <span className="text-gold font-medium">
            Day {current} of {total}
          </span>
        </div>
      )}
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-gold-dark to-gold rounded-full transition-all duration-700"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
