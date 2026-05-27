import { SocialLink, CreatorLink, AiTool } from "./types";

export const CREATOR_PROFILE = {
  name: "Enzo Diflow",
  handle: "@enzodiflow",
  avatarUrl: "https://i.ibb.co/XfVr6YDZ/Gemini-Generated-Image-94f83u94f83u94f8.png",
  coverUrl: "https://i.ibb.co/NgXBXch2/Foxbox.png",
  bio: "AI Engineer & Tech Creator • Designing autonomous systems • Helping 500k+ automate their lives & launch digital empires.",
  location: "Silicon Valley",
  status: "🟢 Customizing AI Agents today",
  email: "enzodiflow@outlook.fr",
  website: "foxboxsolutions.online",
  tags: ["AI Automation", "Tech Hacks", "No-Code", "Productivity", "SaaS", "Digital Freedom"],
  stats: [
    { label: "Community", value: "840K+" },
    { label: "Students", value: "24K+" },
    { label: "Tools Automated", value: "6.2M" }
  ]
};

export const TRANSLATIONS = {
  EN: {
    profile: {
      bio: "AI Engineer & Tech Creator • Designing autonomous systems • Helping 500k+ automate their lives & launch digital empires.",
      location: "Silicon Valley",
      status: "🟢 Customizing AI Agents today",
      tags: ["AI Automation", "Tech Hacks", "No-Code", "Productivity", "SaaS", "Digital Freedom"],
      stats: [
        { label: "Community", value: "840K+" },
        { label: "Students", value: "24K+" },
        { label: "Tools Automated", value: "6.2M" }
      ]
    },
    links: [
      {
        id: "ai-tool-directory",
        title: "🚀 Elite AI Tool Hub",
        description: "Database of 500+ daily-updated AI tools categorized with pre-built prompts & setups.",
        ctaText: "Explore Now",
        badge: "Hot"
      },
      {
        id: "automation-masterclass",
        title: "⚡ Zero-to-One Automation Course",
        description: "Learn Make.com, Zapier, & AI agents from scratch. Build pipelines that print money.",
        ctaText: "Enroll Off 40%",
        badge: "Pre-sale"
      },
      {
        id: "book-strategy",
        title: "📅 1:1 Automation Strategy Consulting",
        description: "Book an intensive 45-minute architectural mapping session to streamline your enterprise workflows.",
        ctaText: "Check Slots"
      },
      {
        id: "saas-system",
        title: "🤖 AutoPost - AI Content Synthesizer",
        description: "My bootstrap SaaS project. Generate, schedule, & distribute TikToks & Reels fully hands-free.",
        ctaText: "Try Free",
        badge: "Featured"
      },
      {
        id: "free-automation-blueprint",
        title: "🎁 Free No-Code Blueprint PDF",
        description: "The identical automation blueprint that saved my agency 40+ hours per week. Direct download.",
        ctaText: "Download PDF"
      }
    ],
    tools: [
      {
        id: "tools-1",
        description: "Powerful node-based workflow automation tool to build complex AI agents & pipelines."
      },
      {
        id: "tools-2",
        description: "Multi-turn thinking, advanced coding models & native multimodal performance."
      },
      {
        id: "tools-3",
        description: "Hyper-realistic text-to-speech platform and next-generation voice synthesizers."
      },
      {
        id: "tools-4",
        description: "An advanced open-source AI developer environment with absolute workspace integration and context-wide analysis."
      },
      {
        id: "tools-5",
        description: "Unleash autonomous web building agents that turn ideas into production-ready software seamlessly."
      },
      {
        id: "tools-6",
        description: "Generate production-grade React & Tailwind codebases strictly from conversational descriptions."
      }
    ],
    ui: {
      copyEmail: "Copy Email",
      copiedToast: "📋 Copying Email to Clipboard!",
      sharePortal: "Share Portal",
      linkCopiedToast: "🔗 Link copied to clipboard!",
      visitWebsite: "Visit Website",
      askEnzo: "Ask Enzo AI",
      chatWelcome: "Hey! I'm Enzo Diflow's AI Twin. Ask me anything about automation workflows, custom AI consulting, or my favorite tech setups!",
      chatGreetingTitle: "Enzo's Twin AI Assistant",
      chatGreetingSubtitle: "Speak direct to an interactive clone familiar with automation stacks and courses.",
      chatPlaceholder: "Ask a question...",
      chatSend: "Send",
      quickQuestions: [
        "🤖 Automation Course?",
        "📅 Book consultation",
        "🚀 Favorite AI tools?"
      ],
      recommendedStack: "Recommended AI Stack",
      recommendedStackSub: "Tested daily solutions vetted directly for efficiency",
      searchPlaceholder: "Search workflow tools, setups...",
      newsletterTitle: "Grab Free Automation Blueprints",
      newsletterDesc: "Join 24K+ learning modern workflows. Receive step-by-step guides and custom automation templates every week.",
      newsletterPlaceholder: "Enter your email",
      newsletterSubscribe: "Subscribe",
      newsletterSuccess: "Welcome! Enzo's first setup is headed to your email.",
      ambientStream: "Ambient Productivity Stream",
      categories: { all: "All", automation: "Automation", productivity: "Productivity", content: "Content" },
      myLinksAndTools: "My Links & Tools",
      enzosPick: "Enzo's Pick",
      emailError: "⚠️ Please enter a valid email address",
      newsSuccessToast: "🎉 Awesome! You're added to Enzo's list."
    }
  },
  FR: {
    profile: {
      bio: "Ingénieur IA & Créateur Tech • Conception de systèmes autonomes • Aide 500k+ de personnes à automatiser leur vie et lancer des empires digitaux.",
      location: "Silicon Valley",
      status: "🟢 Personnalisation d'agents IA aujourd'hui",
      tags: ["Automatisation IA", "Astuces Tech", "No-Code", "Productivité", "SaaS", "Liberté Digitale"],
      stats: [
        { label: "Communauté", value: "840K+" },
        { label: "Étudiants", value: "24K+" },
        { label: "Outils Automatisés", value: "6.2M" }
      ]
    },
    links: [
      {
        id: "ai-tool-directory",
        title: "🚀 Hub d'Outils IA d'Élite",
        description: "Base de données de plus de 500 outils IA mis à jour quotidiennement, catégorisés avec des invites et configurations pré-conçues.",
        ctaText: "Explorer",
        badge: "Populaire"
      },
      {
        id: "automation-masterclass",
        title: "⚡ Cours d'Automatisation de Zéro à Un",
        description: "Apprenez Make.com, Zapier et les agents d'IA à partir de zéro. Créez des pipelines rentables.",
        ctaText: "S'inscrire à -40%",
        badge: "Prévente"
      },
      {
        id: "book-strategy",
        title: "📅 Consultation Stratégique d'Automatisation 1:1",
        description: "Réservez une session de cartographie d'architecture de 45 minutes pour rationaliser vos flux d'entreprise.",
        ctaText: "Voir Créneaux"
      },
      {
        id: "saas-system",
        title: "🤖 AutoPost - Synthétiseur de Contenu IA",
        description: "Mon projet SaaS bootstrap. Générez, planifiez et distribuez des TikToks et Reels 100% mains libres.",
        ctaText: "Essai Gratuit",
        badge: "Vedette"
      },
      {
        id: "free-automation-blueprint",
        title: "🎁 Guide PDF d'Automatisation Gratuit",
        description: "Le même plan d'automatisation qui a fait gagner plus de 40 heures par semaine à mon agence. Téléchargement direct.",
        ctaText: "Télécharger PDF"
      }
    ],
    tools: [
      {
        id: "tools-1",
        description: "Puissant outil d'automatisation de flux basé sur des nœuds pour créer des agents et des pipelines IA complexes."
      },
      {
        id: "tools-2",
        description: "Raisonnement multi-tours, modèles de codage avancés et performances externes multimodales natives."
      },
      {
        id: "tools-3",
        description: "Plateforme de synthèse vocale hyperréaliste et synthétiseurs vocaux de nouvelle génération."
      },
      {
        id: "tools-4",
        description: "Un environnement de développement IA open-source avancé avec intégration absolue de l'espace de travail et analyse globale."
      },
      {
        id: "tools-5",
        description: "Libérez des agents de création web autonomes qui transforment les idées en logiciels prêts pour la production de manière fluide."
      },
      {
        id: "tools-6",
        description: "Générez des bases de code React & Tailwind prêtes pour la production uniquement à partir de descriptions conversationnelles."
      }
    ],
    ui: {
      copyEmail: "Copier l'Email",
      copiedToast: "📋 Email copié dans le presse-papiers !",
      sharePortal: "Partager le Portail",
      linkCopiedToast: "🔗 Lien copié dans le presse-papiers !",
      visitWebsite: "Visiter le Site Web",
      askEnzo: "Demander à Enzo IA",
      chatWelcome: "Salut! Je suis le jumeau virtuel d'Enzo Diflow. Pose-moi toutes tes questions sur les flux d'automatisation, le consulting IA ou mes configurations tech préférées !",
      chatGreetingTitle: "Assistant IA Jumeau d'Enzo",
      chatGreetingSubtitle: "Parlez directement à un clone interactif familier avec nos outils d'automatisation et nos cours.",
      chatPlaceholder: "Posez votre question...",
      chatSend: "Envoyer",
      quickQuestions: [
        "🤖 Cours Automatisation?",
        "📅 Réserver consultation",
        "🚀 Outils IA favoris ?"
      ],
      recommendedStack: "Stack d'IA Recommandée",
      recommendedStackSub: "Solutions de confiance révisées pour maximiser l'efficacité",
      searchPlaceholder: "Rechercher des outils, configurations...",
      newsletterTitle: "Obtenez des Guides d'Automatisation Gratuits",
      newsletterDesc: "Rejoignez plus de 24k apprenants. Recevez chaque semaine des guides étape par étape et des modèles d'automatisation personnalisés.",
      newsletterPlaceholder: "Entrez votre email",
      newsletterSubscribe: "S'abonner",
      newsletterSuccess: "Bienvenue ! Le premier guide d'Enzo vous a été envoyé par email.",
      ambientStream: "Flux de Productivité Ambiant",
      categories: { all: "Tout", automation: "Automatisation", productivity: "Productivité", content: "Contenu" },
      myLinksAndTools: "Mes Liens & Outils",
      enzosPick: "Choix de l'Équipe",
      emailError: "⚠️ Veuillez entrer une adresse e-mail valide",
      newsSuccessToast: "🎉 Super ! Vous êtes ajouté à la liste d'Enzo."
    }
  },
  AR: {
    profile: {
      bio: "مهندس ذكاء اصطناعي وصانع محتوى تقني • تصميم أنظمة مستقلة • مساعدة أكثر من 500 ألف شخص على أتمتة حياتهم وإطلاق إمبراطورياتهم الرقمية.",
      location: "وادي السيليكون",
      status: "🟢 تخصيص وكلاء الذكاء الاصطناعي اليوم",
      tags: ["أتمتة الذكاء الاصطناعي", "حيل تقنية", "بدون كود", "الإنتاجية", "برمجيات SaaS", "الحرية الرقمية"],
      stats: [
        { label: "المجتمع", value: "840K+" },
        { label: "الطلاب", value: "24K+" },
        { label: "العمليات المؤتمتة", value: "6.2M" }
      ]
    },
    links: [
      {
        id: "ai-tool-directory",
        title: "🚀 مركز أدوات الذكاء الاصطناعي النخبة",
        description: "قاعدة بيانات تضم أكثر من 500 أداة ذكاء اصطناعي محدثة يوميًا ومصنفة مع مطالبات وتكوينات جاهزة.",
        ctaText: "استكشف الآن",
        badge: "مثير"
      },
      {
        id: "automation-masterclass",
        title: "⚡ دورة الأتمتة من الصفر إلى الاحتراف",
        description: "تعلم Make.com وZapier ووكلاء الذكاء الاصطناعي من الصفر. ابنِ خطوط عمل تدر أرباحًا طائلة.",
        ctaText: "سجل بخصم 40%",
        badge: "الحجز المسبق"
      },
      {
        id: "book-strategy",
        title: "📅 استشارات استراتيجية أتمتة فردية 1:1",
        description: "احجز جلسة مكثفة مدتها 45 دقيقة لرسم الخرائط المعمارية لتبسيط تدفقات العمل في مؤسستك.",
        ctaText: "تحقق من المواعيد"
      },
      {
        id: "saas-system",
        title: "🤖 AutoPost - توليد المحتوى بالذكاء الاصطناعي",
        description: "مشروعي البرمجي الخاص. قم بتوليد وجدولة وتوزيع مقاطع TikTok وReels تلقائيًا بالكامل وبدون تدخل يدوي.",
        ctaText: "جرب مجانًا",
        badge: "مميز"
      },
      {
        id: "free-automation-blueprint",
        title: "🎁 مخطط الأتمتة المجاني PDF",
        description: "مخطط الأتمتة المماثل الذي وفر لوكالتي أكثر من 40 ساعة أسبوعيًا. تحميل مباشر.",
        ctaText: "تحميل PDF"
      }
    ],
    tools: [
      {
        id: "tools-1",
        description: "أداة قوية لأتمتة تدفقات العمل القائمة على العقد لبناء وكلاء وخطوط عمل ذكاء اصطناعي معقدة."
      },
      {
        id: "tools-2",
        description: "تفكير متعدد الجولات، ونماذج برمجية متقدمة وأداء متعدد الوسائط أصلي."
      },
      {
        id: "tools-3",
        description: "منصة تحويل النص إلى كلام واقعية للغاية ومصنعات صوتية من الجيل القادم."
      },
      {
        id: "tools-4",
        description: "بيئة مطور ذكاء اصطناعي مفتوحة المصدر ومتقدمة مع تكامل كامل لمساحة العمل وتحليل سياقي شامل."
      },
      {
        id: "tools-5",
        description: "أطلق العنان لوكلاء بناء ويب مستقلين يحولون الأفكار إلى برمجيات جاهزة للإنتاج بسلاسة."
      },
      {
        id: "tools-6",
        description: "قم بتوليد مشاريع برمجية جاهزة للإنتاج باستخدام React وTailwind مباشرة من الأوصاف المحادثية."
      }
    ],
    ui: {
      copyEmail: "نسخ البريد",
      copiedToast: "📋 تم نسخ البريد الإلكتروني إلى الحافظة!",
      sharePortal: "مشاركة البوابة",
      linkCopiedToast: "🔗 تم نسخ الرابط إلى الحافظة!",
      visitWebsite: "زيارة الموقع",
      askEnzo: "اسأل ذكاء إينزو",
      chatWelcome: "أهلاً بك! أنا التوأم الرقمي لإينزو ديفلو. اسألني عن أي شيء يخص تدفقات عمل الأتمتة، أو الاستشارات المخصصة للذكاء الاصطناعي، أو أفضل تجهيزاتي التقنية!",
      chatGreetingTitle: "مساعد التوأم الرقمي لإينزو",
      chatGreetingSubtitle: "تحدث مباشرة مع نسخة تفاعلية على دراية بأدوات الأتمتة والدورات التدريبية.",
      chatPlaceholder: "اسأل سؤالاً...",
      chatSend: "إرسال",
      quickQuestions: [
        "🤖 دورة الأتمتة؟",
        "📅 حجز استشارة",
        "🚀 أدوات الذكاء الاصطناعي؟"
      ],
      recommendedStack: "مجموعة أدوات الذكاء الاصطناعي الموصى بها",
      recommendedStackSub: "حلول تم اختبارها يوميًا وفحصها مباشرة لضمان الكفاءة",
      searchPlaceholder: "البحث عن أدوات تدفقات العمل، التجهيزات...",
      newsletterTitle: "احصل على مخططات أتمتة مجانية",
      newsletterDesc: "انضم إلى أكثر من 24 ألفًا يتعلمون تدفقات العمل الحديثة. احصل على أدلة خطوة بخطوة وقوالب أتمتة مخصصة كل أسبوع.",
      newsletterPlaceholder: "أدخل بريدك الإلكتروني",
      newsletterSubscribe: "اشترك",
      newsletterSuccess: "مرحبًا بك! تم إرسال الدليل الأول لإينزو إلى بريدك الإلكتروني.",
      ambientStream: "بث الإنتاجية المحيطي الموسيقي",
      categories: { all: "الكل", automation: "الأتمتة", productivity: "الإنتاجية", content: "المحتوى" },
      myLinksAndTools: "روابطي وأدواتي",
      enzosPick: "اختيار إينزو",
      emailError: "⚠️ يرجى إدخال عنوان بريد إلكتروني صالح",
      newsSuccessToast: "🎉 رائع! تم إضافتك لقائمة إينزو البريدية."
    }
  }
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
