"use client";

import { ArrowPathIcon, PauseIcon, PlayIcon } from "@heroicons/react/24/solid";
import { useWorkTimer } from "./useWorkTimer";

function formatElapsed(milliseconds: number) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  return [Math.floor(totalSeconds / 3600), Math.floor(totalSeconds / 60) % 60, totalSeconds % 60]
    .map((part) => String(part).padStart(2, "0")).join(":");
}

function AnalogClock({ date }: { date: Date | null }) {
  const seconds = date?.getSeconds() ?? 0;
  const minutes = (date?.getMinutes() ?? 0) + seconds / 60;
  const hours = ((date?.getHours() ?? 0) % 12) + minutes / 60;

  return (
    <svg viewBox="0 0 320 320" className="mx-auto w-full max-w-72 drop-shadow-[0_16px_35px_rgba(0,0,0,0.35)] sm:max-w-80" aria-hidden="true">
      <circle cx="160" cy="160" r="159" fill="#161e25" stroke="#334047" />
      <circle cx="160" cy="160" r="151" fill="#eeeae1" />
      <circle cx="160" cy="160" r="145" fill="none" stroke="#d9d5cc" />
      {Array.from({ length: 60 }, (_, index) => (
        <line key={index} x1="160" y1="23" x2="160" y2={index % 5 === 0 ? 35 : 28}
          stroke={index % 5 === 0 ? "#344344" : "#a8aaa3"}
          strokeWidth={index % 5 === 0 ? 2.5 : 1} strokeLinecap="round"
          transform={`rotate(${index * 6} 160 160)`} />
      ))}
      {[12, 3, 6, 9].map((hour) => {
        const angle = hour * Math.PI / 6;
        return <text key={hour} x={160 + Math.sin(angle) * 108} y={160 - Math.cos(angle) * 108}
          textAnchor="middle" dominantBaseline="central" fill="#344344" fontSize="21" className="font-display font-medium">{hour}</text>;
      })}
      <text x="160" y="112" textAnchor="middle" fill="#7e8983" fontSize="8" letterSpacing="3">ONE THING</text>
      <text x="160" y="218" textAnchor="middle" fill="#7e8983" fontSize="8" letterSpacing="3">AT A TIME</text>
      {date && <>
        <line x1="160" y1="170" x2="160" y2="86" stroke="#263737" strokeWidth="7" strokeLinecap="round" transform={`rotate(${hours * 30} 160 160)`} />
        <line x1="160" y1="175" x2="160" y2="53" stroke="#263737" strokeWidth="4" strokeLinecap="round" transform={`rotate(${minutes * 6} 160 160)`} />
        <line x1="160" y1="185" x2="160" y2="42" stroke="#0d9488" strokeWidth="1.5" strokeLinecap="round" transform={`rotate(${seconds * 6} 160 160)`} />
        <circle cx="160" cy="160" r="5" fill="#0d9488" />
        <circle cx="160" cy="160" r="2" fill="#eeeae1" />
      </>}
    </svg>
  );
}

export default function WorkClock() {
  const timer = useWorkTimer();
  const date = timer.now === null ? null : new Date(timer.now);
  const status = timer.isRunning ? "Working" : timer.hasSession ? "Paused" : "Ready when you are";

  return (
    <div className="mx-auto w-full max-w-md px-5 pt-6 pb-10 sm:pt-10 sm:pb-14">
      <div className="mb-6 flex items-center justify-between sm:mb-8">
        <h1 className="text-xs font-medium tracking-[0.24em] text-zinc-300 uppercase">Focus</h1>
        <span className="text-xs text-zinc-500">A little time for your work.</span>
      </div>

      <figure>
        <AnalogClock date={date} />
        <figcaption className="mt-5 text-center">
          <p className="h-5 text-sm tracking-wide text-zinc-400">
            {date ? date.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" }) : "Your local time"}
          </p>
          <time dateTime={date?.toISOString()} className="mt-1 block h-6 text-base text-zinc-200 tabular-nums">
            {date ? date.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" }) : "—"}
          </time>
        </figcaption>
      </figure>

      <section aria-labelledby="work-timer-heading" className="mt-7 rounded-3xl border border-white/8 bg-[#10161b]/90 p-5 shadow-xl shadow-black/10 sm:mt-8 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <h2 id="work-timer-heading" className="text-[10px] font-medium tracking-[0.2em] text-zinc-400 uppercase">Time worked</h2>
          <p role="status" className="flex items-center gap-2 text-xs text-zinc-400">
            <span aria-hidden="true" className={`size-1.5 rounded-full ${timer.isRunning ? "bg-teal-300" : timer.hasSession ? "bg-amber-300" : "bg-zinc-600"}`} />
            {status}
          </p>
        </div>

        <p role="timer" aria-label="Time worked" aria-live="off" className="my-6 text-center font-display text-[clamp(2.5rem,12vw,3.5rem)] leading-none font-medium tracking-tight text-zinc-100 tabular-nums">
          {formatElapsed(timer.elapsedMs)}
        </p>

        <div className="flex gap-2.5">
          <button type="button" onClick={timer.toggle} disabled={timer.now === null}
            className="btn-primary min-h-12 flex-1 px-3 disabled:cursor-wait disabled:opacity-50">
            {timer.isRunning ? <PauseIcon aria-hidden="true" className="size-4" /> : <PlayIcon aria-hidden="true" className="size-4" />}
            {timer.isRunning ? "Pause" : timer.hasSession ? "Resume" : "Start working"}
          </button>
          <button type="button" onClick={timer.reset} disabled={!timer.hasSession || timer.now === null}
            className="btn-ghost min-h-12 px-4 disabled:cursor-not-allowed disabled:opacity-35">
            <ArrowPathIcon aria-hidden="true" className="size-4" />
            Reset
          </button>
        </div>
      </section>

      <p className="mt-5 text-center text-xs leading-relaxed text-zinc-500">
        {timer.canPersist ? "Your session stays here when you come back." : "This browser can’t save your session. Keep this page open."}
      </p>
    </div>
  );
}
