export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string; // lucide icon name
  bgColor: string;
  hoverGlow: string;
  username: string;
}

export interface CreatorLink {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: string;
  ctaText: string;
  badge?: string;
  isPopular?: boolean;
}

export interface AiTool {
  id: string;
  name: string;
  description: string;
  category: "productivity" | "automation" | "content-creation" | "digital-business";
  logoUrl?: string;
  rating: number;
  tags: string[];
  pricing: "Free" | "Freemium" | "Paid";
  affiliateUrl: string;
  isCustomFavorite?: boolean;
}

export interface ChatMessage {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: string;
}
