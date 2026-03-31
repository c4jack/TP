import { Logo } from './Logo';

interface Props {
  onLoginClick?: () => void;
  onHomeClick?: () => void;
  showProfile?: boolean;
  userAvatar?: string;
  onProfileClick?: () => void;
}

export function Header({ onLoginClick, onHomeClick, showProfile, userAvatar, onProfileClick }: Props) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center max-w-5xl mx-auto rounded-full mt-4 px-6 py-3 bg-white/5 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]">
      <a 
        href="#" 
        onClick={(e) => { e.preventDefault(); onHomeClick?.(); }}
        className="flex items-center gap-2 hover:opacity-80 hover:scale-105 transition-all cursor-pointer"
        title="返回主页"
      >
        <Logo className="h-8 w-8 rounded-full" />
      </a>
      <nav className="hidden md:flex items-center gap-8">
        <a className="text-primary font-bold border-b-2 border-primary pb-1" href="#">
          报告
        </a>
        <a className="text-white/70 font-medium hover:text-white transition-colors" href="#">
          看板
        </a>
        <a className="text-white/70 font-medium hover:text-white transition-colors" href="#">
          行动
        </a>
      </nav>
      {showProfile ? (
        <button 
          onClick={onProfileClick}
          className="w-8 h-8 rounded-full p-[1.5px] bg-gradient-to-tr from-amber-300 via-amber-500 to-amber-200 shadow-[0_0_10px_rgba(245,158,11,0.3)] hover:scale-105 transition-transform shrink-0"
        >
          <img 
            src={userAvatar || "https://picsum.photos/seed/user-avatar/200/200"} 
            alt="Profile" 
            className="w-full h-full rounded-full object-cover border border-black"
            referrerPolicy="no-referrer"
          />
        </button>
      ) : (
        <button 
          onClick={onLoginClick}
          className="bg-gradient-to-br from-primary to-primary-container text-[#583100] font-bold px-5 py-1.5 rounded-full hover:opacity-90 active:scale-95 transition-all duration-200 shrink-0"
        >
          登录
        </button>
      )}
    </header>
  );
}
