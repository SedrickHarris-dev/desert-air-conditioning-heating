import { chatbotConfig } from "@/config/chatbot";

export function scriptedAnswer(id: string) {
  return chatbotConfig.intents.find((i) => i.id === id)?.answer ?? null;
}
