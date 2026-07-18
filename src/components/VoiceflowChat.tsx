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
            color?: string;
            stylesheet?: string;
            palette?: Record<string, string>;
          };
        }) => void;
      };
    };
  }
}

/** Matches site accent --accent / --accent-deep */
const HEADLIGHTS_PALETTE = {
  "50": "#f4ffe5",
  "100": "#e4ffb8",
  "200": "#ceff80",
  "300": "#b6ff4d",
  "400": "#a3ff2e",
  "500": "#95ff1d",
  "600": "#7adf00",
  "700": "#5fad00",
  "800": "#467d00",
  "900": "#2c4f00",
};

const INPUT_FIX_CSS = `
.vfrc-footer,
.vf-footer {
  color-scheme: light !important;
  background: #ffffff !important;
}
.vfrc-chat-input,
.vfrc-input,
.vfrc-footer textarea,
.vfrc-footer input,
.vf-footer textarea,
.vf-footer input,
.vfrc-footer [contenteditable="true"],
.vf-footer [contenteditable="true"] {
  color-scheme: light !important;
  background: transparent !important;
  background-color: transparent !important;
  background-image: none !important;
  color: #111111 !important;
  caret-color: #111111 !important;
  border: none !important;
  box-shadow: none !important;
  -webkit-appearance: none !important;
  appearance: none !important;
}
`;

function injectInputFix() {
  const host = document.querySelector("#voiceflow-chat") as HTMLElement | null;
  const root = host?.shadowRoot;
  if (!root || root.getElementById("headlights-input-fix")) return false;

  const style = document.createElement("style");
  style.id = "headlights-input-fix";
  style.textContent = INPUT_FIX_CSS;
  root.appendChild(style);
  return true;
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
          color: "#95ff1d",
          palette: HEADLIGHTS_PALETTE,
          stylesheet: `${window.location.origin}/voiceflow.css?v=3`,
        },
      });

      // Widget mounts asynchronously — keep trying briefly to patch the input.
      let tries = 0;
      const timer = window.setInterval(() => {
        tries += 1;
        if (injectInputFix() || tries > 40) {
          window.clearInterval(timer);
        }
      }, 250);
    };

    const firstScript = document.getElementsByTagName("script")[0];
    firstScript?.parentNode?.insertBefore(script, firstScript);
  }, []);

  return null;
}
