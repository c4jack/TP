export function MobileTabs() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="sticky top-24 z-40 flex p-1 bg-white/10 backdrop-blur-xl rounded-full max-w-xs mx-auto md:hidden shadow-lg border border-white/5">
      <button 
        onClick={() => scrollToSection('report-section')}
        className="flex-1 py-2 text-sm font-medium text-white/60 hover:text-white hover:bg-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 active:bg-white/30 rounded-full transition-all duration-300"
      >
        报告
      </button>
      <button 
        onClick={() => scrollToSection('dashboard-section')}
        className="flex-1 py-2 text-sm font-medium text-white/60 hover:text-white hover:bg-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 active:bg-white/30 rounded-full transition-all duration-300"
      >
        看板
      </button>
      <button 
        onClick={() => scrollToSection('action-section')}
        className="flex-1 py-2 text-sm font-medium text-white/60 hover:text-white hover:bg-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 active:bg-white/30 rounded-full transition-all duration-300"
      >
        行动
      </button>
    </div>
  );
}
