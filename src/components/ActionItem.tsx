import { ChevronRight, LucideIcon } from 'lucide-react';

interface ActionItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick?: () => void;
}

export function ActionItem({ icon: Icon, title, description, onClick }: ActionItemProps) {
  return (
    <div 
      onClick={onClick}
      className="glass-panel p-5 rounded-lg flex items-center gap-5 hover:bg-white/10 transition-all cursor-pointer group"
    >
      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
        <Icon className="text-primary w-7 h-7" />
      </div>
      <div className="flex-1">
        <h4 className="font-bold text-white mb-0.5">{title}</h4>
        <p className="text-xs text-on-surface-variant">{description}</p>
      </div>
      <ChevronRight className="text-white/30 w-5 h-5" />
    </div>
  );
}
