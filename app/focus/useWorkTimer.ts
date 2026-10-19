"use client";

import { useMemo, useState, useSyncExternalStore } from "react";

const STORAGE_KEY = "wyattgg.focus-session.v1";
const CHANGE_EVENT = "wyattgg:focus-session-change";

type Session = { elapsedMs: number; startedAt: number | null };
const EMPTY_SESSION: Session = { elapsedMs: 0, startedAt: null };
const serverSnapshot = () => null;

function readSession(raw: string | null): Session {
  if (!raw) return EMPTY_SESSION;
  try {
    const value: unknown = JSON.parse(raw);
    if (
      typeof value === "object" && value !== null &&
      "elapsedMs" in value && typeof value.elapsedMs === "number" &&
      Number.isFinite(value.elapsedMs) && value.elapsedMs >= 0 &&
      "startedAt" in value && (value.startedAt === null ||
        (typeof value.startedAt === "number" && Number.isFinite(value.startedAt) && value.startedAt >= 0))
    ) {
      return { elapsedMs: value.elapsedMs, startedAt: value.startedAt };
    }
  } catch {
    // An invalid saved session should not prevent starting a new one.
  }
  return EMPTY_SESSION;
}

function elapsedAt(session: Session, now: number) {
  return session.elapsedMs + (session.startedAt === null ? 0 : Math.max(0, now - session.startedAt));
}

function createSessionStore() {
  let fallback: string | null = null;
  let memoryOnly = false;

  return {
    read() {
      if (!memoryOnly) {
        try {
          fallback = window.localStorage.getItem(STORAGE_KEY);
        } catch {
          memoryOnly = true;
        }
      }
      return fallback;
    },
    save(session: Session) {
      fallback = JSON.stringify(session);
      try {
        window.localStorage.setItem(STORAGE_KEY, fallback);
      } catch {
        memoryOnly = true;
      }
      window.dispatchEvent(new Event(CHANGE_EVENT));
    },
    subscribe(notify: () => void) {
      const onStorage = (event: StorageEvent) => {
        if (event.key === STORAGE_KEY || event.key === null) notify();
      };
      window.addEventListener(CHANGE_EVENT, notify);
      window.addEventListener("storage", onStorage);
      return () => {
        window.removeEventListener(CHANGE_EVENT, notify);
        window.removeEventListener("storage", onStorage);
      };
    },
    get canPersist() { return !memoryOnly; },
  };
}

function subscribeToClock(notify: () => void) {
  const interval = window.setInterval(notify, 1000);
  // Mobile browsers suspend intervals in the background. Re-read the wall clock
  // on return instead of treating interval callbacks as elapsed seconds.
  document.addEventListener("visibilitychange", notify);
  window.addEventListener("focus", notify);
  return () => {
    window.clearInterval(interval);
    document.removeEventListener("visibilitychange", notify);
    window.removeEventListener("focus", notify);
  };
}

const clockSnapshot = () => Math.floor(Date.now() / 1000) * 1000;

export function useWorkTimer() {
  const [store] = useState(createSessionStore);
  const raw = useSyncExternalStore(store.subscribe, store.read, serverSnapshot);
  const session = useMemo(() => readSession(raw), [raw]);
  const now = useSyncExternalStore(subscribeToClock, clockSnapshot, serverSnapshot);

  function toggle() {
    const current = readSession(store.read());
    const timestamp = Date.now();
    store.save(current.startedAt === null
      ? { ...current, startedAt: timestamp }
      : { elapsedMs: elapsedAt(current, timestamp), startedAt: null });
  }

  return {
    now,
    elapsedMs: now === null ? 0 : elapsedAt(session, now),
    isRunning: session.startedAt !== null,
    hasSession: session.startedAt !== null || session.elapsedMs > 0,
    canPersist: store.canPersist,
    toggle,
    reset: () => store.save(EMPTY_SESSION),
  };
}
