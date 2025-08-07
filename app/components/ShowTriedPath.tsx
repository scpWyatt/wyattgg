"use client";

import { usePathname } from "next/navigation";

export function ShowTriedPath() {
  const pathname = usePathname();
  if (!pathname) return null;
  return (
    <p className="mt-4 text-zinc-300/90 text-sm sm:text-base">
      We couldn’t find the page at <span className="mx-1 rounded bg-white/10 px-2 py-0.5 font-mono text-white/90">{pathname}</span>.
    </p>
  );
}


