import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bell, Crown, ChevronRight, PlayCircle, Image as ImageIcon, Users, MessageSquareText, Coins, TrendingUp, Award, Percent, GraduationCap, FileBadge, Lock, Share2, Contact, X, ArrowRight, Tag, CheckCircle2, CircleDashed, ChevronLeft, QrCode, BarChart3, IdCard, UserCheck } from 'lucide-react';
import { BottomNav } from './BottomNav';
import { Header } from './Header';

interface Props {
  onTabChange?: (tab: 'home' | 'academy' | 'shop' | 'profile') => void;
  onLoginClick?: () => void;
  onHomeClick?: () => void;
  onAIAssistantClick?: () => void;
}

export function AcademyPage({ onTabChange, onLoginClick, onHomeClick, onAIAssistantClick }: Props) {
  const [showIdentitySheet, setShowIdentitySheet] = useState(false);
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<{title: string, instructor: string, duration: string, cover: string} | null>(null);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [showAllTools, setShowAllTools] = useState(false);

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
        <div 
          onClick={() => setShowIdentitySheet(true)}
          className="relative rounded-3xl px-4 py-2.5 overflow-hidden border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] group cursor-pointer hover:border-white/20 transition-colors"
        >
          {/* Dark Glass Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/80 via-black/60 to-zinc-900/80 backdrop-blur-xl"></div>
          {/* Glow / Reflection */}
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl group-hover:bg-amber-500/30 transition-colors duration-700"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-1.5">
              <div className="relative shrink-0">
                <div className="w-9 h-9 rounded-full p-[2px] bg-gradient-to-tr from-zinc-500 via-zinc-300 to-zinc-500 shadow-[0_0_15px_rgba(161,161,170,0.3)]">
                  <img 
                    src="https://picsum.photos/seed/user-avatar/200/200" 
                    alt="User Avatar" 
                    className="w-full h-full rounded-full object-cover border-2 border-black"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-white font-bold text-sm tracking-wide flex items-center gap-2 mb-0.5">
                  李建国
                </h2>
                <div className="inline-flex items-center gap-1 bg-white/10 text-amber-400 text-[9px] px-1.5 py-0.5 rounded-full border border-amber-500/30 font-medium">
                  <Award className="w-2.5 h-2.5" />
                  健康见习生
                </div>
              </div>
            </div>

            {/* Privileges / Progress */}
            <div className="bg-black/30 rounded-2xl px-3 py-1.5 border border-white/5">
              <div className="flex justify-between items-center mb-1">
                <span className="text-white/70 text-[10px] font-medium">距正式教练差 3 门必修课</span>
                <span className="text-amber-400 text-[11px] font-mono font-bold">40%</span>
              </div>
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-1.5">
                <div className="h-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-full relative shadow-[0_0_10px_rgba(251,191,36,0.5)]" style={{ width: '40%' }}>
                  <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_2s_infinite]"></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-1 border-t border-white/5">
                <div className="flex items-center gap-1 opacity-60">
                  <Percent className="w-2.5 h-2.5 text-white" />
                  <span className="text-[8px] text-white">内购折扣</span>
                </div>
                <div className="flex items-center gap-1 opacity-60">
                  <GraduationCap className="w-2.5 h-2.5 text-white" />
                  <span className="text-[8px] text-white">导师辅导</span>
                </div>
                <div className="flex items-center gap-1 opacity-60">
                  <FileBadge className="w-2.5 h-2.5 text-white" />
                  <span className="text-[8px] text-white">权威认证</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Middle: Video Learning Area (Horizontal Scroll) */}
        <section>
          <div className="flex items-center justify-between mb-4 px-1">
            <h2 className="font-headline text-lg font-extrabold text-white/90 tracking-tight">学院课堂</h2>
            <button 
              onClick={() => setShowAllCourses(true)}
              className="text-xs font-medium text-white/50 hover:text-white transition-colors flex items-center"
            >
              查看全部 <ChevronRight className="w-3 h-3 ml-0.5" />
            </button>
          </div>

          <div className="flex overflow-x-auto gap-4 pb-4 -mx-6 px-6 snap-x snap-mandatory scrollbar-hide">
            {/* Video Card 1 */}
            <div 
              onClick={() => setSelectedCourse({ title: '医学博士亲授：质谱与营养', instructor: 'Dr. Wang', duration: '45分钟', cover: 'https://picsum.photos/seed/medical-lecture/600/338' })}
              className="shrink-0 w-72 snap-center group cursor-pointer"
            >
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
            <div 
              onClick={() => setSelectedCourse({ title: '肠道微生态重塑与慢性炎症干预', instructor: 'Dr. Chen', duration: '60分钟', cover: 'https://picsum.photos/seed/lab-research/600/338' })}
              className="shrink-0 w-72 snap-center group cursor-pointer"
            >
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
            <div 
              onClick={() => setSelectedCourse({ title: '高净值客户健康档案建立', instructor: 'Prof. Li', duration: '50分钟', cover: 'https://picsum.photos/seed/health-consultation/600/338' })}
              className="shrink-0 w-72 snap-center group cursor-pointer"
            >
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
          <button 
            onClick={() => setShowTaskModal(true)}
            className="w-full group relative overflow-hidden rounded-full shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-95 bg-emerald-500/20 backdrop-blur-xl border border-emerald-500/30"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 via-emerald-400/20 to-emerald-400/0 bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite]"></div>
            <div className="relative py-4 px-6 flex items-center justify-center gap-2">
              <Award className="w-6 h-6 text-emerald-400" />
              <span className="text-white font-extrabold text-lg tracking-wide drop-shadow-md">立即认证成为健康教练</span>
            </div>
          </button>
        </section>

        {/* 4. Bottom: Business Tools Grid */}
        <section>
          <div className="flex items-center justify-between mb-4 px-1">
            <h2 className="font-headline text-lg font-extrabold text-white/90 tracking-tight">展业工具集</h2>
            <button 
              onClick={() => setShowAllTools(true)}
              className="text-xs font-medium text-white/50 hover:text-white transition-colors flex items-center"
            >
              查看全部 <ChevronRight className="w-3 h-3 ml-0.5" />
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {/* Tool 1 */}
            <div 
              onClick={() => setShowAllTools(true)}
              className="glass-panel p-4 rounded-2xl border border-white/5 flex items-center gap-4 hover:bg-white/10 transition-colors cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center border border-blue-500/20 group-hover:scale-110 transition-transform">
                <Share2 className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-0.5">邀请海报</h4>
                <p className="text-white/40 text-[10px]">专属获客海报</p>
              </div>
            </div>

            {/* Tool 2 */}
            <div 
              onClick={() => setShowAllTools(true)}
              className="glass-panel p-4 rounded-2xl border border-white/5 flex items-center gap-4 hover:bg-white/10 transition-colors cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center border border-emerald-500/20 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-0.5">客户管理</h4>
                <p className="text-white/40 text-[10px]">档案与跟进</p>
              </div>
            </div>

            {/* Tool 3 */}
            <div 
              onClick={() => setShowAllTools(true)}
              className="glass-panel p-4 rounded-2xl border border-white/5 flex items-center gap-4 hover:bg-white/10 transition-colors cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-purple-500/20 group-hover:scale-110 transition-transform">
                <Contact className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-0.5">专属名片</h4>
                <p className="text-white/40 text-[10px]">专业身份展示</p>
              </div>
            </div>

            {/* Tool 4 */}
            <div 
              onClick={() => setShowAllTools(true)}
              className="glass-panel p-4 rounded-2xl border border-white/5 flex items-center gap-4 hover:bg-white/10 transition-colors cursor-pointer group"
            >
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

      {/* Modals */}
      <AnimatePresence>
        {/* Component A: Identity Status Bottom Sheet */}
        {showIdentitySheet && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[100]"
              onClick={() => setShowIdentitySheet(false)}
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 max-w-2xl mx-auto bg-[rgba(255,255,255,0.08)] backdrop-blur-2xl border-t border-[rgba(255,255,255,0.15)] rounded-t-3xl p-6 z-[101] pb-safe shadow-[0_-10px_40px_rgba(0,0,0,0.3)]"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white">我的身份状态</h3>
                <button onClick={() => setShowIdentitySheet(false)} className="p-2 bg-white/5 rounded-full text-white/50 hover:text-white transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Growth Path */}
              <div className="flex items-center justify-between bg-black/40 rounded-2xl p-5 border border-white/5 mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-emerald-500/5"></div>
                
                {/* Trainee */}
                <div className="flex flex-col items-center gap-2 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                    <Award className="w-6 h-6 text-amber-400" />
                  </div>
                  <span className="text-amber-400 text-xs font-medium">健康见习生</span>
                </div>
                
                {/* Arrow */}
                <div className="flex-1 flex items-center justify-center px-4 relative z-10">
                  <div className="w-full border-t-2 border-dashed border-white/20 relative">
                    <div className="absolute top-[-1px] left-0 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-[shimmer_2s_infinite]"></div>
                  </div>
                  <ArrowRight className="absolute text-white/30 w-5 h-5 bg-zinc-900/95 rounded-full" />
                </div>
                
                {/* Certified */}
                <div className="flex flex-col items-center gap-2 opacity-50 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center">
                    <Lock className="w-5 h-5 text-white/50" />
                  </div>
                  <span className="text-white/50 text-xs font-medium">认证健康教练</span>
                </div>
              </div>

              {/* Privileges */}
              <h4 className="text-sm font-bold text-white/90 mb-4">解锁三大顶级特权，成为认证健康教练</h4>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-4 bg-white/5 rounded-2xl p-4 border border-white/5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400/20 to-amber-600/20 flex items-center justify-center shrink-0">
                    <Tag className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm mb-1">全线产品内购价</div>
                    <div className="text-white/50 text-xs">享受代理商级别的专属批发折扣</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white/5 rounded-2xl p-4 border border-white/5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400/20 to-blue-600/20 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm mb-1">医学博士级导师带教</div>
                    <div className="text-white/50 text-xs">顶尖专家线上线下专业指导</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white/5 rounded-2xl p-4 border border-white/5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 flex items-center justify-center shrink-0">
                    <FileBadge className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm mb-1">权威机构资格证书</div>
                    <div className="text-white/50 text-xs">获得行业认可的专业执业资质</div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <button 
                onClick={() => setShowIdentitySheet(false)} 
                className="w-full py-4 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-black font-extrabold text-lg shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:scale-[1.02] active:scale-95 transition-all"
              >
                继续学习，冲刺认证
              </button>
            </motion.div>
          </>
        )}

        {/* Component B: Certification Task Checklist Modal */}
        {showTaskModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-6"
              onClick={() => setShowTaskModal(false)}
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-3rem)] max-w-md bg-[rgba(255,255,255,0.08)] backdrop-blur-2xl border border-[rgba(255,255,255,0.15)] rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-[101]"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">健康教练认证通关中心</h3>
                  <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full text-xs font-medium border border-emerald-500/20">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                    已学完 2/5 节核心课程
                  </div>
                </div>
                <button onClick={() => setShowTaskModal(false)} className="p-2 bg-white/5 rounded-full text-white/50 hover:text-white transition-colors shrink-0">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Checklist */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3 border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-white/70 text-sm line-through decoration-white/30">学习《肠道微生态基础》</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3 border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-white/70 text-sm line-through decoration-white/30">学习《靶向营养学入门》</span>
                </div>
                <div className="flex items-center justify-between bg-emerald-500/10 rounded-xl p-3 border border-emerald-500/30">
                  <div className="flex items-center gap-3">
                    <CircleDashed className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span className="text-white font-medium text-sm">学习《医学博士亲授：质谱与营养》</span>
                  </div>
                  <button className="shrink-0 ml-2 px-3 py-1.5 bg-emerald-500 text-white text-xs font-bold rounded-full shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition-colors">
                    去上课
                  </button>
                </div>
                <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3 border border-white/5 opacity-50">
                  <Lock className="w-5 h-5 text-white/40 shrink-0" />
                  <span className="text-white/50 text-sm">参加线上认证基础考试</span>
                </div>
              </div>

              {/* Bottom Action */}
              <button className="w-full py-4 rounded-full bg-white/10 text-white/50 font-bold text-base cursor-not-allowed border border-white/5">
                请先完成必修课 (2/5)
              </button>
            </motion.div>
          </>
        )}

        {/* Component C: Course Detail Full Screen Overlay */}
        {selectedCourse && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[120] bg-black overflow-y-auto"
          >
            {/* Video Player Area */}
            <div className="relative w-full aspect-video bg-zinc-900">
              <img 
                src={selectedCourse.cover} 
                alt="Course Cover" 
                className="w-full h-full object-cover opacity-60" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors border border-white/10">
                  <PlayCircle className="w-8 h-8 text-white" />
                </div>
              </div>
              <button 
                onClick={() => setSelectedCourse(null)}
                className="absolute top-12 left-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-white/10 hover:bg-black/60 transition-colors"
              >
                <ChevronRight className="w-6 h-6 rotate-180" />
              </button>
            </div>

            {/* Course Content */}
            <div className="p-6 space-y-6 pb-24">
              {/* Title Card */}
              <div className="p-5 rounded-3xl bg-[rgba(255,255,255,0.08)] backdrop-blur-2xl border border-[rgba(255,255,255,0.15)] shadow-lg">
                <h1 className="text-xl font-bold text-white mb-3 leading-snug">{selectedCourse.title}</h1>
                <div className="flex items-center gap-4">
                  <span className="text-amber-400 text-sm font-medium flex items-center gap-1.5">
                    <Award className="w-4 h-4" />
                    必修课程
                  </span>
                  <span className="text-white/50 text-sm">时长: {selectedCourse.duration}</span>
                </div>
              </div>

              {/* Instructor Card */}
              <div className="p-5 rounded-3xl bg-[rgba(255,255,255,0.08)] backdrop-blur-2xl border border-[rgba(255,255,255,0.15)] shadow-lg">
                <h2 className="text-lg font-bold text-white mb-4">讲师简介</h2>
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src="https://picsum.photos/seed/dr-wang/100/100" 
                    alt="Instructor" 
                    className="w-14 h-14 rounded-full border border-white/20" 
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="text-white font-bold text-base mb-0.5">{selectedCourse.instructor}</div>
                    <div className="text-white/50 text-xs">顶尖营养学专家 / 医学博士</div>
                  </div>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  拥有超过 15 年的临床营养干预经验，专注于质谱技术在精准营养中的应用，曾指导上百名健康教练完成专业认证。
                </p>
              </div>

              {/* Syllabus Card */}
              <div className="p-5 rounded-3xl bg-[rgba(255,255,255,0.08)] backdrop-blur-2xl border border-[rgba(255,255,255,0.15)] shadow-lg">
                <h2 className="text-lg font-bold text-white mb-5">课程大纲</h2>
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div className="w-7 h-7 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-bold shrink-0 border border-amber-500/30">1</div>
                    <div>
                      <div className="text-white text-sm font-medium mb-1">质谱技术基础原理</div>
                      <div className="text-white/50 text-xs">10:25</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-7 h-7 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-bold shrink-0 border border-amber-500/30">2</div>
                    <div>
                      <div className="text-white text-sm font-medium mb-1">人体微量元素检测与分析</div>
                      <div className="text-white/50 text-xs">15:40</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-7 h-7 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-bold shrink-0 border border-amber-500/30">3</div>
                    <div>
                      <div className="text-white text-sm font-medium mb-1">靶向营养干预方案制定</div>
                      <div className="text-white/50 text-xs">18:55</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Component D: All Courses Page */}
        {showAllCourses && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[110] bg-black overflow-y-auto pb-safe"
          >
            {/* Background */}
            <div className="fixed inset-0 z-[-1] bg-black">
              <img src="https://picsum.photos/seed/dark-mountain-lake/1080/1920" alt="bg" className="w-full h-full object-cover opacity-40" referrerPolicy="no-referrer" />
            </div>
            <div className="fixed inset-0 z-[-1] bg-black/60 backdrop-blur-3xl"></div>

            {/* Header */}
            <div className="sticky top-0 z-20 flex items-center justify-center p-4 pt-safe-top bg-black/20 backdrop-blur-md border-b border-white/10">
               <button onClick={() => setShowAllCourses(false)} className="absolute left-4 p-2 bg-white/5 rounded-full text-white/70 hover:text-white transition-colors">
                 <ChevronLeft className="w-5 h-5"/>
               </button>
               <h1 className="text-lg font-bold text-white">全部课程目录</h1>
            </div>

            {/* Tabs */}
            <div className="flex overflow-x-auto gap-2 px-4 py-4 scrollbar-hide">
               {['全部', '基础必修', '进阶营养学', '展业技能', '博士带教'].map((tab, i) => (
                 <button key={tab} className={`px-4 py-1.5 rounded-full border text-sm whitespace-nowrap transition-colors ${i === 0 ? 'bg-amber-500/20 border-amber-500/50 text-amber-400' : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'}`}>
                   {tab}
                 </button>
               ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 gap-4 px-4 pb-8">
               {[
                 { title: '肠道健康必修课', instructor: 'Dr. Wang', progress: '100%', cover: 'https://picsum.photos/seed/course1/400/300' },
                 { title: '靶向营养学入门', instructor: 'Dr. Chen', progress: '50%', cover: 'https://picsum.photos/seed/course2/400/300' },
                 { title: '高净值客户档案', instructor: 'Prof. Li', progress: '0%', cover: 'https://picsum.photos/seed/course3/400/300' },
                 { title: '质谱与营养前沿', instructor: 'Dr. Wang', progress: '0%', cover: 'https://picsum.photos/seed/course4/400/300' },
                 { title: '慢性炎症干预', instructor: 'Dr. Chen', progress: '0%', cover: 'https://picsum.photos/seed/course5/400/300' },
                 { title: '展业沟通技巧', instructor: 'Prof. Zhang', progress: '0%', cover: 'https://picsum.photos/seed/course6/400/300' },
               ].map((course, idx) => (
                 <div key={idx} className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-2xl overflow-hidden backdrop-blur-md group cursor-pointer hover:bg-[rgba(255,255,255,0.08)] transition-colors">
                   <div className="relative aspect-[4/3] overflow-hidden">
                      <img src={course.cover} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                         <PlayCircle className="w-8 h-8 text-white/80 drop-shadow-lg group-hover:scale-110 transition-transform" />
                      </div>
                   </div>
                   <div className="p-3">
                      <h3 className="text-white text-sm font-bold line-clamp-1 mb-1">{course.title}</h3>
                      <p className="text-white/50 text-xs mb-2">{course.instructor}</p>
                      <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                         <div className="h-full bg-amber-400" style={{width: course.progress}}></div>
                      </div>
                   </div>
                 </div>
               ))}
            </div>
          </motion.div>
        )}

        {/* Component E: All Tools Page */}
        {showAllTools && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[110] bg-black overflow-y-auto pb-safe"
          >
            {/* Background */}
            <div className="fixed inset-0 z-[-1] bg-black">
              <img src="https://picsum.photos/seed/dark-mountain-lake/1080/1920" alt="bg" className="w-full h-full object-cover opacity-40" referrerPolicy="no-referrer" />
            </div>
            <div className="fixed inset-0 z-[-1] bg-black/60 backdrop-blur-3xl"></div>

            {/* Header */}
            <div className="sticky top-0 z-20 flex items-center justify-center p-4 pt-safe-top bg-black/20 backdrop-blur-md border-b border-white/10">
               <button onClick={() => setShowAllTools(false)} className="absolute left-4 p-2 bg-white/5 rounded-full text-white/70 hover:text-white transition-colors">
                 <ChevronLeft className="w-5 h-5"/>
               </button>
               <h1 className="text-lg font-bold text-white">教练展业工具库</h1>
            </div>

            {/* Tabs */}
            <div className="flex overflow-x-auto gap-2 px-4 py-4 scrollbar-hide">
               {['全部', '获客海报', '客户管理', '专属名片', '收益数据'].map((tab, i) => (
                 <button key={tab} className={`px-4 py-1.5 rounded-full border text-sm whitespace-nowrap transition-colors ${i === 0 ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400' : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'}`}>
                   {tab}
                 </button>
               ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 gap-4 px-4 pb-8">
               {/* Tool Card A */}
               <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-4 backdrop-blur-md flex flex-col aspect-square justify-center items-center text-center hover:bg-[rgba(255,255,255,0.08)] transition-colors cursor-pointer group">
                 <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center border border-blue-500/20 mb-3 group-hover:scale-110 transition-transform">
                    <QrCode className="w-6 h-6 text-blue-400" />
                 </div>
                 <h3 className="text-white text-sm font-bold mb-1">邀请海报生成器</h3>
                 <p className="text-white/40 text-[10px] leading-tight">一键生成带你名片的招商海报</p>
               </div>
               
               {/* Tool Card B */}
               <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-4 backdrop-blur-md flex flex-col aspect-square justify-center items-center text-center hover:bg-[rgba(255,255,255,0.08)] transition-colors cursor-pointer group">
                 <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center border border-emerald-500/20 mb-3 group-hover:scale-110 transition-transform">
                    <UserCheck className="w-6 h-6 text-emerald-400" />
                 </div>
                 <h3 className="text-white text-sm font-bold mb-1">健康合伙人管理</h3>
                 <p className="text-white/40 text-[10px] leading-tight">追踪所有客户健康力进度与活跃度</p>
               </div>

               {/* Tool Card C */}
               <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-4 backdrop-blur-md flex flex-col aspect-square justify-center items-center text-center hover:bg-[rgba(255,255,255,0.08)] transition-colors cursor-pointer group">
                 <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-purple-500/20 mb-3 group-hover:scale-110 transition-transform">
                    <IdCard className="w-6 h-6 text-purple-400" />
                 </div>
                 <h3 className="text-white text-sm font-bold mb-1">健康教练名片</h3>
                 <p className="text-white/40 text-[10px] leading-tight">彰显医学博士级别专业形象</p>
               </div>

               {/* Tool Card D */}
               <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-4 backdrop-blur-md flex flex-col aspect-square justify-center items-center text-center hover:bg-[rgba(255,255,255,0.08)] transition-colors cursor-pointer group">
                 <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center border border-amber-500/20 mb-3 group-hover:scale-110 transition-transform">
                    <BarChart3 className="w-6 h-6 text-amber-400" />
                 </div>
                 <h3 className="text-white text-sm font-bold mb-1">展业收益明细</h3>
                 <p className="text-white/40 text-[10px] leading-tight">今日/本月佣金与团队业绩统计</p>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
