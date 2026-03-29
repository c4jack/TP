import { 
  Wallet, 
  FileText, 
  ShoppingBag, 
  MapPin, 
  Share2, 
  Users, 
  Coins, 
  BookOpen, 
  ChevronRight, 
  Plus, 
  Crown, 
  FlaskConical,
  Award,
  Percent,
  GraduationCap,
  FileBadge
} from 'lucide-react';
import { BottomNav } from './BottomNav';

interface Props {
  onTabChange?: (tab: 'home' | 'academy' | 'shop' | 'profile') => void;
  onAIAssistantClick?: () => void;
}

export function ProfilePage({ onTabChange, onAIAssistantClick }: Props) {
  return (
    <div className="min-h-screen relative pb-32 animate-in fade-in duration-500">
      {/* Background Image Layer (Dark Natural Landscape) */}
      <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
        <img
          alt="High-end dark nature background"
          className="w-full h-full object-cover opacity-100"
          src="https://picsum.photos/seed/dark-mountain-lake/1080/1920"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Header (Sticky Top) */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-2xl border-b border-white/10 pt-safe">
        <div className="max-w-2xl mx-auto flex items-center justify-center h-16 px-4">
          <h1 className="font-headline text-lg font-bold text-white tracking-wider">我的</h1>
        </div>
      </header>

      {/* Core Content Area */}
      <main className="pt-24 px-6 max-w-2xl mx-auto space-y-6">
        
        {/* Section 1: Personal Info & Health Profiles */}
        <section className="space-y-4">
          {/* User Base Card */}
          <div className="relative rounded-3xl px-4 py-2.5 overflow-hidden border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] group cursor-pointer hover:border-white/20 transition-colors">
            {/* Dark Glass Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/80 via-black/60 to-zinc-900/80 backdrop-blur-xl"></div>
            {/* Glow / Reflection */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-colors duration-700"></div>
            
            <div className="relative z-10">
              {/* Top Row: Avatar & Info & Progress */}
              <div className="flex items-center gap-3 mb-2">
                {/* Avatar */}
                <div className="relative shrink-0">
                  <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-amber-300 via-amber-500 to-amber-200 shadow-[0_0_15px_rgba(245,158,11,0.5)]">
                    <img 
                      src="https://picsum.photos/seed/user-avatar/200/200" 
                      alt="User Avatar" 
                      className="w-full h-full rounded-full object-cover border-2 border-black"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                
                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <div>
                      <h2 className="text-white font-bold text-sm tracking-wide flex items-center gap-2 mb-0.5">
                        李建国
                      </h2>
                      <div className="inline-flex items-center gap-1 bg-white/10 text-amber-400 text-[9px] px-1.5 py-0.5 rounded-full border border-amber-500/30 font-medium">
                        <Award className="w-2.5 h-2.5" />
                        健康见习生
                      </div>
                    </div>
                    {/* Progress Ring / Status */}
                    <div className="text-right flex flex-col items-end">
                      <span className="text-amber-400 font-mono text-xs font-bold">2/5</span>
                      <span className="text-white/40 text-[9px]">必修课进度</span>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full h-1 bg-black/50 rounded-full overflow-hidden mt-1.5">
                    <div className="h-full bg-gradient-to-r from-amber-500 to-amber-300 w-[40%] shadow-[0_0_10px_rgba(245,158,11,0.8)] relative">
                      <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_linear_infinite]"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Row: Privileges */}
              <div className="flex items-center justify-between pt-2 border-t border-white/5">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-white/60">
                    <Percent className="w-3 h-3 text-amber-400/70" />
                    <span className="text-[10px]">内购折扣</span>
                  </div>
                  <div className="flex items-center gap-1 text-white/60">
                    <GraduationCap className="w-3 h-3 text-amber-400/70" />
                    <span className="text-[10px]">导师辅导</span>
                  </div>
                  <div className="flex items-center gap-1 text-white/60">
                    <FileBadge className="w-3 h-3 text-amber-400/70" />
                    <span className="text-[10px]">权威认证</span>
                  </div>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-white/30 group-hover:text-amber-400 transition-colors" />
              </div>
            </div>
          </div>

          {/* Assets */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: '余额 (¥)', value: '12,580.00', color: 'text-white' },
              { label: '积分', value: '8,450', color: 'text-amber-400' },
              { label: '优惠券 (张)', value: '12', color: 'text-white' }
            ].map((asset, idx) => (
              <div key={idx} className="glass-panel rounded-2xl p-4 flex flex-col items-center justify-center border border-white/5">
                <span className={`font-headline text-xl font-bold mb-1 ${asset.color}`}>{asset.value}</span>
                <span className="text-white/40 text-[10px]">{asset.label}</span>
              </div>
            ))}
          </div>

          {/* Family Health Profiles */}
          <div className="glass-panel rounded-2xl p-4 border border-white/5">
            <h3 className="text-white/80 text-xs font-medium mb-3 px-1">家庭健康档案</h3>
            <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide px-1 pb-1">
              {[
                { name: '本人', active: true, img: 'https://picsum.photos/seed/user-avatar/100/100' },
                { name: '女儿', active: false, img: 'https://picsum.photos/seed/daughter/100/100' },
                { name: '父亲', active: false, img: 'https://picsum.photos/seed/father/100/100' },
                { name: '母亲', active: false, img: 'https://picsum.photos/seed/mother/100/100' },
              ].map((member, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2 shrink-0 cursor-pointer group">
                  <div className={`w-12 h-12 rounded-full p-[2px] transition-all ${member.active ? 'bg-primary shadow-[0_0_10px_rgba(249,115,22,0.5)]' : 'bg-white/10 group-hover:bg-white/30'}`}>
                    <img src={member.img} alt={member.name} className="w-full h-full rounded-full object-cover border-2 border-black" referrerPolicy="no-referrer" />
                  </div>
                  <span className={`text-[10px] ${member.active ? 'text-primary font-bold' : 'text-white/50'}`}>{member.name}</span>
                </div>
              ))}
              <div className="flex flex-col items-center gap-2 shrink-0 cursor-pointer group">
                <div className="w-12 h-12 rounded-full border border-dashed border-white/20 flex items-center justify-center bg-white/5 group-hover:bg-white/10 transition-colors">
                  <Plus className="w-5 h-5 text-white/40" />
                </div>
                <span className="text-[10px] text-white/40">添加成员</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Services & Orders */}
        <section>
          <h2 className="font-headline text-lg font-bold text-white/90 mb-3 px-1">我的服务</h2>
          <div className="glass-panel rounded-3xl p-1 border border-white/5">
            <div className="grid grid-cols-2 gap-1">
              {/* Mass Spec Tracking */}
              <div className="bg-white/5 hover:bg-white/10 transition-colors rounded-2xl p-4 cursor-pointer group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                    <FlaskConical className="w-4 h-4" />
                  </div>
                  <span className="text-white text-sm font-medium">质谱检测追踪</span>
                </div>
                <div className="w-full h-1.5 bg-black/50 rounded-full overflow-hidden">
                  <div className="h-full bg-sky-400 w-2/3 shadow-[0_0_8px_rgba(56,189,248,0.8)]"></div>
                </div>
                <p className="text-sky-400/80 text-[10px] mt-2">样本已到达实验室</p>
              </div>

              {/* History Reports */}
              <div className="bg-white/5 hover:bg-white/10 transition-colors rounded-2xl p-4 cursor-pointer group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <FileText className="w-4 h-4" />
                  </div>
                  <span className="text-white text-sm font-medium">历史报告库</span>
                </div>
                <p className="text-white/40 text-xs mt-3">共 12 份深度报告</p>
              </div>

              {/* Shop Orders */}
              <div className="bg-white/5 hover:bg-white/10 transition-colors rounded-2xl p-4 cursor-pointer group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="relative w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-400 group-hover:scale-110 transition-transform">
                    <ShoppingBag className="w-4 h-4" />
                    <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-rose-500 rounded-full border border-black flex items-center justify-center text-[8px] font-bold text-white">1</span>
                  </div>
                  <span className="text-white text-sm font-medium">商城订单</span>
                </div>
                <p className="text-white/40 text-xs mt-3">待发货 1</p>
              </div>

              {/* Address Management */}
              <div className="bg-white/5 hover:bg-white/10 transition-colors rounded-2xl p-4 cursor-pointer group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-white text-sm font-medium">收货地址</span>
                </div>
                <p className="text-white/40 text-xs mt-3">管理配送信息</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Rights & Business Workspace */}
        <section>
          <h2 className="font-headline text-lg font-bold text-white/90 mb-3 px-1">健康教练赋能台</h2>
          <div className="glass-panel rounded-3xl p-4 border border-white/5 space-y-4">
            
            {/* Identity & Privileges Banner */}
            <div className="bg-gradient-to-r from-amber-500/10 to-amber-900/20 border border-amber-500/20 rounded-2xl p-4 relative overflow-hidden">
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-amber-500/10 to-transparent pointer-events-none"></div>
              <div className="flex justify-between items-end mb-3 relative z-10">
                <div>
                  <h4 className="text-amber-400 font-bold text-sm mb-1">认证健康教练特权</h4>
                  <p className="text-amber-400/60 text-[10px]">已解锁 3 项顶级特权</p>
                </div>
                <span className="text-amber-400 font-mono text-xs">距高级教练差 1,550 学分</span>
              </div>
              <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden relative z-10">
                <div className="h-full bg-gradient-to-r from-amber-500 to-amber-300 w-[75%] shadow-[0_0_10px_rgba(245,158,11,0.8)]"></div>
              </div>
            </div>

            {/* Business Tools Grid */}
            <div className="grid grid-cols-4 gap-y-6 pt-2">
              {[
                { icon: Share2, label: '专属名片', color: 'text-blue-400', bg: 'bg-blue-500/10' },
                { icon: Users, label: '客户档案', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
                { icon: Coins, label: '服务收益', color: 'text-amber-400', bg: 'bg-amber-500/10' },
                { icon: BookOpen, label: '继续教育', color: 'text-purple-400', bg: 'bg-purple-500/10' },
              ].map((tool, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2 cursor-pointer group">
                  <div className={`w-12 h-12 rounded-2xl ${tool.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <tool.icon className={`w-5 h-5 ${tool.color}`} />
                  </div>
                  <span className="text-white/70 text-[10px] font-medium group-hover:text-white transition-colors">{tool.label}</span>
                </div>
              ))}
            </div>

          </div>
        </section>

      </main>

      <BottomNav activeTab="profile" onTabChange={onTabChange} onAIAssistantClick={onAIAssistantClick} />
    </div>
  );
}
