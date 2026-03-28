import { useState } from 'react';
import { Phone, ShieldCheck, ArrowRight, User, Crown, CheckCircle2, Circle, X } from 'lucide-react';

interface Props {
  onLogin: () => void;
  onClose?: () => void;
}

export function LoginPage({ onLogin, onClose }: Props) {
  const [role, setRole] = useState<'user' | 'coach'>('user');
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const handleGetCode = () => {
    if (phone.length !== 11) return;
    setCountdown(60);
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleLogin = () => {
    if (!phone || !code || !isAgreed) return;
    // In a real app, verify credentials here
    onLogin();
  };

  return (
    <div className="fixed inset-0 z-[100] flex flex-col justify-center px-6 animate-in fade-in zoom-in-95 duration-300">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      ></div>

      {/* Dynamic Background Layer */}
      <div className="absolute inset-0 z-[-1] overflow-hidden pointer-events-none bg-black">
        {/* Base Image with slow zoom/pan */}
        <img
          alt="High-end dark abstract background"
          className="w-full h-full object-cover opacity-30"
          style={{ animation: 'slowPan 20s ease-in-out infinite alternate' }}
          src="https://picsum.photos/seed/dark-abstract-health/1080/1920"
          referrerPolicy="no-referrer"
        />
        
        {/* Floating Glowing Orbs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full mix-blend-screen filter blur-[120px] animate-[spin_20s_linear_infinite] origin-bottom-right"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-rose-500/10 rounded-full mix-blend-screen filter blur-[150px] animate-[spin_25s_linear_infinite] origin-top-left"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/10 rounded-full mix-blend-screen filter blur-[150px] animate-[pulse_8s_ease-in-out_infinite]"></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-black/95"></div>
      </div>

      {/* Modal Content Container */}
      <div className="relative z-10 w-full max-w-md mx-auto">
        {/* Close Button */}
        {onClose && (
          <button 
            onClick={onClose}
            className="absolute -top-12 right-0 p-2 text-white/50 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        )}

        {/* Logo & Welcome Text */}
        <div className="mb-10 text-center">
          <div 
            onClick={onLogin}
            className="w-20 h-20 mx-auto bg-white rounded-full p-1 mb-6 shadow-[0_0_30px_rgba(255,255,255,0.2)] overflow-hidden cursor-pointer hover:scale-110 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all duration-300"
            title="点击直接进入主页"
          >
            <img 
              src="https://lh3.googleusercontent.com/aida/ADBb0uji5sZnHnwN0KPu9rCAxC11G1C2XdaKLtm3T4lbWWfWtDPf7kCMSInE7Nm8-g8UbVoFOjOuj1FF-iInLItQ3pN2o9AwLbxMAb2Edgz3-6eAuNFcuk2Lu5VaUZvOz8oy6OPyhFkks1bLhkSiKaje2kTojWkEl7-xQhkd0AfOlfXIVVQ3oD5ycY66MpfSIvLRu_0ma6MBxBpCMqCo8N0DvJqxhvwspKwOR93OiAfcI90MUf2CyRrv0ZBJZnCmMkgWJCUNYFj2q8O2Cw" 
              alt="TRUPEAK Logo" 
              className="w-full h-full object-cover rounded-full"
              referrerPolicy="no-referrer"
            />
          </div>
          <h1 className="font-headline text-3xl font-bold text-white tracking-tight mb-2">
            欢迎来到 TRUPEAK
          </h1>
          <p className="text-white/50 text-sm">精准干预，重塑生命活力</p>
        </div>

      {/* Login Card */}
      <div className="glass-panel rounded-3xl p-6 border border-white/10 shadow-2xl relative overflow-hidden">
        {/* Decorative Glow */}
        <div className={`absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl transition-colors duration-500 ${role === 'coach' ? 'bg-amber-500/10' : 'bg-primary/10'}`}></div>

        {/* Role Switcher */}
        <div className="relative flex p-1 bg-black/40 rounded-2xl mb-8 border border-white/5">
          {/* Sliding Background */}
          <div 
            className={`absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] rounded-xl transition-all duration-300 ease-out ${
              role === 'user' 
                ? 'translate-x-0 bg-white/10 border border-white/10 shadow-lg' 
                : 'translate-x-full bg-gradient-to-r from-amber-500/20 to-amber-700/20 border border-amber-500/30 shadow-lg'
            }`}
          ></div>

          <button
            onClick={() => setRole('user')}
            className={`relative z-10 flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-colors duration-300 ${
              role === 'user' ? 'text-white' : 'text-white/40 hover:text-white/60'
            }`}
          >
            <User className="w-4 h-4" />
            用户登录
          </button>
          <button
            onClick={() => setRole('coach')}
            className={`relative z-10 flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-colors duration-300 ${
              role === 'coach' ? 'text-amber-400' : 'text-white/40 hover:text-white/60'
            }`}
          >
            <Crown className="w-4 h-4" />
            健康教练
          </button>
        </div>

        {/* Form Fields */}
        <div className="space-y-4 mb-8">
          {/* Phone Input */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Phone className={`w-5 h-5 transition-colors ${phone ? (role === 'coach' ? 'text-amber-400' : 'text-primary') : 'text-white/30'}`} />
            </div>
            <input
              type="tel"
              maxLength={11}
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
              placeholder="请输入手机号"
            />
          </div>

          {/* Verification Code Input */}
          <div className="relative group flex gap-3">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <ShieldCheck className={`w-5 h-5 transition-colors ${code ? (role === 'coach' ? 'text-amber-400' : 'text-primary') : 'text-white/30'}`} />
              </div>
              <input
                type="text"
                maxLength={6}
                value={code}
                onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                placeholder="请输入验证码"
              />
            </div>
            <button
              onClick={handleGetCode}
              disabled={phone.length !== 11 || countdown > 0}
              className={`shrink-0 px-5 rounded-2xl text-sm font-bold transition-all border ${
                phone.length === 11 && countdown === 0
                  ? role === 'coach'
                    ? 'bg-amber-500/20 text-amber-400 border-amber-500/30 hover:bg-amber-500/30'
                    : 'bg-primary/20 text-primary border-primary/30 hover:bg-primary/30'
                  : 'bg-white/5 text-white/30 border-white/5 cursor-not-allowed'
              }`}
            >
              {countdown > 0 ? `${countdown}s 后重试` : '获取验证码'}
            </button>
          </div>
        </div>

        {/* Agreement */}
        <div className="flex items-start gap-2 mb-8">
          <button 
            onClick={() => setIsAgreed(!isAgreed)}
            className="mt-0.5 shrink-0 text-white/50 hover:text-white transition-colors"
          >
            {isAgreed ? (
              <CheckCircle2 className={`w-4 h-4 ${role === 'coach' ? 'text-amber-400' : 'text-primary'}`} />
            ) : (
              <Circle className="w-4 h-4" />
            )}
          </button>
          <p className="text-xs text-white/50 leading-relaxed">
            我已阅读并同意
            <a href="#" className={`mx-1 hover:underline ${role === 'coach' ? 'text-amber-400/80' : 'text-primary/80'}`}>《用户服务协议》</a>
            和
            <a href="#" className={`mx-1 hover:underline ${role === 'coach' ? 'text-amber-400/80' : 'text-primary/80'}`}>《隐私政策》</a>
            {role === 'coach' && (
              <>及<a href="#" className="mx-1 text-amber-400/80 hover:underline">《教练入驻协议》</a></>
            )}
          </p>
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          disabled={!phone || !code || !isAgreed}
          className={`w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 ${
            phone && code && isAgreed
              ? role === 'coach'
                ? 'bg-gradient-to-r from-amber-600 to-amber-400 text-black shadow-[0_0_20px_rgba(251,191,36,0.4)] hover:scale-[1.02]'
                : 'bg-gradient-to-r from-primary to-rose-500 text-white shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:scale-[1.02]'
              : 'bg-white/10 text-white/30 cursor-not-allowed'
          }`}
        >
          {role === 'coach' ? '进入教练工作台' : '开启健康之旅'}
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
      </div>
    </div>
  );
}
