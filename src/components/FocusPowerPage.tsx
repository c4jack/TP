import { ChevronLeft, Brain, ShieldAlert, Activity, ShieldCheck } from 'lucide-react';
import { BottomNav } from './BottomNav';

interface Props {
  onBack: () => void;
  onTabChange?: (tab: 'home' | 'academy' | 'shop' | 'profile') => void;
  onAIAssistantClick?: () => void;
}

export function FocusPowerPage({ onBack, onTabChange, onAIAssistantClick }: Props) {
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
            <h1 className="font-headline text-lg font-bold text-white tracking-wider">专注力报告</h1>
            
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-violet-500/20 rounded-full blur-3xl animate-pulse duration-3000"></div>
          
          <div className="relative w-48 h-48 mb-4">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              {/* Background Circle */}
              <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
              {/* Progress Circle (84%) */}
              <circle 
                cx="50" cy="50" r="42" 
                fill="none" 
                stroke="#a855f7" 
                strokeWidth="8" 
                strokeDasharray="263.89" 
                strokeDashoffset="42.22" 
                strokeLinecap="round"
                className="drop-shadow-[0_0_12px_rgba(168,85,247,0.8)] transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-headline text-6xl font-extrabold text-white tracking-tighter">84</span>
              <span className="text-violet-400 text-xs font-bold tracking-widest mt-1">综合得分</span>
            </div>
          </div>
          <p className="text-white/80 text-sm text-center max-w-[85%] leading-relaxed">
            您的神经系统与注意力维持在良好水平。重金属排泄率正常，但特定神经递质前体略显不足，可能影响长效专注。
          </p>
        </div>

        {/* Metrics List */}
        <div className="space-y-4">
          <h3 className="font-headline text-lg font-bold text-white/90 ml-2">质谱检测指标</h3>
          
          {/* Metric 1: 血铅浓度 (正常) */}
          <div className="glass-panel p-5 rounded-2xl flex flex-col gap-4 hover:bg-white/10 transition-colors">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-violet-400/20 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <span className="text-base font-bold text-white block">血铅浓度 (Pb)</span>
                  <span className="text-[10px] text-white/40 font-mono mt-0.5 block">参考范围: &lt; 5.0 μg/dL</span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-violet-400/10 text-violet-400 text-xs font-bold border border-violet-400/20">正常</span>
            </div>
            <div className="flex justify-between items-end mt-2">
              <div className="flex items-baseline gap-1">
                <span className="font-headline text-3xl font-bold text-white">2.1</span>
                <span className="text-white/50 text-xs">μg/dL</span>
              </div>
              {/* Color Progress Bar (Lower is better) */}
              <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden mb-2 relative flex justify-end">
                <div className="absolute left-[0%] right-[50%] h-full bg-white/10 border-x border-white/20"></div>
                <div className="h-full bg-violet-400 rounded-full relative z-10 shadow-[0_0_8px_rgba(168,85,247,0.8)]" style={{ width: '21%' }}></div>
              </div>
            </div>
          </div>

          {/* Metric 2: 色氨酸代谢 (偏低 - Warning) */}
          <div className="glass-panel p-5 rounded-2xl flex flex-col gap-4 hover:bg-white/10 transition-colors relative overflow-hidden">
            <div className="absolute right-0 top-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl"></div>
            <div className="flex justify-between items-start relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-400/20 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <span className="text-base font-bold text-white block">色氨酸代谢 (5-HT前体)</span>
                  <span className="text-[10px] text-white/40 font-mono mt-0.5 block">参考范围: 45-80 μmol/L</span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 text-xs font-bold border border-amber-400/20 animate-pulse">偏低</span>
            </div>
            <div className="flex justify-between items-end relative z-10 mt-2">
              <div className="flex items-baseline gap-1">
                <span className="font-headline text-3xl font-bold text-white">35.0</span>
                <span className="text-white/50 text-xs">μmol/L</span>
              </div>
              {/* Sparkline showing downward trend */}
              <div className="w-24 h-8 mb-1">
                <svg viewBox="0 0 100 30" className="w-full h-full overflow-visible">
                  <polyline points="0,10 20,15 40,12 60,20 80,25 100,28" fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_2px_4px_rgba(251,191,36,0.4)]" />
                  <circle cx="100" cy="28" r="3" fill="#fbbf24" />
                </svg>
              </div>
            </div>
          </div>

          {/* Metric 3: 叶酸/B12代谢 (正常) */}
          <div className="glass-panel p-5 rounded-2xl flex flex-col gap-4 hover:bg-white/10 transition-colors">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-violet-400/20 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <span className="text-base font-bold text-white block">叶酸/B12 代谢水平</span>
                  <span className="text-[10px] text-white/40 font-mono mt-0.5 block">参考范围: &gt; 4.0 ng/mL</span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-violet-400/10 text-violet-400 text-xs font-bold border border-violet-400/20">正常</span>
            </div>
            <div className="flex justify-between items-end mt-2">
              <div className="flex items-baseline gap-1">
                <span className="font-headline text-3xl font-bold text-white">15.4</span>
                <span className="text-white/50 text-xs">ng/mL</span>
              </div>
              {/* Mini Area Chart */}
              <div className="w-24 h-8 mb-1 relative">
                <svg viewBox="0 0 100 30" className="w-full h-full overflow-visible">
                  <defs>
                    <linearGradient id="violetGradient" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#a855f7" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <polygon points="0,30 0,20 20,18 40,15 60,12 80,10 100,8 100,30" fill="url(#violetGradient)" />
                  <polyline points="0,20 20,18 40,15 60,12 80,10 100,8" fill="none" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_2px_4px_rgba(168,85,247,0.4)]" />
                  <circle cx="100" cy="8" r="3" fill="#a855f7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Metric 4: 血汞浓度 (正常) */}
          <div className="glass-panel p-5 rounded-2xl flex flex-col gap-4 hover:bg-white/10 transition-colors">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-violet-400/20 flex items-center justify-center">
                  <ShieldAlert className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <span className="text-base font-bold text-white block">血汞浓度 (Hg)</span>
                  <span className="text-[10px] text-white/40 font-mono mt-0.5 block">参考范围: &lt; 5.0 μg/L</span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-violet-400/10 text-violet-400 text-xs font-bold border border-violet-400/20">正常</span>
            </div>
            <div className="flex justify-between items-end mt-2">
              <div className="flex items-baseline gap-1">
                <span className="font-headline text-3xl font-bold text-white">1.2</span>
                <span className="text-white/50 text-xs">μg/L</span>
              </div>
              {/* Color Progress Bar */}
              <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden mb-2 relative flex justify-end">
                <div className="absolute left-[0%] right-[50%] h-full bg-white/10 border-x border-white/20"></div>
                <div className="h-full bg-violet-400 rounded-full relative z-10 shadow-[0_0_8px_rgba(168,85,247,0.8)]" style={{ width: '12%' }}></div>
              </div>
            </div>
          </div>

        </div>
      </main>
      <BottomNav activeTab="home" onTabChange={onTabChange} onAIAssistantClick={onAIAssistantClick} />
    </div>
  );
}
