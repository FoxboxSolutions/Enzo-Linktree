import express, { Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialize Gemini SDK cleanly & robustly
let aiInstance: GoogleGenAI | null = null;
const apiConfigured = !!process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== "MY_GEMINI_API_KEY";

function getGeminiClient(): GoogleGenAI | null {
  if (!apiConfigured) {
    return null;
  }
  if (!aiInstance) {
    aiInstance = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiInstance;
}

// 1. API: Custom AI chat simulation of Enzo's interactive assistant clone
app.post("/api/chat", async (req: Request, res: Response) => {
  try {
    const { history, message } = req.body;

    if (!message) {
       res.status(400).json({ error: "No message was provided" });
       return;
    }

    const ai = getGeminiClient();

    // Friendly fallback for visual pre-flights if API Key is not yet populated
    if (!ai) {
      setTimeout(() => {
        const lower = message.toLowerCase();
        let reply = "Hey! I am Enzo Diflow's AI Twin clone. Currently I am running inside the Preview Sandbox! Once you configure your GEMINI_API_KEY in the Settings > Secrets menu, I can fully speak via real Google Gemini AI models.";
        
        if (lower.includes("course") || lower.includes("learn")) {
          reply += "\n\n💡 **Tip**: My *No-Code Automation Masterclass* is featured below! It covers Zapier, Make.com, & AI Agent structures from zero to hero.";
        } else if (lower.includes("book") || lower.includes("call") || lower.includes("consult")) {
          reply += "\n\n📅 **Calendly**: I'm available for 1:1 architectural consultation calls. You can reserve your slot by selecting the *Book a Call* card on my portal!";
        } else if (lower.includes("tool") || lower.includes("app")) {
          reply += "\n\n⚡ **My Favorites**: Make.com, ElevenLabs and Cursor AI are my absolute go-to tech stacks right now. Scroll to my 'Recommended AI Tools' grid below to investigate!";
        } else {
          reply += "\n\nFeel free to try asking about 'courses', 'tools', or how to 'book a call' to experience the contextual routing simulation!";
        }
        res.json({ text: reply, isDemo: true });
      }, 600);
      return;
    }

    // Generate response using gemini-3.5-flash
    const systemInstruction = 
      "You are the perfect AI Clone/Twin assistant of Enzo Diflow, a world-class tech content creator and AI automation architect. " +
      "Your personality: hyper-intelligent, sleek, minimalist, startup-focused, and friendly. " +
      "Formatting: Keep responses elegant, professional, highly structured, and clean. Use lists, bullet points, and high contrast typography styling labels (e.g. bolding). " +
      "Key topics to mention or route users towards: " +
      "- Enzo's zero-to-one 'Zero-to-One Automation Masterclass' for mastering AI agents " +
      "- Custom enterprise workflow architecture bookings via Calendly " +
      "- Checking the visual 'Recommended AI Tools' list directly below on the page " +
      "- Bootstrapping dynamic SaaS projects like 'AutoPost' " +
      "Guidelines: Keep answers under 130 words, direct, and very conversational yet premium. Avoid redundant technical jargon unless asked. Speak as 'I' (Enzo).";

    // Format history for chat
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: message,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    const replyText = response.text || "I apologize, my AI neural node experienced a temporary lag event. Please try prompting me again.";
    res.json({ text: replyText, isDemo: false });

  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: error.message || "Internal Server Error in Gemini orchestration module" });
  }
});

// 2. Setup Vite dev middle-ware, combined static asset serving in production
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[BioLink FULL-STACK] Server listening on http://localhost:${PORT}`);
  });
}

startServer();
