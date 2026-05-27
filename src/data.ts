import { SocialLink, CreatorLink, AiTool } from "./types";

export const CREATOR_PROFILE = {
  name: "Enzo Diflow",
  handle: "@enzodiflow",
  avatarUrl: "https://i.ibb.co/XfVr6YDZ/Gemini-Generated-Image-94f83u94f83u94f8.png",
  coverUrl: "https://i.ibb.co/NgXBXch2/Foxbox.png",
  bio: "AI Engineer & Tech Creator • Designing autonomous systems • Helping 500k+ automate their lives & launch digital empires.",
  location: "Silicon Valley",
  status: "🟢 Customizing AI Agents today",
  email: "enzo@diflow.ai",
  website: "foxboxsolutions.online",
  tags: ["AI Automation", "Tech Hacks", "No-Code", "Productivity", "SaaS", "Digital Freedom"],
  stats: [
    { label: "Community", value: "840K+" },
    { label: "Students", value: "24K+" },
    { label: "Tools Automated", value: "6.2M" }
  ]
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "tiktok",
    platform: "TikTok",
    url: "https://www.tiktok.com/@enzodiflow",
    icon: "Video",
    bgColor: "bg-[#000000]/80 border-neutral-800 hover:border-[#FE2C55]/50",
    hoverGlow: "shadow-[0_0_20px_rgba(254,44,85,0.4)]",
    username: "@enzodiflow"
  },
  {
    id: "instagram",
    platform: "Instagram",
    url: "https://www.instagram.com/enzo.diflow/",
    icon: "Instagram",
    bgColor: "bg-neutral-900 border-neutral-800 hover:border-[#E1306C]/50",
    hoverGlow: "shadow-[0_0_20px_rgba(225,48,108,0.4)]",
    username: "@enzo.diflow"
  },
  {
    id: "facebook",
    platform: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61590152981282",
    icon: "Facebook",
    bgColor: "bg-neutral-900 border-neutral-800 hover:border-[#1877F2]/50",
    hoverGlow: "shadow-[0_0_20px_rgba(24,119,242,0.4)]",
    username: "Diflow"
  },
  {
    id: "youtube",
    platform: "YouTube",
    url: "https://youtube.com/@enzodiflow",
    icon: "Youtube",
    bgColor: "bg-neutral-900 border-neutral-800 hover:border-[#FF0000]/50",
    hoverGlow: "shadow-[0_0_20px_rgba(255,0,0,0.4)]",
    username: "Enzo AI"
  }
];

export const CREATOR_LINKS: CreatorLink[] = [
  {
    id: "ai-tool-directory",
    title: "🚀 Elite AI Tool Hub",
    description: "Database of 500+ daily-updated AI tools categorized with pre-built prompts & setups.",
    url: "#ai-tools-section",
    icon: "Layers",
    ctaText: "Explore Now",
    badge: "Hot",
    isPopular: true
  },
  {
    id: "automation-masterclass",
    title: "⚡ Zero-to-One Automation Course",
    description: "Learn Make.com, Zapier, & AI agents from scratch. Build pipelines that print money.",
    url: "https://nexas.ai/courses/automation",
    icon: "Zap",
    ctaText: "Enroll Off 40%",
    badge: "Pre-sale"
  },
  {
    id: "book-strategy",
    title: "📅 1:1 Automation Strategy Consulting",
    description: "Book an intensive 45-minute architectural mapping session to streamline your enterprise workflows.",
    url: "https://calendly.com/enzodiflow/consult",
    icon: "Calendar",
    ctaText: "Check Slots",
    isPopular: true
  },
  {
    id: "saas-system",
    title: "🤖 AutoPost - AI Content Synthesizer",
    description: "My bootstrap SaaS project. Generate, schedule, & distribute TikToks & Reels fully hands-free.",
    url: "https://autopost.nexas.ai",
    icon: "Cpu",
    ctaText: "Try Free",
    badge: "Featured"
  },
  {
    id: "free-automation-blueprint",
    title: "🎁 Free No-Code Blueprint PDF",
    description: "The identical automation blueprint that saved my agency 40+ hours per week. Direct download.",
    url: "https://nexas.ai/free-blueprint",
    icon: "Download",
    ctaText: "Download PDF"
  }
];

export const RECOMMENDED_AI_TOOLS: AiTool[] = [
  {
    id: "tools-1",
    name: "N8N Automation",
    description: "Powerful node-based workflow automation tool to build complex AI agents & pipelines.",
    category: "automation",
    rating: 4.9,
    tags: ["No-Code", "Automation", "Workflow"],
    pricing: "Freemium",
    affiliateUrl: "https://n8n.io",
    isCustomFavorite: true
  },
  {
    id: "tools-2",
    name: "Gemini 2.5 Pro",
    description: "Multi-turn thinking, advanced coding models & native multimodal performance.",
    category: "productivity",
    rating: 4.8,
    tags: ["LLM", "AI Chat", "Reasoning"],
    pricing: "Free",
    affiliateUrl: "https://ai.google.dev",
    isCustomFavorite: true
  },
  {
    id: "tools-3",
    name: "FoxboxTTS",
    description: "Hyper-realistic text-to-speech platform and next-generation voice synthesizers.",
    category: "content-creation",
    rating: 4.9,
    tags: ["TTS", "Audio AI", "Foxbox"],
    pricing: "Freemium",
    affiliateUrl: "https://foxboxtts.vercel.app"
  },
  {
    id: "tools-4",
    name: "Opencode",
    description: "An advanced open-source AI developer environment with absolute workspace integration and context-wide analysis.",
    category: "productivity",
    rating: 4.9,
    tags: ["Coding", "Editor", "AI Assist"],
    pricing: "Free",
    affiliateUrl: "https://opencode.com"
  },
  {
    id: "tools-5",
    name: "Antigravity",
    description: "Unleash autonomous web building agents that turn ideas into production-ready software seamlessly.",
    category: "content-creation",
    rating: 4.9,
    tags: ["AI Agent", "Development", "Workspace"],
    pricing: "Freemium",
    affiliateUrl: "https://antigravity.ai",
    isCustomFavorite: true
  },
  {
    id: "tools-6",
    name: "V0 by Vercel",
    description: "Generate production-grade React & Tailwind codebases strictly from conversational descriptions.",
    category: "digital-business",
    rating: 4.8,
    tags: ["Front-end", "Vercel", "AI UI"],
    pricing: "Freemium",
    affiliateUrl: "https://v0.dev"
  }
];
