import { Home, GraduationCap, Building2, User, Bot } from 'lucide-react';

interface BottomNavProps {
  activeTab?: 'home' | 'academy' | 'shop' | 'profile';
  onTabChange?: (tab: 'home' | 'academy' | 'shop' | 'profile') => void;
  onAIAssistantClick?: () => void;
}

export function BottomNav({ activeTab = 'home', onTabChange, onAIAssistantClick }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-around items-center px-4 h-[68px] bg-white/5 backdrop-blur-3xl rounded-[2.5rem] mb-4 mx-auto w-[90%] max-w-md shadow-[0_24px_48px_rgba(0,0,0,0.4)] border border-white/5">
      <a 
        onClick={(e) => { e.preventDefault(); onTabChange?.('home'); }}
        className={`flex flex-col items-center justify-center p-2 hover:scale-110 transition-all cursor-pointer ${activeTab === 'home' ? 'text-white' : 'text-white/60'}`} 
        href="#"
      >
        <Home className="w-5 h-5" />
        <span className="text-[10px] mt-1 font-medium">主页</span>
      </a>
      <a 
        onClick={(e) => { e.preventDefault(); onTabChange?.('academy'); }}
        className={`flex flex-col items-center justify-center p-2 hover:scale-110 transition-all cursor-pointer ${activeTab === 'academy' ? 'text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]' : 'text-white/60'}`} 
        href="#"
      >
        <GraduationCap className="w-5 h-5" />
        <span className="text-[10px] mt-1 font-medium">学院</span>
      </a>
      
      <div 
        onClick={(e) => { e.preventDefault(); onAIAssistantClick?.(); }}
        className="relative flex flex-col items-center justify-center bg-primary text-black rounded-full w-12 h-12 shadow-[0_8px_20px_rgba(255,172,84,0.4)] -translate-y-3 transition-all duration-200 hover:bg-primary-container active:scale-95 cursor-pointer"
      >
        <Bot className="w-6 h-6" />
        <span className="font-label text-[10px] font-bold uppercase tracking-widest absolute -bottom-5 text-primary whitespace-nowrap">
          AI 助手
        </span>
      </div>

      <a 
        onClick={(e) => { e.preventDefault(); onTabChange?.('shop'); }}
        className={`flex flex-col items-center justify-center p-2 hover:scale-110 transition-all cursor-pointer ${activeTab === 'shop' ? 'text-primary drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]' : 'text-white/60'}`} 
        href="#"
      >
        <Building2 className="w-5 h-5" />
        <span className="text-[10px] mt-1 font-medium">商城</span>
      </a>
      <a 
        onClick={(e) => { e.preventDefault(); onTabChange?.('profile'); }}
        className={`flex flex-col items-center justify-center p-2 hover:scale-110 transition-all cursor-pointer ${activeTab === 'profile' ? 'text-primary drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]' : 'text-white/60'}`} 
        href="#"
      >
        <User className="w-5 h-5" />
        <span className="text-[10px] mt-1 font-medium">我的</span>
      </a>
    </nav>
  );
}
