import { useState } from 'react';
import { Search, ShoppingCart, Sparkles, Plus } from 'lucide-react';
import { BottomNav } from './BottomNav';

interface Props {
  onTabChange?: (tab: 'home' | 'academy' | 'shop' | 'profile') => void;
  onAIAssistantClick?: () => void;
}

export function ShopPage({ onTabChange, onAIAssistantClick }: Props) {
  const [activeCategory, setActiveCategory] = useState('全部');
  const categories = ['全部', '免疫提升', '脑力赋能', '肠道微生态', '重金属排解'];

  const products = [
    {
      id: 1,
      name: '定制氨基酸盲盒',
      desc: '针对睡眠改善与代谢修复',
      price: '599',
      tag: '复购率 95%',
      image: 'https://picsum.photos/seed/supplement-1/400/400'
    },
    {
      id: 2,
      name: '极地深海鱼油提取物',
      desc: '高纯度 EPA/DHA 脑力赋能',
      price: '358',
      tag: 'AI 推荐',
      image: 'https://picsum.photos/seed/supplement-2/400/400'
    },
    {
      id: 3,
      name: '复合益生菌冻干粉',
      desc: '重建肠道微生态屏障',
      price: '288',
      tag: '免疫基石',
      image: 'https://picsum.photos/seed/supplement-3/400/400'
    },
    {
      id: 4,
      name: '谷胱甘肽抗氧精华饮',
      desc: '深层排解重金属残留',
      price: '899',
      tag: '深度净化',
      image: 'https://picsum.photos/seed/supplement-4/400/400'
    }
  ];

  return (
    <div className="min-h-screen relative pb-32 animate-in fade-in duration-500">
      {/* Background Image Layer (Dark Natural Landscape) */}
      <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
        <img
          alt="High-end dark nature background"
          className="w-full h-full object-cover opacity-100"
          src="https://picsum.photos/seed/dark-nature-forest/1080/1920"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Header (Sticky Top) */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-2xl border-b border-white/10 pt-safe">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between px-4 h-16 gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/50" />
              <input 
                type="text" 
                placeholder="搜索干预方案..." 
                className="w-full bg-white/10 border border-white/10 rounded-full py-1.5 pl-9 pr-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
            
            {/* Title */}
            <h1 className="font-headline text-lg font-bold text-white tracking-wider shrink-0">健康商城</h1>
            
            {/* Cart */}
            <div className="flex-1 flex justify-end">
              <button className="relative w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-rose-500 rounded-full border-2 border-black flex items-center justify-center text-[8px] font-bold text-white">
                  2
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Core Content Area */}
      <main className="pt-24 px-6 max-w-2xl mx-auto space-y-8">
        
        {/* 1. Hero Section: AI Recommended Product */}
        <div className="relative rounded-3xl p-6 overflow-hidden border border-primary/30 shadow-[0_10px_40px_rgba(0,0,0,0.5)] group">
          {/* Glass Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/80 via-black/60 to-zinc-900/80 backdrop-blur-xl"></div>
          {/* Glow Effect */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors duration-700"></div>
          
          <div className="relative z-10">
            {/* AI Greeting */}
            <div className="flex items-start gap-3 mb-5">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
              <p className="text-white/90 text-sm font-medium leading-relaxed pt-1">
                基于您的最新质谱报告，AI 为您定制了本月专属干预方案。
              </p>
            </div>

            {/* Product Highlight */}
            <div className="flex gap-4 items-center mb-6 bg-white/5 p-3 rounded-2xl border border-white/5">
              <img 
                src="https://picsum.photos/seed/supplement-hero/200/200" 
                alt="Recommended Product" 
                className="w-20 h-20 rounded-xl object-cover border border-white/10 shadow-lg"
                referrerPolicy="no-referrer"
              />
              <div>
                <h3 className="text-white font-bold text-base mb-1">深海鱼油提取物 + 复合氨基酸</h3>
                <p className="text-white/50 text-xs line-clamp-2">针对您的脑力疲劳指数偏高及轻微代谢减缓，提供精准营养补充。</p>
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary to-rose-500 text-white font-bold text-sm shadow-[0_4px_15px_rgba(249,115,22,0.4)] hover:shadow-[0_4px_20px_rgba(249,115,22,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              一键加入干预计划
            </button>
          </div>
        </div>

        {/* 2. Category Tabs (Horizontal Scroll) */}
        <div className="flex overflow-x-auto gap-3 pb-2 -mx-6 px-6 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === category
                  ? 'bg-primary text-black border-primary shadow-[0_0_15px_rgba(249,115,22,0.4)]'
                  : 'bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 3. Product Grid */}
        <div className="grid grid-cols-2 gap-4">
          {products.map((product) => (
            <div key={product.id} className="glass-panel rounded-2xl p-3 flex flex-col relative overflow-hidden group border border-white/5 hover:border-white/20 transition-colors">
              {/* Product Image */}
              <div className="aspect-square rounded-xl overflow-hidden mb-3 relative bg-black/20">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                {/* Tag */}
                <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-white font-medium border border-white/10">
                  {product.tag}
                </div>
              </div>
              
              {/* Product Info */}
              <h4 className="text-white font-bold text-sm leading-tight mb-1 line-clamp-1">{product.name}</h4>
              <p className="text-white/40 text-[10px] mb-4 line-clamp-1">{product.desc}</p>
              
              {/* Price & Add to Cart */}
              <div className="mt-auto flex items-end justify-between">
                <div className="flex items-baseline text-primary">
                  <span className="text-xs mr-0.5">¥</span>
                  <span className="text-lg font-bold font-headline tracking-tight">{product.price}</span>
                </div>
                <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-colors text-white group/btn">
                  <Plus className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </main>

      <BottomNav activeTab="shop" onTabChange={onTabChange} onAIAssistantClick={onAIAssistantClick} />
    </div>
  );
}
