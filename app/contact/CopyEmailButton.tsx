"use client";

import { useCallback, useEffect, useState } from "react";
import { EnvelopeIcon, CheckIcon } from "@heroicons/react/24/outline";

export function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText("wyatt@wyatt.gg");
      setCopied(true);
    } catch (_) {
      // Best-effort fallback: create a temporary textarea
      try {
        const textarea = document.createElement("textarea");
        textarea.value = "wyatt@wyatt.gg";
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        setCopied(true);
      } catch (_) {
        // ignore
      }
    }
  }, []);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1600);
    return () => clearTimeout(t);
  }, [copied]);

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="shrink-0 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
      aria-live="polite"
    >
      {copied ? (
        <>
          <CheckIcon className="h-4 w-4 text-emerald-300" aria-hidden="true" />
          Copied!
        </>
      ) : (
        <>
          <EnvelopeIcon className="h-4 w-4" aria-hidden="true" />
          Copy Email
        </>
      )}
    </button>
  );
}


