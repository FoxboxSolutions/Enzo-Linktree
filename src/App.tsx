import React, { useState, useEffect, useRef } from "react";
import {
  Layers,
  Zap,
  Calendar,
  Cpu,
  Download,
  Video,
  Instagram,
  Youtube,
  Facebook,
  Check,
  ExternalLink,
  Copy,
  CheckCircle2,
  Share2,
  X,
  ArrowRight,
  Sparkles,
  Search,
  Star,
  Play,
  Mail,
  Send,
  MessageSquare,
  Globe
} from "lucide-react";

import { CREATOR_PROFILE, SOCIAL_LINKS, CREATOR_LINKS, RECOMMENDED_AI_TOOLS } from "./data";
import { ChatMessage } from "./types";
import AudioPlayer from "./components/AudioPlayer";
import GlowEffect from "./components/GlowEffect";

export default function App() {
  // Navigation tabs - simplified to just links list vs AI twin assistant
  const [activeTab, setActiveTab] = useState<"links" | "chat">("links");

  // AI twin chat state
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    {
      id: "welcome",
      sender: "ai",
      text: "Hey! I'm Enzo Diflow's AI Twin. Ask me anything about automation workflows, custom AI consulting, or my favorite tech setups!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [chatInput, setChatInput] = useState("");
  const [isChatTyping, setIsChatTyping] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  // Search & Filters for AI tools
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Visual cues
  const [isCopied, setIsCopied] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Auto scroll chat console
  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory, isChatTyping]);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CREATOR_PROFILE.email);
    setIsCopied(true);
    showToast("📋 Copying Email to Clipboard!");
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const handleShareProfile = () => {
    const currentUrl = window.location.href;
    if (navigator.share) {
      navigator.share({
        title: "Enzo Diflow • Premium Link Portal",
        text: "Check out Enzo Diflow's custom links and AI twin!",
        url: currentUrl,
      }).catch(() => {
        navigator.clipboard.writeText(currentUrl);
        showToast("🔗 Link copied to clipboard!");
      });
    } else {
      navigator.clipboard.writeText(currentUrl);
      showToast("🔗 Link copied to clipboard!");
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@")) {
      showToast("⚠️ Please enter a valid email address");
      return;
    }
    setNewsletterSubscribed(true);
    showToast("🎉 Awesome! You're added to Enzo's list.");
  };

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsgText = chatInput;
    const userMessage: ChatMessage = {
      id: "user-" + Date.now(),
      sender: "user",
      text: userMsgText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatHistory(prev => [...prev, userMessage]);
    setChatInput("");
    setIsChatTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsgText })
      });
      const data = await response.json();
      
      setIsChatTyping(false);
      const aiResponse: ChatMessage = {
        id: "ai-" + Date.now(),
        sender: "ai",
        text: data.text || "I was unable to retrieve my response parameters, please try again soon.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatHistory(prev => [...prev, aiResponse]);
    } catch (err: any) {
      setIsChatTyping(false);
      setChatHistory(prev => [...prev, {
        id: "error-" + Date.now(),
        sender: "ai",
        text: 'Connection hiccup. Direct fallback response: "I\'d love to help you build or automate your next project! Feel free to book a direct 1:1 strategy consultation slot with me or check out my premium courses on Make.com automation!"',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    }
  };

  const handleQuickQuestion = (question: string) => {
    setChatInput(question);
    setTimeout(() => {
      const sendPromise = async () => {
        const userMessage: ChatMessage = {
          id: "user-" + Date.now(),
          sender: "user",
          text: question,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setChatHistory(prev => [...prev, userMessage]);
        setIsChatTyping(true);
        try {
          const response = await fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: question })
          });
          const data = await response.json();
          setIsChatTyping(false);
          setChatHistory(prev => [...prev, {
            id: "ai-" + Date.now(),
            sender: "ai",
            text: data.text,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }]);
        } catch (e) {
          setIsChatTyping(false);
          setChatHistory(prev => [...prev, {
            id: "ai-fallback-" + Date.now(),
            sender: "ai",
            text: "The Zero-to-One masterclass is precisely where I teach how to coordinate high-volume automations. Check out the pre-enrollment discount link directly in my main links list!",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }]);
        }
      };
      sendPromise();
    }, 150);
  };

  // Icon mapping
  const renderSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "Video": return <Video className="w-5 h-5 text-zinc-100 group-hover:scale-110 duration-200" />;
      case "Instagram": return <Instagram className="w-5 h-5 text-zinc-100 group-hover:scale-110 duration-200" />;
      case "Facebook": return <Facebook className="w-5 h-5 text-zinc-100 group-hover:scale-110 duration-200" />;
      case "Youtube": return <Youtube className="w-5 h-5 text-zinc-100 group-hover:scale-110 duration-200" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  const renderLinkIcon = (iconName: string) => {
    switch (iconName) {
      case "Layers": return <Layers className="w-5 h-5 text-indigo-400" />;
      case "Zap": return <Zap className="w-5 h-5 text-amber-400" />;
      case "Calendar": return <Calendar className="w-5 h-5 text-cyan-400" />;
      case "Cpu": return <Cpu className="w-5 h-5 text-purple-400" />;
      case "Download": return <Download className="w-5 h-5 text-emerald-400" />;
      default: return <Sparkles className="w-5 h-5 text-zinc-400" />;
    }
  };

  const filteredTools = RECOMMENDED_AI_TOOLS.filter(tool => {
    const matchesCategory = activeCategory === "all" || tool.category === activeCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tool.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen w-full bg-[#0a0a0c] text-neutral-100 font-sans relative overflow-x-hidden selection:bg-indigo-500/30">
      
      {/* Soft aesthetic background orbs */}
      <div className="absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-indigo-950/20 via-transparent to-transparent pointer-events-none z-0" />
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[350px] h-[350px] bg-sky-500/5 rounded-full blur-[90px] pointer-events-none z-0" />

      {/* Simplified, elegant layout card wrapper */}
      <div className="relative z-10 max-w-xl mx-auto px-4 py-8 md:py-16 flex flex-col items-center">
        
        {/* Floating small Toast */}
        {toastMessage && (
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-full bg-neutral-900 border border-indigo-500/20 shadow-2xl text-xs font-semibold flex items-center gap-2 animate-bounce">
            <Sparkles className="w-4 h-4 text-sky-400" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* PROFILE CARD CONTAINER */}
        <header className="text-center w-full mb-8 bg-neutral-900/30 rounded-3xl border border-zinc-800/60 overflow-hidden shadow-2xl backdrop-blur-md">
          
          {/* Cover Photo Banner with responsive height and subtle bottom glow */}
          <div className="relative w-full h-32 sm:h-40 bg-zinc-950 overflow-hidden group">
            <img
              src={CREATOR_PROFILE.coverUrl}
              alt="Enzo Diflow Tech Cover Banner"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 select-none"
            />
            {/* Blend shadow layer */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />
          </div>

          {/* Profile details layout shifted up over the cover banner */}
          <div className="px-4 sm:px-6 pb-6 pt-0 relative -mt-12 flex flex-col items-center">
            
            <div className="relative inline-block mb-3.5">
              {/* Elegant outer profile glow ring */}
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-tr from-indigo-500 to-sky-400 blur opacity-40 animate-pulse" />
              
              {/* Profile Avatar Frame */}
              <div className="w-24 h-24 rounded-full p-0.5 relative z-10 bg-black">
                <div className="w-full h-full rounded-full bg-neutral-900 relative overflow-hidden flex items-center justify-center">
                  {/* Fallback initials showing if the image loads slowly or fails */}
                  <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center text-xl font-bold text-indigo-400 z-0">
                    ED
                  </div>
                  <img
                    src={CREATOR_PROFILE.avatarUrl}
                    alt={CREATOR_PROFILE.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center relative z-10"
                    onError={(e) => {
                      // Hide image element if it fails to load
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>
              </div>

              {/* Highly polished human verified badge */}
              <div className="absolute bottom-0 right-0 z-20 w-6 h-6 bg-gradient-to-tr from-indigo-500 to-sky-400 border border-black rounded-full flex items-center justify-center text-[10px] text-black font-extrabold shadow-md">
                ✓
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-1">
              {CREATOR_PROFILE.name}
            </h1>
            <p className="text-zinc-500 text-xs font-mono mb-3">{CREATOR_PROFILE.handle}</p>

            {(CREATOR_PROFILE as any).website && (
              <a
                href={`https://${(CREATOR_PROFILE as any).website}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Visit Website"
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800 rounded-full text-xs text-indigo-400 hover:text-indigo-300 font-medium mb-4 transition-all duration-200"
              >
                <Globe className="w-3.5 h-3.5 text-zinc-400" />
                <span>{(CREATOR_PROFILE as any).website}</span>
                <ExternalLink className="w-3 h-3 text-zinc-500" />
              </a>
            )}

            <p className="text-zinc-300 text-sm leading-relaxed max-w-sm mx-auto mb-6">
              AI Engineer & Tech Creator. Let's design modular automation pipelines and scale digital presence together.
            </p>

            {/* Social icons row - Thumb-friendly, clean layout */}
            <div className="flex items-center justify-center gap-2.5 mb-6">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.platform}
                  className="w-11 h-11 rounded-full bg-neutral-900/80 border border-zinc-800 flex items-center justify-center hover:border-indigo-400 hover:bg-neutral-800 transition-all duration-300 group shadow-md"
                >
                  {renderSocialIcon(link.icon)}
                </a>
              ))}
            </div>

            {/* Profile Quick Actions */}
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={handleCopyEmail}
                id="action-email"
                className="flex items-center gap-2 px-4 py-2 bg-neutral-950 border border-zinc-800/80 hover:border-zinc-750 transition-colors text-xs font-medium rounded-full text-zinc-300 hover:text-white"
              >
                <Mail className="w-3.5 h-3.5 text-zinc-400" />
                <span>Copy Email</span>
              </button>
              <button
                onClick={handleShareProfile}
                id="action-share"
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 transition-all text-xs font-semibold rounded-full text-white shadow-lg shadow-indigo-500/10"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share Portal</span>
              </button>
            </div>
          </div>

        </header>

        {/* TABS SELECTOR - Sleek & Ultra Intuitive */}
        <div className="w-full flex p-1 bg-neutral-900/80 border border-zinc-800 rounded-full mb-8 shadow-inner">
          <button
            onClick={() => setActiveTab("links")}
            id="tab-select-links"
            className={`flex-1 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 ${
              activeTab === "links" ? "bg-indigo-600 text-white shadow" : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>My Links & Tools</span>
          </button>
          <button
            onClick={() => setActiveTab("chat")}
            id="tab-select-chat"
            className={`flex-1 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 ${
              activeTab === "chat" ? "bg-indigo-600 text-white shadow" : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Ask Enzo AI</span>
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full inline-block animate-ping" />
          </button>
        </div>

        {/* ACTIVE MODULE VIEW */}
        <section className="w-full space-y-8">
          {activeTab === "links" ? (
            <div className="space-y-8 transition-opacity duration-300">
              
              {/* CREATOR RESOURCES & LINKS SECTION */}
              <div className="space-y-3">
                {CREATOR_LINKS.map((link) => {
                  const isAnchor = link.url.startsWith("#");
                  return (
                    <div
                      key={link.id}
                      onClick={() => {
                        if (isAnchor) {
                          const element = document.getElementById(link.url.substring(1));
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                          }
                        } else {
                          window.open(link.url, "_blank");
                        }
                      }}
                      className="group p-4 bg-neutral-900/40 hover:bg-neutral-900/80 border border-zinc-800/80 hover:border-indigo-500/30 rounded-2xl flex items-center justify-between transition-all duration-300 cursor-pointer shadow-md relative overflow-hidden"
                    >
                      {/* Left Side: Icon and Text details */}
                      <div className="flex items-center gap-3.5 pr-2">
                        <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:bg-indigo-500/10 transition-colors">
                          {renderLinkIcon(link.icon)}
                        </div>
                        <div className="text-left">
                          <h3 className="font-bold text-sm text-neutral-100 flex items-center gap-2">
                            {link.title}
                            {link.badge && (
                              <span className="bg-sky-400/10 text-cyan-300 text-[8px] uppercase tracking-wider font-extrabold py-0.5 px-2 rounded border border-cyan-400/20">
                                {link.badge}
                              </span>
                            )}
                          </h3>
                          <p className="text-[11px] text-zinc-400 mt-0.5 leading-relaxed">
                            {link.description}
                          </p>
                        </div>
                      </div>

                      {/* CTA Right Indicator */}
                      <div className="flex items-center gap-1 text-[10px] font-bold text-indigo-400 group-hover:text-indigo-300 uppercase shrink-0 transition-colors pl-2">
                        <span>{link.ctaText}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 duration-200" />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CURATED RECOMMENDED AI TOOLS INDEX */}
              <div id="ai-tools-section" className="space-y-4 pt-4 border-t border-zinc-900">
                <div>
                  <h2 className="text-base font-bold text-white flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    Recommended AI Stack
                  </h2>
                  <p className="text-xs text-zinc-500 mt-0.5">Tested daily solutions vetted directly for efficiency </p>
                </div>

                {/* Filter and Search controls */}
                <div className="space-y-2.5">
                  <div className="relative">
                    <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search workflow tools, setups..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-neutral-950 border border-zinc-800 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery("")}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white text-xs font-medium"
                      >
                        Reset
                      </button>
                    )}
                  </div>

                  {/* Horizontal pill list of categories */}
                  <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar select-none">
                    {[
                      { key: "all", label: "All" },
                      { key: "automation", label: "Automation" },
                      { key: "productivity", label: "Productivity" },
                      { key: "content-creation", label: "Content" }
                    ].map(category => (
                      <button
                        key={category.key}
                        onClick={() => setActiveCategory(category.key)}
                        className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all border shrink-0 ${
                          activeCategory === category.key
                            ? "bg-indigo-500/15 border-indigo-500/40 text-indigo-300"
                            : "bg-transparent border-zinc-800 text-zinc-400 hover:text-white"
                        }`}
                      >
                        {category.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tools Grid Display */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {filteredTools.map((tool) => (
                    <div
                      key={tool.id}
                      className="p-4 rounded-xl bg-neutral-900/40 hover:bg-neutral-900/60 transition-colors border border-zinc-800/80 hover:border-zinc-700/80 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[9px] font-mono text-zinc-500 font-bold uppercase">
                            {tool.pricing}
                          </span>
                          <div className="flex items-center gap-1 text-[10px] text-amber-400 font-mono">
                            <Star className="w-3 h-3 fill-amber-400" />
                            <span>{tool.rating}</span>
                          </div>
                        </div>

                        <h4 className="font-bold text-sm text-white flex items-center gap-1.5">
                          {tool.name}
                          {tool.isCustomFavorite && (
                            <span className="text-[8px] px-1.5 py-0.5 bg-indigo-500/10 text-indigo-300 rounded font-extrabold uppercase">
                              Enzo's Pick
                            </span>
                          )}
                        </h4>
                        <p className="text-[11px] text-zinc-400 mt-1.5 leading-relaxed">
                          {tool.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-center justify-between">
                        <span className="text-[9px] uppercase font-mono tracking-wider text-zinc-500">
                          #{tool.category.replace("-", " ")}
                        </span>
                        <a
                          href={tool.affiliateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                        >
                          <span>Direct Try</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* NEWSLETTER CAPTURE PANEL */}
              <div className="p-6 rounded-2xl bg-neutral-900/40 border border-zinc-800/80">
                <h3 className="text-sm font-bold text-white flex items-center gap-1.5 mb-1">
                  <Mail className="w-4 h-4 text-indigo-400" />
                  Grab Free Automation Blueprints
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  Join 24K+ learning modern workflows. Receive step-by-step guides and custom automation templates every week.
                </p>

                {newsletterSubscribed ? (
                  <div className="p-3.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-center text-xs text-emerald-300 animate-fade-in flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Welcome! Enzo's first setup is headed to your email.</span>
                  </div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="flex-1 bg-neutral-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold shadow-lg shadow-indigo-500/20 active:scale-95 transition-all text-center"
                    >
                      Subscribe
                    </button>
                  </form>
                )}
              </div>

              {/* LOFI MUSIC AUDIO PLAYER - Sleek and integrated naturally at bottom list */}
              <div className="p-4 bg-neutral-900/40 rounded-2xl border border-zinc-800/80 text-left">
                <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold font-mono mb-2.5">Ambient Productivity Stream</div>
                <AudioPlayer />
              </div>

            </div>
          ) : (
            
            /* TAB 2: AI CLINICAL COMPACT CHAT HUB */
            <div className="space-y-4 transition-opacity duration-300">
              
              <div className="p-4 bg-neutral-900/40 border border-zinc-800/80 rounded-2xl text-left flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 text-indigo-400 shrink-0">
                  <Sparkles className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Enzo's Twin AI Assistant</h3>
                  <p className="text-[11px] text-zinc-500 leading-relaxed">Speak direct to an interactive clone familiar with automation stacks and courses.</p>
                </div>
              </div>

              {/* Chat panel */}
              <div className="bg-neutral-900/30 border border-zinc-800/80 rounded-2xl h-[360px] flex flex-col justify-between overflow-hidden relative">
                
                {/* Chat thread */}
                <div className="flex-1 p-4 overflow-y-auto space-y-3.5">
                  {chatHistory.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex gap-3 max-w-[85%] ${msg.sender === "user" ? "ml-auto flex-row-reverse" : "mr-auto"}`}
                    >
                      <div className={`w-7 h-7 rounded-lg font-mono text-[9px] flex items-center justify-center shrink-0 border uppercase font-bold ${msg.sender === "user" ? "bg-zinc-800 text-cyan-400 border-zinc-700" : "bg-indigo-950/40 text-indigo-400 border-indigo-500/20"}`}>
                        {msg.sender === "user" ? "Me" : "AI"}
                      </div>
                      
                      <div className={`p-3 rounded-2xl text-xs leading-relaxed ${msg.sender === "user" ? "bg-zinc-900 text-zinc-100 rounded-tr-none border border-zinc-800" : "bg-neutral-900 text-zinc-300 rounded-tl-none border border-zinc-800/40"}`}>
                        <p className="whitespace-pre-wrap">{msg.text}</p>
                        <span className="block text-[8px] text-zinc-600 text-right mt-1 font-mono">{msg.timestamp}</span>
                      </div>
                    </div>
                  ))}

                  {/* Thinking status */}
                  {isChatTyping && (
                    <div className="flex gap-3 max-w-[80%] mr-auto">
                      <div className="w-7 h-7 rounded-lg bg-indigo-950/40 text-indigo-400 border border-indigo-500/20 font-mono text-[9px] flex items-center justify-center">
                        AI
                      </div>
                      <div className="bg-neutral-900 p-3 rounded-2xl border border-zinc-800/40 rounded-tl-none flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                        <span className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                        <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  )}

                  <div ref={chatBottomRef} />
                </div>

                {/* Quick questions suggestion chips */}
                <div className="p-2 bg-neutral-950 border-t border-zinc-900 flex gap-2 overflow-x-auto select-none no-scrollbar">
                  {[
                    "🤖 Automation Course?",
                    "📅 Book consultation",
                    "🚀 Favorite AI tools?"
                  ].map((chip) => (
                    <button
                      key={chip}
                      onClick={() => handleQuickQuestion(chip)}
                      className="px-3 py-1 bg-neutral-900 hover:bg-neutral-800 transition-colors border border-zinc-800 text-[10px] text-zinc-400 font-medium rounded-lg shrink-0"
                    >
                      {chip}
                    </button>
                  ))}
                </div>

              </div>

              {/* Chat Input form */}
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Ask a question..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  className="flex-1 bg-neutral-950 border border-zinc-800 rounded-2xl px-4 py-3 text-xs text-white focus:outline-none focus:border-indigo-500 transition-colors"
                />
                <button
                  type="submit"
                  id="chat-submit"
                  className="px-5 bg-indigo-600 hover:bg-indigo-500 hover:scale-[1.01] active:scale-95 text-white rounded-2xl text-xs font-semibold flex items-center gap-1.5 transition-all shadow-lg shadow-indigo-500/10 shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send</span>
                </button>
              </form>

            </div>
          )}
        </section>

        {/* Brand note footer */}
        <footer className="mt-12 text-center text-[10px] text-zinc-600 font-mono tracking-wider">
          ENZO DIFLOW • ALL RIGHTS RESERVED © 2026
        </footer>

      </div>
    </div>
  );
}
