import { ChevronLeft, Shield, Activity, Droplet, AlertTriangle, TrendingUp, Sparkles } from 'lucide-react';
import { BottomNav } from './BottomNav';

interface Props {
  onBack: () => void;
  onTabChange?: (tab: 'home' | 'academy' | 'shop' | 'profile') => void;
  onAIAssistantClick?: () => void;
}

export function DashboardPage({ onBack, onTabChange, onAIAssistantClick }: Props) {
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
            <h1 className="font-headline text-lg font-bold text-white tracking-wider">全维健康看板</h1>
            
            {/* Placeholder for balance */}
            <div className="w-10 h-10"></div>
          </div>
        </div>
      </header>

      {/* Core Content Area */}
      <main className="pt-24 px-6 max-w-2xl mx-auto space-y-6">
        
        {/* 1. Core Visual Area: Radar Chart */}
        <div className="glass-panel p-6 rounded-3xl flex flex-col items-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse duration-3000"></div>
          
          <div className="flex items-center gap-2 mb-6 w-full justify-center">
            <Sparkles className="w-5 h-5 text-orange-400" />
            <h2 className="font-headline text-lg font-bold text-white">全局机能雷达</h2>
          </div>

          <div className="relative w-full max-w-[320px] aspect-square mb-2 mx-auto">
            <svg viewBox="-35 -10 170 120" className="w-full h-full overflow-visible">
              {/* Radar Grid (Pentagons) */}
              <polygon points="50,10 88,37.6 73.5,82.3 26.5,82.3 12,37.6" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <polygon points="50,20 78.5,40.7 67.6,74.2 32.4,74.2 21.5,40.7" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <polygon points="50,30 69,43.8 61.7,66.1 38.3,66.1 31,43.8" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <polygon points="50,40 59.5,46.9 55.8,58 44.2,58 40.5,46.9" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              
              {/* Axes */}
              <line x1="50" y1="50" x2="50" y2="10" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <line x1="50" y1="50" x2="88" y2="37.6" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <line x1="50" y1="50" x2="73.5" y2="82.3" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <line x1="50" y1="50" x2="26.5" y2="82.3" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <line x1="50" y1="50" x2="12" y2="37.6" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

              {/* Data Polygon */}
              <defs>
                <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fb923c" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.6" />
                </linearGradient>
              </defs>
              {/* Points: 95%, 80%, 70%, 85%, 90% */}
              <polygon 
                points="50,12 80.4,40 66.4,72.6 30,77.5 15.8,38.2" 
                fill="url(#radarGradient)" 
                stroke="#fb923c" 
                strokeWidth="2" 
                strokeLinejoin="round"
                className="drop-shadow-[0_0_15px_rgba(251,146,60,0.5)]"
              />
              
              {/* Data Points */}
              <circle cx="50" cy="12" r="2.5" fill="#fff" className="drop-shadow-[0_0_5px_#fff]" />
              <circle cx="80.4" cy="40" r="2.5" fill="#fff" className="drop-shadow-[0_0_5px_#fff]" />
              <circle cx="66.4" cy="72.6" r="2.5" fill="#fff" className="drop-shadow-[0_0_5px_#fff]" />
              <circle cx="30" cy="77.5" r="2.5" fill="#fff" className="drop-shadow-[0_0_5px_#fff]" />
              <circle cx="15.8" cy="38.2" r="2.5" fill="#fff" className="drop-shadow-[0_0_5px_#fff]" />

              {/* Labels */}
              <text x="50" y="2" fill="rgba(255,255,255,0.9)" fontSize="7" textAnchor="middle" fontWeight="bold">免疫抗氧</text>
              <text x="92" y="38" fill="rgba(255,255,255,0.9)" fontSize="7" textAnchor="start" alignmentBaseline="middle" fontWeight="bold">营养代谢</text>
              <text x="78" y="92" fill="rgba(255,255,255,0.9)" fontSize="7" textAnchor="start" fontWeight="bold">重金属排解</text>
              <text x="22" y="92" fill="rgba(255,255,255,0.9)" fontSize="7" textAnchor="end" fontWeight="bold">肠道微生态</text>
              <text x="8" y="38" fill="rgba(255,255,255,0.9)" fontSize="7" textAnchor="end" alignmentBaseline="middle" fontWeight="bold">神经递质</text>
            </svg>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-4 w-full relative z-10">
            <p className="text-white/90 text-sm leading-relaxed">
              <span className="text-orange-400 font-bold mr-1">AI 智能洞察：</span>
              您的整体代谢处于极佳状态，抗氧化能力击败全国 <span className="text-white font-bold text-base">85%</span> 同龄人。
            </p>
          </div>
        </div>

        {/* 2. Sub-dimension Cards */}
        <div className="space-y-4">
          
          {/* Card A: 免疫与抗氧化 */}
          <div className="glass-panel p-6 rounded-2xl hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-orange-400/20 flex items-center justify-center">
                <Shield className="w-4 h-4 text-orange-400" />
              </div>
              <h3 className="font-headline text-lg font-bold text-white">免疫与抗氧化</h3>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-xs mb-1">综合抗氧化能力 (TAC)</p>
                <div className="flex items-baseline gap-1">
                  <span className="font-headline text-4xl font-extrabold text-white">8.2</span>
                  <span className="text-white/50 text-sm">μmol/L</span>
                </div>
                <div className="mt-2 inline-flex items-center gap-1 px-2 py-0.5 rounded bg-orange-400/10 text-orange-400 text-xs font-bold border border-orange-400/20">
                  <TrendingUp className="w-3 h-3" />
                  领先 15%
                </div>
              </div>
              
              {/* Circular Progress */}
              <div className="relative w-20 h-20">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
                  <circle 
                    cx="50" cy="50" r="40" 
                    fill="none" 
                    stroke="#fb923c" 
                    strokeWidth="8" 
                    strokeDasharray="251.2" 
                    strokeDashoffset="37.68" 
                    strokeLinecap="round"
                    className="drop-shadow-[0_0_8px_rgba(251,146,60,0.6)]"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">85<span className="text-[10px] text-white/50">%</span></span>
                </div>
              </div>
            </div>
          </div>

          {/* Card B: 深度营养基线 */}
          <div className="glass-panel p-6 rounded-2xl hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-sky-400/20 flex items-center justify-center">
                <Droplet className="w-4 h-4 text-sky-400" />
              </div>
              <h3 className="font-headline text-lg font-bold text-white">深度营养基线</h3>
            </div>

            <div className="space-y-5">
              {/* Item 1 */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-white/80">核心氨基酸群</span>
                  <span className="text-emerald-400 font-bold text-xs">正常</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.6)]" style={{ width: '65%' }}></div>
                </div>
              </div>
              
              {/* Item 2 */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-white/80">水溶性维生素 (B族/C)</span>
                  <span className="text-sky-400 font-bold text-xs">丰富</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-sky-400 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.6)]" style={{ width: '90%' }}></div>
                </div>
              </div>

              {/* Item 3 */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-white/80">脂溶性维生素 (D/E)</span>
                  <span className="text-amber-400 font-bold text-xs">缺乏</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full shadow-[0_0_8px_rgba(251,191,36,0.6)]" style={{ width: '30%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card C: 毒害物质暴露 */}
          <div className="glass-panel p-6 rounded-2xl hover:bg-white/10 transition-colors relative overflow-hidden">
            <div className="absolute right-0 top-0 w-32 h-32 bg-red-500/5 rounded-full blur-2xl"></div>
            
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="w-8 h-8 rounded-full bg-rose-400/20 flex items-center justify-center">
                <AlertTriangle className="w-4 h-4 text-rose-400" />
              </div>
              <h3 className="font-headline text-lg font-bold text-white">毒害物质暴露</h3>
            </div>

            <div className="space-y-6 relative z-10">
              {/* Lead (Pb) */}
              <div>
                <div className="flex justify-between items-end mb-2">
                  <div>
                    <span className="text-white/80 text-sm block">血铅 (Pb)</span>
                    <span className="text-[10px] text-white/40 font-mono">安全阈值 &lt; 5.0 μg/dL</span>
                  </div>
                  <div className="text-right">
                    <span className="text-white font-bold text-lg">2.1</span>
                    <span className="text-white/50 text-xs ml-1">μg/dL</span>
                  </div>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full relative">
                  {/* Threshold Marker */}
                  <div className="absolute left-[50%] top-[-4px] bottom-[-4px] w-0.5 bg-rose-500 z-20"></div>
                  <div className="h-full bg-white/40 rounded-full relative z-10" style={{ width: '21%' }}></div>
                </div>
              </div>

              {/* Mercury (Hg) */}
              <div>
                <div className="flex justify-between items-end mb-2">
                  <div>
                    <span className="text-white/80 text-sm block">血汞 (Hg)</span>
                    <span className="text-[10px] text-white/40 font-mono">安全阈值 &lt; 5.0 μg/L</span>
                  </div>
                  <div className="text-right">
                    <span className="text-amber-400 font-bold text-lg">4.8</span>
                    <span className="text-white/50 text-xs ml-1">μg/L</span>
                  </div>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full relative">
                  {/* Threshold Marker */}
                  <div className="absolute left-[50%] top-[-4px] bottom-[-4px] w-0.5 bg-rose-500 z-20"></div>
                  <div className="h-full bg-amber-400 rounded-full relative z-10 shadow-[0_0_8px_rgba(251,191,36,0.6)]" style={{ width: '48%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Historical Trend */}
          <div className="glass-panel p-6 rounded-2xl hover:bg-white/10 transition-colors mt-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-indigo-400/20 flex items-center justify-center">
                <Activity className="w-4 h-4 text-indigo-400" />
              </div>
              <h3 className="font-headline text-lg font-bold text-white">健康趋势轨迹</h3>
            </div>

            <div className="relative h-32 w-full mt-4">
              <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="trendGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#818cf8" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
                  </linearGradient>
                </defs>
                
                {/* Grid Lines */}
                <line x1="0" y1="10" x2="100" y2="10" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" strokeDasharray="2 2" />
                <line x1="0" y1="20" x2="100" y2="20" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" strokeDasharray="2 2" />
                <line x1="0" y1="30" x2="100" y2="30" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" strokeDasharray="2 2" />

                {/* Area & Line (Points: 10,30 -> 50,20 -> 90,5) */}
                <polygon points="10,40 10,30 50,20 90,5 90,40" fill="url(#trendGradient)" />
                <polyline points="10,30 50,20 90,5" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_2px_4px_rgba(129,140,248,0.5)]" />
                
                {/* Data Points */}
                <circle cx="10" cy="30" r="2" fill="#818cf8" stroke="#000" strokeWidth="1" />
                <circle cx="50" cy="20" r="2" fill="#818cf8" stroke="#000" strokeWidth="1" />
                <circle cx="90" cy="5" r="2.5" fill="#fff" stroke="#818cf8" strokeWidth="1.5" className="drop-shadow-[0_0_5px_rgba(129,140,248,0.8)]" />

                {/* Labels */}
                <text x="10" y="48" fill="rgba(255,255,255,0.5)" fontSize="4" textAnchor="middle">1月前</text>
                <text x="50" y="48" fill="rgba(255,255,255,0.5)" fontSize="4" textAnchor="middle">2周前</text>
                <text x="90" y="48" fill="rgba(255,255,255,0.9)" fontSize="4" textAnchor="middle" fontWeight="bold">本次</text>

                {/* Value Labels */}
                <text x="10" y="26" fill="rgba(255,255,255,0.7)" fontSize="4" textAnchor="middle">75分</text>
                <text x="50" y="16" fill="rgba(255,255,255,0.7)" fontSize="4" textAnchor="middle">82分</text>
                <text x="90" y="1" fill="#818cf8" fontSize="5" textAnchor="middle" fontWeight="bold">92分</text>
              </svg>
            </div>
          </div>

        </div>
      </main>

      <BottomNav 
        activeTab="home" 
        onTabChange={onTabChange} 
        onAIAssistantClick={onAIAssistantClick}
      />
    </div>
  );
}
