import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  FileBadge,
  X,
  MessageSquareText,
  Send,
  Pencil,
  Camera,
  Check,
  Loader2,
  CheckCircle2,
  Upload
} from 'lucide-react';
import { BottomNav } from './BottomNav';

const PREDEFINED_AVATARS = [
  'https://picsum.photos/seed/avatar1/200/200',
  'https://picsum.photos/seed/avatar2/200/200',
  'https://picsum.photos/seed/avatar3/200/200',
  'https://picsum.photos/seed/avatar4/200/200',
  'https://picsum.photos/seed/avatar5/200/200',
  'https://picsum.photos/seed/avatar6/200/200',
  'https://picsum.photos/seed/avatar7/200/200',
  'https://picsum.photos/seed/avatar8/200/200',
];

interface Props {
  onTabChange?: (tab: 'home' | 'academy' | 'shop' | 'profile') => void;
  onAIAssistantClick?: () => void;
}

export function ProfilePage({ onTabChange, onAIAssistantClick }: Props) {
  const [showAddMemberModal, setShowAddMemberModal] = useState(false);
  const [showCoachChat, setShowCoachChat] = useState(false);
  const [showAvatarSelectionModal, setShowAvatarSelectionModal] = useState(false);
  const [coachMessage, setCoachMessage] = useState('');
  const [activeMemberId, setActiveMemberId] = useState('self');
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editName, setEditName] = useState('');
  const [editBio, setEditBio] = useState('');
  const [editRelationship, setEditRelationship] = useState('');
  const [editHealthGoal, setEditHealthGoal] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  
  const [chatHistory, setChatHistory] = useState([
    { sender: 'coach', text: '你好！我是你的健康管理师王教练。关于你的健康管理计划，有什么我可以帮你的吗？', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
  ]);

  const [familyMembers, setFamilyMembers] = useState([
    { id: 'self', name: '本人', relationship: '本人', healthGoal: '减脂增肌', fullName: '李建国', bio: '热爱生活，关注健康', role: '健康见习生', progress: '40%', progressText: '2/5', img: 'https://picsum.photos/seed/user-avatar/200/200', reports: 12, orders: 1, trackingStatus: '样本已到达实验室', trackingProgress: 'w-2/3' },
    { id: 'daughter', name: '女儿', relationship: '子女', healthGoal: '营养均衡', fullName: '李小美', bio: '健康成长中', role: '家庭成员', progress: '0%', progressText: '0/5', img: 'https://picsum.photos/seed/daughter/200/200', reports: 2, orders: 0, trackingStatus: '报告已生成', trackingProgress: 'w-full' },
    { id: 'father', name: '父亲', relationship: '父母', healthGoal: '心血管养护', fullName: '李建国父', bio: '保持运动，安享晚年', role: '家庭成员', progress: '0%', progressText: '0/5', img: 'https://picsum.photos/seed/father/200/200', reports: 5, orders: 2, trackingStatus: '待采样', trackingProgress: 'w-1/3' },
    { id: 'mother', name: '母亲', relationship: '父母', healthGoal: '改善睡眠', fullName: '李建国母', bio: '注重饮食，身心愉悦', role: '家庭成员', progress: '0%', progressText: '0/5', img: 'https://picsum.photos/seed/mother/200/200', reports: 8, orders: 0, trackingStatus: '检测中', trackingProgress: 'w-4/5' },
  ]);

  const activeMember = familyMembers.find(m => m.id === activeMemberId) || familyMembers[0];

  const handleEditClick = () => {
    setEditName(activeMember.fullName);
    setEditBio(activeMember.bio || '');
    setEditRelationship(activeMember.relationship || activeMember.name);
    setEditHealthGoal(activeMember.healthGoal || '');
    setIsEditingProfile(true);
  };

  const handleSaveProfile = () => {
    setIsSaving(true);
    setTimeout(() => {
      setFamilyMembers(prev => prev.map(m => 
        m.id === activeMemberId ? { ...m, fullName: editName, bio: editBio, relationship: editRelationship, name: editRelationship, healthGoal: editHealthGoal } : m
      ));
      setIsSaving(false);
      setIsEditingProfile(false);
      setToastMessage('个人资料已保存');
      setTimeout(() => setToastMessage(''), 3000);
    }, 800);
  };

  const handleAvatarClick = () => {
    if (!isEditingProfile) return;
    setShowAvatarSelectionModal(true);
  };

  const handleSelectAvatar = (imgUrl: string) => {
    setFamilyMembers(prev => prev.map(m => 
      m.id === activeMemberId ? { ...m, img: imgUrl } : m
    ));
    setShowAvatarSelectionModal(false);
    setToastMessage('头像已更新');
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleSelectAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSendCoachMessage = () => {
    if (!coachMessage.trim()) return;
    
    setChatHistory([
      ...chatHistory,
      { sender: 'user', text: coachMessage, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
    ]);
    setCoachMessage('');
    
    // Simulate coach reply
    setTimeout(() => {
      setChatHistory(prev => [
        ...prev,
        { sender: 'coach', text: '收到你的消息，我会尽快为你解答。', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
      ]);
    }, 1000);
  };

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
        <div className="max-w-2xl mx-auto flex items-center justify-center h-16 px-4 relative">
          <h1 className="font-headline text-lg font-bold text-white tracking-wider">我的</h1>
          
          {/* Toast Notification */}
          <AnimatePresence>
            {toastMessage && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-1/2 -translate-y-1/2 right-4 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.2)] flex items-center gap-1.5 text-xs font-medium backdrop-blur-md"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                {toastMessage}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Core Content Area */}
      <main className="pt-24 px-6 max-w-2xl mx-auto space-y-6">
        
        {/* Section 1: Personal Info & Health Profiles */}
        <section className="space-y-4">
          {/* User Base Card */}
          <div className="relative rounded-3xl px-4 py-3 overflow-hidden border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] group cursor-pointer hover:border-white/20 transition-colors">
            {/* Dark Glass Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/80 via-black/60 to-zinc-900/80 backdrop-blur-xl"></div>
            {/* Glow / Reflection */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl group-hover:bg-amber-500/30 transition-colors duration-700"></div>

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-1.5">
                <div className="flex items-center gap-3">
                  <div className={`relative shrink-0 ${isEditingProfile ? 'cursor-pointer group' : ''}`} onClick={handleAvatarClick}>
                    <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-zinc-500 via-zinc-300 to-zinc-500 shadow-[0_0_15px_rgba(161,161,170,0.3)] relative overflow-hidden">
                      <img 
                        src={activeMember.img} 
                        alt="User Avatar" 
                        className="w-full h-full rounded-full object-cover border-2 border-black"
                        referrerPolicy="no-referrer"
                      />
                      {isEditingProfile && (
                        <div className="absolute inset-0 m-[2px] rounded-full bg-black/50 flex items-center justify-center backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity">
                          <Camera className="w-5 h-5 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    {isEditingProfile ? (
                      <input
                        type="text"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        className="bg-white/10 border border-white/20 rounded-md px-2 py-1 text-white text-sm font-bold w-32 focus:outline-none focus:border-amber-500 mb-1 transition-colors"
                        autoFocus
                      />
                    ) : (
                      <h2 className="text-white font-bold text-sm tracking-wide flex items-center gap-2 mb-0.5">
                        {activeMember.fullName}
                      </h2>
                    )}
                    <div className="flex flex-col gap-1.5">
                      <div className="inline-flex items-center gap-1 bg-white/10 text-amber-400 text-[9px] px-1.5 py-0.5 rounded-full border border-amber-500/30 font-medium w-fit">
                        <Award className="w-2.5 h-2.5" />
                        {activeMember.role}
                      </div>
                      {isEditingProfile ? (
                        <div className="flex flex-col gap-1.5 mt-1">
                          <input
                            type="text"
                            value={editBio}
                            onChange={(e) => setEditBio(e.target.value)}
                            placeholder="添加个人简介..."
                            className="bg-white/10 border border-white/20 rounded-md px-2 py-1 text-white/80 text-xs w-40 focus:outline-none focus:border-amber-500 transition-colors"
                          />
                          <div className="flex items-center gap-2">
                            <select 
                              value={editRelationship}
                              onChange={(e) => setEditRelationship(e.target.value)}
                              className="bg-white/10 border border-white/20 rounded-md px-2 py-1 text-white/80 text-xs w-16 focus:outline-none focus:border-amber-500 transition-colors"
                            >
                              <option value="本人" className="bg-zinc-800">本人</option>
                              <option value="父母" className="bg-zinc-800">父母</option>
                              <option value="配偶" className="bg-zinc-800">配偶</option>
                              <option value="子女" className="bg-zinc-800">子女</option>
                              <option value="其他" className="bg-zinc-800">其他</option>
                            </select>
                            <input
                              type="text"
                              value={editHealthGoal}
                              onChange={(e) => setEditHealthGoal(e.target.value)}
                              placeholder="健康目标 (如: 减脂)"
                              className="bg-white/10 border border-white/20 rounded-md px-2 py-1 text-white/80 text-xs w-22 focus:outline-none focus:border-amber-500 transition-colors"
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col gap-1">
                          <p className="text-white/60 text-[10px] line-clamp-1 max-w-[160px]">
                            {activeMember.bio || '暂无简介'}
                          </p>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <span className="bg-white/10 text-white/70 text-[9px] px-1.5 py-0.5 rounded-sm border border-white/5">{activeMember.relationship || activeMember.name}</span>
                            {activeMember.healthGoal && (
                              <span className="bg-emerald-500/10 text-emerald-400 text-[9px] px-1.5 py-0.5 rounded-sm border border-emerald-500/20">{activeMember.healthGoal}</span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Edit / Save Buttons */}
                <div>
                  {isEditingProfile ? (
                    <div className="flex items-center gap-2 mt-1">
                      <button onClick={() => setIsEditingProfile(false)} className="text-white/50 hover:text-white text-xs px-2 py-1 transition-colors">取消</button>
                      <button onClick={handleSaveProfile} disabled={isSaving} className="bg-amber-500 text-black text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 hover:bg-amber-400 transition-colors disabled:opacity-50">
                        {isSaving ? <Loader2 className="w-3 h-3 animate-spin" /> : <Check className="w-3 h-3" />}
                        保存
                      </button>
                    </div>
                  ) : (
                    <button onClick={handleEditClick} className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/50 hover:text-white transition-colors border border-white/5 mt-1">
                      <Pencil className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Privileges / Progress */}
              <div className="bg-black/30 rounded-2xl px-3 py-1.5 border border-white/5">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-white/70 text-[10px] font-medium">距正式教练差 3 门必修课</span>
                  <span className="text-amber-400 text-[11px] font-mono font-bold">{activeMember.progress}</span>
                </div>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-1.5">
                  <div className="h-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-full relative shadow-[0_0_10px_rgba(251,191,36,0.5)]" style={{ width: activeMember.progress }}>
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
              {familyMembers.map((member) => {
                const isActive = member.id === activeMemberId;
                return (
                  <div 
                    key={member.id} 
                    onClick={() => setActiveMemberId(member.id)}
                    className="flex flex-col items-center gap-2 shrink-0 cursor-pointer group"
                  >
                    <div className={`w-12 h-12 rounded-full p-[2px] transition-all ${isActive ? 'bg-primary shadow-[0_0_10px_rgba(249,115,22,0.5)]' : 'bg-white/10 group-hover:bg-white/30'}`}>
                      <img src={member.img} alt={member.name} className="w-full h-full rounded-full object-cover border-2 border-black" referrerPolicy="no-referrer" />
                    </div>
                    <span className={`text-[10px] ${isActive ? 'text-primary font-bold' : 'text-white/50'}`}>{member.name}</span>
                  </div>
                );
              })}
              <div 
                onClick={() => setShowAddMemberModal(true)}
                className="flex flex-col items-center gap-2 shrink-0 cursor-pointer group"
              >
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
                  <div className={`h-full bg-sky-400 ${activeMember.trackingProgress} shadow-[0_0_8px_rgba(56,189,248,0.8)]`}></div>
                </div>
                <p className="text-sky-400/80 text-[10px] mt-2">{activeMember.trackingStatus}</p>
              </div>

              {/* History Reports */}
              <div className="bg-white/5 hover:bg-white/10 transition-colors rounded-2xl p-4 cursor-pointer group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <FileText className="w-4 h-4" />
                  </div>
                  <span className="text-white text-sm font-medium">历史报告库</span>
                </div>
                <p className="text-white/40 text-xs mt-3">共 {activeMember.reports} 份深度报告</p>
              </div>

              {/* Shop Orders */}
              <div className="bg-white/5 hover:bg-white/10 transition-colors rounded-2xl p-4 cursor-pointer group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="relative w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-400 group-hover:scale-110 transition-transform">
                    <ShoppingBag className="w-4 h-4" />
                    {activeMember.orders > 0 && (
                      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-rose-500 rounded-full border border-black flex items-center justify-center text-[8px] font-bold text-white">{activeMember.orders}</span>
                    )}
                  </div>
                  <span className="text-white text-sm font-medium">商城订单</span>
                </div>
                <p className="text-white/40 text-xs mt-3">待发货 {activeMember.orders}</p>
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

        {/* Section 2.5: My Coach */}
        <section>
          <h2 className="font-headline text-lg font-bold text-white/90 mb-3 px-1">我的教练</h2>
          <div className="glass-panel rounded-3xl p-4 border border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img 
                  src="https://picsum.photos/seed/coach/100/100" 
                  alt="Coach" 
                  className="w-12 h-12 rounded-full border border-white/20 object-cover" 
                  referrerPolicy="no-referrer" 
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-black rounded-full"></div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <h3 className="text-white font-bold text-sm">王教练</h3>
                  <span className="bg-emerald-500/20 text-emerald-400 text-[9px] px-1.5 py-0.5 rounded-full border border-emerald-500/30">服务中</span>
                </div>
                <p className="text-white/50 text-xs">高级健康管理师</p>
              </div>
            </div>
            <button 
              onClick={() => setShowCoachChat(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/10"
            >
              <MessageSquareText className="w-4 h-4 text-white/70" />
              <span className="text-white text-xs font-medium">联系教练</span>
            </button>
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

      {/* Modals */}
      <AnimatePresence>
        {showAddMemberModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-6"
              onClick={() => setShowAddMemberModal(false)}
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-3rem)] max-w-md bg-[rgba(255,255,255,0.08)] backdrop-blur-2xl border border-[rgba(255,255,255,0.15)] rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-[101]"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-bold text-white">添加家庭成员</h3>
                <button onClick={() => setShowAddMemberModal(false)} className="p-2 bg-white/5 rounded-full text-white/50 hover:text-white transition-colors shrink-0">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 mb-8">
                <div>
                  <label className="block text-white/70 text-sm mb-2">姓名</label>
                  <input type="text" placeholder="请输入成员姓名" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-amber-500/50 transition-colors" />
                </div>
                
                <div>
                  <label className="block text-white/70 text-sm mb-2">关系</label>
                  <div className="flex flex-wrap gap-2">
                    {['父母', '配偶', '子女', '其他'].map(rel => (
                      <button key={rel} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm hover:bg-white/10 hover:text-white transition-colors focus:bg-amber-500/20 focus:border-amber-500/50 focus:text-amber-400">
                        {rel}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-white/70 text-sm mb-2">性别</label>
                  <div className="flex gap-2">
                    <button className="flex-1 py-2 rounded-xl bg-white/5 border border-white/10 text-white/70 text-sm hover:bg-white/10 transition-colors focus:bg-amber-500/20 focus:border-amber-500/50 focus:text-amber-400">男</button>
                    <button className="flex-1 py-2 rounded-xl bg-white/5 border border-white/10 text-white/70 text-sm hover:bg-white/10 transition-colors focus:bg-amber-500/20 focus:border-amber-500/50 focus:text-amber-400">女</button>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setShowAddMemberModal(false)}
                className="w-full py-4 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-black font-extrabold text-lg shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:scale-[1.02] active:scale-95 transition-all"
              >
                确认添加
              </button>
            </motion.div>
          </>
        )}

        {/* Coach Chat Modal */}
        {showCoachChat && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 sm:p-6"
              onClick={() => setShowCoachChat(false)}
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] max-w-md h-[80vh] max-h-[600px] bg-[rgba(25,25,25,0.85)] backdrop-blur-3xl border border-[rgba(255,255,255,0.15)] rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-[101] flex flex-col overflow-hidden"
            >
              {/* Chat Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img 
                      src="https://picsum.photos/seed/coach/100/100" 
                      alt="Coach" 
                      className="w-10 h-10 rounded-full border border-white/20 object-cover" 
                      referrerPolicy="no-referrer" 
                    />
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-black rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm">王教练</h3>
                    <p className="text-emerald-400 text-[10px]">在线</p>
                  </div>
                </div>
                <button onClick={() => setShowCoachChat(false)} className="p-2 bg-white/5 rounded-full text-white/50 hover:text-white transition-colors shrink-0">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
                {chatHistory.map((msg, idx) => (
                  <div key={idx} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                    <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${msg.sender === 'user' ? 'bg-amber-500 text-black rounded-br-sm' : 'bg-white/10 text-white rounded-bl-sm border border-white/5'}`}>
                      <p className="text-sm">{msg.text}</p>
                    </div>
                    <span className="text-white/30 text-[10px] mt-1 px-1">{msg.time}</span>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t border-white/10 bg-black/20">
                <div className="flex items-center gap-2">
                  <input 
                    type="text" 
                    value={coachMessage}
                    onChange={(e) => setCoachMessage(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendCoachMessage()}
                    placeholder="输入消息咨询教练..." 
                    className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-amber-500/50 transition-colors"
                  />
                  <button 
                    onClick={handleSendCoachMessage}
                    disabled={!coachMessage.trim()}
                    className="w-10 h-10 rounded-full bg-amber-500 text-black flex items-center justify-center shrink-0 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-amber-400 transition-colors"
                  >
                    <Send className="w-4 h-4 ml-0.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}

        {/* Avatar Selection Modal */}
        {showAvatarSelectionModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-6"
              onClick={() => setShowAvatarSelectionModal(false)}
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-3rem)] max-w-md bg-[rgba(255,255,255,0.08)] backdrop-blur-2xl border border-[rgba(255,255,255,0.15)] rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-[101]"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-bold text-white">选择头像</h3>
                <button onClick={() => setShowAvatarSelectionModal(false)} className="p-2 bg-white/5 rounded-full text-white/50 hover:text-white transition-colors shrink-0">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6 mb-2">
                {/* Upload Button */}
                <div>
                  <label className="block text-white/70 text-sm mb-3">上传新头像</label>
                  <label className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-white/5 border border-dashed border-white/20 text-white/70 hover:bg-white/10 hover:text-white transition-colors cursor-pointer group">
                    <Upload className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                    <span className="text-sm font-medium">点击上传图片</span>
                    <input type="file" accept="image/*" className="hidden" onChange={handleFileUpload} />
                  </label>
                </div>

                {/* Predefined Avatars */}
                <div>
                  <label className="block text-white/70 text-sm mb-3">或选择预设头像</label>
                  <div className="grid grid-cols-4 gap-3">
                    {PREDEFINED_AVATARS.map((avatar, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSelectAvatar(avatar)}
                        className={`relative aspect-square rounded-2xl overflow-hidden border-2 transition-all ${activeMember.img === avatar ? 'border-amber-500 scale-105 shadow-[0_0_15px_rgba(245,158,11,0.4)]' : 'border-transparent hover:border-white/30 hover:scale-105'}`}
                      >
                        <img src={avatar} alt={`Avatar ${idx + 1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        {activeMember.img === avatar && (
                          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                            <Check className="w-6 h-6 text-amber-500 drop-shadow-md" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
