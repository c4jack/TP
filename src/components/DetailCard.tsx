import { Shield, Info } from 'lucide-react';

interface DetailCardProps {
  onClick?: () => void;
}

export function DetailCard({ onClick }: DetailCardProps) {
  return (
    <section 
      onClick={onClick}
      className="glass-panel p-8 rounded-lg space-y-6 cursor-pointer hover:bg-white/10 transition-colors border border-transparent hover:border-white/10"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Shield className="text-primary w-7 h-7 fill-primary/20" />
          </div>
          <h3 className="font-headline text-xl font-bold">免疫稳态</h3>
        </div>
        <span className="px-4 py-1.5 rounded-full bg-primary/20 text-primary font-bold text-sm">
          良好
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white/5 p-4 rounded-xl">
          <p className="text-on-surface-variant text-xs mb-1">抗氧化能力</p>
          <p className="font-headline font-bold text-lg">
            8.2 <span className="text-xs font-normal opacity-60">umol/L</span>
          </p>
        </div>
        <div className="bg-white/5 p-4 rounded-xl">
          <p className="text-on-surface-variant text-xs mb-1">代谢水平</p>
          <p className="font-headline font-bold text-lg">正常</p>
        </div>
      </div>

      <div className="flex gap-4 items-start p-4 bg-white/5 rounded-xl border border-white/5">
        <Info className="text-primary-container shrink-0 mt-0.5 w-5 h-5" />
        <p className="text-sm text-on-surface-variant leading-relaxed">
          您的免疫指标在同龄人中处于领先 <span className="text-white font-bold">15%</span> 的水平，请继续保持规律作息。
        </p>
      </div>
    </section>
  );
}
