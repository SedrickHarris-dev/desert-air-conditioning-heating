export type ChatIntent = {
  id: string;
  label: string;
  answer: string;
};

export type ChatbotConfig = {
  enabled: boolean;
  mode: "scripted";
  title: string;
  greeting: string;
  emergencyNotice: string;
  intents: ChatIntent[];
};
