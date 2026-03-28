import { useState } from 'react';
import { Header } from './components/Header';
import { MobileTabs } from './components/MobileTabs';
import { ScoreCard } from './components/ScoreCard';
import { DetailCard } from './components/DetailCard';
import { ActionItem } from './components/ActionItem';
import { BottomNav } from './components/BottomNav';
import { HealthPowerPage } from './components/HealthPowerPage';
import { LearningPowerPage } from './components/LearningPowerPage';
import { GrowthPowerPage } from './components/GrowthPowerPage';
import { FocusPowerPage } from './components/FocusPowerPage';
import { DashboardPage } from './components/DashboardPage';
import { ActionGuidePage } from './components/ActionGuidePage';
import { AcademyPage } from './components/AcademyPage';
import { ShopPage } from './components/ShopPage';
import { ProfilePage } from './components/ProfilePage';
import { LoginPage } from './components/LoginPage';
import { AIAssistantPage } from './components/AIAssistantPage';
import { Activity, Pill } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'health-power' | 'learning-power' | 'growth-power' | 'focus-power' | 'dashboard' | 'action-guide' | 'academy' | 'shop' | 'profile'>('home');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isAIAssistantOpen, setIsAIAssistantOpen] = useState(false);

  return (
    <div className="min-h-screen relative">
      {/* Background Image Layer */}
      <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
        <img
          alt="High-end clear background"
          className="w-full h-full object-cover opacity-100"
          src="https://picsum.photos/seed/luxury-dark-aesthetic/1080/1920"
          referrerPolicy="no-referrer"
        />
      </div>

      {currentPage === 'home' ? (
        <div className="pb-32 animate-in fade-in duration-500">
          <Header 
            onLoginClick={() => setIsLoginModalOpen(true)} 
            onHomeClick={() => setCurrentPage('home')}
          />

          {/* Main Content Canvas */}
          <main className="pt-28 px-6 max-w-2xl mx-auto space-y-10">
            <MobileTabs />

            {/* Section 1: Health Dashboard Grid */}
            <section id="report-section" className="scroll-mt-44">
              <h2 className="font-headline text-2xl font-extrabold mb-6 tracking-tight text-white/90">
                健康报告
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <ScoreCard 
                  label="健康力" 
                  score={92} 
                  colorClass="bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]" 
                  onClick={() => setCurrentPage('health-power')}
                />
                <ScoreCard 
                  label="学习力" 
                  score={88} 
                  colorClass="bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.5)]" 
                  onClick={() => setCurrentPage('learning-power')}
                />
                <ScoreCard 
                  label="成长力" 
                  score={95} 
                  colorClass="bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.5)]" 
                  onClick={() => setCurrentPage('growth-power')}
                />
                <ScoreCard 
                  label="专注力" 
                  score={84} 
                  colorClass="bg-violet-400 shadow-[0_0_10px_rgba(167,139,250,0.5)]" 
                  onClick={() => setCurrentPage('focus-power')}
                />
              </div>
            </section>

            {/* Section 2: Immune Homeostasis Detail */}
            <section id="dashboard-section" className="scroll-mt-44">
              <h2 className="font-headline text-2xl font-extrabold mb-6 tracking-tight text-white/90">
                健康看板
              </h2>
              <DetailCard onClick={() => setCurrentPage('dashboard')} />
            </section>

            {/* Section 3: Action Guide */}
            <section id="action-section" className="pb-10 scroll-mt-44">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-headline text-2xl font-extrabold tracking-tight text-white/90">
                  行动指南
                </h2>
                <button 
                  onClick={() => setCurrentPage('action-guide')}
                  className="text-sm font-bold text-white/60 hover:text-white transition-colors"
                >
                  查看全部
                </button>
              </div>
              <div className="space-y-4">
                <ActionItem
                  icon={Activity}
                  title="增加有氧运动"
                  description="建议每天 30 分钟慢跑"
                  onClick={() => setCurrentPage('action-guide')}
                />
                <ActionItem
                  icon={Pill}
                  title="补充维生素 D"
                  description="提升骨骼健康与免疫力"
                  onClick={() => setCurrentPage('action-guide')}
                />
              </div>
            </section>
          </main>

          <BottomNav activeTab="home" onTabChange={(tab) => {
            if (tab === 'academy') setCurrentPage('academy');
            else if (tab === 'shop') setCurrentPage('shop');
            else if (tab === 'profile') setCurrentPage('profile');
            else if (tab === 'home') setCurrentPage('home');
          }} onAIAssistantClick={() => setIsAIAssistantOpen(true)} />
        </div>
      ) : currentPage === 'health-power' ? (
        <HealthPowerPage 
          onBack={() => setCurrentPage('home')} 
          onTabChange={(tab) => setCurrentPage(tab)}
          onAIAssistantClick={() => setIsAIAssistantOpen(true)}
        />
      ) : currentPage === 'learning-power' ? (
        <LearningPowerPage 
          onBack={() => setCurrentPage('home')} 
          onTabChange={(tab) => setCurrentPage(tab)}
          onAIAssistantClick={() => setIsAIAssistantOpen(true)}
        />
      ) : currentPage === 'growth-power' ? (
        <GrowthPowerPage 
          onBack={() => setCurrentPage('home')} 
          onTabChange={(tab) => setCurrentPage(tab)}
          onAIAssistantClick={() => setIsAIAssistantOpen(true)}
        />
      ) : currentPage === 'focus-power' ? (
        <FocusPowerPage 
          onBack={() => setCurrentPage('home')} 
          onTabChange={(tab) => setCurrentPage(tab)}
          onAIAssistantClick={() => setIsAIAssistantOpen(true)}
        />
      ) : currentPage === 'dashboard' ? (
        <DashboardPage 
          onBack={() => setCurrentPage('home')} 
          onTabChange={(tab) => setCurrentPage(tab)}
          onAIAssistantClick={() => setIsAIAssistantOpen(true)}
        />
      ) : currentPage === 'action-guide' ? (
        <ActionGuidePage 
          onBack={() => setCurrentPage('home')} 
          onTabChange={(tab) => setCurrentPage(tab)}
          onAIAssistantClick={() => setIsAIAssistantOpen(true)}
        />
      ) : currentPage === 'shop' ? (
        <ShopPage onTabChange={(tab) => {
          if (tab === 'academy') setCurrentPage('academy');
          else if (tab === 'shop') setCurrentPage('shop');
          else if (tab === 'profile') setCurrentPage('profile');
          else if (tab === 'home') setCurrentPage('home');
        }} onAIAssistantClick={() => setIsAIAssistantOpen(true)} />
      ) : currentPage === 'profile' ? (
        <ProfilePage onTabChange={(tab) => {
          if (tab === 'academy') setCurrentPage('academy');
          else if (tab === 'shop') setCurrentPage('shop');
          else if (tab === 'profile') setCurrentPage('profile');
          else if (tab === 'home') setCurrentPage('home');
        }} onAIAssistantClick={() => setIsAIAssistantOpen(true)} />
      ) : (
        <AcademyPage 
          onLoginClick={() => setIsLoginModalOpen(true)}
          onHomeClick={() => setCurrentPage('home')}
          onTabChange={(tab) => {
            if (tab === 'academy') setCurrentPage('academy');
            else if (tab === 'shop') setCurrentPage('shop');
            else if (tab === 'profile') setCurrentPage('profile');
            else if (tab === 'home') setCurrentPage('home');
          }} 
          onAIAssistantClick={() => setIsAIAssistantOpen(true)}
        />
      )}

      {/* Login Modal */}
      {isLoginModalOpen && (
        <LoginPage 
          onLogin={() => setIsLoginModalOpen(false)} 
          onClose={() => setIsLoginModalOpen(false)} 
        />
      )}

      {/* AI Assistant Modal */}
      {isAIAssistantOpen && (
        <AIAssistantPage onClose={() => setIsAIAssistantOpen(false)} />
      )}
    </div>
  );
}
