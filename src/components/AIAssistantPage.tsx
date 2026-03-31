import React, { useState, useRef, useEffect } from 'react';
import { Mic, Send, Microscope, Brain, MessageSquareText, ChevronLeft, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import ReactMarkdown from 'react-markdown';

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
}

interface Props {
  onClose: () => void;
}

export function AIAssistantPage({ onClose }: Props) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<any>(null);

  useEffect(() => {
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      chatRef.current = ai.chats.create({
        model: "gemini-3.1-pro-preview",
        config: {
          systemInstruction: "你是一个专业的健康教练AI助手，名叫“健康管家”。你需要以专业、友善、鼓励的语气回答用户关于健康、营养、运动、睡眠等方面的问题。你的回答应该简洁明了，适合在移动端阅读。如果用户问到医疗诊断问题，请提醒他们咨询专业医生。",
        }
      });
    } catch (error) {
      console.error("Failed to initialize Gemini AI:", error);
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      if (!chatRef.current) throw new Error("Chat not initialized");
      const response = await chatRef.current.sendMessage({ message: text });
      const modelMsg: Message = { id: (Date.now() + 1).toString(), role: 'model', text: response.text || '' };
      setMessages(prev => [...prev, modelMsg]);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMsg: Message = { id: (Date.now() + 1).toString(), role: 'model', text: '抱歉，我遇到了一点问题，请稍后再试。' };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend(input);
    }
  };
  return (
    <div className="fixed inset-0 z-[100] flex flex-col animate-in slide-in-from-bottom fade-in zoom-in-95 duration-500">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-black">
        <img
          alt="Dark nature background"
          className="w-full h-full object-cover opacity-40"
          src="https://picsum.photos/seed/dark-galaxy-forest/1080/1920"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-black"></div>
      </div>

      {/* Header / Close Button */}
      <div className="relative z-10 pt-safe px-4 py-4 flex items-center justify-between">
        <button 
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors backdrop-blur-md border border-white/10 z-20"
        >
          <ChevronLeft className="w-6 h-6 pr-0.5" />
        </button>
        
        {/* Center Drag Handle Indicator */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <div className="w-12 h-1.5 bg-white/20 rounded-full"></div>
        </div>
        
        <div className="w-10"></div> {/* Spacer for flex balance */}
      </div>

      {/* Main Content Scrollable Area */}
      <div className="relative z-10 flex-1 overflow-y-auto pb-32 px-6 max-w-2xl mx-auto w-full flex flex-col">
        
        {messages.length === 0 ? (
          <>
            {/* 1. AI Core & Welcome */}
            <div className="flex flex-col items-center justify-center mt-10 mb-12">
              {/* AI Energy Sphere */}
              <div className="relative w-48 h-48 flex items-center justify-center mb-8">
                {/* Ambient Glow */}
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-[50px] animate-pulse duration-3000"></div>
                
                {/* Rotating Particle Rings */}
                <div className="absolute inset-2 border-[1.5px] border-dashed border-primary/40 rounded-full animate-[spin_12s_linear_infinite]"></div>
                <div className="absolute inset-6 border-[1.5px] border-dashed border-sky-400/40 rounded-full animate-[spin_18s_linear_infinite_reverse]"></div>
                <div className="absolute inset-10 border-[1.5px] border-dashed border-emerald-400/40 rounded-full animate-[spin_24s_linear_infinite]"></div>
                
                {/* Core Solid */}
                <div className="absolute inset-16 bg-gradient-to-br from-primary via-rose-400 to-purple-500 rounded-full shadow-[0_0_50px_rgba(249,115,22,0.6)] animate-pulse flex items-center justify-center">
                  <div className="w-full h-full bg-white/20 rounded-full blur-sm"></div>
                </div>
              </div>

              <h1 className="text-2xl font-bold text-white tracking-wide text-center drop-shadow-lg">
                你好，李建国，<br />今天想聊点什么？
              </h1>
            </div>

            {/* 2. Contextual Shortcuts */}
            <div className="space-y-3 w-full mb-8">
              {/* Card A: Green */}
              <button 
                onClick={() => handleSend("帮我精准解读一下我的健康力报告")}
                className="w-full glass-panel p-4 rounded-2xl border border-emerald-500/20 hover:border-emerald-500/50 hover:bg-white/10 transition-all flex items-center gap-4 group text-left"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Microscope className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">精准解读：我的健康力报告</h3>
                  <p className="text-white/50 text-xs mt-0.5">基于最新质谱数据的深度分析</p>
                </div>
              </button>

              {/* Card B: Blue */}
              <button 
                onClick={() => handleSend("请给我一些提升专注力的方案")}
                className="w-full glass-panel p-4 rounded-2xl border border-sky-500/20 hover:border-sky-500/50 hover:bg-white/10 transition-all flex items-center gap-4 group text-left"
              >
                <div className="w-10 h-10 rounded-full bg-sky-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Brain className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">脑力赋能：提升专注力方案</h3>
                  <p className="text-white/50 text-xs mt-0.5">针对近期疲劳指数的干预建议</p>
                </div>
              </button>

              {/* Card C: Gold */}
              <button 
                onClick={() => handleSend("请教我一些高净值客户的破冰话术")}
                className="w-full glass-panel p-4 rounded-2xl border border-amber-500/20 hover:border-amber-500/50 hover:bg-white/10 transition-all flex items-center gap-4 group text-left"
              >
                <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <MessageSquareText className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">展业助手：客户破冰话术</h3>
                  <p className="text-white/50 text-xs mt-0.5">高净值客户的专属沟通策略</p>
                </div>
              </button>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col gap-6 pt-6">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] rounded-2xl px-5 py-3 ${
                    msg.role === 'user' 
                      ? 'bg-gradient-to-br from-amber-500 to-amber-600 text-black rounded-tr-sm shadow-[0_5px_15px_rgba(245,158,11,0.2)]' 
                      : 'bg-[rgba(255,255,255,0.1)] backdrop-blur-md border border-white/10 text-white rounded-tl-sm shadow-lg'
                  }`}
                >
                  {msg.role === 'user' ? (
                    <p className="text-sm font-medium">{msg.text}</p>
                  ) : (
                    <div className="text-sm leading-relaxed prose prose-invert prose-p:my-1 prose-headings:my-2 prose-ul:my-1 max-w-none">
                      <ReactMarkdown>{msg.text}</ReactMarkdown>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-md border border-white/10 rounded-2xl rounded-tl-sm px-5 py-4 shadow-lg flex items-center gap-2">
                  <Loader2 className="w-4 h-4 text-amber-400 animate-spin" />
                  <span className="text-white/60 text-sm">健康管家正在思考...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input Area (Fixed Bottom) */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/90 to-transparent z-20">
        <div className="max-w-2xl mx-auto flex items-center gap-3 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-full p-2 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
          <button className="w-10 h-10 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors shrink-0">
            <Mic className="w-5 h-5" />
          </button>
          
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask anything..." 
            className="flex-1 bg-transparent border-none text-white placeholder:text-white/40 focus:outline-none text-sm px-2"
          />
          
          <button 
            onClick={() => handleSend(input)}
            disabled={!input.trim() || isLoading}
            className="w-10 h-10 rounded-full bg-amber-500 disabled:bg-amber-500/50 flex items-center justify-center text-black hover:scale-105 active:scale-95 transition-transform shadow-[0_0_15px_rgba(245,158,11,0.5)] shrink-0"
          >
            <Send className="w-5 h-5 ml-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
