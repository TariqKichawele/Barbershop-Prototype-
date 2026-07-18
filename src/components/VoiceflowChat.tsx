"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    voiceflow?: {
      chat: {
        load: (config: {
          verify: { projectID: string };
          url: string;
          voice: { url: string };
          assistant?: {
            stylesheet?: string;
          };
        }) => void;
      };
    };
  }
}

export function VoiceflowChat() {
  useEffect(() => {
    if (document.getElementById("voiceflow-widget-next")) return;

    const script = document.createElement("script");
    script.id = "voiceflow-widget-next";
    script.type = "text/javascript";
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    script.onload = () => {
      window.voiceflow?.chat.load({
        verify: { projectID: "6a5801ea23ab0aff860a6850" },
        url: "https://general-runtime.voiceflow.com",
        voice: {
          url: "https://runtime-api.voiceflow.com",
        },
        assistant: {
          // Absolute URL so Voiceflow can load it inside the widget shadow DOM
          stylesheet: `${window.location.origin}/voiceflow.css`,
        },
      });
    };

    const firstScript = document.getElementsByTagName("script")[0];
    firstScript?.parentNode?.insertBefore(script, firstScript);
  }, []);

  return null;
}
