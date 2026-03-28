import { Moon, Activity, Apple, HeartPulse, TrendingUp } from 'lucide-react';

export function HealthPowerDetail() {
  return (
    <div className="space-y-4">
      {/* Main Score Overview */}
      <div className="glass-panel p-6 rounded-lg relative overflow-hidden group hover:bg-white/10 transition-all duration-300">
        {/* Ambient Glow */}
        <div className="absolute -right-6 -top-6 w-32 h-32 bg-emerald-400/20 rounded-full blur-2xl group-hover:bg-emerald-400/30 transition-colors duration-500"></div>
        
        <div className="relative z-10 flex justify-between items-end">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <HeartPulse className="text-emerald-400 w-5 h-5" />
              <span className="text-emerald-400 font-bold text-sm tracking-wider">状态极佳</span>
            </div>
            <h3 className="font-headline text-5xl font-extrabold text-white mb-1">
              92<span className="text-xl text-white/50 font-medium ml-1">分</span>
            </h3>
            <p className="text-sm text-on-surface-variant">综合健康力评估</p>
          </div>
          
          <div className="text-right flex flex-col items-end">
            <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-400/10 text-emerald-400 text-xs font-bold mb-2 border border-emerald-400/20">
              <TrendingUp className="w-3.5 h-3.5" />
              +3%
            </div>
            <p className="text-xs text-on-surface-variant">较上周提升</p>
          </div>
        </div>
      </div>

      {/* Sub Metrics Grid */}
      <div className="grid grid-cols-2 gap-4">
        {/* Sleep */}
        <div className="glass-panel p-5 rounded-xl flex flex-col gap-3 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-400/20 flex items-center justify-center">
              <Moon className="text-indigo-400 w-5 h-5" />
            </div>
            <span className="text-sm text-white/80 font-medium">睡眠质量</span>
          </div>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="font-headline text-3xl font-bold text-white">85</span>
            <span className="text-xs text-white/50">分</span>
          </div>
        </div>
        
        {/* Activity */}
        <div className="glass-panel p-5 rounded-xl flex flex-col gap-3 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-orange-400/20 flex items-center justify-center">
              <Activity className="text-orange-400 w-5 h-5" />
            </div>
            <span className="text-sm text-white/80 font-medium">运动消耗</span>
          </div>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="font-headline text-3xl font-bold text-white">450</span>
            <span className="text-xs text-white/50">千卡</span>
          </div>
        </div>

        {/* Heart Rate */}
        <div className="glass-panel p-5 rounded-xl flex flex-col gap-3 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-rose-400/20 flex items-center justify-center">
              <HeartPulse className="text-rose-400 w-5 h-5" />
            </div>
            <span className="text-sm text-white/80 font-medium">静息心率</span>
          </div>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="font-headline text-3xl font-bold text-white">62</span>
            <span className="text-xs text-white/50">bpm</span>
          </div>
        </div>

        {/* Diet */}
        <div className="glass-panel p-5 rounded-xl flex flex-col gap-3 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-400/20 flex items-center justify-center">
              <Apple className="text-green-400 w-5 h-5" />
            </div>
            <span className="text-sm text-white/80 font-medium">饮食均衡</span>
          </div>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="font-headline text-3xl font-bold text-white">优</span>
          </div>
        </div>
      </div>
    </div>
  );
}
