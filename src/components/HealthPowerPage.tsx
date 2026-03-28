import { ChevronLeft, Activity, Droplet, Zap, ShieldCheck } from 'lucide-react';
import { BottomNav } from './BottomNav';

interface Props {
  onBack: () => void;
  onTabChange?: (tab: 'home' | 'academy' | 'shop' | 'profile') => void;
  onAIAssistantClick?: () => void;
}

export function HealthPowerPage({ onBack, onTabChange, onAIAssistantClick }: Props) {
  return (
    <div className="min-h-screen relative pb-32 animate-in fade-in slide-in-from-right-8 duration-500">
      {/* Header (Sticky Top) */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-2xl border-b border-white/10 pt-safe">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between px-4 h-16">
            {/* Back Button */}
            <button 
              onClick={onBack}
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            {/* Title */}
            <h1 className="font-headline text-lg font-bold text-white tracking-wider">健康力报告</h1>
            
            {/* Placeholder for balance */}
            <div className="w-10 h-10"></div>
          </div>
        </div>
      </header>

      {/* Core Content Area */}
      <main className="pt-24 px-6 max-w-2xl mx-auto space-y-6">
        {/* Top Score Card (黄金视觉区) */}
        <div className="glass-panel p-8 rounded-3xl flex flex-col items-center justify-center relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl animate-pulse duration-3000"></div>
          
          <div className="relative w-48 h-48 mb-4">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              {/* Background Circle */}
              <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
              {/* Progress Circle (92%) */}
              <circle 
                cx="50" cy="50" r="42" 
                fill="none" 
                stroke="#34d399" 
                strokeWidth="8" 
                strokeDasharray="263.89" 
                strokeDashoffset="21.11" 
                strokeLinecap="round"
                className="drop-shadow-[0_0_12px_rgba(52,211,153,0.8)] transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-headline text-6xl font-extrabold text-white tracking-tighter">92</span>
              <span className="text-emerald-400 text-xs font-bold tracking-widest mt-1">综合得分</span>
            </div>
          </div>
          <p className="text-white/80 text-sm text-center max-w-[85%] leading-relaxed">
            您的健康力表现优异，核心代谢通路运转良好。但部分微量元素存在流失风险，建议及时补充。
          </p>
        </div>

        {/* Metrics List */}
        <div className="space-y-4">
          <h3 className="font-headline text-lg font-bold text-white/90 ml-2">质谱检测指标</h3>
          
          {/* Metric 1: 维生素D (正常) */}
          <div className="glass-panel p-5 rounded-2xl flex flex-col gap-4 hover:bg-white/10 transition-colors">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-400/20 flex items-center justify-center">
                  <Droplet className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <span className="text-base font-bold text-white block">血清 25-OH 维生素D</span>
                  <span className="text-[10px] text-white/40 font-mono mt-0.5 block">参考范围: 30-100 ng/mL</span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-400/10 text-emerald-400 text-xs font-bold border border-emerald-400/20">正常</span>
            </div>
            <div className="flex justify-between items-end mt-2">
              <div className="flex items-baseline gap-1">
                <span className="font-headline text-3xl font-bold text-white">45.2</span>
                <span className="text-white/50 text-xs">ng/mL</span>
              </div>
              {/* Color Progress Bar */}
              <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden mb-2 relative">
                {/* Target Range Indicator */}
                <div className="absolute left-[30%] right-[0%] h-full bg-white/10 border-x border-white/20"></div>
                <div className="h-full bg-emerald-400 rounded-full relative z-10 shadow-[0_0_8px_rgba(52,211,153,0.8)]" style={{ width: '45%' }}></div>
              </div>
            </div>
          </div>

          {/* Metric 2: 锌元素 (缺乏 - Warning) */}
          <div className="glass-panel p-5 rounded-2xl flex flex-col gap-4 hover:bg-white/10 transition-colors relative overflow-hidden">
            <div className="absolute right-0 top-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl"></div>
            <div className="flex justify-between items-start relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-400/20 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <span className="text-base font-bold text-white block">全血锌 (Zn)</span>
                  <span className="text-[10px] text-white/40 font-mono mt-0.5 block">参考范围: 70-120 μg/dL</span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 text-xs font-bold border border-amber-400/20 animate-pulse">缺乏</span>
            </div>
            <div className="flex justify-between items-end relative z-10 mt-2">
              <div className="flex items-baseline gap-1">
                <span className="font-headline text-3xl font-bold text-white">58.4</span>
                <span className="text-white/50 text-xs">μg/dL</span>
              </div>
              {/* Sparkline showing downward trend */}
              <div className="w-24 h-8 mb-1">
                <svg viewBox="0 0 100 30" className="w-full h-full overflow-visible">
                  <polyline points="0,10 20,12 40,15 60,22 80,25 100,28" fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_2px_4px_rgba(251,191,36,0.4)]" />
                  <circle cx="100" cy="28" r="3" fill="#fbbf24" />
                </svg>
              </div>
            </div>
          </div>

          {/* Metric 3: 辅酶Q10 (盈余) */}
          <div className="glass-panel p-5 rounded-2xl flex flex-col gap-4 hover:bg-white/10 transition-colors">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sky-400/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <span className="text-base font-bold text-white block">血清辅酶 Q10</span>
                  <span className="text-[10px] text-white/40 font-mono mt-0.5 block">参考范围: 0.8-1.5 μg/mL</span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-sky-400/10 text-sky-400 text-xs font-bold border border-sky-400/20">盈余</span>
            </div>
            <div className="flex justify-between items-end mt-2">
              <div className="flex items-baseline gap-1">
                <span className="font-headline text-3xl font-bold text-white">1.85</span>
                <span className="text-white/50 text-xs">μg/mL</span>
              </div>
              {/* Sparkline showing upward trend */}
              <div className="w-24 h-8 mb-1">
                <svg viewBox="0 0 100 30" className="w-full h-full overflow-visible">
                  <polyline points="0,25 20,22 40,18 60,10 80,8 100,4" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_2px_4px_rgba(56,189,248,0.4)]" />
                  <circle cx="100" cy="4" r="3" fill="#38bdf8" />
                </svg>
              </div>
            </div>
          </div>

          {/* Metric 4: 谷胱甘肽 (正常) */}
          <div className="glass-panel p-5 rounded-2xl flex flex-col gap-4 hover:bg-white/10 transition-colors">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-400/20 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <span className="text-base font-bold text-white block">还原型谷胱甘肽 (GSH)</span>
                  <span className="text-[10px] text-white/40 font-mono mt-0.5 block">参考范围: 3.8-5.5 μmol/L</span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-400/10 text-emerald-400 text-xs font-bold border border-emerald-400/20">正常</span>
            </div>
            <div className="flex justify-between items-end mt-2">
              <div className="flex items-baseline gap-1">
                <span className="font-headline text-3xl font-bold text-white">4.6</span>
                <span className="text-white/50 text-xs">μmol/L</span>
              </div>
              {/* Color Progress Bar */}
              <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden mb-2 relative">
                <div className="absolute left-[20%] right-[20%] h-full bg-white/10 border-x border-white/20"></div>
                <div className="h-full bg-emerald-400 rounded-full relative z-10 shadow-[0_0_8px_rgba(52,211,153,0.8)]" style={{ width: '60%' }}></div>
              </div>
            </div>
          </div>

        </div>
      </main>
      <BottomNav activeTab="home" onTabChange={onTabChange} onAIAssistantClick={onAIAssistantClick} />
    </div>
  );
}
