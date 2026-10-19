"use client";

import { useCallback, useEffect, useState } from "react";
import { CheckIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";

export function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText("wyatt@wyatt.gg");
      setCopied(true);
    } catch {
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
      } catch {
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
      className="shrink-0 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/4 px-4 py-2.5 text-sm font-semibold text-zinc-200 transition hover:border-teal-400/30 hover:bg-teal-400/10 hover:text-teal-200 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-300/40"
      aria-live="polite"
    >
      {copied ? (
        <>
          <CheckIcon className="h-4 w-4 text-teal-300" aria-hidden="true" />
          Copied
        </>
      ) : (
        <>
          <DocumentDuplicateIcon className="h-4 w-4" aria-hidden="true" />
          Copy Email
        </>
      )}
    </button>
  );
}
