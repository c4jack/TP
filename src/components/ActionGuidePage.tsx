import { useState } from 'react';
import { ChevronLeft, Bot, CheckCircle2, Circle, ShoppingCart, Utensils, Moon, Pill, ChevronRight } from 'lucide-react';
import { BottomNav } from './BottomNav';

interface Props {
  onBack: () => void;
  onTabChange?: (tab: 'home' | 'academy' | 'shop' | 'profile') => void;
  onAIAssistantClick?: () => void;
}

export function ActionGuidePage({ onBack, onTabChange, onAIAssistantClick }: Props) {
  // State to track completed tasks for gamification
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);

  const toggleTask = (taskId: string) => {
    setCompletedTasks(prev => 
      prev.includes(taskId) 
        ? prev.filter(id => id !== taskId)
        : [...prev, taskId]
    );
  };

  const isCompleted = (taskId: string) => completedTasks.includes(taskId);

  return (
    <div className="min-h-screen relative pb-32 animate-in fade-in slide-in-from-right-8 duration-500">
      {/* Header (Sticky Top) */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-2xl border-b border-white/10 pt-safe">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between px-4 h-16">
            <button 
              onClick={onBack}
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <h1 className="font-headline text-lg font-bold text-white tracking-wider">专属行动指南</h1>
            <div className="w-10 h-10"></div>
          </div>
        </div>
      </header>

      {/* Core Content Area */}
      <main className="pt-24 px-6 max-w-2xl mx-auto space-y-6">
        
        {/* 1. AI Greeting Card */}
        <div className="glass-panel p-6 rounded-3xl relative overflow-hidden flex items-start gap-4 border border-indigo-500/20">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0 relative z-10 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
            <Bot className="w-6 h-6 text-indigo-400" />
          </div>
          <div className="relative z-10 pt-1">
            <h2 className="text-white font-bold text-base mb-1">AI 智能管家</h2>
            <p className="text-white/80 text-sm leading-relaxed">
              已根据您最新的全维质谱报告，为您定制了本周健康改善计划。完成打卡可获取健康积分。
            </p>
          </div>
        </div>

        {/* 2. Category A: Precision Nutrition (Commercial Conversion) */}
        <div className="glass-panel p-6 rounded-2xl relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl"></div>
          
          <div className="flex items-center gap-3 mb-5 relative z-10">
            <div className="w-8 h-8 rounded-full bg-orange-400/20 flex items-center justify-center">
              <Pill className="w-4 h-4 text-orange-400" />
            </div>
            <h3 className="font-headline text-lg font-bold text-white">精准营养补充</h3>
          </div>

          <div className="space-y-3 relative z-10">
            {/* Task 1 with CTA */}
            <div 
              className={`p-4 rounded-xl border transition-all duration-300 ${
                isCompleted('nutri-1') 
                  ? 'bg-emerald-500/10 border-emerald-500/20' 
                  : 'bg-white/5 border-white/5 hover:bg-white/10'
              }`}
            >
              <div className="flex items-start gap-3">
                <button onClick={() => toggleTask('nutri-1')} className="mt-0.5 shrink-0 transition-transform active:scale-90">
                  {isCompleted('nutri-1') ? (
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                  ) : (
                    <Circle className="w-6 h-6 text-white/30" />
                  )}
                </button>
                <div className="flex-1">
                  <h4 className={`text-base font-bold transition-colors ${isCompleted('nutri-1') ? 'text-emerald-400' : 'text-white'}`}>
                    补充 EPA/DHA
                  </h4>
                  <p className="text-white/50 text-xs mt-1 mb-3">针对脑力疲劳指数偏高，建议每日随餐服用。</p>
                  
                  {/* Commercial CTA Button */}
                  <button className="flex items-center justify-between w-full px-4 py-2.5 rounded-lg bg-gradient-to-r from-orange-500 to-rose-500 text-white text-sm font-bold shadow-[0_4px_12px_rgba(249,115,22,0.3)] hover:shadow-[0_4px_16px_rgba(249,115,22,0.5)] transition-all group">
                    <span className="flex items-center gap-2">
                      <ShoppingCart className="w-4 h-4" />
                      前往商城配置
                    </span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* Task 2 */}
            <div 
              className={`p-4 rounded-xl border transition-all duration-300 flex items-center gap-3 ${
                isCompleted('nutri-2') 
                  ? 'bg-emerald-500/10 border-emerald-500/20' 
                  : 'bg-white/5 border-white/5 hover:bg-white/10'
              }`}
            >
              <button onClick={() => toggleTask('nutri-2')} className="shrink-0 transition-transform active:scale-90">
                {isCompleted('nutri-2') ? (
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                ) : (
                  <Circle className="w-6 h-6 text-white/30" />
                )}
              </button>
              <div>
                <h4 className={`text-base font-bold transition-colors ${isCompleted('nutri-2') ? 'text-emerald-400' : 'text-white'}`}>
                  补充维生素 D3
                </h4>
                <p className="text-white/50 text-xs mt-0.5">提升骨骼健康与免疫力基线。</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Category B: Daily Diet */}
        <div className="glass-panel p-6 rounded-2xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-full bg-emerald-400/20 flex items-center justify-center">
              <Utensils className="w-4 h-4 text-emerald-400" />
            </div>
            <h3 className="font-headline text-lg font-bold text-white">日常饮食干预</h3>
          </div>

          <div className="space-y-3">
            {/* Task 1 */}
            <div 
              className={`p-4 rounded-xl border transition-all duration-300 flex items-center gap-3 ${
                isCompleted('diet-1') 
                  ? 'bg-emerald-500/10 border-emerald-500/20' 
                  : 'bg-white/5 border-white/5 hover:bg-white/10'
              }`}
            >
              <button onClick={() => toggleTask('diet-1')} className="shrink-0 transition-transform active:scale-90">
                {isCompleted('diet-1') ? (
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                ) : (
                  <Circle className="w-6 h-6 text-white/30" />
                )}
              </button>
              <div>
                <h4 className={`text-base font-bold transition-colors ${isCompleted('diet-1') ? 'text-emerald-400' : 'text-white'}`}>
                  增加深海鱼摄入
                </h4>
                <p className="text-white/50 text-xs mt-0.5">每周至少2次，补充天然优质脂肪酸。</p>
              </div>
            </div>

            {/* Task 2 */}
            <div 
              className={`p-4 rounded-xl border transition-all duration-300 flex items-center gap-3 ${
                isCompleted('diet-2') 
                  ? 'bg-emerald-500/10 border-emerald-500/20' 
                  : 'bg-white/5 border-white/5 hover:bg-white/10'
              }`}
            >
              <button onClick={() => toggleTask('diet-2')} className="shrink-0 transition-transform active:scale-90">
                {isCompleted('diet-2') ? (
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                ) : (
                  <Circle className="w-6 h-6 text-white/30" />
                )}
              </button>
              <div>
                <h4 className={`text-base font-bold transition-colors ${isCompleted('diet-2') ? 'text-emerald-400' : 'text-white'}`}>
                  减少高GI碳水
                </h4>
                <p className="text-white/50 text-xs mt-0.5">针对代谢指标，替换为全谷物或粗粮。</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Category C: Lifestyle */}
        <div className="glass-panel p-6 rounded-2xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-full bg-sky-400/20 flex items-center justify-center">
              <Moon className="w-4 h-4 text-sky-400" />
            </div>
            <h3 className="font-headline text-lg font-bold text-white">生活方式调整</h3>
          </div>

          <div className="space-y-3">
            {/* Task 1 */}
            <div 
              className={`p-4 rounded-xl border transition-all duration-300 flex items-center gap-3 ${
                isCompleted('life-1') 
                  ? 'bg-emerald-500/10 border-emerald-500/20' 
                  : 'bg-white/5 border-white/5 hover:bg-white/10'
              }`}
            >
              <button onClick={() => toggleTask('life-1')} className="shrink-0 transition-transform active:scale-90">
                {isCompleted('life-1') ? (
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                ) : (
                  <Circle className="w-6 h-6 text-white/30" />
                )}
              </button>
              <div>
                <h4 className={`text-base font-bold transition-colors ${isCompleted('life-1') ? 'text-emerald-400' : 'text-white'}`}>
                  保障 23:00 前入睡
                </h4>
                <p className="text-white/50 text-xs mt-0.5">针对免疫稳态异常，保证充足的深度睡眠。</p>
              </div>
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
