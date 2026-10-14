"use client";

import { useState } from "react";
import { chatbotConfig } from "@/config/chatbot";
import { ChatIcon } from "@/components/ui/icons";

type Msg = { from: "bot" | "user"; text: string };

// Scripted demo only: answers come from config, no model call is made.
export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [log, setLog] = useState<Msg[]>([
    { from: "bot", text: chatbotConfig.greeting },
  ]);

  if (!chatbotConfig.enabled) return null;

  const pick = (id: string) => {
    const intent = chatbotConfig.intents.find((i) => i.id === id);
    if (!intent) return;
    setLog((l) => [
      ...l,
      { from: "user", text: intent.label },
      { from: "bot", text: intent.answer },
    ]);
  };

  return (
    <div className="fixed bottom-20 right-4 z-50 md:bottom-6">
      {open && (
        <div
          role="dialog"
          aria-label={chatbotConfig.title}
          className="mb-3 flex max-h-[70vh] w-[min(20rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl"
        >
          <div className="bg-primary px-4 py-3 text-sm font-bold text-white">
            {chatbotConfig.title}
          </div>
          <div className="flex-1 space-y-2 overflow-y-auto p-3 text-sm">
            {log.map((m, i) => (
              <p
                key={i}
                className={
                  m.from === "bot"
                    ? "rounded-lg bg-slate-100 p-2 text-slate-800"
                    : "ml-8 rounded-lg bg-secondary p-2 text-white"
                }
              >
                {m.text}
              </p>
            ))}
          </div>
          <div className="space-y-1 border-t border-slate-200 p-3">
            {chatbotConfig.intents.map((i) => (
              <button
                key={i.id}
                type="button"
                onClick={() => pick(i.id)}
                className="block w-full rounded-md border border-slate-300 px-3 py-1.5 text-left text-xs font-semibold text-primary hover:bg-slate-50"
              >
                {i.label}
              </button>
            ))}
            <p className="pt-1 text-[11px] text-slate-500">
              {chatbotConfig.emergencyNotice}
            </p>
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="ml-auto flex items-center gap-2 rounded-full bg-secondary px-4 py-3 text-sm font-bold text-white shadow-lg hover:bg-primary"
      >
        <ChatIcon className="h-5 w-5" />
        {open ? "Close" : "Chat"}
      </button>
    </div>
  );
}
