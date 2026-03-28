import { ChevronLeft, Sun, Bone, Activity, Zap } from 'lucide-react';
import { BottomNav } from './BottomNav';

interface Props {
  onBack: () => void;
  onTabChange?: (tab: 'home' | 'academy' | 'shop' | 'profile') => void;
  onAIAssistantClick?: () => void;
}

export function GrowthPowerPage({ onBack, onTabChange, onAIAssistantClick }: Props) {
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
            <h1 className="font-headline text-lg font-bold text-white tracking-wider">成长力报告</h1>
            
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl animate-pulse duration-3000"></div>
          
          <div className="relative w-48 h-48 mb-4">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              {/* Background Circle */}
              <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
              {/* Progress Circle (95%) */}
              <circle 
                cx="50" cy="50" r="42" 
                fill="none" 
                stroke="#fbbf24" 
                strokeWidth="8" 
                strokeDasharray="263.89" 
                strokeDashoffset="13.19" 
                strokeLinecap="round"
                className="drop-shadow-[0_0_12px_rgba(251,191,36,0.8)] transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-headline text-6xl font-extrabold text-white tracking-tighter">95</span>
              <span className="text-amber-400 text-xs font-bold tracking-widest mt-1">综合得分</span>
            </div>
          </div>
          <p className="text-white/80 text-sm text-center max-w-[85%] leading-relaxed">
            您的生长发育与身体构建指标极佳。核心氨基酸代谢旺盛，骨骼发育相关微量元素储备充足。
          </p>
        </div>

        {/* Metrics List */}
        <div className="space-y-4">
          <h3 className="font-headline text-lg font-bold text-white/90 ml-2">质谱检测指标</h3>
          
          {/* Metric 1: 维生素D (优秀) */}
          <div className="glass-panel p-5 rounded-2xl flex flex-col gap-4 hover:bg-white/10 transition-colors">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-400/20 flex items-center justify-center">
                  <Sun className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <span className="text-base font-bold text-white block">血清 25-OH 维生素D</span>
                  <span className="text-[10px] text-white/40 font-mono mt-0.5 block">参考范围: 30-100 ng/mL</span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 text-xs font-bold border border-amber-400/20">优秀</span>
            </div>
            <div className="flex justify-between items-end mt-2">
              <div className="flex items-baseline gap-1">
                <span className="font-headline text-3xl font-bold text-white">68.5</span>
                <span className="text-white/50 text-xs">ng/mL</span>
              </div>
              {/* Color Progress Bar */}
              <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden mb-2 relative">
                <div className="absolute left-[30%] right-[0%] h-full bg-white/10 border-x border-white/20"></div>
                <div className="h-full bg-amber-400 rounded-full relative z-10 shadow-[0_0_8px_rgba(251,191,36,0.8)]" style={{ width: '68%' }}></div>
              </div>
            </div>
          </div>

          {/* Metric 2: 钙同位素 (正常) */}
          <div className="glass-panel p-5 rounded-2xl flex flex-col gap-4 hover:bg-white/10 transition-colors">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-400/20 flex items-center justify-center">
                  <Bone className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <span className="text-base font-bold text-white block">全血游离钙 (Ca2+)</span>
                  <span className="text-[10px] text-white/40 font-mono mt-0.5 block">参考范围: 1.10-1.30 mmol/L</span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 text-xs font-bold border border-amber-400/20">正常</span>
            </div>
            <div className="flex justify-between items-end mt-2">
              <div className="flex items-baseline gap-1">
                <span className="font-headline text-3xl font-bold text-white">1.25</span>
                <span className="text-white/50 text-xs">mmol/L</span>
              </div>
              {/* Sparkline showing stable trend */}
              <div className="w-24 h-8 mb-1">
                <svg viewBox="0 0 100 30" className="w-full h-full overflow-visible">
                  <polyline points="0,15 20,12 40,16 60,14 80,15 100,12" fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_2px_4px_rgba(251,191,36,0.4)]" />
                  <circle cx="100" cy="12" r="3" fill="#fbbf24" />
                </svg>
              </div>
            </div>
          </div>

          {/* Metric 3: 精氨酸代谢 (盈余) */}
          <div className="glass-panel p-5 rounded-2xl flex flex-col gap-4 hover:bg-white/10 transition-colors">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-400/20 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <span className="text-base font-bold text-white block">精氨酸代谢水平</span>
                  <span className="text-[10px] text-white/40 font-mono mt-0.5 block">参考范围: 50-110 μmol/L</span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 text-xs font-bold border border-amber-400/20">盈余</span>
            </div>
            <div className="flex justify-between items-end mt-2">
              <div className="flex items-baseline gap-1">
                <span className="font-headline text-3xl font-bold text-white">125</span>
                <span className="text-white/50 text-xs">μmol/L</span>
              </div>
              {/* Mini Area Chart */}
              <div className="w-24 h-8 mb-1 relative">
                <svg viewBox="0 0 100 30" className="w-full h-full overflow-visible">
                  <defs>
                    <linearGradient id="amberGradient" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <polygon points="0,30 0,25 20,20 40,15 60,10 80,8 100,5 100,30" fill="url(#amberGradient)" />
                  <polyline points="0,25 20,20 40,15 60,10 80,8 100,5" fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_2px_4px_rgba(251,191,36,0.4)]" />
                  <circle cx="100" cy="5" r="3" fill="#fbbf24" />
                </svg>
              </div>
            </div>
          </div>

          {/* Metric 4: 骨钙素 (正常) */}
          <div className="glass-panel p-5 rounded-2xl flex flex-col gap-4 hover:bg-white/10 transition-colors">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-400/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <span className="text-base font-bold text-white block">骨钙素 (Osteocalcin)</span>
                  <span className="text-[10px] text-white/40 font-mono mt-0.5 block">参考范围: 15-46 ng/mL</span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 text-xs font-bold border border-amber-400/20">正常</span>
            </div>
            <div className="flex justify-between items-end mt-2">
              <div className="flex items-baseline gap-1">
                <span className="font-headline text-3xl font-bold text-white">24.2</span>
                <span className="text-white/50 text-xs">ng/mL</span>
              </div>
              {/* Color Progress Bar */}
              <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden mb-2 relative">
                <div className="absolute left-[30%] right-[10%] h-full bg-white/10 border-x border-white/20"></div>
                <div className="h-full bg-amber-400 rounded-full relative z-10 shadow-[0_0_8px_rgba(251,191,36,0.8)]" style={{ width: '50%' }}></div>
              </div>
            </div>
          </div>

        </div>
      </main>
      <BottomNav activeTab="home" onTabChange={onTabChange} onAIAssistantClick={onAIAssistantClick} />
    </div>
  );
}
