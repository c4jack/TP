import React from 'react';
import { Bell, Crown, ChevronRight, PlayCircle, Image as ImageIcon, Users, MessageSquareText, Coins, TrendingUp, Award, Percent, GraduationCap, FileBadge, Lock, Share2, Contact } from 'lucide-react';
import { BottomNav } from './BottomNav';
import { Header } from './Header';

interface Props {
  onTabChange?: (tab: 'home' | 'academy' | 'shop' | 'profile') => void;
  onLoginClick?: () => void;
  onHomeClick?: () => void;
  onAIAssistantClick?: () => void;
}

export function AcademyPage({ onTabChange, onLoginClick, onHomeClick, onAIAssistantClick }: Props) {
  return (
    <div className="min-h-screen relative pb-32 animate-in fade-in duration-500">
      {/* Background Image Layer */}
      <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
        <img
          alt="High-end dark academy background"
          className="w-full h-full object-cover opacity-100"
          src="https://picsum.photos/seed/dark-mountain-lake/1080/1920"
          referrerPolicy="no-referrer"
        />
      </div>

      <Header 
        onLoginClick={onLoginClick} 
        onHomeClick={onHomeClick} 
        showProfile={true}
        userAvatar="https://picsum.photos/seed/user-avatar/200/200"
        onProfileClick={() => onTabChange?.('profile')}
      />

      {/* Core Content Area */}
      <main className="pt-28 px-6 max-w-2xl mx-auto space-y-8">
        
        {/* 1. Top: Personal Info & Identity/Privilege Card */}
        <div className="relative rounded-3xl p-6 overflow-hidden border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] group">
          {/* Dark Glass Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/80 via-black/60 to-zinc-900/80 backdrop-blur-xl"></div>
          {/* Glow / Reflection */}
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl group-hover:bg-amber-500/30 transition-colors duration-700"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative shrink-0">
                <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-zinc-500 via-zinc-300 to-zinc-500 shadow-[0_0_15px_rgba(161,161,170,0.3)]">
                  <img 
                    src="https://picsum.photos/seed/user-avatar/200/200" 
                    alt="User Avatar" 
                    className="w-full h-full rounded-full object-cover border-2 border-black"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-white font-bold text-xl tracking-wide flex items-center gap-2 mb-1.5">
                  李建国
                </h2>
                <div className="inline-flex items-center gap-1 bg-white/10 text-amber-400 text-[10px] px-2.5 py-1 rounded-full border border-amber-500/30 font-medium">
                  <Award className="w-3 h-3" />
                  健康见习生
                </div>
              </div>
            </div>

            {/* Privileges / Progress */}
            <div className="bg-black/30 rounded-2xl p-4 border border-white/5">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white/70 text-xs font-medium">距离正式教练还差 3 门必修课</span>
                <span className="text-amber-400 text-xs font-mono font-bold">40%</span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden mb-4">
                <div className="h-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-full relative shadow-[0_0_10px_rgba(251,191,36,0.5)]" style={{ width: '40%' }}>
                  <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_2s_infinite]"></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-3 border-t border-white/5">
                <div className="flex items-center gap-1.5 opacity-50">
                  <Percent className="w-3.5 h-3.5 text-white" />
                  <span className="text-[10px] text-white">内购折扣</span>
                </div>
                <div className="flex items-center gap-1.5 opacity-50">
                  <GraduationCap className="w-3.5 h-3.5 text-white" />
                  <span className="text-[10px] text-white">导师辅导</span>
                </div>
                <div className="flex items-center gap-1.5 opacity-50">
                  <FileBadge className="w-3.5 h-3.5 text-white" />
                  <span className="text-[10px] text-white">权威认证</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Middle: Video Learning Area (Horizontal Scroll) */}
        <section>
          <div className="flex items-center justify-between mb-4 px-1">
            <h2 className="font-headline text-lg font-extrabold text-white/90 tracking-tight">学院课堂</h2>
            <button className="text-xs font-medium text-white/50 hover:text-white transition-colors flex items-center">
              查看全部 <ChevronRight className="w-3 h-3 ml-0.5" />
            </button>
          </div>

          <div className="flex overflow-x-auto gap-4 pb-4 -mx-6 px-6 snap-x snap-mandatory scrollbar-hide">
            {/* Video Card 1 */}
            <div className="shrink-0 w-72 snap-center group cursor-pointer">
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                <img 
                  src="https://picsum.photos/seed/medical-lecture/600/338" 
                  alt="Video Cover" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                
                {/* Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle className="w-12 h-12 text-white/80 drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 pt-12 pb-3 px-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  <h3 className="text-white font-bold text-sm leading-snug drop-shadow-md truncate">医学博士亲授：质谱与营养</h3>
                </div>

                {/* Progress Bar (Absolute Bottom) */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                  <div className="h-full bg-amber-400" style={{ width: '100%' }}></div>
                </div>
              </div>
            </div>

            {/* Video Card 2 */}
            <div className="shrink-0 w-72 snap-center group cursor-pointer">
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                <img 
                  src="https://picsum.photos/seed/lab-research/600/338" 
                  alt="Video Cover" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                
                {/* Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle className="w-12 h-12 text-white/80 drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 pt-12 pb-3 px-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  <h3 className="text-white font-bold text-sm leading-snug drop-shadow-md truncate">肠道微生态重塑与慢性炎症干预</h3>
                </div>

                {/* Progress Bar (Absolute Bottom) */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                  <div className="h-full bg-amber-400" style={{ width: '45%' }}></div>
                </div>
              </div>
            </div>

            {/* Video Card 3 */}
            <div className="shrink-0 w-72 snap-center group cursor-pointer">
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                <img 
                  src="https://picsum.photos/seed/health-consultation/600/338" 
                  alt="Video Cover" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500"></div>
                
                {/* Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle className="w-12 h-12 text-white/50 drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 pt-12 pb-3 px-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  <h3 className="text-white/70 font-bold text-sm leading-snug drop-shadow-md truncate">高净值客户健康档案建立</h3>
                </div>

                {/* Progress Bar (Absolute Bottom) */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
                  <div className="h-full bg-amber-400" style={{ width: '0%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Visual Focus: Super Button */}
        <section className="px-1">
          <button className="w-full group relative overflow-hidden rounded-full p-[1px] shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] transition-all duration-300 hover:scale-[1.02] active:scale-95">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-300 via-amber-600 to-amber-300 bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite]"></div>
            <div className="relative bg-gradient-to-r from-amber-500 to-amber-600 rounded-full py-4 px-6 flex items-center justify-center gap-2">
              <Award className="w-6 h-6 text-black" />
              <span className="text-black font-extrabold text-lg tracking-wide">立即认证成为健康教练</span>
            </div>
          </button>
        </section>

        {/* 4. Bottom: Business Tools Grid */}
        <section>
          <h2 className="font-headline text-lg font-extrabold text-white/90 tracking-tight mb-4 px-1">展业工具集</h2>
          
          <div className="grid grid-cols-2 gap-3">
            {/* Tool 1 */}
            <div className="glass-panel p-4 rounded-2xl border border-white/5 flex items-center gap-4 hover:bg-white/10 transition-colors cursor-pointer group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center border border-blue-500/20 group-hover:scale-110 transition-transform">
                <Share2 className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-0.5">邀请海报</h4>
                <p className="text-white/40 text-[10px]">专属获客海报</p>
              </div>
            </div>

            {/* Tool 2 */}
            <div className="glass-panel p-4 rounded-2xl border border-white/5 flex items-center gap-4 hover:bg-white/10 transition-colors cursor-pointer group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center border border-emerald-500/20 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-0.5">客户管理</h4>
                <p className="text-white/40 text-[10px]">档案与跟进</p>
              </div>
            </div>

            {/* Tool 3 */}
            <div className="glass-panel p-4 rounded-2xl border border-white/5 flex items-center gap-4 hover:bg-white/10 transition-colors cursor-pointer group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-purple-500/20 group-hover:scale-110 transition-transform">
                <Contact className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-0.5">专属名片</h4>
                <p className="text-white/40 text-[10px]">专业身份展示</p>
              </div>
            </div>

            {/* Tool 4 */}
            <div className="glass-panel p-4 rounded-2xl border border-white/5 flex items-center gap-4 hover:bg-white/10 transition-colors cursor-pointer group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center border border-amber-500/20 group-hover:scale-110 transition-transform">
                <Coins className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-0.5">收益明细</h4>
                <p className="text-white/40 text-[10px]">服务与奖励</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* 5. Bottom Global Nav */}
      <BottomNav activeTab="academy" onTabChange={onTabChange} onAIAssistantClick={onAIAssistantClick} />
    </div>
  );
}
