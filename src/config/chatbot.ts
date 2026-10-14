import type { ChatbotConfig } from "@/types/chat";
import { clientConfig } from "./client";

// Scripted/demo assistant. No live model call is made.
export const chatbotConfig: ChatbotConfig = {
  enabled: true,
  mode: "scripted",
  title: "Plumbing Help (demo)",
  greeting:
    "Hi! I'm a scripted demo assistant. Pick a topic below, or call us any time.",
  emergencyNotice: `Emergency? Call ${clientConfig.phoneDisplay} now — dispatch is available 24/7.`,
  intents: [
    {
      id: "emergency",
      label: "I have a plumbing emergency",
      answer: `Call ${clientConfig.phoneDisplay} right away. Emergency dispatch is available 24/7, every day. If you can, shut off the main water valve while you wait.`,
    },
    {
      id: "hours",
      label: "What are your hours?",
      answer:
        "Routine appointments: Mon–Fri 7:00 AM–6:00 PM, Sat 8:00 AM–4:00 PM, closed Sunday. Emergency dispatch is 24/7, every day.",
    },
    {
      id: "areas",
      label: "Where do you serve?",
      answer:
        "Las Vegas, Henderson, North Las Vegas, Enterprise, Spring Valley, Paradise, Summerlin and Sunrise Manor.",
    },
    {
      id: "request",
      label: "How do I request service?",
      answer: `Call ${clientConfig.phoneDisplay} or use the Request Service form on this page and we'll follow up to confirm.`,
    },
  ],
};
