interface ScoreCardProps {
  label: string;
  score: number;
  colorClass?: string;
  onClick?: () => void;
}

export function ScoreCard({ label, score, colorClass = "bg-primary", onClick }: ScoreCardProps) {
  return (
    <button onClick={onClick} className="glass-panel p-6 rounded-lg flex flex-col justify-between aspect-square group transition-all duration-300 hover:bg-white/20 hover:-translate-y-2 hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)] active:scale-95 text-left w-full cursor-pointer border border-white/5 hover:border-white/20">
      <div>
        <p className="text-white/90 font-label text-base font-bold tracking-widest mb-1 group-hover:text-white transition-colors">
          {label}
        </p>
        <h3 className="font-headline text-5xl font-extrabold text-white group-hover:scale-110 transition-transform origin-left duration-300">
          {score}
        </h3>
      </div>
      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden mt-4">
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out ${colorClass}`}
          style={{ width: `${score}%` }}
        />
      </div>
    </button>
  );
}
